CREATE TABLE "learning_events" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"type" text NOT NULL,
	"lesson_id" text,
	"exercise_id" text,
	"answered" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "learning_events" ADD CONSTRAINT "learning_events_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "learning_events_type_lesson_idx" ON "learning_events" USING btree ("type","lesson_id");--> statement-breakpoint
CREATE INDEX "learning_events_user_time_idx" ON "learning_events" USING btree ("user_id","created_at");