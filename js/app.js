let hamburger = document.querySelector(".hamburger");
let listGroup = document.querySelector(".list-group");
let subscribeBtn = document.querySelector("#subscribe");
let subscribed = document.querySelector(".modal");
// let closeBtn = document.querySelector("#close");

hamburger.addEventListener("click", mobileView);
subscribeBtn.addEventListener("click", subscribe);

function mobileView() {
  hamburger.classList.toggle("active");
  listGroup.classList.toggle("active");
}
function subscribe(e) {
  e.preventDefault();
  subscribed.style.visibility = "visible";
  subscribeBtn.style.display = "none";
  setTimeout(() => {
    subscribeBtn.style.visibility = "hidden";
    subscribed.style.display = "none";
  }, 3000);
  window.location.reload();
}
// function unsubscribe(e) {
//     e.preventDefault()
//     subscribed.style.visibility='hidden'
//     subscribeBtn.style.visibility='visible'

// }
