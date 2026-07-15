import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    plan: "Warrior",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
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
        <span className="eyebrow">Last step</span>
        <h1>Start Your Legacy</h1>
        <p className="sub">
          Fill this in and we'll get your first session locked in.
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

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
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit number"
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
              placeholder="Choose a password"
              required
            />
          </label>

          <label>
            Plan
            <select name="plan" value={form.plan} onChange={handleChange}>
              <option value="Beginner">Beginner — ₹999/mo</option>
              <option value="Warrior">Warrior — ₹1999/mo</option>
              <option value="Elite">Elite — ₹3499/mo</option>
            </select>
          </label>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="join-btn">
            Confirm & Join
          </button>
        </form>

        <Link to="/login" className="back-link">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
}

export default Signup;
