"use client";

import { useState } from "react";
import {
  Search,
  Paperclip,
  Send,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Message, Contact } from "@/types/chat";

export default function ChatApp() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const router = useRouter();

  const contacts: Contact[] = [
    {
      id: "1",
      name: "John Doe",
      avatar: "JD",
      lastMessage: "Hey, how are you?",
      time: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "JS",
      lastMessage: "Can we meet tomorrow?",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: "3",
      name: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for the info!",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: "4",
      name: "Sarah Williams",
      avatar: "SW",
      lastMessage: "I'll send you the files soon",
      time: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: "5",
      name: "David Brown",
      avatar: "DB",
      lastMessage: "Let's discuss this later",
      time: "Sunday",
      unread: 0,
      online: false,
    },
    {
      id: "6",
      name: "Emily Davis",
      avatar: "ED",
      lastMessage: "Have a great day!",
      time: "Last week",
      unread: 0,
      online: true,
    },
    {
      id: "7",
      name: "Robert Wilson",
      avatar: "RW",
      lastMessage: "The meeting is scheduled",
      time: "Last week",
      unread: 0,
      online: false,
    },
  ];

  const messages: Message[] = [
    {
      id: "1",
      content: "Hey there!",
      sender: "John Doe",
      timestamp: "10:25 AM",
      isMe: false,
    },
    {
      id: "2",
      content: "Hi! How are you?",
      sender: "Me",
      timestamp: "10:26 AM",
      isMe: true,
    },
    {
      id: "3",
      content: "I'm doing great, thanks for asking. How about you?",
      sender: "John Doe",
      timestamp: "10:28 AM",
      isMe: false,
    },
    {
      id: "4",
      content: "I'm good too. Just working on some projects.",
      sender: "Me",
      timestamp: "10:30 AM",
      isMe: true,
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      // Here you would typically add the message to your messages state
      // and potentially send it to a backend
      setMessageInput("");
    }
  };

  const handleSetting = () => {
    router.push("/settings");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto py-3 flex items-center">
          <Avatar className="h-8 w-8 mr-4 bg-gray-300">
            <Button onClick={handleSetting}>
              <AvatarFallback>CN</AvatarFallback>
            </Button>
          </Avatar>

          <div className="relative flex-1 max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              className="pl-10 py-1.5 w-full bg-white border-0 rounded-full text-sm"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Contacts sidebar */}
        <div className="w-1/3 bg-white border-r flex flex-col">
          <ScrollArea className="flex-1">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className={`px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                  selectedContact?.id === contact.id ? "bg-gray-50" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <Avatar className="h-10 w-10 mr-3 bg-gray-200">
                      <AvatarFallback>{contact.avatar}</AvatarFallback>
                    </Avatar>
                    {contact.online && (
                      <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium truncate">
                        {contact.name}
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
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col bg-white">
          {selectedContact ? (
            <>
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
                    <p className="font-medium">{selectedContact.name}</p>
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
                      className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
                    >
                      {!message.isMe && (
                        <Avatar className="h-8 w-8 mr-2 self-end mb-1 bg-gray-200">
                          <AvatarFallback>
                            {selectedContact.avatar}
                          </AvatarFallback>
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
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  className="rounded-full bg-green-500 hover:bg-green-600"
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-[#f5f5f5]">
              <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-sm">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">
                  Select a chat to start messaging
                </h3>
                <p className="text-gray-500 mt-2">
                  Choose from your existing conversations or search for someone
                  new to message
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
