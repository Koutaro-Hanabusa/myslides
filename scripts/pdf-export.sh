#!/bin/bash
set -euo pipefail
SLIDE_NAME="${1:-}"
OUTPUT_FILE="${2:-${SLIDE_NAME//\//-}.pdf}"
if [ -z "$SLIDE_NAME" ]; then
  echo "Usage: $0 <slide-name> [output.pdf]" >&2
  exit 1
fi
DECK_DIR=$(node --input-type=module - "$SLIDE_NAME" <<'JS'
import {readFileSync} from 'node:fs';
import {dirname} from 'node:path';
const decks=JSON.parse(readFileSync('apps/decks/decks.json','utf8'));
const deck=decks[process.argv[2]];
if(!deck){console.error('Unknown slide: '+process.argv[2]);process.exit(1)}
console.log(dirname(deck.file));
JS
)
OUTPUT_PATH="$(pwd)/$OUTPUT_FILE"
cd "apps/decks/$DECK_DIR"
vp run export --output "$OUTPUT_PATH" --with-clicks
