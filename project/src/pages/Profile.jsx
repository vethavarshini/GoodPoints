const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <h1 className="mb-6 text-2xl font-bold">Your Profile</h1>

      <div className="max-w-xl rounded-xl border bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-lg font-semibold">Rahul Kumar</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Verified Volunteer · North Campus Zone
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          <Stat label="Tasks Completed" value="18" />
          <Stat label="Impact Points" value="1240" />
          <Stat label="Avg Response" value="12 min" />
          <Stat label="Trust Score" value="4.8 ★" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
    <p className="text-xl font-bold">{value}</p>
    <p className="text-xs text-slate-500">{label}</p>
  </div>
);

export default Profile;