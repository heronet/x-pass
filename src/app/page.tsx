import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto h-full flex items-center justify-center ">
      <Button asChild className="mt-8">
        <Link href={"/generate"}>Create now</Link>
      </Button>
    </main>
  );
}
