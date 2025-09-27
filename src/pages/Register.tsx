import React, { useState } from "react";
import { post } from "../api/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await post("/auth/register", { name, email, password });
      if (res.success) {
        alert("Registration successful!");
        navigate("/");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 p-2 border w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border w-full"
        />
        <button
          onClick={handleRegister}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
