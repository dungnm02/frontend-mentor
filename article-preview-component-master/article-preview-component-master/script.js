const card = document.querySelector(".card-container");
const shareButton = document.querySelector(".share-button");

if (card && shareButton) {
  const setShareOpen = (isOpen) => {
    card.classList.toggle("is-share-open", isOpen);
    shareButton.setAttribute("aria-expanded", String(isOpen));
  };

  shareButton.addEventListener("click", () => {
    setShareOpen(!card.classList.contains("is-share-open"));
  });

  // Close when clicking outside the share area or pressing Escape.
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element) || !target.closest(".tooltip-container")) {
      setShareOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && card.classList.contains("is-share-open")) {
      setShareOpen(false);
      shareButton.focus();
    }
  });
}
