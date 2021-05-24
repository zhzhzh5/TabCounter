window.tabs = [];
chrome.runtime.onMessage.addListener(function (request, sender, sendReponse) {
  window.tabs.push(request.url);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  window.tabs.push(tab.url);
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});
