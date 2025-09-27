import React, { useState } from "react";
import { post } from "../api/api";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Text from "../components/Text";

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
        <Text as="h2" className="text-xl font-bold mb-4">
          Register
        </Text>
        <div className="space-y-4">
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mt-6">
          <Button
            onClick={handleRegister}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
            label="Register"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
