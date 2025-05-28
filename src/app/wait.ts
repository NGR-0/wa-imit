import { getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";


export async function addFriend(friendUid: string) {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error("User not authenticated");

  const currentUid = currentUser.uid;

  const friendRef = doc(db, "users", currentUid, "friends", friendUid);

  await setDoc(friendRef, {
    addedAt: serverTimestamp(),
  });
}


import { addFriend } from "@/lib/friends";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddFriendButton({ friendUid }: { friendUid: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddFriend = async () => {
    setLoading(true);
    try {
      await addFriend(friendUid);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan teman.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return <p className="text-green-500">Sudah ditambahkan ✅</p>;
  }

  return (
    <Button onClick={handleAddFriend} disabled={loading}>
      {loading ? "Menambahkan..." : "Tambah Teman"}
    </Button>
  );
}

const reverseRef = doc(db, "users", friendUid, "friends", currentUid);
await setDoc(reverseRef, { addedAt: serverTimestamp() });
