// popup.js

let autoClickInterval = null;

document.getElementById('clickButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { action: 'clickElement' });
  });
});

document.getElementById('autoClickCheckbox').addEventListener('change', () => {
  if (document.getElementById('autoClickCheckbox').checked) {
    autoClickInterval = setInterval(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: 'toggleAutoClick' });
      });
    }, 200);
  } else {
    clearInterval(autoClickInterval);
  }
});