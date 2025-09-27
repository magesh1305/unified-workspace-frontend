import React, { useState } from "react";
import { post } from "../api/api";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Text from "../components/Text";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await post("/auth/login", { email, password });
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  const handleFirebaseLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      const res = await post("/auth/login", { idToken });
      if (res.success) {
        localStorage.setItem("user", JSON.stringify(res.user));
        navigate("/dashboard");
      } else {
        alert(res.message);
      }
    } catch (err) {
      console.error(err);
      alert("Firebase login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 bg-red rounded-xl shadow-lg w-[50%] max-w-md">
        <Text
          as="h2"
          className="text-3xl font-bold text-gray-800 !text-red mb-6"
        >
          Login
        </Text>

        <div className="space-y-4">
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

        {/* Buttons */}
        <div className="mt-6 space-y-3">
          <Button
            label="Login"
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 cursor-pointer"
          />
          <Button
            label="Login with Google"
            onClick={handleFirebaseLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 cursor-pointer"
          />
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
