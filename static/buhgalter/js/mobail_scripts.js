
var price_btn = document.querySelector('.knopka_price .btn');

function download_price() {
  price_btn.removeEventListener("click", function(event) {
    event.preventDefault();
    body.classList.add("overlay");
    popup.classList.add("price-window_show");
  });
  price_btn.classList.add('downloable');
  price_btn.setAttribute("href", "price.pdf");
  price_btn.setAttribute("download", "true");
};

download_price();
