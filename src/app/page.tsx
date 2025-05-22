import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="text-4xl text-white hover:text-gray-200">
        welcome to simple chat
      </div>
      <div className="px-4">
        <Link href="/login">
          <Button variant="ghost" className="text-white text-4xl">
            ➛
          </Button>
        </Link>
      </div>
    </div>
  );
}
