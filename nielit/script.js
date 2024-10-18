window.addEventListener("scroll", function () {
  const element1 = document.getElementById("trigger-card");
  const element2 = document.getElementById("reaction-card");

  // Get the bottom position of element1
  const element1Bottom = element1.getBoundingClientRect().bottom;

  // If the bottom of element1 is less than 0, make element2 fixed
  if (element1Bottom < 0) {
    element2.classList.add("fixed");
  } else {
    element2.classList.remove("fixed");
  }
});
