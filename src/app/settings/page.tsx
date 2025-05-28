"use client";

import ProfileForm from "@/components/forms/ProfileForm";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState({ username: "", bio: "" });
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setInitialData({ username: data.username, bio: data.bio });
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (username: string, bio: string) => {
    setLoading(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      await updateDoc(doc(db, "users", user.uid), {
        username,
        bio,
        updated_at: serverTimestamp(),
      });

      alert("Profil diperbarui.");
      router.push("/chat");
    } catch (error) {
      console.error(error);
      alert("Gagal memperbarui profil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileForm
      title="Pengaturan Profil"
      initialUsername={initialData.username}
      initialBio={initialData.bio}
      onSubmitAction={handleUpdate}
      loading={loading}
      submitLabel="Perbarui"
    />
  );
}
