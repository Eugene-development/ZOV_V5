import { useState } from "react";

export default () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("ZOV2023-40");
      setCopied(true);
    } catch (err) {
      console.error("Не удалось скопировать: ", err);
    }
  };

  return (
    <div>
      {!copied && (
        <button
          type="button"
          onClick={copyToClipboard}
          className="inline-flex items-center py-1 px-6 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Скопировать
        </button>
      )}

      {copied && (
        <div className="inline-flex items-center py-1 px-6 text-xs font-medium text-gray-900 no-underline bg-white rounded-lg border border-gray-200">
          Скопировано
        </div>
      )}
    </div>
  );
};
