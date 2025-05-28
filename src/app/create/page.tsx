"use client";

import ProfileForm from "@/components/forms/ProfileForm";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const CreateProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async (username: string, bio: string) => {
    setLoading(true);
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const avatar = username.slice(0, 3).toUpperCase();

      await setDoc(doc(db, "users", user.uid), {
        username,
        bio,
        avatar,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
        online: true,
      });

      router.push("/chat");
    } catch (error) {
      console.error(error);
      alert("Gagal membuat profil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileForm
      title="Buat Profil"
      onSubmitAction={handleCreate}
      loading={loading}
    />
  );
};

export default CreateProfile;
