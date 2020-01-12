chrome.contextMenus.create({
  id: "context-copy",
  title: "選択しているテキスト確認",
  contexts: ["all"]
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "context-copy") {
    alert('使うか決まっていないボタン')
  }
})

chrome.commands.onCommand.addListener(function (command) {
  if (command === "save-vocabs") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { text: "save-vocabs" }, function (response) {
            chrome.storage.sync.get("state", function(storage) {
              let state = storage.state
              if (!state) {
                state = [{ id: 0, word: "initial", created_at: 'initial'}]
              }
              newId = state.slice(-1)[0].id + 1
              createdDate = new Date().toString()
              newObj = { id: newId, word: response.text, created_at: createdDate }
              state.push(newObj)
              console.log('state')
              console.log('hellloooo')
              chrome.storage.sync.set(
                { "state": state }
              );
            });


          });
      });
  }
});

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
});


// { state = [
//   { id: Number,
//     word: String,
//     created_at: String
//   }
// ]
// }
