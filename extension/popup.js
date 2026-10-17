document.getElementById("openApp").addEventListener("click", () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("main.html") });
});
document.getElementById("openSite").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://mthtamim.github.io/metadata-cleaner/" });
});
document.getElementById("openRepo").addEventListener("click", () => {
  chrome.tabs.create({ url: "https://github.com/mthtamim/metadata-cleaner" });
});
