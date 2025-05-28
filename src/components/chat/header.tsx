"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import React from "react";

interface ChatHeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSettingClick: () => void;
  currentUserAvatarFallback: string; // e.g., "CN"
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  searchQuery,
  setSearchQuery,
  onSettingClick,
  currentUserAvatarFallback,
}) => {
  return (
    <div className="w-full px-10 py-2 flex items-center bg-gray-100 rounded-full ">
      <div className="flex-1"></div>
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm"
            placeholder="search new friend..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Avatar
          className="h-8 w-8 bg-gray-300 cursor-pointer"
          onClick={onSettingClick}
        >
          <AvatarFallback>{currentUserAvatarFallback}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default ChatHeader;
