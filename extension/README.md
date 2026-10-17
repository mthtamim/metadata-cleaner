# Metadata Cleaner — Browser Extension

Chrome / Edge / Brave (Manifest V3) extension version of the
[Metadata Cleaner](https://mthtamim.github.io/metadata-cleaner/) web app.
Same tool, one click from the toolbar — works fully offline, no file ever
leaves your device.

## Install (Load unpacked)

1. Download and unzip `metadata-cleaner-extension.zip` (or clone this repo
   and use the `extension/` folder).
2. Open `chrome://extensions` in your browser.
3. Turn on **Developer mode** (top-right).
4. Click **Load unpacked** and select the extension folder
   (the one containing `manifest.json`).
5. Pin **Metadata Cleaner** to the toolbar, click it, then
   **Open Metadata Cleaner**.

## Browsers

- Desktop Chrome, Edge, Brave, Chromium — full support.
- Android: **Kiwi Browser** supports Chrome extensions. Android Chrome and
  Firefox for Android do not support desktop-style extensions — use the
  [web version](https://mthtamim.github.io/metadata-cleaner/) there instead.

## How it is built

- `app.html` — the complete app (same build as the GitHub Pages site).
  It is declared as a Manifest V3 **sandbox page**, so its inline scripts
  run isolated from extension APIs.
- `lib/` — JSZip 3.10.1 and pdf-lib 1.17.1 bundled locally
  (MV3 forbids remote scripts, so nothing loads from a CDN).
- `main.html` — full-tab wrapper that embeds the sandboxed app
  (downloads and popups allowed for exports and map links).
- `popup.html` / `popup.js` — toolbar launcher.
