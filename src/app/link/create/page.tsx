"use client";

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import { useRouter } from "next/navigation";
import { createShortUrl } from "@/api/shortUrl.api";
import { toDateTimeLocalString } from "@/utils/string/string.util";

export default function CreateLinkPage() {
  const router = useRouter();
  const [originalUrl, setOriginalUrl] = useState("");
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("traceurl.p-e.kr");
  const [alias, setAlias] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [isCustom, setIsCustom] = useState(true);

  const handleCreate = () => {
    if (!title || !expireDate) {
      alert("제목(title)과 만료일(expireDate)을 모두 입력해주세요.");
      return;
    }

    if (isCustom && !alias) {
      alert("커스텀 설정을 사용하려면 Alias(별칭)를 입력해야 합니다.");
      return;
    }

    const payload = {
      originalUrl,
      title,
      domain,
      alias,
      isCustom,
      expireDate,
    };

    console.log("CREATE LINK PAYLOAD", payload);

    createShortUrl(payload)
      .then((response) => {
        if (response.data.data) {
          router.push("/profile/links");
        }
      })
      .catch((error) => {
        const code = error.response?.data?.code;
        if (code === "COMMON-005") {
          alert("duplicated alias exists");
        }
      });
  };

  return (
    <div className="flex h-screen w-full bg-background-light text-text-light-primary">
      <main className="flex-1 overflow-y-auto p-[24px] md:p-[48px]">
        <div className="max-w-[768px] mx-auto flex flex-col gap-[32px]">
          {/* HEADER */}
          <div className="flex flex-col gap-[8px]">
            <a
              className="flex items-center gap-[4px] text-[14px] text-text-light-secondary hover:text-primary w-fit cursor-pointer"
              href="/profile"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              Back to Links
            </a>

            <h1 className="text-[30px] md:text-[36px] font-black tracking-tight">
              Create New Link
            </h1>
            <p className="text-text-light-secondary">
              Shorten, brand, and track your links in seconds.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-[12px] border border-border-light bg-surface-light p-[24px] md:p-[32px] flex flex-col gap-[32px]">
            {/* DESTINATION */}
            <div className="flex flex-col gap-[12px]">
              <label className="text-[14px] font-bold uppercase tracking-wide">
                Destination URL
              </label>

              <div className="flex rounded-[8px] border border-border-light overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <input
                  type="url"
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  placeholder="https://example.com/very-long-url"
                  className="flex-1 h-[56px] px-[16px] bg-background-light outline-none text-[16px]"
                />
                <button
                  type="button"
                  className="px-[16px] bg-background-light text-text-light-secondary hover:text-primary"
                  onClick={() =>
                    navigator.clipboard.readText().then(setOriginalUrl)
                  }
                >
                  <span className="material-symbols-outlined">
                    content_paste
                  </span>
                </button>
              </div>
            </div>

            <hr className="border-border-light" />

            {/* TITLE */}
            <Accordion icon="title" title="Title">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Super Grenade"
                className="w-full h-[48px] rounded-[8px] border border-border-light px-[16px] bg-background-light"
              />
            </Accordion>

            {/* CUSTOM ALIAS */}
            <Accordion icon="edit" title="Custom Alias">
              <p className="text-[12px] text-text-light-secondary mb-[16px]">
                Customize the back-half of your link.
              </p>

              <div className="flex gap-[16px]">
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="h-[48px] rounded-[8px] border border-border-light px-[16px] bg-background-light"
                >
                  <option>traceurl.p-e.kr</option>
                  <option>localhost:8080</option>
                </select>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="customToggle"
                      checked={isCustom}
                      onChange={() => setIsCustom(true)}
                      className="accent-primary"
                    />
                    <span>Custom</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="customToggle"
                      checked={!isCustom}
                      onChange={() => setIsCustom(false)}
                      className="accent-primary"
                    />
                    <span>Non-Custom</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder={
                    isCustom ? "super-grenade" : "Disabled in Non-Custom mode"
                  }
                  disabled={!isCustom}
                  className={`flex-1 h-[48px] rounded-[8px] border border-border-light px-[16px] bg-background-light ${
                    !isCustom ? "cursor-not-allowed opacity-50" : ""
                  }`}
                />
              </div>
            </Accordion>

            {/* EXPIRATION */}
            <Accordion icon="timer" title="Link Expiration">
              <input
                type="datetime-local"
                value={toDateTimeLocalString(expireDate)}
                min={toDateTimeLocalString(new Date().toISOString())}
                onChange={(e) =>
                  setExpireDate(new Date(e.target.value).toISOString())
                }
                className="h-[48px] rounded-[8px] border border-border-light px-[16px] bg-background-light"
              />
            </Accordion>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse md:flex-row justify-end gap-[16px] pb-[40px]">
            <button
              className="px-[32px] py-[12px] rounded-[8px] text-[14px] hover:bg-black/5"
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="px-[32px] py-[12px] rounded-[8px] bg-primary font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-[8px]"
            >
              <span className="material-symbols-outlined text-[20px]">
                auto_fix_high
              </span>
              Create Link
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
