import RegistrationForm from "@/components/forms/RegistrationForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/account");
  }
  return (
    <main>
      <section className="pt-32 ">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br />
            for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-8">
            Share your links, social profiles, contact info, and more on one
            page
          </h2>
        </div>
        <RegistrationForm />
      </section>
    </main>
  );
}
