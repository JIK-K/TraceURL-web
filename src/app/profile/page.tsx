"use client";
import { updateUserName } from "@/api/user.api";
import { useUserStore } from "@/common/zustand/user.zustand";
import { useState } from "react";

export default function ProfileSection() {
  const { user, setUser } = useUserStore();
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  const handleSaveChanges = () => {
    updateUserName(displayName).then((res) => {
      setUser(res.data.data);
      console.log("User name updated:", res);
    });
  };
  return (
    <div className="overflow-hidden rounded-xl border border-border-light bg-background-light dark:bg-gray-900/50 p-6">
      <h1 className="text-4xl font-black mb-6 text-gray-900 dark:text-white">
        Profile
      </h1>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Username
          </label>
          <input
            className="h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white"
            defaultValue={user?.displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            className="h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 text-gray-400"
            disabled
            defaultValue={user?.email}
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/60 flex justify-end gap-3">
        <button className="h-10 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Cancel
        </button>
        <button
          className="h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-green-600 transition-colors"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
