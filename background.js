chrome.tabs.onUpdated.addListener((tabId, _, tab) => {
  const url = tab.url || tab.pendingUrl;

  if (!url) return;

  chrome.storage.sync.get("kirbySites", (data) => {
    for (const partialUrl of Object.keys(data.kirbySites)) {
      if (url.includes(partialUrl)) {
        chrome.tabs.update(tabId, { url: "./blocked.html" });
      }
    }
  });
});
