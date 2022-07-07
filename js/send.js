let messageBtn = document.querySelector("#message");
let sent = document.querySelector(".modal-new");
messageBtn.addEventListener("click", send);
function send(e) {
  e.preventDefault();
  sent.style.visibility = "visible";
  messageBtn.style.display = "none";
  setTimeout(() => {
    messageBtn.style.visibility = "hidden";
    sent.style.display = "none";
    window.location.reload();
  }, 2000);
}
