import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.msg || "Login failed");
        return;
      }

      // store token
      localStorage.setItem("token", data.token);

      console.log("AFTER SAVE:", localStorage.getItem("token"));

      // redirect based on role
      if (data.role === "help_seeker") {
        navigate("/my-requests");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">

        {/* LEFT SECTION */}
        <div className="hidden w-1/2 flex-col justify-center bg-gradient-to-br from-purple-700 to-purple-500 p-12 text-white md:flex">
          <div className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-purple-700">
              ⚡
            </span>
            GoodPoints
          </div>

          <h1 className="mb-4 text-4xl font-bold">Hey, Hello!</h1>
          <p className="text-purple-100">
            Login to continue helping or requesting support.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full bg-white p-10 md:w-1/2">
          <h2 className="mb-2 text-2xl font-bold text-slate-800">
            Welcome Back
          </h2>
          <p className="mb-8 text-sm text-slate-500">
            Login to continue
          </p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-full border border-slate-300 px-4 py-3 text-sm focus:border-purple-700 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full rounded-full border border-slate-300 px-4 py-3 text-sm focus:border-purple-700 focus:outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-full bg-purple-700 py-3 text-sm font-medium text-white hover:bg-purple-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="mt-6 text-center text-sm text-slate-500">
            New user?{" "}
            <Link
              to="/register"
              className="font-medium text-purple-700 hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;