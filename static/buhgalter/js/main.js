 $(document).ready(function(){
  	
  $("form").submit(function(){
  	
  	//$("#submitform").val('Пожалйуста, подождите...');
  	
  	$(this).children("#submitform").val('Пожалйуста, подождите...');
  	
  	var name1 = $(this).children("#name").val();
  	
  	var tel1 = $(this).children("#tel").val();
  	
  	var email1 = $(this).children("#E-mail").val();
  	
  	var text1 = $(this).children("#area").val();
  	
  	var from1 = $(this).children("#from").val();
  	
	$(this).toggleClass("formcomplet");
	
	$(this).next("#complite").toggleClass("divcomplet");
	
	$(this).next("#er").toggleClass("diver");
	
			$.post("mail.php",{
				               name: name1,
				               tel: tel1,
				               email: email1,
				               text: text1,
				               from: from1
				               })
            .success(function() {})
            .error(function() { 
            
              function er(){
            	$(".formcomplet").hide();
               $(".diver").show();
			}
               
             setTimeout(er,1000);
            
            
            })
            .complete(function() { 
            
            function complite(){
            	$(".formcomplet").hide();
               $(".divcomplet").show();
			}
               
             setTimeout(complite,1000);
               
         
            });
            
            return false;
		});
  	
  });  
  
  
  
  
  
  
  
 