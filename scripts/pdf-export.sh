#!/bin/bash
set -e

PORT=3099
WAIT_TIME=3000

SLIDE_NAME="$1"
OUTPUT_FILE="$2"

if [ -z "$SLIDE_NAME" ]; then
  echo "Error: Slide name is required"
  echo "Usage: $0 <slide-name> [output.pdf]"
  exit 1
fi

if [ -z "$OUTPUT_FILE" ]; then
  OUTPUT_FILE="${SLIDE_NAME}.pdf"
fi

# Downloadsフォルダに出力
OUTPUT_PATH="$HOME/Downloads/${OUTPUT_FILE}"

# 既存のnext devプロセスを停止（ロックファイル競合を防ぐ）
for port in 3001 $PORT; do
  EXISTING_PID=$(lsof -ti :$port 2>/dev/null || true)
  if [ -n "$EXISTING_PID" ]; then
    echo "Stopping existing dev server on port $port (PID: $EXISTING_PID)..."
    kill $EXISTING_PID 2>/dev/null || true
  fi
done
sleep 2

# decktapeがインストールされているか確認
if ! command -v decktape > /dev/null 2>&1; then
  echo "Error: decktape is not installed"
  echo "Install it with: npm install -g decktape"
  exit 1
fi

echo "Starting dev server on port $PORT (DevTools disabled)..."

# DevToolsを非表示にして開発サーバーをバックグラウンドで起動
cd apps/web && NEXT_PUBLIC_HIDE_DEVTOOLS=1 bun run next dev --port=$PORT &
SERVER_PID=$!

# クリーンアップ用のトラップ
cleanup() {
  echo "Stopping dev server..."
  # ポートを使っているプロセスを直接終了
  PORT_PID=$(lsof -ti :$PORT 2>/dev/null || true)
  if [ -n "$PORT_PID" ]; then
    kill $PORT_PID 2>/dev/null || true
  fi
  kill $SERVER_PID 2>/dev/null || true
  pkill -P $SERVER_PID 2>/dev/null || true
  sleep 1
  # まだ残っていたら強制終了
  PORT_PID=$(lsof -ti :$PORT 2>/dev/null || true)
  if [ -n "$PORT_PID" ]; then
    kill -9 $PORT_PID 2>/dev/null || true
  fi
}
trap cleanup EXIT

# サーバー起動を待機
echo "Waiting for server to start..."
sleep 5

# サーバーが起動したか確認
for i in $(seq 1 30); do
  if curl -s "http://localhost:$PORT/$SLIDE_NAME" > /dev/null 2>&1; then
    echo "Server is ready!"
    break
  fi
  if [ "$i" -eq 30 ]; then
    echo "Error: Server failed to start"
    exit 1
  fi
  sleep 1
done

echo "Exporting $SLIDE_NAME to $OUTPUT_PATH..."

# decktapeでPDF出力
decktape generic --key=ArrowRight -p $WAIT_TIME \
  "http://localhost:$PORT/$SLIDE_NAME" \
  "$OUTPUT_PATH"

echo "✓ PDF exported successfully: $OUTPUT_PATH"
