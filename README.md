# Kill Sticky

A simple, no-nonsense Chrome extension to instantly remove all sticky and fixed-position elements from a webpage. Reclaim your screen space and get rid of annoying headers, footers, pop-ups, and sidebars that won't go away.

---

## What It Does

Modern web design often uses `position: fixed` or `position: sticky` to create elements that stay on the screen as you scroll. While sometimes useful, this is often abused for:

-   Annoying top navigation bars that cover content.
-   "Subscribe to our newsletter" pop-ups and modals.
-   Persistent cookie banners that reappear.
-   Live chat widgets you don't need.
-   Social sharing sidebars.

This extension solves the problem with a single action.

### Key Features

*   **Removes Intrusive Elements:** It finds all `fixed` and `sticky` elements on the page and hides them.
*   **Restores Scrolling:** It fixes pages where a modal or overlay has disabled scrolling on the main page (`overflow: hidden`).
*   **Instant Feedback:** A small notification appears on the page to confirm that the script has run and tells you how many elements were removed.
*   **Two Ways to Activate:** Use the toolbar icon or a convenient keyboard shortcut.
*   **Privacy-Focused:** No tracking, no data collection, no unnecessary permissions. It only runs when you tell it to on the active tab.

## How to Use

Once installed, you have two simple ways to activate the extension on any webpage:

1.  **Click the Icon:** Click the "Kill Sticky" icon in your Chrome toolbar.
2.  **Use the Keyboard Shortcut:** Press `Ctrl+K` (on Windows/Linux) or `Command+K` (on macOS).

The page will instantly be cleaned, and scrolling will be restored.

## Installation

Since this extension is not on the Chrome Web Store, you need to install it manually in Developer Mode. Don't worry, it's easy!

1.  **Download the Code**
    *   Click the green `<> Code` button on this repository's page.
    *   Select **Download ZIP**.

2.  **Unzip the File**
    *   Find the downloaded `.zip` file on your computer.
    *   Unzip it. You should now have a folder named something like `kill-sticky-main`.
    *   **Important:** Move this folder to a permanent location on your computer where you won't delete it by accident (e.g., your Documents folder). If you delete the folder, the extension will stop working.

3.  **Install in Chrome**
    *   Open Google Chrome and navigate to the Extensions page by typing `chrome://extensions` in your address bar and pressing Enter.
    *   In the top-right corner of the Extensions page, turn on the **Developer mode** toggle switch.
    *   Three new buttons will appear: "Load unpacked", "Pack extension", and "Update". Click on **Load unpacked**.
    *   A file browser will open. Navigate to the folder you unzipped in Step 2 and select it. (You need to select the main folder that contains the `manifest.json` file).

4.  **Ready to Use!**
    *   The "Kill Sticky" extension will now appear in your list of extensions.
    *   To make it easy to access, click the puzzle piece icon in your Chrome toolbar and then click the **pin icon** next to "Kill Sticky" to add it to your toolbar.
