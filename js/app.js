let hamburger = document.querySelector(".hamburger");
let listGroup = document.querySelector(".list-group");

hamburger.addEventListener("click", mobileView);

function mobileView() {
  hamburger.classList.toggle("active");
  listGroup.classList.toggle("active");
}

