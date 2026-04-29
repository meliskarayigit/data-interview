import Database from "better-sqlite3";
import path from "path";
import { NextResponse } from "next/server";

type CountryRow = {
  country: string;
  user_count: number;
};

export async function GET() {
  // WRITE THE API QUERY HERE

  const db = new Database(path.join(process.cwd(), "..", "papcorns.sqlite"), {
    readonly: true,
  });

  try {
    // Simple example SQL. Replace this with the query for the dashboard task.
    const rows = db
      .prepare(
        `
          SELECT country, COUNT(*) AS user_count
          FROM users
          GROUP BY country
          ORDER BY country
        `,
      )
      .all() as CountryRow[];

    return NextResponse.json({ rows });
  } finally {
    db.close();
  }
}
