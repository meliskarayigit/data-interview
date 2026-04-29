# Papcorns Data Scientist Technical Assessment

Welcome to Papcorns' Data Scientist technical assessment! This task is designed to evaluate your skills in data analysis, SQL, Python, lightweight visualization (Next.js dashboard), and machine learning (bonus).

## Dataset Description

You are provided with a SQLite database (`papcorns.sqlite`) containing two tables:

### Users Table
- `id`: Unique identifier for each user (numeric)
- `created_at`: User creation timestamp (ISO date string)
- `attribution_source`: User acquisition source (tiktok, instagram, or organic)
- `country`: User's country (US, TR, or NL)
- `name`: User's name

### User Events Table
- `id`: Unique event identifier (numeric)
- `created_at`: Event timestamp (ISO date string)
- `user_id`: Reference to users table (numeric)
- `event_name`: Type of event (app_install, trial_started, trial_cancelled, subscription_started, subscription_renewed, subscription_cancelled)
- `amount_usd`: Transaction amount in USD (numeric)

## Tasks

Please complete the following tasks using Python and SQL. You can use any libraries you're comfortable with, but make sure to explain your approach and methodology.

### SQL requirement (core tasks)

**We assess SQL skills for tasks 1–6.** Solve these using **SQL queries** against `papcorns.sqlite` (for example via `sqlite3`, SQLAlchemy, or `pandas.read_sql` with your logic expressed in SQL). Implementing the core metrics only with in-memory dataframe operations (without equivalent SQL) does not meet what we are evaluating. You may still use Python for orchestration, visualization, and to run or parameterize queries.

The dashboard bonus task is a small **Next.js** app under `dashboard/` . It intentionally contains only a simple starter example; candidates should replace it with their own API/query and chart.

### Core Tasks

1. Calculate the total revenue generated from subscriptions for each country.
2. Calculate the total number of trials given to users who came from Instagram.
3. Create a new column named 'acquisition_channel' by categorizing users based on their 'attribution_source':
   - 'Paid': users from instagram or tiktok
   - 'Organic': users from organic sources
4. Analyze the trial-to-subscription conversion rate:
   - Calculate the overall conversion rate
   - Break down the conversion rate by attribution_source
5. Calculate the median subscription duration (in months) for each country
6. Calculate the Average Lifetime Value (LTV) by country

### BONUS Tasks (Optional)

7. **Dashboard (Next.js)** — Create one chart showing **average revenue per paying user by country**.
   - Write the API/query in `dashboard/app/api/subscription-revenue-breakdown/route.ts` (look for `WRITE THE API QUERY HERE`).
   - Add the chart in `dashboard/app/page.tsx` (look for `ADD THE CHART HERE`).
   - See `dashboard/README.md` for local setup and run instructions.

8. Predict the potential Lifetime Value (pLTV) for user #1001 (Bruce Wayne)
   - Explain your methodology and assumptions

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Code Quality**

2. **Analysis Quality**

3. **Communication**

## Submission Guidelines

Please provide:
1. Fork or create a new repository based on this template
2. Write your submissions for Tasks 1-6 and 8(bonus) in the submission.ipynb
3. If you complete the dashboard bonus task (Task 7), include your changes under `dashboard/` (the app should run with `npm install` and `npm run dev` from that folder)
4. Comment on code or a brief report explaining your approach and findings
5. Any assumptions you made during the analysis
6. Send us the link to your repository to nur@papcorns.com

Good luck!
