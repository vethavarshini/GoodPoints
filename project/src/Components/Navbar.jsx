import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

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
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-between items-center transition-all duration-500
        ${
          scrolled
            ? "bg-purple-50/70 backdrop-blur-lg shadow-md text-purple-700"
            : "bg-purple-700 text-white"
        }`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold tracking-wide">
        HeroMissions
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <div className="relative dropdown-container">
            <button
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${user.name}`}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              {user.name}
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-3 w-48 bg-white text-gray-700 rounded-xl shadow-lg border transition-all duration-200 origin-top
              ${dropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <Link to="/my-requests" className="block px-4 py-2 hover:bg-purple-50">
                My Requests
              </Link>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-purple-50">
                My Volunteerings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-purple-50"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:scale-105 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-gray-800 flex flex-col p-4 gap-3 shadow-md md:hidden">
          {loading ? (
            <div>Loading...</div>
          ) : user ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{user.name}</span>
              </div>

              <Link to="/my-requests" onClick={() => setMenuOpen(false)}>
                My Requests
              </Link>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                My Volunteerings
              </Link>
              <button onClick={handleLogout} className="text-left">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;