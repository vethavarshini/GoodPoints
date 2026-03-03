import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // help_seeker | volunteer
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password || !role) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      navigate("/dashboard"); // after register → login
    } catch (err) {
      setError(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">

        {/* LEFT SECTION */}
        <div className="hidden w-1/2 flex-col justify-center bg-gradient-to-br from-indigo-600 to-indigo-400 p-12 text-white md:flex">
          <div className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-indigo-600">
              ⚡
            </span>
            GoodPoints
          </div>

          <h1 className="mb-4 text-4xl font-bold">Create Account</h1>
          <p className="text-indigo-100">
            Join as a helper or volunteer and start making impact today.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full bg-white p-10 md:w-1/2">
          <h2 className="mb-2 text-2xl font-bold text-slate-800">
            Register
          </h2>
          <p className="mb-6 text-sm text-slate-500">
            Choose your role to continue
          </p>

          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-full border px-4 py-3 text-sm"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-full border px-4 py-3 text-sm"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full rounded-full border px-4 py-3 text-sm"
          />

          {/* ROLE SELECTION */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <button
              onClick={() => setRole("help_seeker")}
              className={`rounded-xl border p-4 text-sm font-medium ${
                role === "help_seeker"
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                  : "border-slate-300"
              }`}
            >
              🙋 Help Seeker
            </button>

            <button
              onClick={() => setRole("volunteer")}
              className={`rounded-xl border p-4 text-sm font-medium ${
                role === "volunteer"
                  ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                  : "border-slate-300"
              }`}
            >
              🤝 Volunteer
            </button>
          </div>

          {error && (
            <p className="mb-4 text-sm text-red-500">{error}</p>
          )}

          {/* Register Button */}
          <button
            onClick={handleRegister}
            className="mb-4 w-full rounded-full bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Create Account
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-slate-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer font-medium text-indigo-600 hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;