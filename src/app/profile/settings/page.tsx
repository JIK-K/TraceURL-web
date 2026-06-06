"use client";

import { withdraw } from "@/api/user.api";

export default function SettingsSection() {
  const handleSave = () => {
    alert("saved");
  };
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      {/* MAIN */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px] py-[32px]">
        <div className="flex flex-col gap-[40px]">
          {/* TITLE */}
          <div className="flex flex-col gap-[8px] border-b border-gray-200 dark:border-gray-700/60 pb-[24px]">
            <p className="text-[30px] font-black">Settings</p>
            <p className="text-[14px] text-gray-500">
              Manage your account preferences and settings.
            </p>
          </div>

          {/* NOTIFICATIONS */}
          <section className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <h3 className="text-[18px] font-bold text-gray-900 dark:text-white">
                Notifications
              </h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400">
                Manage how you receive updates and alerts.
              </p>
            </div>

            <div className="flex flex-col gap-[20px]">
              {/* Marketing Emails */}
              <label
                htmlFor="marketing-emails"
                className="flex items-start gap-[12px] cursor-pointer group"
              >
                <input
                  id="marketing-emails"
                  name="marketing-emails"
                  type="checkbox"
                  defaultChecked
                  className="mt-[4px] h-[16px] w-[16px] rounded-[4px] border-gray-300 text-primary 
                             focus:ring-primary focus:ring-2 
                             dark:border-gray-600 dark:bg-gray-700
                             cursor-pointer"
                />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    Marketing Emails
                  </span>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400">
                    Receive updates about new products and features.
                  </p>
                </div>
              </label>

              {/* Security Alerts */}
              <div className="flex items-start gap-[12px] opacity-80 cursor-not-allowed">
                <input
                  id="security-alerts"
                  name="security-alerts"
                  type="checkbox"
                  checked
                  disabled
                  className="mt-[4px] h-[16px] w-[16px] rounded-[4px] border-gray-300 text-primary 
                             dark:border-gray-600 dark:bg-gray-700"
                />
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[14px] font-medium text-gray-900 dark:text-white">
                    Security Alerts
                  </span>
                  <p className="text-[14px] text-gray-500 dark:text-gray-400">
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
          <section className="flex flex-col gap-[16px]">
            <h3 className="text-[18px] font-bold text-red-600">Danger Zone</h3>

            <div className="flex items-center justify-between gap-[24px] rounded-[8px] border border-red-200 bg-red-50 p-[20px]">
              <div className="flex flex-col gap-[4px]">
                <h4 className="font-bold">Delete Account (회원탈퇴)</h4>
                <p className="text-[14px] text-gray-500">
                  Permanently delete your account and all of your content.
                </p>
              </div>

              <button
                className="shrink-0 rounded-[8px] bg-red-600 px-[16px] py-[8px] text-[14px] font-bold text-white
                           cursor-pointer
                           hover:bg-red-700
                           active:scale-[0.98]
                           transition"
                onClick={withdraw}
              >
                Delete Account
              </button>
            </div>
          </section>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="sticky bottom-[0px] mt-[48px] flex justify-end gap-[12px] border-t border-gray-200 dark:border-gray-700/60 dark:bg-background-dark/80 backdrop-blur-md px-[8px] py-[16px]">
          <button
            className="h-[40px] px-[24px] rounded-[8px] bg-primary text-white text-[14px] font-bold
                       cursor-pointer
                       shadow-lg shadow-primary/20
                       hover:shadow-primary/40 hover:-translate-y-[1px]
                       active:translate-y-0 active:scale-[0.98]
                       transition-all"
            onClick={handleSave}
          >
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
