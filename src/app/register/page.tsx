"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log({ username, password });
    // For demo purposes, simulate successful login
    router.push("/dashboard");
  };

  return (
    <div className="bg-black h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="bg-transparent border-l border-r backdrop-blur-md px-12 py-8 rounded-xl shadow-lg w-full max-w-2xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-10">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Username"
              className="bg-transparent border border-white/30 text-white placeholder-white/60  py-6 text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              className="bg-transparent border border-white/30 text-white placeholder-white/60 py-6 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Phone"
              className="bg-transparent border border-white/30 text-white placeholder-white/60  py-6 text-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 py-6 mt-8 text-lg font-medium"
          >
            Submit
          </Button>

          <p className="text-center text-base">
            Have an account?{" "}
            <a href="/login" className="text-blue-300 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
