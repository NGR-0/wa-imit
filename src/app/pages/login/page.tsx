"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signWithGoogle, signWithTwitter } from "@/lib/firebase";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const {} = await signWithGoogle();
      router.push("/pages/chat");
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleTwitterLogin = async () => {
    try {
      setLoading(true);
      const {} = await signWithTwitter();
      router.push("/pages/chat");
    } catch (error) {
      console.error("Google login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100 text-white px-4">
      <div className="bg-gray-300 backdrop-blur-md border border-white/20 rounded-2xl p-15 max-w-md w-full shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <Button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full mb-4 bg-white text-black hover:bg-gray-200"
        >
          <span className="mr-2">🇬</span>{" "}
          {loading ? "Signing in..." : "Sign in with Google"}
        </Button>

        <Button
          onClick={handleTwitterLogin}
          disabled={loading}
          className="w-full mb-4 bg-white text-black hover:bg-gray-200"
        >
          <span className="mr-2">Ⓧ</span>{" "}
          {loading ? "Signing in..." : "Sign in with Google"}
        </Button>
      </div>
    </div>
  );
}
