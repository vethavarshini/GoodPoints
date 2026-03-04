import React from "react";
import { useNavigate } from "react-router-dom";

const MyVolunteering = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/dashboard");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center bg-slate-100 shadow-sm rounded-xl p-4">
        <div>
          <h2 className="text-2xl font-semibold">My Volunteerings</h2>
          <p className="text-gray-500 text-sm">
            Requests you have offered to help with.
          </p>
        </div>

        <button
          onClick={handleRedirect}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Find More Opportunities
        </button>
      </div>

      {/* Empty State */}
      <div className="mt-10 border border-dashed rounded-xl p-10 text-center bg-gray-50">
        <h3 className="text-xl font-semibold mb-2">No Volunteering Yet</h3>
        <p className="text-gray-500 mb-6">
          You haven't offered to help with any requests yet. Check out the
          community feed!
        </p>

        <button
          onClick={handleRedirect}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Requests
        </button>
      </div>
    </div>
  );
};

export default MyVolunteering;