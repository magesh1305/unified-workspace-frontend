import React, { useEffect, useState } from "react";
import Text from "../components/Text";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <Text as="h1" className="text-2xl font-bold">
        Welcome, {user.name}
      </Text>
      <Text>Email: {user.email}</Text>
    </div>
  );
};

export default Dashboard;
