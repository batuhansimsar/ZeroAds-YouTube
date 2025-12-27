# ZeroAds-YouTube 🚫📺

**ZeroAds-YouTube** is an ultra-lightweight Chrome extension designed to **skip ads in milliseconds** rather than blocking them entirely.

Unlike traditional ad blockers, it does not attempt to prevent the ad from loading (which can trigger YouTube's anti-adblock detection). Instead, **the moment an ad starts**:
1.  It speeds up the video to **16x** (the ad finishes in the blink of an eye). ⏩
2.  It mutes the audio instantly (**Mute**). 🔇
3.  It automatically clicks the **"Skip Ad"** button if available.

This way, YouTube registers the ad as "watched," but you won't even notice it.

## 🚀 Features

-   **Ultra Lightweight**: No heavy libraries like React or Vue. Pure TypeScript/Vanilla JS.
-   **Aggressive Acceleration**: Forces 16.0x playback speed on ads.
-   **Undetectable**: Minimal DOM manipulation to avoid detection.
-   **Privacy**: Does not collect any data; runs locally on your browser.

## 📦 Installation (Developer Mode)

This extension is not yet published on the Chrome Web Store. You can install it manually:

1.  Clone or download this repository.
2.  Ensure the `dist` folder exists (if not, run `npm install` and `npm run build`).
3.  Open Chrome and go to `chrome://extensions`.
4.  Enable **Developer mode** in the top right corner.
5.  Click **Load unpacked**.
6.  Select the **`dist`** folder inside the project directory.

### Enabling in Incognito Mode
To use the extension in Incognito (Private) windows:
1.  Go to the `chrome://extensions` page.
2.  Click the **Details** button on the **ZeroAds YouTube** card.
3.  Scroll down and toggle **Allow in Incognito** to ON.

## 🛠️ Development

If you want to contribute or modify the code:

```bash
# Install dependencies
npm install

# Development mode (watches for file changes)
npm run dev

# Build the project (creates the dist folder)
npm run build
```

## 📜 License

MIT License. Feel free to use and modify.
