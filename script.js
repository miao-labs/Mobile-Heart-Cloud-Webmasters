$(document).ready(function(){
	$('.section').css('height', $(window).height()*4 );
	$('#main').css('height', $(window).height());
	$('#whatis').css('height', $(window).height());
	$('#slider').css('height', $(window).height()*7 );
	 $('nav').css('background', 'none');
	$('#slider .temp-section .subpage ').css('height', $(window).height());
	$('#slider .temp-section .subpage').css('height', $(window).height() +50  );
	$('#smartphone').hide(1000);
	 $('#intro').hide();

								

	$(window).scroll(function(){
		// animation for nav ===========================================================
		if ($(window).scrollTop() > $(window).height()*2 &&  $(window).scrollTop() < $(window).height()*6 - $(window).height()/2) {
	   					$('nav').css('height', '0px', 'transition', 'all 0.4s ease 0s');
	   					$('nav').css('height', '40px', 'transition', 'all 0.4s ease 0s');
						 $('nav').css('background', 'gray');
			} 

			else {
					 $('nav').css('background', 'none');

			}

			if($(window).scrollTop() > $(window).height()*6){
					
			}
			//animation for the  main containers =================================================================
			if ($(window).scrollTop() > $(window).height()*2 && $(window).scrollTop() < $(window).height()*5 ) {
						$('#about .temp-section').slideDown();
						$('#about .temp-section').css('position', 'fixed');
						
			} 

			if ($(window).scrollTop() < $(window).height()*2 || $(window).scrollTop() >  $(window).height()*6 - $(window).height()/2) {
							
						 	$('#about .temp-section').fadeOut();
						 	
								
			} 

			if($(window).scrollTop() >=  $(window).height()*5 - $(window).height()/8 && $(window).scrollTop() <  $(window).height()*6){
				$('#intro').show(1000);
			}
			else {
				$('#intro').hide(1000);
			}

			if ($(window).scrollTop() > $(window).height()*6) {

							$('#slider .temp-section').slideDown();
						 	$('#slider .temp-section').css('position', 'fixed');
						 	$('#smartphone').show(1000);

								
			} 
			else {
							$('#slider .temp-section').fadeOut();

			}
			//animation for boxes ================================================

			if ($(window).scrollTop() > $(window).height()*2 && $(window).scrollTop() < $(window).height() * 3) {
						boxreset();
						$('#b1').css('width', '35%');
						$('#b1 .subpage').fadeIn();
				
			} 

			else if ($(window).scrollTop() > $(window).height()*3 + 100 && $(window).scrollTop() < $(window).height()*4) {
						boxreset();
						$('#b2').css('width', '35%');
						$('#b1 .subpage').fadeOut();
						$('#b2 .subpage').fadeIn();
			} 

			else if ( $(window).scrollTop() > $(window).height()*4 + 100 && $(window).scrollTop() < $(window).height()*5 + $(window).height()/2) {
						boxreset();
						$('#b3').css('width', '35%');	
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

			if ($(window).scrollTop() > $(window).height()*6+500 && $(window).scrollTop() < $(window).height()*8 ) {
						$('#s1').slideDown();
						$('#s2').hide(1000);
						$('#s3').hide(1000);
						
				
			} 

			else if ($(window).scrollTop() > $(window).height()*8+500 && $(window).scrollTop() < $(window).height()*10 ) {
						$('#s3').hide(1000);
						$('#s1').hide(1000);
						$('#s2').slideDown();
						
				
			} 

			else if ($(window).scrollTop() > $(window).height()*10+500 && $(window).scrollTop() < $(window).height()*12 ) {
						$('#s1').hide(1000);
						$('#s2').hide(1000);
						$('#s3').slideDown();
						
				
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
// BORROWED CODE
