// killer.js

// This script is injected into the web page to perform the modifications.
// It's wrapped in an IIFE to prevent polluting the page's global scope.
(() => {
  let elementsHidden = 0;
  let scrollFixed = false;

  // --- Step 1: Remove all "fixed" and "sticky" elements ---
  // These are the primary cause of annoying headers, footers, and sidebars.
  const allElements = document.querySelectorAll("body *");

  for (const element of allElements) {
    const position = window.getComputedStyle(element).position;
    if (position === "fixed" || position === "sticky") {
      element.style.setProperty("display", "none", "important");
      elementsHidden++;
    }
  }

  // --- Step 2: Restore scrolling on the main containers ---
  // Many sites disable scrolling for the page when showing a modal/overlay.
  const restoreScroll = (element) => {
    if (!element) return;
    const style = window.getComputedStyle(element);
    if (
      style.overflow === "hidden" ||
      style.overflowX === "hidden" ||
      style.overflowY === "hidden"
    ) {
      element.style.setProperty("overflow", "visible", "important");
      scrollFixed = true;
    }
  };

  restoreScroll(document.documentElement); // Affects <html> tag
  restoreScroll(document.body); // Affects <body> tag

  // --- Step 3: Provide feedback to the user ---
  // Create and display a small notification on the page.
  const showNotification = (message) => {
    const existing = document.getElementById("unsticker-notification");
    if (existing) existing.remove();

    const notification = document.createElement("div");
    notification.id = "unsticker-notification";
    notification.textContent = message;

    // Apply styles for the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#28a745", // A pleasant green
      color: "white",
      padding: "12px 20px",
      borderRadius: "6px",
      zIndex: "2147483647", // Max z-index
      fontFamily: "sans-serif",
      fontSize: "14px",
      opacity: "0",
      transition: "opacity 0.4s ease-in-out",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    });

    document.body.appendChild(notification);

    // Fade in, wait, then fade out and remove.
    setTimeout(() => {
      notification.style.opacity = "1";
    }, 10);
    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => notification.remove(), 500);
    }, 2500);
  };

  // Log and notify the user of the result.
  const message = `Kill Sticky! ${elementsHidden} elements hidden`;
  console.log(message);
  showNotification(`${message}`);
})();
