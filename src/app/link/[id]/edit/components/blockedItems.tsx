import { formatToMonthDayYear } from "@/utils/string/string.util";

interface BlockedItemsProps {
  ipAddress: string;
  reason: string;
  blockedAt: Date;
  onUnblock?: () => void;
}

const BlockedItems = (props: BlockedItemsProps) => {
  const { ipAddress, reason, blockedAt, onUnblock } = props;
  return (
    <li className="flex flex-colitems-center justify-between px-[16px] py-[12px]">
      <div className="min-w-[0px] flex-1">
        <p className="truncate text-[14px] font-medium text-gray-900 dark:text-white">
          {ipAddress}
        </p>
        <p className="truncate text-[12px] text-gray-500 dark:text-gray-400">
          {reason}
        </p>
      </div>
      <div className="ml-[16px] flex shrink-0 items-center gap-[16px]">
        <span className="text-[12px] text-gray-400">
          {formatToMonthDayYear(blockedAt)}
        </span>
        <button
          type="button"
          className="group flex items-center justify-center rounded-[9999px] p-[4px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          onClick={onUnblock}
        >
          <span className="material-symbols-outlined text-[20px] text-gray-400 group-hover:text-red-500">
            delete
          </span>
        </button>
      </div>
    </li>
  );
};

export default BlockedItems;
