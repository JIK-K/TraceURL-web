"use client";

import { useState } from "react";
import { getUserData } from "@/api/auth.api";
import Image from "next/image";
import { removeCookie } from "@/utils/cookie/cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/common/zustand/user.zustand";

type MenuKey = "profile" | "links" | "settings" | "logout";

export default function ProfilePage() {
  const { user, setUser } = useUserStore();
  const [activeMenu, setActiveMenu] = useState<MenuKey>("profile");
  const router = useRouter();

  const menuClass = (key: MenuKey) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
     ${
       activeMenu === key
         ? "bg-green-100 dark:bg-green-500/20 text-[#16a34a]"
         : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
     }`;

  return (
    <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101622] font-display text-gray-900 dark:text-gray-100 transition-colors">
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image src="/default.png" alt="icon" width={50} height={50} />
                <div>
                  <p className="font-medium">{user?.displayName}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              <nav className="flex flex-col gap-1 mt-4">
                <div
                  onClick={() => setActiveMenu("profile")}
                  className={menuClass("profile")}
                >
                  <span className="material-symbols-outlined">person</span>
                  <span className="text-sm font-medium">Profile</span>
                </div>

                <div
                  onClick={() => setActiveMenu("links")}
                  className={menuClass("links")}
                >
                  <span className="material-symbols-outlined">link</span>
                  <span className="text-sm font-medium">Your Links</span>
                </div>

                <div
                  onClick={() => setActiveMenu("settings")}
                  className={menuClass("settings")}
                >
                  <span className="material-symbols-outlined">settings</span>
                  <span className="text-sm font-medium">Settings</span>
                </div>
                <button
                  onClick={() => {
                    removeCookie("tra_atk");
                    removeCookie("tra_rtk");
                    useUserStore.persist?.clearStorage?.();
                    useUserStore.setState({ user: null });
                    router.replace("/login");
                  }}
                  className={menuClass("logout")}
                >
                  <span className="material-symbols-outlined text-red-500">
                    logout
                  </span>
                  <span className="text-sm font-medium text-red-500">
                    Logout
                  </span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <section className="flex-1">
            {/* ========= Profile Section ========= */}
            {activeMenu === "profile" && (
              <>
                <h1 className="text-4xl font-black mb-6">Profile</h1>

                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Username</label>
                    <input
                      className="h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3"
                      defaultValue={user?.displayName}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      className="h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 text-gray-400"
                      disabled
                      defaultValue={user?.email}
                    />
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700/60 flex justify-end gap-3">
                  <button className="h-10 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm font-bold">
                    Cancel
                  </button>
                  <button className="h-10 px-4 rounded-lg bg-[#16a34a] text-white text-sm font-bold">
                    Save Changes
                  </button>
                </div>
              </>
            )}

            {/* ========= Links Section ========= */}
            {/*
            {activeMenu === "links" && (
              <LinksSection />
            )}
            */}

            {/* ========= Settings Section ========= */}
            {/*
            {activeMenu === "settings" && (
              <SettingsSection />
            )}
            */}
          </section>
        </div>
      </main>
    </div>
  );
}
