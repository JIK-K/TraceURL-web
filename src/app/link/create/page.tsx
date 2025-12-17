"use client";

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import { useRouter } from "next/navigation";

export default function CreateLinkPage() {
  const router = useRouter();
  const [destinationUrl, setDestinationUrl] = useState("");
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("traceurl.p-e.kr");
  const [alias, setAlias] = useState("");
  const [expireDate, setExpireDate] = useState("");

  /* ===== Submit ===== */
  const handleCreate = () => {
    const payload = {
      destinationUrl,
      title,
      domain,
      alias,
      expireDate,
    };

    console.log("CREATE LINK PAYLOAD", payload);
    // TODO: API 연동
  };

  return (
    <div className="flex h-screen w-full bg-background-light text-text-light-primary">
      <main className="flex-1 overflow-y-auto p-6 md:p-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {/* HEADER */}
          <div className="flex flex-col gap-2">
            <a
              className="flex items-center gap-1 text-sm text-text-light-secondary hover:text-primary w-fit cursor-pointer"
              href="/profile"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back to Links
            </a>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Create New Link
            </h1>
            <p className="text-text-light-secondary">
              Shorten, brand, and track your links in seconds.
            </p>
          </div>

          {/* CARD */}
          <div className="rounded-xl border border-border-light bg-surface-light p-6 md:p-8 flex flex-col gap-8">
            {/* DESTINATION */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold uppercase tracking-wide">
                Destination URL
              </label>

              <div className="flex rounded-lg border border-border-light overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <input
                  type="url"
                  value={destinationUrl}
                  onChange={(e) => setDestinationUrl(e.target.value)}
                  placeholder="https://example.com/very-long-url"
                  className="flex-1 h-14 px-4 bg-background-light outline-none text-base"
                />
                <button
                  type="button"
                  className="px-4 bg-background-light text-text-light-secondary hover:text-primary"
                  onClick={() =>
                    navigator.clipboard.readText().then(setDestinationUrl)
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
                className="w-full h-12 rounded-lg border border-border-light px-4 bg-background-light"
              />
            </Accordion>

            {/* CUSTOM ALIAS */}
            <Accordion icon="edit" title="Custom Alias">
              <p className="text-xs text-text-light-secondary mb-4">
                Customize the back-half of your link.
              </p>

              <div className="flex gap-4">
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="h-12 rounded-lg border border-border-light px-4 bg-background-light"
                >
                  <option>traceurl.p-e.kr</option>
                  <option>localhost:8080</option>
                </select>

                <input
                  type="text"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  placeholder="super-grenade"
                  className="flex-1 h-12 rounded-lg border border-border-light px-4 bg-background-light"
                />
              </div>
            </Accordion>

            {/* EXPIRATION */}
            <Accordion icon="timer" title="Link Expiration">
              <input
                type="date"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                className="h-12 rounded-lg border border-border-light px-4 bg-background-light"
              />
            </Accordion>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse md:flex-row justify-end gap-4 pb-10">
            <button
              className="px-8 py-3 rounded-lg text-sm hover:bg-black/5"
              onClick={() => {
                router.back();
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="px-8 py-3 rounded-lg bg-primary font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2"
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
