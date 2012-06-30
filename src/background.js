(function() {
  chrome.browserAction.onClicked.addListener(function(tab) {
    return chrome.tabs.executeScript(null, {
      file: "src/content_script.js"
    });
  });
}).call(this);
