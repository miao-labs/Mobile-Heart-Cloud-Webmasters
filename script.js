$(document).ready(function(){
	$('.section').css('height', $(window).height()*4 );
	$('#main').css('height', $(window).height());
	$('#slider').css('height', $(window).height()*7 );
	$('nav').css('height', '0px', 'transition', 'all 0.4s ease 0s');
	$('#slider .temp-section .subpage').css('height', $(window).height() - 200)

	$(window).scroll(function(){
		// animation for nav ===========================================================
		if ($(window).scrollTop() > $(window).height() &&  $(window).scrollTop() < $(window).height()*5 - $(window).height()/2) {
	   					$('nav').css('height', '67px', 'transition', 'all 0.4s ease 0s');
						
			} 

			else {
					 $('nav').css('height', '0px', 'transition', 'all 0.4s ease 0s');

			}
			//animation for the  main containers =================================================================
			if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() < $(window).height()*4 ) {
						$('#about .temp-section').slideDown();
						$('#about .temp-section').css('position', 'fixed');
						
			} 

			if ($(window).scrollTop() < $(window).height() || $(window).scrollTop() >  $(window).height()*5 - $(window).height()/2) {
							
						 	$('#about .temp-section').fadeOut();
						 	
								
			} 


			if ($(window).scrollTop() > $(window).height()*5) {

							$('#slider .temp-section').slideDown();
						 	$('#slider .temp-section').css('position', 'fixed');

								
			} 
			else {
							$('#slider .temp-section').fadeOut();

			}
			//animation for boxes ================================================

			if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() < $(window).height() * 2) {
						boxreset();
						$('#b1').css('width', '500px');
						$('#b1 .subpage').fadeIn();
				
			} 

			else if ($(window).scrollTop() > $(window).height()*2 + 100 && $(window).scrollTop() < $(window).height()*3) {
						boxreset();
						$('#b2').css('width', '500px');
						$('#b1 .subpage').fadeOut();
						$('#b2 .subpage').fadeIn();
			} 

			else if ( $(window).scrollTop() > $(window).height()*3 + 100 && $(window).scrollTop() < $(window).height()*4 + $(window).height()/2) {
						boxreset();
						$('#b3').css('width', '500px');	
						$('#b2 .subpage').fadeOut();
						$('#b3 .subpage').fadeIn();		
			} 

			
			else {
						
						$('#b1').css('width', '250px');
						$('#b2').css('width', '250px');
						$('#b3').css('width', '250px');
						$('#b4').css('width', '250px');
						
			}
			// animation for the slider ========================================================================================

			if ($(window).scrollTop() > $(window).height()*6+500 && $(window).scrollTop() < $(window).height()*7 ) {
						$('#s1').show(1000);
						$('#s2').hide(1000);
						$('#s3').hide(1000);
						
				
			} 

			else if ($(window).scrollTop() > $(window).height()*7+500 && $(window).scrollTop() < $(window).height()*8 ) {
						$('#s3').hide(1000);
						$('#s1').hide(1000);
						$('#s2').show(1000);
						
				
			} 

			else if ($(window).scrollTop() > $(window).height()*8+500 && $(window).scrollTop() < $(window).height()*9 ) {
						$('#s1').hide(1000);
						$('#s2').hide(1000);
						$('#s3').show(1000);
						
				
			} 
			
	});
});

function boxreset() {
						$('#b1').css('width', '250px');
						$('#b2').css('width', '250px');
						$('#b3').css('width', '250px');
						$('#b4').css('width', '250px');


						$('#b1').show();
						$('#b2').show();
						$('#b3').show();
						$('#b4').hide();
}