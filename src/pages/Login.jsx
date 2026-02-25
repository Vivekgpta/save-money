import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

function Login({ setUser }) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser({
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // Send OTP
  const sendOtp = async () => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          { size: "invisible" }
        );
      }

      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );

      setConfirmationResult(confirmation);
      alert("OTP Sent ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    try {
      const result = await confirmationResult.confirm(otp);

      setUser({
        name: "Phone User",
        phone: result.user.phoneNumber,
      });

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h1>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
        >
          Login with Google
        </button>

        {/* OTP Section */}
        {confirmationResult && (
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Verify OTP
            </button>
          </div>
        )}

        <div id="recaptcha-container"></div>

      </div>
    </div>
  );
}

export default Login;