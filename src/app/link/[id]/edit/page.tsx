"use client";

import { useRouter } from "next/navigation";

export default function EditLinkPage() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-[#1F2937] dark:text-gray-300">
      <main className="flex-1 px-4 py-8 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <button
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
              onClick={() => router.push("/profile/links")}
            >
              <span className="material-symbols-outlined mr-1 text-lg">
                arrow_back
              </span>
              Back to Your Links
            </button>
          </div>

          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
                Edit Link
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Update configuration and settings for this shortened URL.
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors">
              <span className="material-symbols-outlined text-lg">delete</span>
              Delete
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <span className="material-symbols-outlined text-primary">
                      link
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      bit.ly/xyz123
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Created on Oct 26, 2023
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  Active
                </span>
              </div>
            </div>

            <form className="p-6 md:p-8 space-y-6">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="title"
                >
                  Link Title
                </label>
                <input
                  className="block w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
                  id="title"
                  name="title"
                  placeholder="e.g. Summer Sale 2024"
                  type="text"
                  defaultValue="My Awesome Campaign"
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  A descriptive title to help you identify this link in your
                  dashboard.
                </p>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="original_url"
                >
                  Destination URL
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    className="block w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-2.5 text-gray-500 shadow-sm focus:border-gray-200 focus:ring-0 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400 sm:text-sm cursor-not-allowed"
                    id="original_url"
                    name="original_url"
                    readOnly
                    type="text"
                    defaultValue="https://www.very-long-original-url-that-is-truncated.com"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="material-symbols-outlined text-gray-400 text-lg">
                      lock
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="expire_at"
                  >
                    Expiration Date
                  </label>
                  <input
                    className="block w-full rounded-lg border-gray-300 bg-white px-4 py-2.5 text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm appearance-none"
                    id="expire_at"
                    name="expire_at"
                    type="datetime-local"
                    placeholder="Select date"
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Link redirects will be disabled after this time.
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Total Clicks
                  </label>
                  <div className="flex items-center px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50">
                    <span className="material-symbols-outlined mr-2 text-gray-400">
                      bar_chart
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      1,234
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Auto Delete
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Permanently delete this link once it expires.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-end gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900/50">
              <button
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                type="button"
              >
                Cancel
              </button>
              <button
                className="rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
