const aboutButton = document.querySelector(".about button");
const container = document.querySelector(".container");

aboutButton.addEventListener("click", function () {
  if (window.innerWidth >= 1200) {
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "flex";
    } else {
      container.style.display = "none";
    }
  } else {
    container.style.display = "flex";
  }
});

document
  .querySelector(".container button")
  .addEventListener("click", function () {
    const container = document.querySelector(".container");
    container.style.display = "none";
  });
