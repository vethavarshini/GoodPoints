import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("NAVBAR TOKEN:", token);

      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("ME STATUS:", res.status);

        if (res.ok) {
          const data = await res.json();
          console.log("ME DATA:", data);
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
    <nav className="bg-indigo-600 px-6 py-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">
        GoodPoints
      </Link>

      {user ? (
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="bg-white text-indigo-600 px-4 py-2 rounded-full"
          >
            {user.name}
          </button>

          {dropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow">
              <Link to="/my-requests" className="block px-4 py-2 hover:bg-gray-100">
                My Requests
              </Link>
              <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">
                My Volunteerings
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-white text-indigo-600 px-4 py-2 rounded-full"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;