window.tabs = [];
chrome.runtime.onMessage.addListener(function (request, sender, sendReponse) {
  window.tabs.push(request.url);
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
