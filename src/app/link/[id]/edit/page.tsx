"use client";

import { downloadQrCode } from "@/api/qrCode.api";
import {
  deleteShortUrl,
  editShortUrl,
  getShortUrlEditData,
} from "@/api/shortUrl.api";
import {
  ShortUrlEditRequestDto,
  ShortUrlEditResponseDto,
} from "@/common/dtos/shortUrl.dto";
import { BaseStatus } from "@/common/enums/baseStatus.enum";
import {
  formatToMonthDayYear,
  toDateTimeLocalString,
} from "@/utils/string/string.util";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BlockedItems from "./components/blockedItems";
import CreateIpBlockModal from "./components/createIpBlockModal";
import { createBlockIp, getIpBlockList, upBlockIp } from "@/api/ipBlock.api";
import { IpBlockResponseDto } from "@/common/dtos/ipBlock.dto";

export default function EditLinkPage() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<ShortUrlEditResponseDto | null>(null);
  const [ipBlockList, setIpBlockList] = useState<IpBlockResponseDto[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getShortUrlEditData(id as string)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching short URL edit data:", error);
      });
    getIpBlockList(id as string)
      .then((response) => {
        console.log("IP Block List:", response.data.data);
        setIpBlockList(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching IP Block List:", error);
      });
  }, []);

  function getStatusBadge(status: BaseStatus) {
    if (status === BaseStatus.ACTIVE) {
      return {
        label: "Active",
        className:
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      };
    }

    // INACTIVE
    return {
      label: "Inactive",
      className:
        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    };
  }

  const handleEditSave = () => {
    if (data) {
      const dto: ShortUrlEditRequestDto = {
        title: data.title,
        expireDate: data.expireAt,
        autoDelete: data.autoDelete,
        status: data.status,
      };

      console.log(dto);

      editShortUrl(id as string, dto)
        .then((response) => {
          router.replace("/profile/links");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDelete = () => {
    if (data) {
      deleteShortUrl(data.shortCode)
        .then((response) => {
          router.replace("/profile/links");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDownloadQrCode = async () => {
    if (data) {
      const fileName = `${data.shortCode}.png`;
      try {
        const response = await downloadQrCode(fileName);

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;

        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();

        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading QR code:", error);
      }
    }
  };

  const handleAddIpBlock = (blockIp: string, reason: string) => {
    const ipRegex =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (!blockIp) {
      alert("IP 주소를 입력해주세요.");
      return;
    }

    if (!ipRegex.test(blockIp)) {
      alert("올바른 IP 주소 형식이 아닙니다. (예: 192.168.0.1)");
      return;
    }

    console.log("검증 완료! IP Block 추가:", blockIp, reason);
    const payload = {
      shortCode: data?.shortCode!,
      ipAddress: blockIp,
      reason: reason,
    };

    createBlockIp(payload)
      .then((response) => {
        setIpBlockList([...ipBlockList, response.data.data]);
      })
      .catch((error) => {
        const code = error.response?.data?.code;
        if (code === "COMMON-005") {
          alert("already blocked IP address exists");
          return;
        }
      });

    setIsOpen(false);
  };

  const handleUnblockIp = (id: string) => {
    upBlockIp(id)
      .then((response) => {
        setIpBlockList(ipBlockList.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error unblocking IP:", error);
      });
  };

  const handleStatusChange = () => {
    if (!data) return;

    setData((prev) => {
      if (!prev) return null;

      // 현재 상태가 ACTIVE이면 INACTIVE로, 아니면 ACTIVE로 변경
      const nextStatus =
        prev.status === BaseStatus.ACTIVE
          ? BaseStatus.INACTIVE
          : BaseStatus.ACTIVE;

      return {
        ...prev,
        status: nextStatus,
      };
    });
  };

  const badge = getStatusBadge(data?.status ?? BaseStatus.INACTIVE);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-[#1F2937] dark:text-gray-300">
      <main className="flex-1 px-[16px] py-[32px] md:px-[24px] lg:px-[32px]">
        <div className="mx-auto max-w-[768px]">
          <div className="mb-[24px]">
            <button
              className="inline-flex items-center text-[14px] font-medium text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
              onClick={() => router.push("/profile/links")}
            >
              <span className="material-symbols-outlined mr-[4px] text-[18px]">
                arrow_back
              </span>
              Back to Your Links
            </button>
          </div>

          <div className="mb-[32px] flex items-start justify-between">
            <div>
              <h1 className="text-[30px] font-black tracking-tighter text-gray-900 dark:text-white">
                Edit Link
              </h1>
              <p className="mt-[8px] text-[14px] text-gray-500 dark:text-gray-400">
                Update configuration and settings for this shortened URL.
              </p>
            </div>
            <button
              className="flex items-center gap-[8px] rounded-[8px] border border-red-200 px-[12px] py-[8px] text-[14px] font-medium text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
              onClick={handleDelete}
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
              Delete
            </button>
          </div>

          <div className="overflow-hidden rounded-[12px] border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="border-b border-gray-200 bg-gray-50/50 px-[24px] py-[16px] dark:border-gray-800 dark:bg-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[12px]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-green-100 dark:bg-green-900/30">
                    <span className="material-symbols-outlined text-primary">
                      link
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900 dark:text-white">
                      {process.env.NEXT_PUBLIC_SERVER_URL}/{data?.shortCode}
                    </h3>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400">
                      Created on {formatToMonthDayYear(data?.createdAt)}
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center rounded-[9999px] px-[10px] py-[2px] text-[12px] font-medium ${badge.className} cursor-pointer`}
                  onClick={handleStatusChange}
                >
                  {badge.label}
                </span>
              </div>
            </div>

            <form className="p-[24px] md:p-[32px] space-y-6">
              <div>
                <label
                  className="mb-[8px] block text-[14px] font-medium text-gray-900 dark:text-white"
                  htmlFor="title"
                >
                  Link Title
                </label>
                <input
                  className="block w-full rounded-[8px] border-gray-300 bg-white px-[16px] py-[10px] text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-[14px]"
                  id="title"
                  name="title"
                  placeholder="e.g. Summer Sale 2024"
                  type="text"
                  defaultValue={data?.title}
                  onChange={(e) => setData({ ...data!, title: e.target.value })}
                />
                <p className="mt-[4px] text-[12px] text-gray-500 dark:text-gray-400">
                  A descriptive title to help you identify this link in your
                  dashboard.
                </p>
              </div>

              <div>
                <label
                  className="mb-[8px] block text-[14px] font-medium text-gray-900 dark:text-white"
                  htmlFor="original_url"
                >
                  Destination URL
                </label>
                <div className="relative rounded-[6px] shadow-sm">
                  <input
                    className="block w-full rounded-[8px] border-gray-200 bg-gray-50 px-[16px] py-[10px] text-gray-500 shadow-sm focus:border-gray-200 focus:ring-0 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400 sm:text-[14px] cursor-not-allowed"
                    id="original_url"
                    name="original_url"
                    readOnly
                    type="text"
                    defaultValue={data?.originalUrl}
                  />
                  <div className="absolute inset-y-0 right-[0px] flex items-center pr-[12px]">
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">
                      lock
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-[4px]/2">
                <div>
                  <label
                    className="mb-[8px] block text-[14px] font-medium text-gray-900 dark:text-white"
                    htmlFor="expire_at"
                  >
                    Expiration Date
                  </label>
                  <input
                    className="block w-full rounded-[8px] border-gray-300 bg-white px-[16px] py-[10px] text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-[14px] appearance-none"
                    id="expire_at"
                    name="expire_at"
                    type="datetime-local"
                    min={toDateTimeLocalString(new Date().toISOString())}
                    placeholder="Select date"
                    defaultValue={toDateTimeLocalString(data?.expireAt)}
                    onChange={(e) =>
                      setData({
                        ...data!,
                        expireAt: new Date(e.target.value).toISOString(),
                      })
                    }
                  />
                  <p className="mt-[4px] text-[12px] text-gray-500 dark:text-gray-400">
                    Link redirects will be disabled after this time.
                  </p>
                </div>
              </div>

              <div className="rounded-[8px] border border-gray-200 bg-gray-50/50 p-[16px] dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-gray-900 dark:text-white">
                      Auto Delete
                    </span>
                    <span className="text-[12px] text-gray-500 dark:text-gray-400">
                      Permanently delete this link once it expires.
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={!!data?.autoDelete}
                      onChange={(e) =>
                        setData({
                          ...data!,
                          autoDelete: e.target.checked,
                        })
                      }
                    />
                    <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-900 rounded-[9999px] peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-[9999px] after:h-[20px] after:w-[20px] after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="rounded-[8px] border border-gray-200 bg-gray-50/50 p-[16px] dark:border-gray-700 dark:bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-medium text-gray-900 dark:text-white">
                      QR Code Generation
                    </span>
                    <span className="text-[12px] text-gray-500 dark:text-gray-400">
                      Get a scannable QR code for your link to use in physical
                      marking campaigns
                    </span>
                  </div>
                  <button
                    className="flex items-center gap-[8px] rounded-[8px] border border-gray-300 bg-white px-[16px] py-[8px] text-[14px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 cursor-pointer"
                    type="button"
                    onClick={handleDownloadQrCode}
                  >
                    <span className="material-symbols-outlined text-gray-400">
                      qr_code
                    </span>
                    Download QR
                  </button>
                </div>
              </div>

              <div className="rounded-[8px] border border-gray-200 bg-gray-50/50 p-[16px] dark:border-gray-700 dark:bg-gray-800/50">
                <div className="mb-[16px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[16px]">
                  <div className="flex items-center gap-[16px]">
                    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-red-100 dark:bg-red-900/30">
                      <span className="material-symbols-outlined text-red-600 dark:text-red-400">
                        block
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-medium text-gray-900 dark:text-white">
                        IP BlockList
                      </span>
                      <span className="text-[12px] text-gray-500 dark:text-gray-400">
                        Block traffic from specific IP addresses.
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="group flex shrink-0 items-center gap-[8px] rounded-[8px] border border-gray-300 bg-white px-[16px] py-[8px] text-[14px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-primary hover:border-primary transition-all dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary dark:hover:border-primary"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="material-symbols-outlined text-[20px] text-gray-500 group-hover:text-primary dark:text-gray-400">
                      add_circle
                    </span>
                    Add IP to BlockList
                  </button>
                </div>

                <div className="overflow-hidden rounded-[8px] border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
                  <ul
                    className="divide-y divide-gray-200 dark:divide-gray-800"
                    role="list"
                  >
                    {ipBlockList.length === 0 ? (
                      <li className="px-[16px] py-[12px]">
                        <p className="text-[14px] text-gray-500 dark:text-gray-400">
                          {" "}
                          No IP blocks have been added yet.
                        </p>
                      </li>
                    ) : (
                      ipBlockList.map((item) => (
                        <BlockedItems
                          key={item.id}
                          ipAddress={item.ipAddress}
                          reason={item.reason}
                          blockedAt={item.createdAt!}
                          onUnblock={() => handleUnblockIp(item.id)}
                        />
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-end gap-[12px] border-t border-gray-200 bg-gray-50 px-[24px] py-[16px] dark:border-gray-800 dark:bg-gray-900/50">
              <button
                className="rounded-[8px] border border-gray-300 bg-white px-[16px] py-[8px] text-[14px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 cursor-pointer"
                type="button"
                onClick={() => router.push("/profile/links")}
              >
                Cancel
              </button>
              <button
                className="rounded-[8px] border border-transparent bg-primary px-[16px] py-[8px] text-[14px] font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                type="submit"
                onClick={handleEditSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
      {isOpen && (
        <CreateIpBlockModal
          onClose={() => setIsOpen(false)}
          onConfirm={handleAddIpBlock}
        />
      )}
    </div>
  );
}
