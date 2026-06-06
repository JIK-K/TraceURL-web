"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { removeCookie } from "@/utils/cookie/cookie";
import { useUserStore } from "@/common/zustand/user.zustand";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUserStore();
  const pathname = usePathname();
  const router = useRouter();

  const menuClass = (active: boolean) =>
    `flex items-center gap-[12px] px-[12px] py-[8px] rounded-[8px] cursor-pointer
     ${
       active
         ? "bg-green-100 dark:bg-green-500/20 text-[#16a34a]"
         : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
     }`;

  return (
    <div className="min-h-screen bg-[#f5f6f8] dark:bg-[#101622]">
      <main className="container mx-auto px-[16px] py-[40px]">
        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[40px]">
          {/* Sidebar */}
          <aside className="w-full md:w-[256px] shrink-0">
            <div className="flex items-center gap-[12px]">
              <Image src="/default.png" alt="icon" width={50} height={50} />
              <div>
                <p className="font-medium">{user?.displayName}</p>
                <p className="text-[14px] text-gray-500">{user?.email}</p>
              </div>
            </div>

            <nav className="mt-[24px] flex flex-col gap-[4px]">
              <div
                className={menuClass(pathname === "/profile")}
                onClick={() => router.push("/profile")}
              >
                <span className="material-symbols-outlined">person</span>
                Profile
              </div>

              <div
                className={menuClass(pathname.startsWith("/profile/links"))}
                onClick={() => router.push("/profile/links")}
              >
                <span className="material-symbols-outlined">link</span>
                Your Links
              </div>

              <div
                className={menuClass(pathname.startsWith("/profile/settings"))}
                onClick={() => router.push("/profile/settings")}
              >
                <span className="material-symbols-outlined">settings</span>
                Settings
              </div>

              <div
                onClick={() => {
                  removeCookie("tra_atk");
                  removeCookie("tra_rtk");
                  useUserStore.persist?.clearStorage?.();
                  router.replace("/login");
                }}
                className="flex items-center gap-[12px] px-[12px] py-[8px] text-red-500 cursor-pointer"
              >
                <span className="material-symbols-outlined">logout</span>
                Logout
              </div>
            </nav>
          </aside>

          {/* Content */}
          <section className="flex-1 min-w-[0px]">{children}</section>
        </div>
      </main>
    </div>
  );
}
