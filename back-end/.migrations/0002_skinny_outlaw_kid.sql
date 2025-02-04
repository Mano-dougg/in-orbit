CREATE TABLE IF NOT EXISTS "goal_completions" (
	"id" text PRIMARY KEY NOT NULL,
	"goal_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "goalCompletions";--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "desired_weekly_frequency" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "goals" ADD COLUMN "created_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "goal_completions" ADD CONSTRAINT "goal_completions_goal_id_goals_id_fk" FOREIGN KEY ("goal_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "goals" DROP COLUMN IF EXISTS "desiredWeeklyFrequency";--> statement-breakpoint
ALTER TABLE "goals" DROP COLUMN IF EXISTS "createdAt";