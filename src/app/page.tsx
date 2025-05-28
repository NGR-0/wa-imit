import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-4xl text-gray-500 hover:text-gray-800">
        welcome to simple chat
      </div>
      <div className="px-4">
        <Link href="/login">
          <Button variant="ghost" className="text-gray-500 text-4xl">
            ➛
          </Button>
        </Link>
      </div>
    </div>
  );
}
