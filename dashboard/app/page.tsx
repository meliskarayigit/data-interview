"use client";

import { useEffect, useMemo, useState } from "react";

type CountryRow = {
  country: string;
  user_count: number;
};

export default function HomePage() {
  const [rows, setRows] = useState<CountryRow[]>([]);

  useEffect(() => {
    fetch("/api/subscription-revenue-breakdown")
      .then((response) => response.json())
      .then((data: { rows: CountryRow[] }) => setRows(data.rows));
  }, []);

  const maxValue = useMemo(
    () => Math.max(...rows.map((row) => row.user_count), 1),
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
        <h2 className="chart-title">Users by country</h2>

        {/* ADD THE CHART HERE */}
        <div className="simple-chart">
          {rows.map((row) => (
            <div className="bar-row" key={row.country}>
              <span className="bar-label">{row.country}</span>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{ width: `${(row.user_count / maxValue) * 100}%` }}
                />
              </div>
              <span className="bar-value">{row.user_count}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
