import Link from "next/link";

export default function Home() {
  return (

    <div className="flex justify-center">
    <Link href={`/profile`}>
      <button>Profile</button>
    </Link>
    </div>
  );
}
