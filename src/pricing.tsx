import "./pricing.css";
import { Link } from "react-router-dom";

const plans = [
  {
    round: "ROUND 1",
    name: "Beginner",
    price: "999",
    tagline: "Show up. That's the whole rule.",
    features: [
      "Gym Access — Peak & Off-Peak",
      "Locker Facility",
      "Basic Workout Plan",
      "Community Support",
    ],
    featured: false,
  },
  {
    round: "ROUND 2",
    name: "Warrior",
    price: "1999",
    tagline: "The plan most people are actually on.",
    features: [
      "24/7 Gym Access",
      "Locker + Shower Facility",
      "Personalized Workout Plan",
      "Monthly Progress Tracking",
      "Nutrition Guidance",
    ],
    featured: true,
  },
  {
    round: "ROUND 3",
    name: "Elite",
    price: "3499",
    tagline: "For the ones who don't ask for motivation.",
    features: [
      "24/7 Gym Access — All Branches",
      "Private Locker + Shower",
      "1-on-1 Personal Training",
      "Custom Nutrition Plan",
      "Priority Booking",
      "Recovery Zone Access",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <>
      <div className="pricing-hero">
        <span className="eyebrow">No shortcuts. No refunds on excuses.</span>
        <h1>Choose Your Legacy</h1>
        <p>
          Every champion starts with a single decision. Pick the round that
          matches how hard you're willing to work, and build your future
          starting today.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`pricing-card ${plan.featured ? "featured" : ""}`}
          >
            {plan.featured && <div className="popular">MOST POPULAR</div>}

            <span className="round-label">{plan.round}</span>
            <h2>{plan.name}</h2>
            <p className="tagline">{plan.tagline}</p>

            <div className="price-row">
              <span className="currency">₹</span>
              <span className="price">{plan.price}</span>
              <span className="period">/ month</span>
            </div>

            <ul>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <Link to="/Signup" className="join-btn">
              Join Now
            </Link>
          </div>
        ))}
      </div>

      <div className="cta">
        <h1>Greatness Starts Today</h1>
        <p>
          Don't wait for motivation. Build discipline and create your own
          legacy — one rep, one round, one day at a time.
        </p>
        <Link to="/Signup" className="join-btn cta-btn">
          Become a Member
        </Link>
      </div>
    </>
  );
}

export default Pricing;
