import { MessageCircle, HandHelping } from "lucide-react";

const Dashboard = () => {
  const openRequests = [
    {
      id: 1,
      category: "Physical Labor",
      title: "Need help moving couch",
      description:
        "I'm moving to a new apartment this weekend and need someone to help me carry a couch down one flight of stairs.",
      location: "Downtown, Main St.",
      time: "17 minutes ago",
      user: "Alice",
      comments: 1,
      status: "OPEN",
    },
    {
      id: 2,
      category: "Delivery",
      title: "Groceries pickup for elderly",
      description:
        "My grandfather needs someone to pick up his grocery order from the local supermarket and deliver it.",
      location: "Westside, Oak Ave",
      time: "17 minutes ago",
      user: "Bob",
      comments: 0,
      status: "OPEN",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800">
          Open Requests
        </h1>
        <p className="text-sm text-slate-500">
          Discover opportunities to help people in your community.
        </p>
      </div>

      {/* EMPTY STATE */}
      {openRequests.length === 0 ? (
        <div className="text-center text-slate-500">
          No open requests right now.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {openRequests.map((request) => (
            <OpenRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------- CARD COMPONENT ---------------- */

const OpenRequestCard = ({ request }) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
    
    {/* TAGS */}
    <div className="mb-3 flex items-center justify-between">
      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
        {request.category}
      </span>

      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
        {request.status}
      </span>
    </div>

    {/* TITLE */}
    <h3 className="mb-2 text-lg font-semibold text-slate-800">
      {request.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="mb-4 text-sm text-slate-500 line-clamp-3">
      {request.description}
    </p>

    {/* META */}
    <div className="mb-4 flex flex-col gap-1 text-sm text-slate-500">
      <span>📍 {request.location}</span>
      <span>⏱ {request.time}</span>
    </div>

    {/* FOOTER */}
    <div className="flex items-center justify-between border-t pt-4 text-sm text-slate-600">
      <span className="font-medium">{request.user}</span>

      <div className="flex items-center gap-1">
        <MessageCircle size={16} />
        {request.comments}
      </div>
    </div>

    {/* ACTION BUTTONS */}
    <div className="mt-4 flex gap-2">
      <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-700">
        <HandHelping size={16} />
        Help
      </button>

      <button className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-100">
        View Details
      </button>
    </div>
  </div>
);

export default Dashboard;