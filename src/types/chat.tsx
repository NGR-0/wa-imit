export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: string;
  updatedAt: string; // terakhir ubah profil
}

export interface Contact {
  id: string;
  name: string;
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
