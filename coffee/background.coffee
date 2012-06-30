chrome.browserAction.onClicked.addListener( (tab) ->
  chrome.tabs.executeScript(null, {file: "src/content_script.js"})
)
