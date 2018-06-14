$(function(){
	$('.toggle a').click(function(e){
		$('.mynav').addClass('show-menu');
		$('.body-inactive').fadeIn(250);
		e.preventDefault();
	});
	$('.body-inactive, .close-menu').click(function(e){
		$('.mynav').removeClass('show-menu');
		$('.body-inactive').fadeOut(250);
		e.preventDefault();
	});
	// scrollbar js initialization
	$(".nano").nanoScroller();


	$('.owl-listing').owlCarousel({
		loop:true,
		margin:80,
		nav:true,
		navText:["<img src='images/small-left-arrow.png'>","<img src='images/small-right-arrow.png'>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	})
	
})

