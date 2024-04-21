import classNames from "classnames";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: StaticImageData; // soraImage の型を指定
  okLabel?: string;
  cancelLabel?: string;
  isOpen: boolean; // ダイアログの表示状態を管理するプロパティ
  onClose: () => void;
}

export default function MyDialog({
  title,
  description,
  image, // soraImage に変更
  okLabel = "OK",
  cancelLabel = "キャンセル",
  isOpen, // show プロパティを受け取る
  onClose,
}: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={classNames("relative", "z-50")} //反映されてない
    >
      {/* 背景（バックドロップ） */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* モーダル本体部分 */}
      <div
        className={classNames(
          "fixed",
          "inset-0",
          "flex",
          "items-center",
          "justify-center",
          "p-4",
        )}
      >
        <Dialog.Panel
          className={classNames(
            "w-full",
            "max-w-sm",
            "rounded",
            "bg-white",
            "p-6",
          )}
        >
          <Dialog.Title className="font-bold">{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <div className="mt-3">
            <Image src={image} alt="Sora" />
          </div>

          <div className="mt-3 space-x-2">
            <button
              className="rounded-md bg-blue-500 px-3 py-2 text-white"
              onClick={onClose}
            >
              {okLabel}
            </button>
            <button
              className="rounded-md bg-gray-200 px-3 py-2 text-gray-500"
              onClick={onClose}
            >
              {cancelLabel}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
