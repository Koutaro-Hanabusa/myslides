<script setup lang="ts">
import { ref } from "vue";
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "reka-ui";
const props = defineProps<{ kind: "bad" | "login" | "cancel" | "radix" }>();
const dialog = ref<HTMLDialogElement>();
const trigger = ref<HTMLButtonElement>();
const cancel = ref<HTMLButtonElement>();
const focused = ref(false);
const radixOpen = ref(false);
function radixKey(event: KeyboardEvent) {
  if (event.key === "Escape") radixOpen.value = false;
}
function open() {
  dialog.value?.showModal();
}
function close() {
  dialog.value?.close();
  trigger.value?.focus();
}
function initialFocus(event: Event) {
  event.preventDefault();
  cancel.value?.focus();
}
function trap(event: KeyboardEvent) {
  if (event.key !== "Tab") return;
  const modal = event.currentTarget as HTMLDialogElement;
  const items = [
    ...modal.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), a[href], [tabindex="0"]',
    ),
  ];
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
}
</script>

<template>
  <div class="autofocus-demo" :data-kind="kind" @keydown.stop @click.stop>
    <div v-if="kind === 'bad'" class="demo-panel bad-demo">
      <p>↓ 本来はここから順番に読んでほしい</p>
      <p>1. まずはこの説明を読んでください</p>
      <p>2. 次にこちらの内容を確認してください</p>
      <div autofocus tabindex="0" class="bad-focus">
        3. でもこのdivにautofocusが付いているので、ここに飛ばされる
      </div>
    </div>
    <DialogRoot v-else-if="kind === 'radix'" v-model:open="radixOpen">
      <DialogTrigger class="demo-trigger purple">アカウントを削除する</DialogTrigger>
      <DialogPortal>
        <DialogOverlay class="demo-overlay" />
        <DialogContent class="demo-dialog" @open-auto-focus="initialFocus" @keydown.stop="radixKey">
          <DialogTitle>⚠️ アカウント削除</DialogTitle>
          <DialogDescription
            >この操作は取り消せません。すべてのデータが完全に削除されます。</DialogDescription
          >
          <div class="demo-actions">
            <DialogClose as-child
              ><button ref="cancel" @focus="focused = true" @blur="focused = false">
                {{ focused ? "✅ フォーカス中！" : "キャンセル" }}
              </button></DialogClose
            >
            <DialogClose class="danger">削除する</DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
    <div v-else class="demo-panel">
      <button ref="trigger" class="demo-trigger" @click="open">
        {{ kind === "login" ? "ダイアログを開く" : "アカウントを削除する" }}
      </button>
      <dialog ref="dialog" class="demo-dialog" @keydown.stop="trap" @close="trigger?.focus()">
        <template v-if="kind === 'login'">
          <h3>ログイン</h3>
          <label
            >メールアドレス<input autofocus type="email" placeholder="autofocusでここにフォーカス"
          /></label>
          <label>パスワード<input type="password" placeholder="パスワード" /></label>
        </template>
        <template v-else>
          <h3>⚠️ アカウント削除</h3>
          <p>この操作は取り消せません。</p>
          <p>すべてのデータが完全に削除されます。本当に削除しますか？</p>
        </template>
        <div class="demo-actions">
          <button :autofocus="kind === 'cancel'" @click="close">キャンセル</button>
          <button :class="kind === 'cancel' ? 'danger' : 'demo-trigger'" @click="close">
            {{ kind === "login" ? "ログイン" : "削除する" }}
          </button>
        </div>
      </dialog>
    </div>
  </div>
</template>

<style>
.demo-panel {
  margin: 32px auto 0;
  max-width: 768px;
  padding: 32px;
  border: 1px solid #4b5563;
  border-radius: 16px;
  background: #111827;
  font-size: 20px;
}
.demo-panel p {
  margin: 16px 0;
}
.demo-trigger,
.demo-actions button {
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  background: #374151;
  font-size: 20px;
  cursor: pointer;
}
.demo-trigger {
  background: #16a34a;
}
.purple {
  background: #9333ea;
}
.bad-focus {
  border: 2px solid #ef4444;
  padding: 12px 16px;
  background: #7f1d1d;
  border-radius: 8px;
}
.demo-dialog {
  position: fixed;
  inset: 0;
  margin: auto;
  width: 512px;
  height: fit-content;
  max-width: 90vw;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #4b5563;
  background: #111827;
  color: white;
  font-size: 18px;
  text-align: left;
  z-index: 100;
}
.demo-dialog::backdrop,
.demo-overlay {
  background: #0009;
}
.demo-overlay {
  position: fixed;
  inset: 0;
  z-index: 99;
}
.demo-dialog h3 {
  font-size: 24px;
  margin-bottom: 24px;
}
.demo-dialog label {
  display: block;
  margin-bottom: 16px;
}
.demo-dialog input {
  display: block;
  width: 100%;
  padding: 12px 16px;
  margin-top: 8px;
  background: #1f2937;
  border: 1px solid #6b7280;
  border-radius: 8px;
}
.demo-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
}
.demo-actions .danger {
  background: #dc2626;
}
.autofocus-demo :focus-visible,
.demo-dialog :focus-visible {
  outline: 3px solid #a78bfa;
  outline-offset: 3px;
}
</style>
