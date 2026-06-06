"use client";

import { getUserData } from "@/api/user.api";
import { useUserStore } from "@/common/zustand/user.zustand";
import { getCookie } from "@/utils/cookie/cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const { user, setUser } = useUserStore();
  const accessToken = getCookie("tra_atk");
  useEffect(() => {
    if (accessToken) {
      getUserData()
        .then((res) => {
          setUser(res.data.data);
          console.log("header data:", res.data.data);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <header className="sticky top-[0px] z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-[16px]">
        <div className="flex h-[64px] items-center justify-between border-b border-border-light dark:border-border-dark">
          {/* Logo */}
          <div className="flex items-center gap-[16px] text-text-light-primary dark:text-text-dark-primary">
            <Image src="/icon.png" alt="brand-icon" width={40} height={40} />
            <Link href={"/"}>
              <h2 className="text-[24px] font-bold tracking-tight">TraceURL</h2>
            </Link>
          </div>

          {/* Nav */}
          <div className="hidden items-center gap-[32px] md:flex">
            <nav className="flex items-center gap-[24px] text-[14px] font-medium text-text-light-primary dark:text-text-dark-primary">
              <Link className="hover:text-primary" href="/features">
                Features
              </Link>
              <Link className="hover:text-primary" href="/pricing">
                Pricing
              </Link>
            </nav>

            {user ? (
              <Link
                className="flex items-center gap-[8px] cursor-pointer"
                href={"/profile"}
              >
                <Image src={"/default.png"} alt="icon" width={30} height={30} />
              </Link>
            ) : (
              <div className="flex items-center gap-[8px]">
                <Link
                  className="flex h-[40px] min-w-[84px] items-center justify-center rounded-[8px] bg-emerald-50 px-[16px] text-[14px] font-bold text-text-light-primary transition-colors hover:bg-emerald-100 dark:bg-surface-dark dark:text-text-dark-primary dark:hover:bg-border-dark"
                  href={"/login"}
                >
                  Log In
                </Link>
                <Link
                  className="flex h-[40px] min-w-[84px] items-center justify-center rounded-[8px] bg-primary px-[16px] text-[14px] font-bold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow"
                  href={"/login"}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
