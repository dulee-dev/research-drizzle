CREATE TABLE IF NOT EXISTS "country" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(256)
);
--> statement-breakpoint
DROP TABLE "cities";--> statement-breakpoint
DROP TABLE "countries";