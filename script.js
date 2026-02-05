const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const hiddenContent = document.querySelector(".hidden");
const container = document.querySelector(".container");

function moveRandomly() {
  let x = Math.random() * window.innerWidth * 0.3;
  let y = Math.random() * window.innerHeight * 0.3;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveRandomly);
noBtn.addEventListener("click", moveRandomly);

yesBtn.addEventListener("click", () => {
  hiddenContent.style.display = "flex";
  hiddenContent.style.flexDirection = "column";
  hiddenContent.style.alignItems = "center";
  hiddenContent.style.justifyContent = "center";
  container.style.display = "none";
  hiddenContent.style.animation = "fadeIn 1s ease-in-out";
  document.body.style.backgroundImage = "url('./IMG_4162-small-screen.jpeg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "top center";
});