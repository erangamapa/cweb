;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


$(document).ready(function(){
    bioLinks();
	$('.simple-menu').sidr();

});
			$(document).ready(function(){ 
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
					$('#nav-bottom').slideDown();
				} else {
					$('#nav-bottom').slideUp();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 800);
				return false;
			});
 
		});
function bioLinks() {
    $('.read-bio').click(function () {
        $('#bio-' + $(this).attr('data-project')).fadeIn();
        return false;
    });
    $('.close-bio-link').click(function () {
        $('#bio-' + $(this).attr('data-project')).fadeOut();
        return false;
    });
}

            $(document).ready(function() {


                $('.open-project').click(function() {
                    $('#showcase' + $(this).attr('data-project')).animate({
                        left: '0'
				},"slow");
                    $('.project-window article').animate({
                        right: '0'
				},1500,"easeOutBack");
			$('.scrollup').css({'visibility':'hidden'});
                    document.body.style.overflow = 'hidden';
                    event.preventDefault();
                });



                $('.close-project-window').click(function() {
                    $('.project-window').animate({
                        left: '-100%'
                    },"slow");
                    $('.project-window article').animate({
                        right: '-100%'
				},"slow");
			$('.scrollup').css({'visibility':'visible'});

                    document.body.style.overflow = 'auto';
                    event.preventDefault();
                });


            });
			
			
			
function sizebanner() {
	windowHeight = $(window).height();
	windowWidth = $(window).width();
 	var bannerHeight = $(".hero > div").height();
 	
	if (windowWidth >= 768) {
		$(".hero").css({ 'height' : windowHeight + "px"});
		$(".hero > div").not(".hero2").css('padding-top', parseInt((windowHeight - bannerHeight) / 2));
	} else if (windowWidth >= 480 ) {
		$(".hero").css('height','485px'); 
		$(".hero > div").css('padding-top','183px');
		$(".hero > div").not(".hero2").css('padding-top','150px');
	} 
	else {
		$(".hero").css('height','312px'); 
		$(".hero > div").css('padding-top','105px');
		$(".hero").css('height','420px'); 
		$(".hero > div").not(".hero2").css('padding-top','105px');
	} 
};



sizebanner();

$(window).on("resize", function(){ 
	sizebanner(); 
});			

$(document).ready(function() {
$('.cycle-slideshow').on( 'cycle-before', function( opts ) {
    var slideshow = $(this);
    var img = slideshow.find( '.banner-background' ).css( 'background-image' );
    slideshow.css( 'background-image', img );
});
});


jQuery(document).ready(function() {

$("#nav-bottom .toggle-search").click(function(){
  $(".nav-bottom-list").slideUp();
    $(".search-wrapper").delay(500).slideDown();
});
$("#nav-bottom .toggle-search-close").click(function(){
  $(".search-wrapper").slideUp();
    $(".nav-bottom-list").delay(500).slideDown();

});

});