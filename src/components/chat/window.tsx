// components/chat/ChatWindow.tsx
"use client";

import {
  Paperclip,
  Send,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import type { Message, Contact } from "@/types/chat";

interface ChatWindowProps {
  selectedContact: Contact | null;
  messages: Message[];
  messageInput: string;
  setMessageInput: (input: string) => void;
  onSendMessage: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  selectedContact,
  messages,
  messageInput,
  setMessageInput,
  onSendMessage,
}) => {
  if (!selectedContact) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#f5f5f5]">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-800">
            Select a chat to start messaging
          </h3>
          <p className="text-gray-500 mt-2">
            Choose from your existing conversations or search for someone new to
            message
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat header */}
      <div className="px-4 py-3 border-b flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center">
          <div className="relative">
            <Avatar className="h-10 w-10 mr-3 bg-gray-200">
              <AvatarFallback>{selectedContact.avatar}</AvatarFallback>
            </Avatar>
            {selectedContact.online && (
              <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
            )}
          </div>
          <div>
            <p className="font-medium">{selectedContact.username}</p>
            <p className="text-xs text-gray-500">
              {selectedContact.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Phone className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 bg-[#f5f5f5]">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isMe ? "justify-end" : "justify-start"
              }`}
            >
              {!message.isMe && (
                <Avatar className="h-8 w-8 mr-2 self-end mb-1 bg-gray-200">
                  <AvatarFallback>{selectedContact.avatar}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                  message.isMe
                    ? "bg-green-100 rounded-tr-none"
                    : "bg-white rounded-tl-none"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs text-gray-500 text-right mt-1">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message input */}
      <div className="p-3 border-t flex items-center bg-white">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Paperclip className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Smile className="h-5 w-5 text-gray-500" />
        </Button>
        <Input
          className="mx-2 bg-gray-100 border-0 rounded-full"
          placeholder="Type a message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSendMessage();
            }
          }}
        />
        <Button
          className="rounded-full bg-green-500 hover:bg-green-600"
          size="icon"
          onClick={onSendMessage}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatWindow;
