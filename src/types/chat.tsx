export interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  online: boolean;
  read: boolean;
  createdAt: string;
  updatedAt: string; // terakhir ubah profil
}

export interface Contact {
  id: string;
  username: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

export interface Message {
  id: string;
  content: string;
  sender: string; // e.g., "John Doe" or "Me"
  timestamp: string;
  isMe: boolean;
}
