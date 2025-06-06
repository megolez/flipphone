window.addEventListener("load", () => {
  const phoneWrapper = document.getElementById("phoneWrapper");
  const typewriterSpan = document.getElementById("typewriterText");
  const fullMessage = "MEET @ HAWAII WEST 10PM";

  // 1) Start the "shake" animation immediately on load:
  phoneWrapper.classList.add("shake");

  // 2) After the shake (0.6s), begin fading in the .notification container (0.3s fade).
  //    After the fade completes at 0.9s, start typing the message, one character at a time.
  //
  // Timeline:
  //   0ms   → phoneWrapper.classList.add("shake")
  //    ↓
  // 600ms  → fadeIn .notification (triggered by CSS animation on .notification)
  //    ↓
  // 900ms  → begin typewriter effect

  setTimeout(() => {
    // Now that the notification is (fading) in, we can type one char every 100ms
    let idx = 0;
    const typingSpeed = 150; // ms per character

    const typeInterval = setInterval(() => {
      if (idx < fullMessage.length) {
        typewriterSpan.textContent += fullMessage.charAt(idx);
        idx++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);
  }, 2300); // wait for 2.0s (shake) + 0.3s (fadeIn) = 3.3s total
});
