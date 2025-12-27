console.log("[ZeroAds] Content script loaded.");

const AD_SELECTORS = [
    '.ad-showing',
    '.ad-interrupting',
    '.ytp-ad-module',
    '.video-ads'
];

const SKIP_BUTTON_SELECTORS = [
    '.ytp-skip-ad-button',
    '.ytp-ad-skip-button',
    '.ytp-ad-skip-button-modern'
];

let isAdPlaying = false;

function checkForAds() {
    const video = document.querySelector('video');
    const player = document.querySelector('#movie_player');

    if (!video || !player) return;

    // Check if player indicates an ad
    const adClassPresent = player.classList.contains('ad-showing') ||
        player.classList.contains('ad-interrupting');

    // Check if ad module is visible
    const adModule = document.querySelector('.ytp-ad-module');
    const adModuleVisible = adModule && (adModule as HTMLElement).children.length > 0;

    if (adClassPresent || adModuleVisible) {
        if (!isAdPlaying) {
            console.log("[ZeroAds] Ad detected!");
            isAdPlaying = true;
        }

        // AGGRESSIVE ACTION
        if (video.playbackRate !== 16.0) {
            video.playbackRate = 16.0;
            console.log("[ZeroAds] Speed set to 16x");
        }

        if (!video.muted) {
            video.muted = true;
            console.log("[ZeroAds] Audio muted");
        }

        // Try to click skip button locally
        clickSkipButton();
    } else {
        if (isAdPlaying) {
            console.log("[ZeroAds] Ad ended.");
            isAdPlaying = false;
            // Restore (optional, user might want to unmute manually or we can auto-restore)
            // video.playbackRate = 1.0; 
            // video.muted = false; // Be careful with this, might unmute too early if detection flickers
        }
    }
}

function clickSkipButton() {
    for (const selector of SKIP_BUTTON_SELECTORS) {
        const button = document.querySelector(selector) as HTMLElement;
        if (button) {
            button.click();
            console.log("[ZeroAds] Skip button clicked!");
        }
    }
}

// 1. Mutation Observer for instant reaction
const observer = new MutationObserver(() => {
    checkForAds();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
});

// 2. Polling for backup
setInterval(checkForAds, 500);

console.log("[ZeroAds] Watcher started.");
