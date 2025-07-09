// background.js

// A reusable function to execute the main script on a given tab.
async function runKillerScript(tab) {
  // Ensure we have a tab with an ID to target.
  if (!tab || !tab.id) {
    console.error("Unsticker: Could not find a valid tab to execute on.");
    return;
  }

  // Prevent the script from running on protected browser pages.
  if (
    tab.url &&
    (tab.url.startsWith("chrome://") || tab.url.startsWith("about:"))
  ) {
    console.log(`Unsticker: Cannot run on protected URL: ${tab.url}`);
    return;
  }

  // Execute the script on the target tab.
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["killer.js"],
    });
  } catch (error) {
    console.error(`Unsticker: Failed to execute script: ${error.message}`);
  }
}

// 1. Listener for the extension's icon click.
chrome.action.onClicked.addListener((tab) => {
  runKillerScript(tab);
});

// 2. Listener for the keyboard shortcut command.
chrome.commands.onCommand.addListener(async (command) => {
  if (command === "execute_kill_sticky") {
    // When a command is used, we need to get the current active tab first.
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    runKillerScript(tab);
  }
});
