"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log({ username, password, rememberMe });
    // For demo purposes, simulate successful login
    router.push("/dashboard");
  };

  return (
    <div className="bg-black h-screen w-full bg-cover bg-center flex items-center justify-center">
      <div className="bg-transparent border-l border-r backdrop-blur-md px-12 py-8 rounded-xl shadow-lg w-full max-w-2xl text-white">
        <h2 className="text-2xl font-semibold text-center mb-10">Login</h2>
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-3">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
                className="h-5 w-5"
              />
              <span className="text-base">Remember Me</span>
            </label>
            <a href="#" className="text-blue-300 hover:underline text-base">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-gray-200 py-6 text-lg font-medium"
          >
            Submit
          </Button>

          <div className="flex justify-end">
            <button
              type="button"
              className="flex items-center space-x-2 bg-transparent hover:bg-white/10 rounded-full transition-colors"
              onClick={() => console.log("Google login clicked")}
            >
              <span className="text-lg" aria-hidden="true">
                🇬
              </span>
            </button>
          </div>

          <p className="text-center text-base mt-6">
            Dont have an account?{" "}
            <a href="/register" className="text-blue-300 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
