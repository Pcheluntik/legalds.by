var link = document.querySelector(".knopka_price .btn");
var body = document.querySelector("body");
var popup = document.querySelector(".price-window");

var close = popup.querySelector(".price-window_close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.add("overlay");
  popup.classList.add("price-window_show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.remove("overlay");
  popup.classList.remove("price-window_show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("price-window_show")) {
      body.classList.remove("overlay");
      popup.classList.remove("price-window_show");
    }
  }
});
