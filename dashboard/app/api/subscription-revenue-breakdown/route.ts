import Database from "better-sqlite3";
import path from "path";
import { NextResponse } from "next/server";

type CountryRow = {
  country: string;
  avg_revenue_per_user: number;
};

export async function GET() {
  // WRITE THE API QUERY HERE

  const db = new Database(path.join(process.cwd(), "..", "papcorns.sqlite"), {
    readonly: true,
  });

  try {
     // Goal:
    // Calculate average revenue per paying user by country
    // Logic:
    // 1. Filter only subscription-related revenue events
    //    (subscription_started, subscription_renewed)
    // 2. Aggregate total revenue per country
    // 3. Normalize by unique paying users (not transactions)sk.
    const rows = db
      .prepare(
        `
          SELECT U.country,
          ROUND(
              SUM(E.amount_usd) * 1.0 /
              COUNT(DISTINCT E.user_id),
              2
          ) AS avg_revenue_per_user

      FROM user_events E
      INNER JOIN users U
          ON E.user_id = U.id

      WHERE E.event_name IN (
          'subscription_started',
          'subscription_renewed'
      )

      GROUP BY U.country
      ORDER BY avg_revenue_per_user DESC
        `,
      )
      .all() as CountryRow[];

    return NextResponse.json({ rows });
  } finally {
    db.close();
  }
}
