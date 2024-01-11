"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn("google")}
      className="bg-white shadow text-center py-4 w-full flex gap-3 justify-center items-center"
    >
      <FontAwesomeIcon icon={faGoogle} className="h-6" />
      <span>Sign In with Google</span>
    </button>
  );
}
