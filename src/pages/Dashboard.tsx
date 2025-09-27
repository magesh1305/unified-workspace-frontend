import React, { useEffect, useState } from "react";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState<any>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) {
      setUser(JSON.parse(u));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <Text as="h1" className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user.name}
        </Text>
        <div className="text-gray-600 space-y-2">
          <Text className="font-medium">Email: {user.email}</Text>
          <Text className="font-medium">
            Role: {user.role ? user.role : "N/A"}
          </Text>
        </div>
        {/* <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
