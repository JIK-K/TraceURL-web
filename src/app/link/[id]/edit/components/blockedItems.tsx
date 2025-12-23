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
    <li className="flex flex-colitems-center justify-between px-4 py-3">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {ipAddress}
        </p>
        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
          {reason}
        </p>
      </div>
      <div className="ml-4 flex shrink-0 items-center gap-4">
        <span className="text-xs text-gray-400">
          {formatToMonthDayYear(blockedAt)}
        </span>
        <button
          type="button"
          className="group flex items-center justify-center rounded-full p-1 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
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
