"use client";
import { updateUserName } from "@/api/user.api";
import { useUserStore } from "@/common/zustand/user.zustand";
import { getCookie } from "@/utils/cookie/cookie";
import { useEffect, useState } from "react";

export default function ProfileSection() {
  const { user, setUser } = useUserStore();
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  useEffect(() => {
    const cookie = getCookie("tra_atk");
    if (!cookie) {
      window.location.replace("/login");
      alert("Login is required.");
    }
  }, []);

  const handleSaveChanges = () => {
    updateUserName(displayName).then((res) => {
      setUser(res.data.data);
      console.log("User name updated:", res);
    });
  };
  return (
    <div className="overflow-hidden rounded-[12px] border border-border-light bg-background-light dark:bg-gray-900/50 p-[24px]">
      <h1 className="text-[36px] font-black mb-[24px] text-gray-900 dark:text-white">
        Profile
      </h1>

      <div className="grid grid-cols-1 gap-[24px]">
        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-medium text-gray-700 dark:text-gray-300">
            Username
          </label>
          <input
            className="h-[40px] rounded-[8px] border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-[12px] focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white"
            defaultValue={user?.displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <label className="text-[14px] font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            className="h-[40px] rounded-[8px] border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-[12px] text-gray-400"
            disabled
            defaultValue={user?.email}
          />
        </div>
      </div>

      <div className="mt-[32px] pt-[24px] border-t border-gray-200 dark:border-gray-700/60 flex justify-end gap-[12px]">
        <button className="h-[40px] px-[16px] rounded-[8px] bg-gray-100 dark:bg-gray-800 text-[14px] font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Cancel
        </button>
        <button
          className="h-[40px] px-[16px] rounded-[8px] bg-primary text-white text-[14px] font-bold hover:bg-green-600 transition-colors"
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
