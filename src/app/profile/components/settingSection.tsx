"use client";

import React from "react";

export default function SettingsSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* MAIN */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-10">
          {/* TITLE */}
          <div className="flex flex-col gap-2 border-b border-gray-200 dark:border-gray-700/60 pb-6">
            <p className="text-3xl font-black">Settings</p>
            <p className="text-sm text-gray-500">
              Manage your account preferences and settings.
            </p>
          </div>

          {/* NOTIFICATIONS */}
          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Notifications
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage how you receive updates and alerts.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Marketing Emails */}
              <label
                htmlFor="marketing-emails"
                className="flex items-start gap-3 cursor-pointer group"
              >
                <input
                  id="marketing-emails"
                  name="marketing-emails"
                  type="checkbox"
                  defaultChecked
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary 
                             focus:ring-primary focus:ring-2 
                             dark:border-gray-600 dark:bg-gray-700
                             cursor-pointer"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    Marketing Emails
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive updates about new products and features.
                  </p>
                </div>
              </label>

              {/* Security Alerts */}
              <div className="flex items-start gap-3 opacity-80 cursor-not-allowed">
                <input
                  id="security-alerts"
                  name="security-alerts"
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary 
                             dark:border-gray-600 dark:bg-gray-700"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Security Alerts
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified about suspicious activity on your account.
                    (Mandatory)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DIVIDER */}
          <hr className="border-gray-200 dark:border-gray-700/60" />

          {/* DANGER ZONE */}
          <section className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-red-600">Danger Zone</h3>

            <div className="flex items-center justify-between gap-6 rounded-lg border border-red-200 bg-red-50 p-5">
              <div className="flex flex-col gap-1">
                <h4 className="font-bold">Delete Account (회원탈퇴)</h4>
                <p className="text-sm text-gray-500">
                  Permanently delete your account and all of your content.
                </p>
              </div>

              <button
                className="shrink-0 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white
                           cursor-pointer
                           hover:bg-red-700
                           active:scale-[0.98]
                           transition"
              >
                Delete Account
              </button>
            </div>
          </section>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="sticky bottom-0 mt-12 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-700/60 dark:bg-background-dark/80 backdrop-blur-md px-2 py-4">
          <button
            className="h-10 px-4 rounded-lg bg-gray-100 text-sm font-bold
                       cursor-pointer
                       hover:bg-gray-200
                       active:scale-[0.98]
                       transition"
          >
            Cancel
          </button>
          <button
            className="h-10 px-6 rounded-lg bg-primary text-white text-sm font-bold
                       cursor-pointer
                       shadow-lg shadow-primary/20
                       hover:shadow-primary/40 hover:-translate-y-[1px]
                       active:translate-y-0 active:scale-[0.98]
                       transition-all"
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
