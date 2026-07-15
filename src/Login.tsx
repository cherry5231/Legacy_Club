import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      navigate("/");
    } catch {
      setError("Could not reach the server");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <span className="eyebrow">Welcome back</span>
        <h1>Log In</h1>
        <p className="sub">Pick up right where you left off.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
              required
            />
          </label>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="join-btn">
            Log In
          </button>
        </form>

        <Link to="/signup" className="back-link">
          Don't have an account? Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;