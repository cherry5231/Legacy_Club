# Legacy Club 

A gym/fitness landing site built with React, TypeScript, and Vite — featuring a homepage, brand story ("Our Legacy"), pricing plans, and a working signup/login system backed by a Flask API and PostgreSQL database.

**Live site:** https://legacy-club-iota.vercel.app

---

## Features

- Responsive homepage with hero section, typing-text animations, and social links
- "Our Legacy" history/brand story page
- Pricing page with three tiers (Beginner, Warrior, Elite)
- Signup and login flows connected to a real backend
- Passwords hashed with Werkzeug (never stored in plaintext)
- Simple logged-in/logged-out state reflected in the navbar

---

## Tech Stack

**Frontend**
- React + TypeScript
- Vite
- React Router
- Deployed on [Vercel](https://vercel.com)

**Backend**
- Flask (Python)
- PostgreSQL (via `psycopg2`) in production, SQLite for local development
- Gunicorn as the production WSGI server
- Deployed on [Render](https://render.com)

---

## Project Structure

```
Legacy_Club/
├── src/
│   ├── home.tsx          # Homepage
│   ├── History.tsx       # Our Legacy / brand story page
│   ├── pricing.tsx       # Pricing plans
│   ├── Signup.tsx        # Signup form
│   ├── Login.tsx         # Login form
│   ├── TypingText.tsx    # Reusable typing-animation component
│   ├── App.tsx            # Route definitions
│   ├── main.tsx           # App entry point
│   └── app.py              # Flask backend (signup/login API)
├── requirements.txt        # Python dependencies
├── package.json
└── README.md
```

---

## Running Locally

### Frontend

```bash
npm install
npm run dev
```

Create a `.env` file in the project root:

```
VITE_API_URL=http://localhost:5000
```

### Backend

From the `src/` folder:

```bash
pip install -r requirements.txt
python app.py
```

The backend automatically uses **SQLite** locally (no setup needed) and switches to **PostgreSQL** automatically when a `DATABASE_URL` environment variable is present (i.e. in production on Render).

By default, the Flask server runs on `http://localhost:5000` and expects requests from `http://localhost:5173` (Vite's default port). If your dev server runs on a different port, update `FRONTEND_ORIGIN` accordingly.

---

## API Endpoints

| Method | Endpoint        | Description                          |
|--------|-----------------|---------------------------------------|
| POST   | `/api/signup`   | Create a new user account            |
| POST   | `/api/login`    | Verify credentials and log in        |
| GET    | `/api/health`   | Health check — returns `{"status":"ok"}` |

---

## Deployment

**Frontend (Vercel)**
- Framework preset: Vite
- Environment variable: `VITE_API_URL` → your Render backend URL

**Backend (Render)**
- Root directory: `src`
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`
- Environment variables:
  - `DATABASE_URL` → Render PostgreSQL connection string
  - `FRONTEND_ORIGIN` → your live Vercel URL (needed for CORS)

>  Render's free tier spins down after inactivity — the first request after idle time may take 10–30 seconds to respond.

---

## Notes & Limitations

- Login state is tracked client-side via `localStorage` for UI purposes only (switching "Sign up" to "Log out" in the nav). This is **not** a secure session system — there are no auth tokens or server-verified sessions. Fine for a simple project, but not suitable for handling sensitive user data as-is.
- No password reset, email verification, or account management flows yet.

---

## License

Personal project

## Author
https://github.com/cherry5231
