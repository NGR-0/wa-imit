"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ChatHeader from "@/components/chat/header";
import ChatSidebar from "@/components/chat/sidebar";
import ChatWindow from "@/components/chat/window";
import type { Message, Contact } from "@/types/chat"; // Import types

const ChatApp = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const router = useRouter();

  const contacts: Contact[] = [
    {
      id: "1",
      username: "John Doe",
      avatar: "JD",
      lastMessage: "Hey, how are you?",
      time: "10:30 AM",
      unread: 2,
      online: true,
    },
    {
      id: "2",
      username: "Jane Smith",
      avatar: "JS",
      lastMessage: "Can we meet tomorrow?",
      time: "Yesterday",
      unread: 0,
      online: false,
    },
    {
      id: "3",
      username: "Mike Johnson",
      avatar: "MJ",
      lastMessage: "Thanks for the info!",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
    {
      id: "4",
      username: "Sarah Williams",
      avatar: "SW",
      lastMessage: "I'll send you the files soon",
      time: "Monday",
      unread: 0,
      online: false,
    },
    {
      id: "5",
      username: "David Brown",
      avatar: "DB",
      lastMessage: "Let's discuss this later",
      time: "Sunday",
      unread: 0,
      online: false,
    },
    {
      id: "6",
      username: "Emily Davis",
      avatar: "ED",
      lastMessage: "Have a great day!",
      time: "Last week",
      unread: 0,
      online: true,
    },
    {
      id: "7",
      username: "Robert Wilson",
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

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      console.log(
        `Sending message to ${selectedContact?.username}: ${messageInput}`,
      );
      setMessageInput("");
    }
  };

  const handleSetting = () => {
    router.push("/settings");
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatHeader
        searchQuery={headerSearchQuery}
        setSearchQuery={setHeaderSearchQuery}
        onSettingClick={handleSetting}
        currentUserAvatarFallback="CN"
      />

      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar
          contacts={contacts}
          selectedContact={selectedContact}
          onContactSelect={setSelectedContact}
          sidebarSearchQuery={sidebarSearchQuery}
          setSidebarSearchQuery={setSidebarSearchQuery}
        />
        <ChatWindow
          selectedContact={selectedContact}
          messages={messages}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default ChatApp;
