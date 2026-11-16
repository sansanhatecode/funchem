-- Truy vấn phân tích học tập. Chạy bằng psql trên database production (chỉ đọc).
-- Dữ liệu nguồn: lesson_attempts.answers = { answers: [...], results: [{ exerciseId, correct }] }

-- 1. Câu nào bị sai nhiều nhất (ít nhất 20 lượt làm). Đây là các câu cần viết lại hoặc giải thích kỹ hơn.
select r ->> 'exerciseId'                                            as exercise_id,
       count(*)                                                      as attempts,
       round(100.0 * avg(((r ->> 'correct')::boolean)::int), 1)      as percent_correct
from lesson_attempts a,
     jsonb_array_elements(a.answers -> 'results') r
group by 1
having count(*) >= 20
order by percent_correct asc
limit 30;

-- 2. Bài học nào người ta bỏ dở: số người làm xong bài này nhưng không làm bài kế tiếp.
with done as (select distinct user_id, lesson_id from lesson_attempts)
select lesson_id, count(*) as learners
from done
group by 1
order by 1;

-- 3. Giữ chân theo ngày: trong số người học ngày D, bao nhiêu người quay lại ngày D+1 và D+7.
with days as (
  select distinct user_id, (completed_at at time zone 'Asia/Ho_Chi_Minh')::date as day from lesson_attempts
)
select d.day,
       count(*)                                                              as learners,
       count(*) filter (where exists (select 1 from days n where n.user_id = d.user_id and n.day = d.day + 1)) as back_next_day,
       count(*) filter (where exists (select 1 from days n where n.user_id = d.user_id and n.day = d.day + 7)) as back_after_week
from days d
group by 1
order by 1 desc
limit 30;

-- 4. Thời gian làm bài trung vị theo bài học (giây).
select lesson_id,
       count(*)                                                     as attempts,
       percentile_cont(0.5) within group (order by duration_sec)   as median_seconds,
       round(avg(accuracy)::numeric * 100, 1)                      as avg_accuracy_percent
from lesson_attempts
where duration_sec is not null
group by 1
order by 1;

-- 5. Khách chuyển thành tài khoản thật.
select count(*) filter (where is_anonymous)     as guests,
       count(*) filter (where not is_anonymous) as registered
from "user";
