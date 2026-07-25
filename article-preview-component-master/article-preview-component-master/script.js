addEventListener("DOMContentLoaded", (event) => {
  const userInformationElement = getElementsByClassName(
    "user-information-container",
  )[0];
  const shareButtonElement = getElementsByClassName("share-button")[0];
  shareButtonElement.addEventListener("onCLick", () => {
    if (userInformationElement.style.display === "none") {
      userInformationElement.style.display === "block";
    } else {
      userInformationElement.style.display === "none";
    }
  });
});

