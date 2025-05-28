export interface User {
  username: string;
  avatar: string;
  bio?: string;
  online: boolean;
  createdAt: string;
  updatedAt: string; // terakhir ubah profil
}

export interface Contact {
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: "text" | "image" | "video"; // dst
  timestamp: string;
  status: "sent" | "delivered" | "read";
}
