
var menu_btn = document.querySelector('.menu-btn');



menu_btn.addEventListener("click",  function(event) {
  if(menu_btn.classList.contains('close-menu')) {
    menu_btn.classList.remove('close-menu');
    menu_btn.classList.add('active');
  }
  else {
    event.preventDefault();
    menu_btn.classList.add('close-menu');
    menu_btn.classList.remove('active');
  }
});
