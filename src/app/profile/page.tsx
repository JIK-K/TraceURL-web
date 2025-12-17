"use client";

import { useState } from "react";
import Image from "next/image";
import { removeCookie } from "@/utils/cookie/cookie";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/common/zustand/user.zustand";
import LinksSection from "./components/linkSection";
import ProfileSection from "./components/profileSection";
import SettingsSection from "./components/settingSection";

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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
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
            {activeMenu === "profile" && <ProfileSection />}

            {activeMenu === "links" && <LinksSection />}

            {activeMenu === "settings" && <SettingsSection />}
          </section>
        </div>
      </main>
    </div>
  );
}
