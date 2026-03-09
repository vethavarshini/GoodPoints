import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-md bg-purple-500 px-4 py-2 text-white"
    >
      Logout
    </button>
  );
};

export default LogoutButton;