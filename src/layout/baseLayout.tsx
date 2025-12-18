"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/common/components/common/header";
import Footer from "@/common/components/common/footer";

type Props = {
  children: React.ReactNode;
};
export default function BaseLayout({ children }: Props) {
  const pathname = usePathname();
  const hideDefaultLayoutPaths = pathname.startsWith("/login");

  return (
    <>
      {!hideDefaultLayoutPaths && <Header />}
      <div className="main">{children}</div>
      {!hideDefaultLayoutPaths && <Footer />}
    </>
  );
}
