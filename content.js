chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.text === "save-vocabs") {
      const selection = window.getSelection().toString().replace(/\n/g, "<br/>");
      alert(`"${selection}" を保存しました。`)

      sendResponse({ "text": selection });
  }
});
