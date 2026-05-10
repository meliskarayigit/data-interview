"use client";

import { useEffect, useMemo, useState } from "react";

type CountryRow = {
  country: string;
  avg_revenue_per_user: number;
};

export default function HomePage() {
  const [rows, setRows] = useState<CountryRow[]>([]);

  useEffect(() => {
    fetch("/api/subscription-revenue-breakdown")
      .then((response) => response.json())
      .then((data: { rows: CountryRow[] }) => setRows(data.rows));
  }, []);

  const maxValue = useMemo(
  () => Math.max(...rows.map((row) => row.avg_revenue_per_user), 1),
  [rows],
);

  return (
    <main>
      <h1>Papcorns Dashboard</h1>
      <p className="subtitle">
        Task 7 starter. Build one chart using joined and
        aggregated data from the SQLite database.
      </p>

      <section className="chart-card">
        <h2 className="chart-title">
  Average Revenue per Paying User by Country
</h2>

        {/* ADD THE CHART HERE */}
        <div className="simple-chart">
          {rows.map((row) => (
            <div className="bar-row" key={row.country}>
              <span className="bar-label">{row.country}</span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{
  width: `${(row.avg_revenue_per_user / maxValue) * 100}%`,
}}
                />
              </div>
              <span className="bar-value">
  ${row.avg_revenue_per_user.toFixed(2)}
</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
