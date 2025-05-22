"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Setting() {
  const [imageUrl, setImageUrl] = useState("https://github.com/shadcn.png");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black space-y-6">
      <label className="cursor-pointer">
        <Avatar className="w-24 h-24 border-2 border-white/50 hover:opacity-80 transition">
          <AvatarImage src={imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="username"
          className="w-64 bg-transparent border-white/30 text-white placeholder-white/60 text-start text-lg focus:outline-none"
          required
        />
      </div>

      <div className=" items-end space-x-2">
        <Button
          type="submit"
          className="h-8 px-3 bg-white text-black hover:bg-gray-200 text-xs font-medium"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
