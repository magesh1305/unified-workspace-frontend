import React, { useState } from "react";
import { post } from "../api/api";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";

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
      console.log("result==========", result);
      const idToken = await result.user.getIdToken();
      console.log("idToke-------------", idToken);
      const res = await post("/auth/login", { idToken });
      console.log("res++++++++++++++++", res);
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
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 border rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Login</h2>
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
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full mb-2"
        >
          Login
        </button>
        <button
          onClick={handleFirebaseLogin}
          className="px-4 py-2 bg-red-500 text-white rounded w-full"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
