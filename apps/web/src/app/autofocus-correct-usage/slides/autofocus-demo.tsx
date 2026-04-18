"use client";

import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AutofocusBadDemo() {
  const [show, setShow] = useState(false);

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-red-600/50 bg-gray-900/80 p-8">
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="mb-6 rounded-lg bg-red-600 px-6 py-3 font-bold text-white text-xl hover:bg-red-700"
      >
        {show ? "リセット" : "表示する"}
      </button>
      {show && (
        <div className="space-y-4">
          <p className="text-left text-gray-300 text-lg">↓ なぜかお知らせバナーにautofocusが…</p>
          <div
            // oxlint-disable-next-line jsx-a11y/no-autofocus -- デモ用
            autoFocus
            // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- デモ用
            tabIndex={0}
            className="rounded-lg border border-red-500 bg-red-900/40 px-4 py-3 text-left text-white text-xl outline-none ring-2 ring-red-500 focus:ring-red-400"
          >
            🔔 お知らせ: メンテナンスを予定しています
          </div>
          <input
            type="text"
            placeholder="本来フォーカスしたい検索フィールド"
            className="block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-white text-xl placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      )}
    </div>
  );
}

export function AutofocusDialogDemo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-green-600/50 bg-gray-900/80 p-8">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-lg bg-green-600 px-6 py-3 font-bold text-white text-xl hover:bg-green-700"
      >
        ダイアログを開く
      </button>
      <dialog
        ref={dialogRef}
        className="w-full max-w-lg rounded-2xl border border-gray-600 bg-gray-900 p-8 text-white backdrop:bg-black/60"
      >
        <h3 className="mb-6 font-bold text-2xl">ログイン</h3>
        <div className="space-y-4">
          <label className="block text-left text-gray-300 text-lg">
            メールアドレス
            <input
              // oxlint-disable-next-line jsx-a11y/no-autofocus -- デモ用
              autoFocus
              type="email"
              placeholder="autofocusでここにフォーカス"
              className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-white text-xl placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
          <label className="block text-left text-gray-300 text-lg">
            パスワード
            <input
              type="password"
              placeholder="パスワード"
              className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-white text-xl placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
            />
          </label>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-lg bg-gray-700 px-6 py-3 text-lg text-white hover:bg-gray-600"
          >
            キャンセル
          </button>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-lg bg-green-600 px-6 py-3 font-bold text-lg text-white hover:bg-green-700"
          >
            ログイン
          </button>
        </div>
      </dialog>
    </div>
  );
}

export function AutofocusCancelDemo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-blue-600/50 bg-gray-900/80 p-8">
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white text-xl hover:bg-blue-700"
      >
        アカウントを削除する
      </button>
      <dialog
        ref={dialogRef}
        className="w-full max-w-lg rounded-2xl border border-gray-600 bg-gray-900 p-8 text-white backdrop:bg-black/60"
      >
        <h3 className="mb-4 font-bold text-2xl text-red-400">⚠️ アカウント削除</h3>
        <p className="mb-2 text-left text-gray-300 text-lg">この操作は取り消せません。</p>
        <p className="mb-6 text-left text-gray-300 text-lg">
          すべてのデータが完全に削除されます。本当に削除しますか？
        </p>
        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            // oxlint-disable-next-line jsx-a11y/no-autofocus -- デモ用
            autoFocus
            onClick={() => dialogRef.current?.close()}
            className="rounded-lg bg-gray-700 px-6 py-3 font-bold text-lg text-white outline-none ring-2 ring-blue-500 hover:bg-gray-600 focus:ring-blue-400"
          >
            キャンセル
          </button>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="rounded-lg bg-red-600 px-6 py-3 text-lg text-white hover:bg-red-700"
          >
            削除する
          </button>
        </div>
      </dialog>
    </div>
  );
}

function FocusAwareButton({ buttonRef }: { buttonRef: React.RefObject<HTMLButtonElement | null> }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <DialogTrigger asChild>
      <button
        type="button"
        ref={buttonRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="rounded-lg bg-gray-200 px-6 py-3 font-bold text-lg text-gray-800 outline-none ring-2 ring-purple-500 hover:bg-gray-300 focus:ring-purple-400"
      >
        {isFocused ? "✅ フォーカス中！" : "キャンセル"}
      </button>
    </DialogTrigger>
  );
}

export function RadixDialogDemo() {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-purple-600/50 bg-gray-900/80 p-8">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white text-xl hover:bg-purple-700"
          >
            アカウントを削除する
          </button>
        </DialogTrigger>
        <DialogContent
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            cancelRef.current?.focus();
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-red-500 text-2xl">⚠️ アカウント削除</DialogTitle>
            <DialogDescription className="text-lg">
              この操作は取り消せません。すべてのデータが完全に削除されます。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <FocusAwareButton buttonRef={cancelRef} />
            <button
              type="button"
              className="rounded-lg bg-red-600 px-6 py-3 text-lg text-white hover:bg-red-700"
            >
              削除する
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
