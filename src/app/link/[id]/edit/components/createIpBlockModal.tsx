interface CreateIpBlockModalProps {
  onClose: () => void;
  onConfirm?: (blockIp: string, reason: string) => void;
}

const CreateIpBlockModal = (props: CreateIpBlockModalProps) => {
  const { onClose, onConfirm } = props;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm p-[16px]">
      <div className="relative w-full max-w-[512px] overflow-hidden rounded-[12px] bg-white shadow-2xl dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between border-b border-gray-200 px-[24px] py-[16px] dark:border-gray-800">
          <h3 className="text-[18px] font-bold text-gray-900 dark:text-white">
            Add IP to BlockList
          </h3>
          <button
            className="rounded-[8px] text-gray-400 cursor-pointer"
            onClick={onClose}
          >
            <span className="material-symbols-outlined p-[4px]">close</span>
          </button>
        </div>
        <div className="p-[24px] space-y-4">
          <div>
            <label
              className="mb-[8px] block text-[14px] font-medium text-gray-900 dark:text-white"
              htmlFor="block-ip"
            >
              IP Address to Block
            </label>
            <input
              className="block w-full rounded-[8px] border-gray-300 bg-white px-[16px] py-[10px] text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-[14px]"
              id="block-ip"
              placeholder="e.g. 192.168.0.1"
              type="text"
            />
          </div>
          <div>
            <label
              className="mb-[8px] block text-[14px] font-medium text-gray-900 dark:text-white"
              htmlFor="block-reason"
            >
              Reason for Blocking
            </label>
            <textarea
              className="block w-full rounded-[8px] border-gray-300 bg-white px-[16px] py-[10px] text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-[14px]"
              id="block-reason"
              placeholder="Describe why this IP is being blocked..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end gap-[12px] border-t border-gray-200 bg-gray-50 px-[24px] py-[16px] dark:border-gray-800 dark:bg-gray-800/50">
          <button
            className="rounded-[8px] border border-gray-300 bg-white px-[16px] py-[8px] text-[14px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="rounded-[8px] bg-primary px-[16px] py-[8px] text-[14px] font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => {
              const blockIp = (
                document.getElementById("block-ip") as HTMLInputElement
              ).value;
              const reason = (
                document.getElementById("block-reason") as HTMLTextAreaElement
              ).value;
              if (onConfirm) {
                onConfirm(blockIp, reason);
              }
            }}
          >
            Add to BlockList
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateIpBlockModal;
