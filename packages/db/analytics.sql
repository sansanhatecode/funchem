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

-- 2. Bài học nào bị bỏ dở: số lượt bắt đầu, số lượt làm xong và số lượt rời đi giữa chừng.
--    Nguồn: learning_events (lesson_start, lesson_exit) và lesson_attempts (lượt làm xong).
--    Lượt bắt đầu mà không có cả "xong" lẫn "rời" là do mất mạng hoặc trình duyệt bị tắt đột ngột.
with starts as (
  select lesson_id, count(*) as started from learning_events where type = 'lesson_start' group by 1
), exits as (
  select lesson_id, count(*) as exited, round(avg(answered), 1) as avg_answered_before_exit
  from learning_events where type = 'lesson_exit' group by 1
), done as (
  select lesson_id, count(*) as completed from lesson_attempts group by 1
)
select s.lesson_id,
       s.started,
       coalesce(d.completed, 0)                                        as completed,
       coalesce(e.exited, 0)                                           as exited,
       round(100.0 * coalesce(d.completed, 0) / s.started, 1)          as percent_completed,
       e.avg_answered_before_exit
from starts s
left join exits e using (lesson_id)
left join done d using (lesson_id)
order by percent_completed asc, s.started desc;

-- 2b. Người học rời đi ở câu nào nhiều nhất (cả bài học lẫn ôn tập).
select exercise_id, type, count(*) as exits
from learning_events
where type in ('lesson_exit', 'review_exit') and exercise_id is not null
group by 1, 2
order by exits desc
limit 30;

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
