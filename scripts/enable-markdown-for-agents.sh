#!/bin/bash
# Cloudflare Markdown for Agents を有効化するスクリプト
#
# 必要な環境変数:
#   CLOUDFLARE_API_TOKEN - Zone Settings の編集権限を持つAPIトークン
#   CLOUDFLARE_ZONE_ID   - 対象ゾーンのID
#
# 使い方:
#   CLOUDFLARE_API_TOKEN=xxx CLOUDFLARE_ZONE_ID=yyy ./scripts/enable-markdown-for-agents.sh
#
# または .env ファイルから読み込み:
#   source apps/server/.env && ./scripts/enable-markdown-for-agents.sh
#
# Cloudflare ダッシュボードでの設定方法:
#   1. https://dash.cloudflare.com/ にログイン
#   2. 対象ゾーン (slide.burio16.com) を選択
#   3. AI > AI Crawl Control に移動
#   4. Markdown for Agents を「On」に設定
#
# Configuration Rules で特定パスのみ有効にする場合:
#   1. Rules > Overview > Create rule > Configuration Rules
#   2. When: http.host eq "slide.burio16.com"
#   3. Then: Markdown for Agents → On
#   4. Deploy

set -euo pipefail

if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  echo "Error: CLOUDFLARE_API_TOKEN environment variable is required"
  echo ""
  echo "APIトークンの作成方法:"
  echo "  1. https://dash.cloudflare.com/profile/api-tokens にアクセス"
  echo "  2. 'Create Token' をクリック"
  echo "  3. 'Edit zone settings' テンプレートを選択"
  echo "  4. Zone Settings の Edit 権限を付与"
  exit 1
fi

if [ -z "${CLOUDFLARE_ZONE_ID:-}" ]; then
  echo "Error: CLOUDFLARE_ZONE_ID environment variable is required"
  echo ""
  echo "Zone IDの確認方法:"
  echo "  1. https://dash.cloudflare.com/ にログイン"
  echo "  2. 対象ゾーンを選択"
  echo "  3. Overview ページ右側の 'Zone ID' をコピー"
  exit 1
fi

echo "Enabling Markdown for Agents for zone: ${CLOUDFLARE_ZONE_ID}"

RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X PATCH \
  "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/settings/content_converter" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  --data '{"value": "on"}')

HTTP_CODE=$(echo "$RESPONSE" | tail -1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" = "200" ]; then
  echo "✓ Markdown for Agents が有効になりました！"
  echo ""
  echo "確認方法:"
  echo "  curl -sI -H 'Accept: text/markdown' https://slide.burio16.com/"
  echo ""
  echo "presenterm で直接表示:"
  echo "  curl -sH 'Accept: text/markdown' https://slide.burio16.com/api/slides/tacotuesday/presenterm | presenterm"
else
  echo "Error: HTTP ${HTTP_CODE}"
  echo "$BODY" | python3 -m json.tool 2>/dev/null || echo "$BODY"
fi
