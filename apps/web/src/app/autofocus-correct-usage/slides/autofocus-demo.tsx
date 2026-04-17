"use client";

import { useRef, useState } from "react";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const BG_CONTENT = `${R2_BASE}/burioSlide/content.png`;

export function AutofocusBasicDemo() {
	const [showForm, setShowForm] = useState(false);

	return (
		<section data-background-image={BG_CONTENT} data-background-size="contain">
			<h2 className="text-left text-white">Demo: autofocusの基本動作</h2>
			<div className="mx-auto mt-8 max-w-3xl rounded-xl border border-gray-600 bg-gray-900/80 p-8">
				<button
					type="button"
					onClick={() => setShowForm(!showForm)}
					className="mb-6 rounded-lg bg-blue-600 px-6 py-3 text-xl font-bold text-white hover:bg-blue-700"
				>
					{showForm ? "フォームを閉じる" : "フォームを表示"}
				</button>
				{showForm && (
					<div className="space-y-4">
						<label className="block text-left text-lg text-gray-300">
							名前
							<input
								autoFocus
								type="text"
								placeholder="ここに自動フォーカス"
								className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none ring-2 ring-blue-500 focus:ring-blue-400"
							/>
						</label>
						<label className="block text-left text-lg text-gray-300">
							メール
							<input
								type="email"
								placeholder="こちらにはフォーカスなし"
								className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</label>
					</div>
				)}
			</div>
		</section>
	);
}

export function AutofocusMultipleDemo() {
	const [showForm, setShowForm] = useState(false);

	return (
		<section data-background-image={BG_CONTENT} data-background-size="contain">
			<h2 className="text-left text-white">
				Demo: 複数のautofocus（アンチパターン）
			</h2>
			<div className="mx-auto mt-8 max-w-3xl rounded-xl border border-red-600/50 bg-gray-900/80 p-8">
				<p className="mb-4 text-left text-lg text-red-400">
					複数の要素にautofocusを付けるとどうなる？
				</p>
				<button
					type="button"
					onClick={() => setShowForm(!showForm)}
					className="mb-6 rounded-lg bg-red-600 px-6 py-3 text-xl font-bold text-white hover:bg-red-700"
				>
					{showForm ? "リセット" : "フォームを表示"}
				</button>
				{showForm && (
					<div className="space-y-4">
						<input
							autoFocus
							type="text"
							placeholder="1つ目のautofocus"
							className="block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400"
						/>
						<input
							autoFocus
							type="text"
							placeholder="2つ目のautofocus"
							className="block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400"
						/>
						<input
							autoFocus
							type="text"
							placeholder="3つ目のautofocus"
							className="block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-400"
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export function AutofocusDialogDemo() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	return (
		<section data-background-image={BG_CONTENT} data-background-size="contain">
			<h2 className="text-left text-white">
				Demo: 正しい用法 — ダイアログ内のautofocus
			</h2>
			<div className="mx-auto mt-8 max-w-3xl rounded-xl border border-green-600/50 bg-gray-900/80 p-8">
				<p className="mb-4 text-left text-lg text-green-400">
					ダイアログやモーダル内でautofocusを使うのが正しいパターン
				</p>
				<button
					type="button"
					onClick={() => dialogRef.current?.showModal()}
					className="rounded-lg bg-green-600 px-6 py-3 text-xl font-bold text-white hover:bg-green-700"
				>
					ダイアログを開く
				</button>
				<dialog
					ref={dialogRef}
					className="w-full max-w-lg rounded-2xl border border-gray-600 bg-gray-900 p-8 text-white backdrop:bg-black/60"
				>
					<h3 className="mb-6 text-2xl font-bold">ログイン</h3>
					<div className="space-y-4">
						<label className="block text-left text-lg text-gray-300">
							メールアドレス
							<input
								autoFocus
								type="email"
								placeholder="autofocusでここにフォーカス"
								className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
							/>
						</label>
						<label className="block text-left text-lg text-gray-300">
							パスワード
							<input
								type="password"
								placeholder="パスワード"
								className="mt-2 block w-full rounded-lg border border-gray-500 bg-gray-800 px-4 py-3 text-xl text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-400"
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
							className="rounded-lg bg-green-600 px-6 py-3 text-lg font-bold text-white hover:bg-green-700"
						>
							ログイン
						</button>
					</div>
				</dialog>
			</div>
		</section>
	);
}
