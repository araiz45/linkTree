"use client";
import LoginWithGoogle from "@/components/buttons/LoginWithGoogle";

export default function Login() {
  return (
    <div>
      <div className="border p-4 max-w-xs mx-auto">
        <h1 className="text-4xl bold text-center mb-2">Sign In</h1>
        <p className="text-center mb-6 text-gray-500 text-sm">
          Sign in to your account using one of the methods below
        </p>
        <LoginWithGoogle />
      </div>
    </div>
  );
}