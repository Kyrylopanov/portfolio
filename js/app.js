//Animate elements in "works"
$(document).ready(function(){
	$(window).scroll(function(){
	if ($(window).width() > 640){
		if($(this).scrollTop() > 600) {
			$('#htmlMove').animate({'left':'30%'}, 1500);
			$('.text1').animate({'opacity' : 1},1000); 
		}

		if($(this).scrollTop() > 900) {
			$('#cssMove').animate({'right':'30%'}, 1500);
			$('.text2').animate({'opacity' : 1},1000); 
		} 

		if($(this).scrollTop() > 1100) {
			$('#jsMove').animate({'left':'8%'}, 1500);
			$('.text3').animate({'opacity' : 1},1000); 

		} 
	}else { if($(this).scrollTop() > 400) {
			$('#htmlMove').animate({'left':'50%'}, 1500);
		}

		if($(this).scrollTop() > 500) {
			$('#cssMove').animate({'right':'50%'}, 1500);
		} 

		if($(this).scrollTop() > 700) {
			$('#jsMove').animate({'left':'50%'}, 1500);
			
		}  }
		
	});

// Menu 
	$('#burger').click(function(){
		if($('header').hasClass('mobileMenu')){
		$('header').removeClass('mobileMenu')
		}else { $('header').addClass('mobileMenu')}
	})


// Menu change color and navigation
	$(".scrolling").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr("href"),
			top = $(id).offset().top;
		$("body,html").animate({scrollTop: top}, 700);
		$("a").removeClass("active-menu");
		$(this).addClass("active-menu");
	
	$(window).scroll(function() {
  		var windscroll = $(window).scrollTop();
    	$("section").each(function(i){
      		if($(this).position().top <= windscroll+10) {
        		$(".scrolling a").removeClass("active-menu");
        		$(".scrolling a").eq(i).addClass("active-menu");
			};
		});
	});
});

	$('#m-foot').click(function(){
	if($('.scrolling a').hasClass("active-menu")){
	$('.scrolling a').removeClass("active-menu")
	
		$("#m-foot").addClass("active-menu")
	
		}
	});

// Scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){
			$('#btnTop img').fadeIn();
		} else {
			$('#btnTop img').fadeOut();
		}
	});
	$('#btnTop img').click(function(){
		$('body,html').animate( {scrollTop:0},1000);
	})	


// Slider move on click
	$('#next').click(function(){
		if ($('#slider-items').position().left>-700){
			$('#slider-items').animate({"left":"-=333px"}, 100);
		} else {
			$('#slider-items').css('left','0px')
		}
	});
	$('#prev').click(function(){
			if ($('#slider-items').position().left>+300){
			$('#slider-items').animate({"left":"+=333px"}, 100);
		} else {
			$('#slider-items').css('left','0px')
		}
	});

//Slider fadeIn, fadeOut
	if($(window).width()>1280){
	$('.items').click(function(){
		$('.wrap').fadeIn();
		$('#slider-container').fadeIn();
	});
	$('.wrap').click(function(){
		$('.wrap').fadeOut();
		$('#slider-container').fadeOut();
	});
	}
});


