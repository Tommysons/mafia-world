"use client"
import Chat from "@/components/Chat";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex justify-center gap-3">
    <Link href={`/profile`}>
      <button>Profile</button>
    </Link>
    <Link href='/world'>
    <button>World</button>
    </Link>
    <Link href='/city'>
    <button>City</button>
    </Link>
    <div>
      <Chat/>
    </div>
    </div>
  );
}
