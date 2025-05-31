"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
const SignOutLinks = () => {
  const handleLogout = () => {
    toast("Logout Success");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLinks;
