"use client";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="border-b p-2 w-full flex gap-2 justify-between items-center">
      <Link href="/" className="font-bold px-2 ">
        <span className="bg-gradient-to-r from-blue-700 to-red-700 bg-clip-text text-xl text-transparent">
          X-Pass
        </span>
      </Link>
    </div>
  );
}
