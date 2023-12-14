const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
