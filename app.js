let ourButton = document.querySelector("button");
let writeUp = document.querySelector(".write-up");
let isWriteUpOpen = false;

ourButton.addEventListener("click", function () {
  if (!isWriteUpOpen) {
    writeUp.style.height = "auto";
    isWriteUpOpen = true;
  } else {
    writeUp.style.height = "0";
    isWriteUpOpen = false;
  }
});
