chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length,
  });