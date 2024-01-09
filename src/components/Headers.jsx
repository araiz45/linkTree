import Link from "next/link";

export default function Headers() {
  return (
    <header className="bg-white border-b flex justify-between p-4 ">
      <div className="flex gap-6">
        <Link href={"/"}>LinkList</Link>
        <nav className="flex gap-2 text-slate-600 text-sm items-center">
          <Link href={"/about"}>About</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>

      <div className="flex gap-4 text-sm items-center text-slate-600">
        <Link href={"/login"}>Sign In</Link>
        <Link href={"/register"}>Create Account</Link>
      </div>
    </header>
  );
}
