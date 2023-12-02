# CSGORoll-Clicker
Created as a mini-project to quickly withdraw the first item in the CSGOROLL's withdraw section.
This project is more as a blueprint to build off of.

## How to Use
1. Install the extension:
   - Download the extension files or clone the repository.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" at the top right.
   - Click on "Load unpacked" and select the folder containing the extension files.

2. Use the extension:
   - Click the "Withdraw First Item" button in the extension popup to manually withdraw the first item.
   - Toggle the "Auto Withdraw" checkbox to enable/disable auto-withdrawing at regular intervals.
   - Customize the styles of the clicked elements in the grid by modifying `styles.css`.

## Files
- **manifest.json:** Configuration file for Chrome extension settings and permissions.
- **popup.html:** HTML file for the extension popup.
- **popup.js:** JavaScript file for handling popup functionality.
- **content.js:** JavaScript file injected into the CSGORoll website to interact with the page.

## Customization
- Modify `styles.css` to change the styles of the clicked elements in the grid.
- Adjust the interval for auto-withdrawing in `content.js` by changing the value in the `toggleAutoClick` function.

## Notes
- This extension works on the CSGORoll website (https://www.csgoroll.com/en/withdraw/csgo/p2p).
- Use this extension responsibly and in accordance with the terms of service of the website.

## Credits
- Created by Shivam Parmar

Feel free to contribute to the development or report issues on the GitHub repository.

Will not be continuing this project in the future.
