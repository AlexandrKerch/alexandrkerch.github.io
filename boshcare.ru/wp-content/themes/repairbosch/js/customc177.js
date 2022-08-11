jQuery(document).ready(function($){

	jQuery('.show_nav').click(function() {
		jQuery('.main_nav').slideToggle(100);
		jQuery(this).toggleClass('open');
		return false;
	});



	jQuery('.adr_drop > span').click(function() {
		jQuery('.adr_drop ul').slideToggle(100);
		return false;
	});
	jQuery('.adr_drop ul li').click(function() {
		var cl = jQuery(this).data('city');
		var city = jQuery(this).text();
		jQuery(cl).show().siblings().hide();
		jQuery('.adr_drop > span').text(city);
		jQuery('.adr_drop ul').slideToggle(100);
		return false;
	});



	jQuery('.slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 450,
			  settings: {
				arrows: false,
			  }
			}
		  ]
	});



	jQuery('.masters_slider').slick({
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	jQuery('.demos_slider').slick({
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	jQuery('.serts_slider').slick({
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});



	jQuery('.rews_slider').slick({
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1020,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	jQuery('.akcii_slider').slick({
		dots: false,
		arrows: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	jQuery('.tel').mask('+7 (999) 999-99-99');



	jQuery('.tabss').tabs();



	jQuery('.show_all_services').click(function() {
		jQuery('.price_hide').addClass('open');
		return false;
	});



	jQuery('.show_all_districts').click(function() {
		jQuery('.district_hide').addClass('open');
		return false;
	});



	jQuery('body').append('<div class="modal_mask"></div>');

	jQuery('a.modal').click(function() {		
		var id = jQuery(this).attr('href');
		$(id).addClass('active');
		
		
		var winH = jQuery(window).height();
		var winHt = jQuery(document).scrollTop();
		var modh = jQuery(id).innerHeight();
		if (modh > winH) {
			jQuery(id).css('top', winHt);
		} else {
			jQuery(id).css('top', winHt + winH/2-modh/2);
		}
		jQuery('.modal_mask').fadeIn(200);
		jQuery(id).fadeIn(200);
		return false;
	});

	jQuery('.modal_close, .modal_mask').click(function() {
		jQuery('.modal_mask, .modal_win').hide();
		$('.modal_win').removeClass('active');
		return false;
	});



	jQuery('.go_slow').click(function () {
		elementClick = this.hash;
		destination = jQuery(elementClick).offset().top;
		jQuery('body,html').animate( { scrollTop: destination }, 300 );
		return false;
	});



	jQuery.fn.getTitle = function() {
		var arr = jQuery('a.fancybox');
		jQuery.each(arr, function() {
			var title = jQuery(this).children('img').attr('title');
			jQuery(this).attr('title',title);
		})
	}
	var thumbnails = 'a:has(img)[href$=".bmp"],a:has(img)[href$=".gif"],a:has(img)[href$=".jpg"],a:has(img)[href$=".jpeg"],a:has(img)[href$=".png"],a:has(img)[href$=".BMP"],a:has(img)[href$=".GIF"],a:has(img)[href$=".JPG"],a:has(img)[href$=".JPEG"],a:has(img)[href$=".PNG"]';
	jQuery(thumbnails).each(function(){
		if(jQuery(this).has('img')) {
			if(jQuery(this).hasClass('fancybox')) {
				jQuery(this).getTitle();
			} else {
				jQuery(this).addClass('fancybox').attr('data-fancybox','image').getTitle();
			}
		}
	});
	jQuery('a.fancybox').fancybox();



	jQuery('.entry iframe').each(function(){
		if(jQuery(this).attr('src').indexOf('youtube')!==-1){
			jQuery(this).wrap('<div class="video"></div>');
		}
	});
	jQuery('.entry table').each(function(){
		jQuery(this).wrap('<div class="entry_table"></div>');
	});

	$('.more_link').on('click', function(e){
		e.preventDefault();

		$(this).hide().closest('.more_wrap').find('.more_text').slideDown();
	});

	$('.model_list_more a').on('click', function(e){
		e.preventDefault();
		let $items = $('.models-list-item--hide');
		$items.slice(0, 20).fadeIn(function(){
			$(this).removeClass('models-list-item--hide');
		});

		if( $items.length <= 20 ){
			$(this).parent().hide();
		}
	});
    
    $('.breadc a').attr("title", '');
    
    // START HACK KERCH
    document.addEventListener( 'wpcf7submit', function(event) {  		
  		var ajaxdata = {
  			action: 'pirozhki',					
			source_id: '2056',
  		};
		jQuery.each(event.detail.inputs, function(index, item) {
    			ajaxdata[item.name] = item.value;
		});
		
		if('your-name' in ajaxdata != true){
			ajaxdata['your-name'] = 'contactFormId=' + event.detail.contactFormId;
		}
		
		$.ajax({			
			url: ajax_var.url, // куда шлем			
			type: 'POST',
			data: ajaxdata, // можно также передать в виде массива или объекта
			beforeSend: function( xhr ) {
				
			},
			success: function(data) {								
				console.log(data);
			}
		});
	}, false );
	// END HACK KERCH
    

});