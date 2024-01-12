document.addEventListener("DOMContentLoaded", function () {
  const yesContainer = document.getElementById("yesContainer");
  const noContainer = document.getElementById("noContainer");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const h1Element = document.querySelector("h1");

  yesBtn.addEventListener("click", function () {
    yesContainer.innerHTML = "";

    const gifImage = document.createElement("img");
    gifImage.src = "cat-drink-water.gif";

    yesContainer.appendChild(gifImage);

    noContainer.style.display = "none";
    h1Element.style.display = "none";
  });

  noBtn.addEventListener("click", function (event) {
    event.preventDefault();
  });

  noContainer.addEventListener("mouseover", function () {
    const windowWidth = window.innerWidth - noContainer.clientWidth;
    const windowHeight = window.innerHeight - noContainer.clientHeight;

    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);

    noContainer.style.transform = `translate(${
      randomX + window.pageXOffset
    }px, ${randomY + window.pageYOffset}px)`;
  });
});
