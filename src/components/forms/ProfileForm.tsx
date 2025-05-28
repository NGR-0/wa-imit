"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const profileSchema = z.object({
  username: z.string().min(5, { message: "Username minimal 5 karakter" }),
  bio: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileFormProps {
  initialUsername?: string;
  initialBio?: string;
  onSubmitAction: (username: string, bio: string) => Promise<void>;
  loading?: boolean;
  title: string;
  submitLabel?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  initialUsername = "",
  initialBio = "",
  onSubmitAction,
  loading = false,
  title,
  submitLabel = "Simpan",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: initialUsername,
      bio: initialBio,
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    await onSubmitAction(data.username, data.bio || "");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {title}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Username
            </label>
            <input
              {...register("username")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              {...register("bio")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ceritakan tentang dirimu"
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          >
            {loading ? "Menyimpan..." : submitLabel}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
