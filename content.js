// content.js

let autoClickInterval = null;
let autoClickActive = false;

function clickElement() {
  const elementToClick = document.querySelector('div.item-card.selectable');

  if (elementToClick) {
    elementToClick.click();
    console.log('Element clicked!');

    // After a delay, click the withdraw button
    setTimeout(() => {
      clickWithdrawButton();
    }, 500);
  } else {
    console.log('Element not found.');
  }
}

function clickWithdrawButton() {
  const withdrawButton = document.querySelector('button.mat-accent');

  if (withdrawButton) {
    withdrawButton.click();
    console.log('Withdraw button clicked!');
  } else {
    console.log('Withdraw button not found.');
  }
}

function toggleAutoClick() {
  autoClickActive = !autoClickActive;

  if (autoClickActive) {
    autoClickInterval = setInterval(() => {
      clickElement();
    }, 900); // Adjust the interval (in milliseconds) as needed
  } else {
    clearInterval(autoClickInterval);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'clickElement') {
    clickElement();
  } else if (message.action === 'toggleAutoClick') {
    toggleAutoClick();
  }
});