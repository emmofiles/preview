;(function($) {
    "use strict"; 
	
	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addClass("navbar_fixed");
                } else {
                    $(".main_header_area").removeClass("navbar_fixed");
                }
            }); 
        };
    };   
	
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube, .portfoli_inner').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });  
			
			// Image popups
            $('.environment_img').magnificPopup({
                delegate: '.zoom_img',
                type: 'image',
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () { 
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        };
    };  
	
	//* Counter Js 
    function counterUp(){
        if ( $('.countarup_area').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };
	
	//* Isotope js
    function protfolioIsotope(){
        if ( $('.portfolio_grid').length ){ 
            // Activate isotope in container
            $(".portfoli_inner").imagesLoaded( function() {
                $(".portfoli_inner").isotope({
                    layoutMode: 'fitRows',  
                }); 
            });  
            
            // Add isotope click function 
            $(".protfoli_filter li").on('click',function(){
                $(".protfoli_filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".portfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    };
	
	// CountDown Js 
    function countDown(){
        if( $('.countdown').length ){ 
            $('.countdown').dsCountDown({
                endDate: new Date("November 01, 2019 20 23:59:00"),  
            }); 
        }
    }   
	
	//* Select js
    function selectmenu(){
        if ( $('.post_select').length ){ 
            $('select').niceSelect();
        };
    };  
     
    
    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }     
	
    /*Function Calls*/ 
    new WOW().init();
    navbarFixed ();   
	scrollToTop ();
	magnificPopup ();
	counterUp ();
	protfolioIsotope ();
	countDown ();
	preloader ();
    
})(jQuery);