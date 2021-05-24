window.tabs = [];
let activeTabId, lastUrl;


function getTabInfo(tabId) {
  chrome.tabs.get(tabId, function(tab) {
    if(lastUrl != tab.url)
      window.tabs.push(lastUrl = tab.url)
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendReponse) {
  window.tabs.push(request.url);
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  getTabInfo(activeTabId = activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if(activeTabId == tabId) {
    getTabInfo(tabId);
  }
});

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: "popup.html" });
});

