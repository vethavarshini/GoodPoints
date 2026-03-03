import { MessageCircle } from "lucide-react";

const Dashboard = () => {
  const openRequests = [
    {
      id: 1,
      category: "Physical Labor",
      title: "Need help",
      description:
        "I'm moving to a new apartment this weekend and need someone to help me carry a couch down one flight of stairs.",
      location: "Downtown, Main St.",
      time: "17 minutes ago",
      user: "Alice",
      comments: 1,
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
          Discover opportunities to make a difference locally.
        </p>
      </div>

      {/* REQUEST GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {openRequests.map((request) => (
          <OpenRequestCard key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
};

/* ---------------- COMPONENT ---------------- */

const OpenRequestCard = ({ request }) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
    {/* Tags */}
    <div className="mb-3 flex items-center justify-between">
      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
        {request.category}
      </span>
      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
        OPEN
      </span>
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-semibold text-slate-800">
      {request.title}
    </h3>

    {/* Description */}
    <p className="mb-4 text-sm text-slate-500">
      {request.description}
    </p>

    {/* Meta Info */}
    <div className="mb-4 flex flex-col gap-1 text-sm text-slate-500">
      <span>📍 {request.location}</span>
      <span>⏱ {request.time}</span>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between border-t pt-4 text-sm text-slate-600">
      <span className="font-medium">{request.user}</span>
      <div className="flex items-center gap-1">
        <MessageCircle size={16} />
        {request.comments}
      </div>
    </div>
  </div>
);

export default Dashboard;