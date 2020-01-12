const UlElement = document.getElementById('vocab-list')
let vocabs
chrome.storage.sync.get("state", function(items) {
  console.log(items)
  renderList(items.state)
});




function renderList (vocabs) {
  vocabs.forEach(vocab => {
    const listItem = document.createElement('li')
    listItem.textContent = vocab.word
    UlElement.appendChild(listItem)
  })
}

