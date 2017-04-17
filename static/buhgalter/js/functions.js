$(document).ready(function(){

	//маска ввода телефона
   	jQuery(function($){
	   $(".phone").mask("+7 (999) 999-9999");
	});

	// карусель
	$('#mycarousel').jcarousel({
		wrap: 'circular'
	});

	//плавная прокрутка
	$('menu a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        var top = $(target).offset().top - 40;
        $('html, body').animate({scrollTop: top}, 500);
        return false;
   	});

		$('footer a[href^="#"]').click(function(){
					var target = $(this).attr('href');
					var top = $(target).offset().top - 40;
					$('html, body').animate({scrollTop: top}, 500);
					return false;
			});

   	// увеличение фото
   	$(document).on('click', '.zoom', function(){
		var rel = $(this).siblings("img").attr("rel");
		console.log(rel);
		$(".sert_img img").attr("src", rel);
		$('.sert_img').arcticmodal();
   	});

	//попапы
	$('.btn_call').click(function(){
		$('.popup_call').arcticmodal();
	});
	$('.btn_popup, .btn_pop').click(function(){
		$('.popup').arcticmodal();
	});

	//дает красный бордер
	function red_border(input_name){
		var name = 'input[name="' + input_name + '"]';
		$(name).css({'border-color':'red'});
		setTimeout(function(){
			$(name).css({'border-color':'#d8d8d8'});
		},3000);
	}

	//ajax запрос на обработку формы
	function ajax_zapros(name,phone,title,name_val,phone_val,title_val){
		var file = "formbuhgalter.php"; // файл отвечает за обработку форм
		$.ajax({
			type:"POST",
			url:"formbuhgalter.php",
			data:{name_form:name_val,phone_form:phone_val,title_form:title_val},
			success:success_form,
			error:error_form
		});

		//В случае возникновения ошибки при отправке формы
		function error_form(error){

		}

		//В случае положительной отправки формы
		function success_form(success){
			$.arcticmodal('close');
			$('.popup_true').arcticmodal();
			//window.location.href = '../loveroof.ru/thankyou.html';
			$('input[name="' + name + '"]').attr("value","");
			$('input[name="' + phone + '"]').attr("value","");
			return true;
		}
	}

	//Обработка форм на валиндность
	function validete_form(name,phone,title){
		//регулярные выражения
		var reg_name = /[a-zа-я0-9]+$/i;
		var reg_phone = /[0-9]+$/i;

		var name_val = $('input[name="' + name + '"]').val();
		var phone_val = $('input[name="' + phone + '"]').val();
		var title_val = $('input[name="' + title + '"]').val();
		if(reg_name.test(name_val) && name_val.length > 2){

		}else{
			red_border(name);
		}

		if(reg_phone.test(phone_val) && phone_val.length > 3){

		}else{
			red_border(phone);
		}

		if(reg_name.test(name_val) && name_val.length > 2 && reg_phone.test(phone_val) && phone_val.length > 3 ){
			ajax_zapros(name,phone,title,name_val,phone_val,title_val);//если все окей делаем запрос на отправку данных
		}
	}

	/* обратный звонок */
	$('#call').click(function(){
		validete_form("name_call","phone_call","title_call");
	});

	/* заявка в попапе */
	$('#popup').click(function(){
		validete_form("name_popup","phone_popup","title_popup");
	});

	/* форма */
	$('#form').click(function(){
		validete_form("name_form","phone_form","title_form");
	});

	/* форма 2 */
	$('#form_2').click(function(){
		validete_form("name_form_2","phone_form_2","title_form_2");
	});

	/* форма 3 */
	$('#form_3').click(function(){
		validete_form("name_form_3","phone_form_3","title_form_3");
	});


	//АНИМАЦИИ
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	}else{
		new WOW().init();
	}

// $(".knopka_price").click(function(){
//     $(".price").hide(1000);
// });
});

document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);

jQuery( document ).ready(function() {
	jQuery('#scrollup').mouseover( function(){
		jQuery( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		jQuery( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0);
		return false;
	});

	jQuery(window).scroll(function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('#scrollup').fadeIn('fast');
		} else {
			jQuery('#scrollup').fadeOut('fast');
		}
	});
});
