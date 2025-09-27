import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Dashboard;
