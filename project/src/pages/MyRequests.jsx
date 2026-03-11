import { FileText, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyRequests = () => {
  const navigate = useNavigate();

  // Toggle this to [] to test empty state
  const requests = [
 
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* HEADER CARD */}
        <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <FileText className="text-indigo-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                My Requests
              </h1>
              <p className="text-sm text-slate-500">
                Manage the requests you have created.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/request")}
            className="flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <Plus size={16} />
            Ask for Help
          </button>
        </div>

        {/* CONTENT */}
        {requests.length === 0 ? (
          <EmptyState onCreate={() => navigate("/request")} />
        ) : (
          <div className="grid gap-4">
            {requests.map((req) => (
              <RequestCard key={req.id} request={req} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const EmptyState = ({ onCreate }) => (
  <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white py-20 text-center">
    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
      <FileText className="text-slate-400" size={28} />
    </div>

    <h3 className="text-lg font-semibold text-slate-800">
      No Requests Yet
    </h3>
    <p className="mt-2 max-w-sm text-sm text-slate-500">
      You haven’t asked for any help yet. Don’t hesitate to reach out to
      your local community!
    </p>

    <button
      onClick={onCreate}
      className="mt-6 flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-700"
    >
      <Plus size={16} />
      Ask for Help
    </button>
  </div>
);

const RequestCard = ({ request }) => {
  const statusStyle =
    request.status === "Pending"
      ? "bg-orange-100 text-orange-600"
      : request.status === "Accepted"
      ? "bg-green-100 text-green-600"
      : "bg-slate-100 text-slate-600";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-800">
          {request.title}
        </h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}
        >
          {request.status}
        </span>
      </div>

      <div className="mt-3 text-sm text-slate-500">
        <p>📍 {request.zone}</p>
        <p>⏱ {request.createdAt}</p>
      </div>
    </div>
  );
};

export default MyRequests;