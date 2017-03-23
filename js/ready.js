'use strict';

$(function() {
    $('.carouseller').carouseller();

	$('.popup_open').on('click', function(){
		$('.popup').addClass('active');
	})

	$('.popup_close').on('click', function(){
		$('.popup').removeClass('active');
	})

	$('.animated_block').viewportChecker({
		offset: 100,
		callbackFunction: function(el) {
			var animation = el.attr('data-animation')
			el.addClass('animated '+ animation )
		}
	});

	$('.first_animated_block').each(function(){
		var obj = $(this),
			animation = $(this).attr('data-animation'),
			delay = $(this).attr('data-delay') || 10;

		function func(){
			obj.addClass('animated '+ animation )
		}
		setTimeout(func, delay);
	});

	$('.select').selectbox();

});


$(window).scroll(function(e){
	parallax();
});

function parallax(){
	var scrolled = $(window).scrollTop(),
		block2top = parseFloat($('.block2 .scrollback').css('top')),
		block3top = parseFloat($('.block3 .scrollback').css('top')),
		block4top = parseFloat($('.block4 .scrollback').css('top')),
		block6top = parseFloat($('.block4 .scrollback').css('top'));

	$('.block2 .scrollback').css({'transform': 'translateY('+(- block2top + scrolled - 600)*0.08+'px)'});	
	$('.block3 .scrollback').css({'transform': 'translateY('+(- block2top + scrolled - 900)*0.31+'px)'});	
	$('.block4 .scrollback').css({'transform': 'translateY('+(- block2top + scrolled - 600)*0.21+'px)'});	
	$('.block6 .scrollback').css({'transform': 'translateY('+(- block2top + scrolled - 3600)*0.17+'px)'});	
}

$(function () {
	'use strict';

	var $swipeTabsContainer = $('.swipe-tabs'),
		$swipeTabs = $('.swipe-tab'),
		$swipeTabsContentContainer = $('.swipe-tabs-container'),
		currentIndex = 0,
		activeTabClassName = 'active-tab';

	$swipeTabsContainer.on('init', function(event, slick) {
		$swipeTabsContentContainer.removeClass('invisible');
		$swipeTabsContainer.removeClass('invisible');

		currentIndex = slick.getCurrent();
		$swipeTabs.removeClass(activeTabClassName);
       	$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
	});

	$swipeTabsContainer.slick({
		//slidesToShow: 3.25,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		swipeToSlide: true,
		touchThreshold: 10
	});

	$swipeTabsContentContainer.slick({
		asNavFor: $swipeTabsContainer,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		swipeToSlide: true,
   		draggable: true,
		touchThreshold: 10
	});


	$swipeTabs.on('click', function(event) {
        // gets index of clicked tab
        currentIndex = $(this).data('slick-index');
        $swipeTabs.removeClass(activeTabClassName);
        $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
        $swipeTabsContainer.slick('slickGoTo', currentIndex);
        $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
    });

    //initializes slick navigation tabs swipe handler
    $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
    	currentIndex = $(this).slick('slickCurrentSlide');
		$swipeTabs.removeClass(activeTabClassName);
		$('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
	});
});
