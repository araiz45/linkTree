"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="py-1 rounded-md text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-500 px-3 border-blue-500 border-2 text-[13px]"
    >
      Logout
    </button>
  );
}
