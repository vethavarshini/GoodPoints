import { ArrowRight, AlertTriangle, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold">
          Hero<span className="text-indigo-600">Missions</span>
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          
          <div>
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600">
              Community Help • Hyperlocal Support
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Small help.
              <br />
              <span className="text-indigo-600">
                Big impact.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-500">
              GoodPoints connects neighbors who need help with those who are ready to offer it —
              building stronger, faster, and more caring communities.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Join as Volunteer <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-600 hover:bg-white"
              >
                Request Help
              </button>
            </div>
          </div>

          {/* VISUAL CARD */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-indigo-300/10 blur-2xl" />
            <div className="relative rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-lg font-semibold">
                Live Community Impact
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <p>🚑 Medical assistance nearby</p>
                <p>💧 Water & supply distribution</p>
                <p>🏃‍♂️ Volunteers responding in real time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<AlertTriangle className="text-indigo-600" />}
            title="Crisis-Aware System"
            description="Adaptive interface that prioritizes urgent needs during emergencies and disasters."
          />
          <FeatureCard
            icon={<Users className="text-indigo-600" />}
            title="Hyperlocal Missions"
            description="Tasks are matched within your neighborhood for faster response and higher trust."
          />
          <FeatureCard
            icon={<Shield className="text-indigo-600" />}
            title="Safe & Verified"
            description="Role-based access, community trust signals, and transparent impact tracking."
          />
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <Stat value="2,400+" label="People Helped" />
            <Stat value="180+" label="Missions Completed" />
            <Stat value="12 min" label="Avg Response Time" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-8 py-24 text-center">
        <h3 className="text-3xl font-bold">
          Be the reason help arrives on time.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-slate-500">
          Join GoodPoints and turn local action into meaningful impact.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-8 rounded-full bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © 2026 GoodPoints · Built for community resilience
      </footer>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const FeatureCard = ({ icon, title, description }) => (
  <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4">{icon}</div>
    <h4 className="mb-2 text-lg font-semibold">{title}</h4>
    <p className="text-sm text-slate-500">{description}</p>
  </div>
);

const Stat = ({ value, label }) => (
  <div>
    <p className="text-3xl font-bold text-indigo-600">{value}</p>
    <p className="mt-1 text-sm text-slate-500">{label}</p>
  </div>
);

export default Landing;