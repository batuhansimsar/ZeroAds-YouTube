console.log("[ZeroAds] Background service worker registered.");

chrome.runtime.onInstalled.addListener(() => {
    console.log("[ZeroAds] Extension installed.");
});
