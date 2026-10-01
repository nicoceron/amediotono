#!/usr/bin/env sh
# Production deploy, run by Cloudflare Workers Builds after
# `npx opennextjs-cloudflare build` on every push to main.
set -eu

before="$(mktemp)"

# The live sitemap before this deploy, so IndexNow only gets new or changed
# URLs. An empty file (site unreachable) means every URL is submitted.
curl -fsS https://www.amediotonomusic.com/sitemap.xml -o "$before" || : > "$before"

npx opennextjs-cloudflare deploy

# Notifies Bing (which also feeds ChatGPT search and Copilot), Yandex, Seznam,
# Naver and Yep. Never fails the deploy.
node scripts/submit-indexnow.mjs --previous "$before" --save "$before.submitted" ||
  echo "IndexNow submission failed; the deploy itself succeeded."
