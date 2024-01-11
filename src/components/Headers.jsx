import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutButton from "./buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Headers() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-white border-b py-4 ">
      <div className="max-w-4xl flex justify-between mx-auto px-6 items-center">
        <div className="flex gap-6">
          <Link
            href={"/"}
            className="font-bold text-xl flex items-center gap-1"
          >
            <FontAwesomeIcon icon={faLink} className="w-6 text-blue-500" />
            <span>LinkList</span>
          </Link>
          <nav className="flex gap-2 text-slate-600 text-sm items-center">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        <nav className="flex gap-4 text-sm items-center text-slate-600">
          {!!session && (
            <>
              <Link className="" href={"/account"}>
                <img src={session?.user?.image} className="w-9 rounded-full" />
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Sign In</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
