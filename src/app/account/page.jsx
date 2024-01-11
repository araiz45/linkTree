import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Account({ searchParams }) {
  const desiredUsername = searchParams.desiredUsername;
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div>
        Name: {session?.user?.name}
        <br />
        Desired Username: {desiredUsername}
      </div>
    </>
  );
}
