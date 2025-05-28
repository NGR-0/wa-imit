"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import React from "react";
import type { Contact } from "@/types/chat";

interface ChatSidebarProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onContactSelect: (contact: Contact) => void;
  sidebarSearchQuery: string;
  setSidebarSearchQuery: (query: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  contacts,
  selectedContact,
  onContactSelect,
  sidebarSearchQuery,
  setSidebarSearchQuery,
}) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.username.toLowerCase().includes(sidebarSearchQuery.toLowerCase()),
  );

  return (
    <div className="w-80 bg-gray-100 border-r flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="Search friend..."
            value={sidebarSearchQuery}
            onChange={(e) => setSidebarSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ScrollArea className="overflow-y-auto flex-1">
        <div className="space-y-3 p-4">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer transition-colors ${
                selectedContact?.id === contact.id
                  ? "bg-gray-300"
                  : "bg-gray-100"
              }`}
              onClick={() => onContactSelect(contact)}
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{contact.avatar}</AvatarFallback>
                </Avatar>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                )}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium truncate">
                    {contact.username}
                  </p>
                  <p className="text-xs text-gray-500">{contact.time}</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xs text-gray-500 truncate">
                    {contact.lastMessage}
                  </p>
                  {contact.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
