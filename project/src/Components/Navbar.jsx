import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          localStorage.removeItem("token");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-3 flex justify-between items-center
    ${
      scrolled
        ? "bg-purple-50/70 backdrop-blur-md border-b border-purple-400/30 shadow-indigo-900 text-purple-700"
        : "bg-purple-700 text-white"
    }`}
>
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold tracking-wide">
        GoodPoints
      </Link>

      {/* Right Section */}
      {user ? (
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition"
          >
            {user.name}
          </button>

          {dropdown && (
            <div className="absolute right-0 mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <Link
                to="/my-requests"
                className="block px-4 py-2 hover:bg-purple-50 transition"
              >
                My Requests
              </Link>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-purple-50 transition"
              >
                My Volunteerings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-purple-50 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;