"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RegistrationForm() {
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?desiredUsername=" + username);
    }
  }, []);
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const username = ev.target.querySelector("input").value;
    if (username?.length > 0) {
      window.localStorage.setItem("desiredUsername", username);
      await signIn("google");
    }
  };

  return (
    <form
      className="items-center inline-flex shadow-lg shadow-gray-700/20"
      onSubmit={handleSubmit}
    >
      <span className="bg-white py-4 pl-4">linklist.to/</span>
      <input type="text" className="py-4" placeholder="@username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for Free
      </button>
    </form>
  );
}
