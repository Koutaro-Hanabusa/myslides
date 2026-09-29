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
  OUTPUT_FILE="${SLIDE_NAME//\//-}.pdf"
fi

# Downloadsフォルダに出力
OUTPUT_PATH="$HOME/Downloads/${OUTPUT_FILE}"

# decktapeがインストールされているか確認
if ! command -v decktape > /dev/null 2>&1; then
  echo "Error: decktape is not installed"
  echo "Install it with: npm install -g decktape"
  exit 1
fi

if lsof -nP -iTCP:$PORT -sTCP:LISTEN -t > /dev/null 2>&1; then
  echo "Error: Port $PORT is already in use. Stop the existing process and try again."
  exit 1
fi

echo "Starting dev server on port $PORT (DevTools disabled)..."

# DevToolsを非表示にして開発サーバーをバックグラウンドで起動
(
  cd apps/web || exit 1
  export NEXT_PUBLIC_HIDE_DEVTOOLS=1
  exec vp exec vinext dev --port "$PORT"
) &
SERVER_PID=$!

# クリーンアップ用のトラップ
cleanup() {
  if kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "Stopping dev server..."
    kill -TERM "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

# サーバー起動を待機
echo "Waiting for server to start..."
SLIDE_URL="http://localhost:$PORT/$SLIDE_NAME"

# サーバーが起動したか確認
for i in $(seq 1 30); do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    wait "$SERVER_PID" || SERVER_STATUS=$?
    echo "Error: Dev server exited before becoming ready (status: ${SERVER_STATUS:-0})"
    exit 1
  fi

  if HTTP_CODE=$(curl --silent --max-time 2 --output /dev/null --write-out '%{http_code}' "$SLIDE_URL"); then
    if [ "$HTTP_CODE" = "200" ]; then
      echo "Server is ready!"
      break
    fi

    echo "Error: $SLIDE_URL returned HTTP $HTTP_CODE"
    exit 1
  fi

  if [ "$i" -eq 30 ]; then
    echo "Error: Server failed to start within 30 seconds: $SLIDE_URL"
    exit 1
  fi

  sleep 1
done

echo "Exporting $SLIDE_NAME to $OUTPUT_PATH..."

# decktapeでPDF出力
decktape generic --key=ArrowRight -p $WAIT_TIME \
  "$SLIDE_URL" \
  "$OUTPUT_PATH"

echo "✓ PDF exported successfully: $OUTPUT_PATH"
