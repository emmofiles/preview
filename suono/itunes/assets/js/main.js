jQuery(function($) {
    "use strict";
    /*Table OF Contents
	==========================
	1-Custome Placeholder
	2-Home slider
	3-Parallax
	4-custome selectbox
	5-Twitter
	6-Owl slider
	7-Masonry
	8-Show Trending Song List
	9-Events countdown
	10-Date Time Picker
	11-Audio Player for blog post
	12-Player for Individual Songs
	13-packery
	14-Google Maps
	15-Menu
	16-Header Player
	17-WavePlayer ( used in header)
    */

    /*==========================
    ajax call
    ========================*/
    var xv_ww = $(window).width(),
        xv_slideshow = true;
    
    $('#ajaxArea').ajaxify({forms: false,requestDelay:500});
    
	$(window).on('pronto.render', function(event, eventInfo){
        $('html, body').animate({scrollTop: 0});
		suonoApp();
		$('.pageLoader').removeClass("active");
	});
	
    $(window).on('pronto.request', function(event, eventInfo){
		$('.pageLoader').addClass("active");
	});
    
    /*====================
    Main
    =====================*/
    function contactemaps(selector_map, address, type, zoom_lvl, map_theme) {
        var map = new google.maps.Map(document.getElementById(selector_map), {
            mapTypeId: google.maps.MapTypeId.type,
            scrollwheel: false,
            draggable: false,
            zoom: zoom_lvl,
            styles: map_theme,
        });
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
                'address': address
            },
            function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map,
                        /* icon: map_pin*/
                    });
                    map.setCenter(results[0].geometry.location);
                }
            });
    }

    function suonoApp() {

        /*custome Placeholder*/
        $('.field-wrap input,.field-wrap textarea').each(function(index, element) {
            if ($(this).val() !== "") {
                $('label[for=' + $(this).attr("id") + ']').hide();
            }
        });

        $('.field-wrap input,.field-wrap textarea').focus(function() {
            $('label[for=' + $(this).attr("id") + ']').hide();
        });
        $('.field-wrap input,.field-wrap textarea').blur(function() {
            if ($(this).val() === "") {
                $('label[for=' + $(this).attr("id") + ']').show();
            }
        });
        /*============================
        Home slider
        ===========================*/
        if (xv_ww <= 768)
            xv_slideshow = false;
        $('#home-slider').flexslider({
            animation: "slide",
            directionNav: true,
            controlNav: true,
            pauseOnHover: true,
            slideshowSpeed: 7000,
            slideshow: false,
            direction: "horizontal", //Direction of slides
            start: function() {
                $(window).trigger('resize');
                if (xv_ww >= 768)
                    $('.xv_slider .animated').addClass("go").removeClass("goAway");
            },
            before: function() {
                if (xv_ww >= 768)
                    $('.xv_slider .animated').addClass("goAway").removeClass("go");
            },
            after: function() {
                if (xv_ww >= 768)
                    $('.xv_slider .animated').addClass("go").removeClass("goAway");
            },
        });
        if ($('.xv_slider').length !== 0) {
            $('.xv_slide').each(function() {
                $(this).css('background-image', function() {
                    return $(this).attr('data-slidebg');
                });
            });
        }

        /*=======================================
        Parallax
        =======================================*/
        if (xv_ww >= 768) {
            $.stellar({
                horizontalScrolling: false,
                verticalOffset: 0,
                responsive: true,
            });
        }

        /*======================================
        custome selectbox
        =======================================*/
        $('.custome-select select').on('change', function() {
            var p = $(this).parent(".custome-select");
            p.find('span').html($(this).find('option:selected').text());
        });

        /*=========================================
        Twitter widget (it uses owl carousel)
        ===========================================*/
        if ($('.tweet').length) {
            $('.tweet').twittie({
                username: 'envato',
                dateFormat: '%b. %d, %Y',
                template: '{{tweet}} <time class="date">{{date}}</time>',
                count: 3,
                apiPath: "assets/php/tweet_api/tweet.php",
            }, function() {
                $(".tweet ul").addClass("tweet_slider owl-carousel owl-theme");
                $(".tweet_slider").owlCarousel({
                    autoplaySpeed: 1000,
                    navSpeed: 500,
                    items: 1,
                    center: true
                });
            });
        }

        /*=========================================
        Owl slider
        ===========================================*/
        $(".article-slider").each(function(index, element) {
            $(this).owlCarousel({
                autoplaySpeed: 1000,
                navSpeed: 500,
                items: 1,
                dots: false,
                nav: true,
                center: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
            });
        });

        $(".store-grid-slider").owlCarousel({
            navSpeed: 500,
            items: 5,
            dots: false,
            nav: true,
            navContainer: "#relatedAlbumsSlderNav",
            navText: ['<div class="col-xs-6"><a href="javascript:;"><i class="fa fa-arrow-left"></i> previous  Albums</a></div>', '<div class="col-xs-6"><a href="javascript:;"><i class="fa fa-arrow-right"></i> Next  Albums</a></div>'],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 5
                }
            }
        });

        /*==============================================
        Masonry
        ==============================================*/
        $(window).on('resize load', function() {
            var gutterWidth = 0,
                winWidth = $(window).width();
            if (winWidth >= 1200) {
                gutterWidth = 100;
            } else {
                gutterWidth = 20;
            }
            if (winWidth >= 581) {
                $('.masonry-container').waitForImages(function() {
                    $('.masonry-container').masonry({
                        itemSelector: '.ele-masonry',
                        gutter: gutterWidth
                    });
                });
            }
        });

        /*==============================================
        Song List
        ==============================================*/
        $("body").on("click", ".showAllTrending", function(e) {
            var $this = $(this);
            e.preventDefault();
            $this.fadeOut();
            $(".populateSongList li").show();
            $("body,html").animate({
                scrollTop: $(".populateSongList").offset().top - 70
            });
        });

        /*================
        Events countdown
        ====================*/
        if ($('.countdown').length) {
            $('.countdown').each(function(num, ele) {
                var $this = $(this);
                $this.downCount({
                    date: '09/09/2016 12:00:00',
                    offset: +10
                }, function() {
                    alert('WOOT WOOT, done!');
                });
            });
        }

        /*================
        date time picker
        ====================*/
        if ($('.xvDatePicker').length) {
            $(".xvDatePicker").each(function(num, ele) {
                var $this = $(this);
                $this.datetimepicker({
                    timepicker: false
                });
            });
        }

        /*=========================
        Audio Player for blog post
        =========================*/
        if ($(".post-audio-player").length) {
            $('.post-jplayer').each(function(num, ele) {
                var temp_id = $(this).attr("id"),
                    temp_song = $(this).attr('data-mp3'),
                    temp_title = $(this).attr('data-title'),
                    temp_wrap = "#" + $(this).parents(".post-audio-player").attr("id");
                $(".post-jplayer#" + temp_id).jPlayer({
                    play: function() {
                        $(this).jPlayer("pauseOthers"); // pause all players except this one.
                    },
                    ready: function() {
                        $(this).jPlayer("setMedia", {
                            mp3: temp_song,
                            title: temp_title
                        });
                    },
                    cssSelectorAncestor: temp_wrap,
                    volume: 0.5,
                    supplied: "mp3",
                    swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
                });
            });
        }

        /*============================
        Player for Individual Songs
        ==============================*/

        if ($(".singleSongPlayer").length) {
            $('.singleSong-jplayer').each(function(num, ele) {
                var temp_id = $(this).attr("id"),
                    temp_song = $(this).attr('data-mp3'),
                    temp_title = $(this).attr('data-title'),
                    temp_wrap = "#" + $(this).parents(".singleSongPlayer").attr("id");
                $(".singleSong-jplayer#" + temp_id).jPlayer({
                    play: function() {
                        $(this).jPlayer("pauseOthers"); // pause all players except this one.
                    },
                    ready: function() {
                        $(this).jPlayer("setMedia", {
                            mp3: temp_song,
                            title: temp_title
                        });
                    },
                    cssSelectorAncestor: temp_wrap,
                    volume: 0.5,
                    supplied: "mp3",
                    swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
                });
            });
        }

        /*=======================================
        packery
        =======================================*/
        if ($('.xvPackeryItems').length) {
            var packery = $('.xvPackeryItems');
            packery.packery({
                itemSelector: '.xvPackeryItem',
                gutter: 0
            });
        }
        
        /*==============================
        Events Slider
        ==========================*/
        var evntSlider = $(".eventsSlider"),
            esNext = evntSlider.data("nexttext"),
            esPrev = evntSlider.data("prevtext");
        $('.eventsSlider').bxSlider({
            mode: 'vertical',
            minSlides:3,
            maxSlider :3,
            slideMargin:10,
            pager:false,
            nextSelector:"#nextEvents",
            prevSelector:"#prevEvents",
            nextText:esNext,
            prevText:esPrev,
            infiniteLoop:false,
            hideControlOnEnd:true
        });

        
        /*===========================
        Contact
        ============================*/
        function IsEmail(email) {
			var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
		
		if($("#contactForm").length!=0){
			$("#contactForm").submit(function (e) {
				e.preventDefault();
				var name = $("#xv_name").val(),
				email = $("#xv_email").val(),
				message = $("#xv_message").val(),
				dataString = 'name=' + name + '&email=' + email + '&message=' + message;
		
				if (name === '' || !IsEmail(email) || message === '') {  
                    $(".validationError").show();
				} else {
					$.ajax({
						type: "POST",
						url: "assets/php/submit.php",
						data: dataString,
						success: function () {
							$('#contactForm').slideUp();
							$(".messageSentSuccess").fadeIn();
						}
					});
				}
				return false;
			});
		}
           
        /*============================
		Google Maps
        ============================*/

        if ($('.xv-gmap').length) {
            $('.xv-gmap').each(function() {
                var $this = $(this);

                var selector_map = $this.attr('id'),
                    mapAddress = $this.data('address'),
                    mapType = $this.data('maptype'),
                    zoomLvl = $this.data('zoomlvl'),
                    map_theme_control = $this.data('theme'),
                    map_theme;

                switch (map_theme_control) {
                    case 'pink':
                        map_theme = [{
                            stylers: [{
                                hue: "#e62948"
                            }, {
                                visibility: "on"
                            }, {
                                invert_lightness: true
                            }, {
                                saturation: 40
                            }, {
                                lightness: 10
                            }]
                        }];

                        break;
                    case 'red':
                        map_theme = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffdfa6"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry",
                            stylers: [{
                                color: "#b52127"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{
                                color: "#c5531b"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#74001b"
                            }, {
                                lightness: -10
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#da3c3c"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#74001b"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#da3c3c"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#990c19"
                            }]
                        }, {
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#74001b"
                            }, {
                                lightness: -8
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{
                                color: "#6a0d10"
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffdfa6"
                            }, {
                                weight: 0.4
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry.stroke",
                            stylers: [{
                                visibility: "off"
                            }]
                        }];

                        break;
                    case 'blue':
                        map_theme = [{
                            stylers: [{
                                hue: "#007fff"
                            }, {
                                saturation: 89
                            }]
                        }, {
                            featureType: "water",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "administrative.country",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }];

                        break;
                    case 'yellow':
                        map_theme = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                color: "#a2daf2"
                            }]
                        }, {
                            featureType: "landscape.man_made",
                            elementType: "geometry",
                            stylers: [{
                                color: "#f7f1df"
                            }]
                        }, {
                            featureType: "landscape.natural",
                            elementType: "geometry",
                            stylers: [{
                                color: "#d0e3b4"
                            }]
                        }, {
                            featureType: "landscape.natural.terrain",
                            elementType: "geometry",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                color: "#bde6ab"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "poi.medical",
                            elementType: "geometry",
                            stylers: [{
                                color: "#fbd3da"
                            }]
                        }, {
                            featureType: "poi.business",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry.stroke",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffe15f"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#efd151"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "black"
                            }]
                        }, {
                            featureType: "transit.station.airport",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#cfb2db"
                            }]
                        }];


                        break;
                    case 'green':
                        map_theme = [{
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#aee2e0"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#abce83"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#769E72"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#7B8758"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#EBF4A4"
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                visibility: "simplified"
                            }, {
                                color: "#8dab68"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#5B5B3F"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#ABCE83"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                color: "#A4C67D"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry",
                            stylers: [{
                                color: "#9BBF72"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry",
                            stylers: [{
                                color: "#EBF4A4"
                            }]
                        }, {
                            featureType: "transit",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#87ae79"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#7f2200"
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#ffffff"
                            }, {
                                visibility: "on"
                            }, {
                                weight: 4.1
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#495421"
                            }]
                        }, {
                            featureType: "administrative.neighborhood",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }];

                        break;
                    default:
                        map_theme = [];
                }
                contactemaps(selector_map, mapAddress, mapType, zoomLvl, map_theme);

            });
        }

    } /*suonoApp*/
    suonoApp();

    /*======================================
    Menu
    ======================================*/
    
    $("#sticktop").sticky({
        topSpacing: 0
    });
    $(window).on('resize load', function() {
        $(".sticky-wrapper").css("height", +$("#sticktop").innerHeight() + "px");
    });

    $("body").on("click",".dl-menu > li > a",function(e){
        var $this = $(this),
            p = $this.parent();
        if(p.children("ul").length){
            e.preventDefault();
            p.children("ul").addClass("expand");
            $this.parents(".dl-menu").addClass("backed");
        }else{
            $(".dl-menu").removeClass("xvMenuShow");
            $(".dl-menu > li").removeClass("active");
            $this.parent().addClass("active");
        }
    });
    
    $("body").on("click",".dl-menu > li > ul > li > a",function(e){
        if(!$(this).hasClass("backLvl")){
            $(".dl-menu").removeClass("backed");
            $(".dl-menu").removeClass("xvMenuShow");
        }
        
    });
    
    $("body").on("click",".menuTrigger",function(e){
        e.preventDefault();
        $(".dl-menu").toggleClass("xvMenuShow");
    });
    
    $("body").on("click",".backLvl",function(e){
        var $this = $(this);
        e.preventDefault();
        $this.parents(".dl-submenu").removeClass("expand");
        $this.parents(".dl-menu").removeClass("backed");
    });
    
    $(".dl-submenu").each(function(){
        var $this = $(this);
        $this.prepend('<li class="gobackLvl"><a class="backLvl" href="#"><i class="fa fa-long-arrow-left"></i>Go Back</li>');
    });


    /*==============================================
	Header Player
	==============================================*/

    $('body').on("click", function(e) {
        if (!$(e.target).closest('.the-xv-Jplayer').length) {
            $(".jp-playlist").slideUp();
            $("body").removeClass("playerFullOn");
        }
    });

    $(".sound-trigger").click(function(e) {
        $(this).parent(".jp-volume-controls").toggleClass("open");
    });

    $(".playList-trigger").click(function(e) {
        $("body").toggleClass("playerFullOn");
        $(".jp-playlist").slideToggle();
    });

    var werock;

    if ($('#audio-player').length) {
        $("#player-instance").jPlayer({
            cssSelectorAncestor: "#audio-player",
        });

        if ($('.playlist-files').length) {
            var playlist_items = [],
                $playlist_audio = $('.playlist-files li'),
                playlist_items_length = $playlist_audio.length;
            for (var i = 0; i < playlist_items_length; i++) {
                var new_playlist_item = {};
                new_playlist_item['title'] = $playlist_audio.eq(i).attr('data-title');
                new_playlist_item['artist'] = $playlist_audio.eq(i).attr('data-artist');
                new_playlist_item['mp3'] = $playlist_audio.eq(i).attr('data-mp3');
                playlist_items.push(new_playlist_item);
            }

            werock = new jPlayerPlaylist({
                jPlayer: "#player-instance",
                enableRemoveControls: false,
                cssSelectorAncestor: "#audio-player"
            }, playlist_items, {
                playlistOptions: {
                    autoPlay: false,
                    loopOnPrevious: true
                }
            }, {
                swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
                supplied: "mp3",
                displayTime: 'fast',
                addTime: 'fast',
            });


            $("#player-instance").bind($.jPlayer.event.play, function(event) {
                var current = werock.current,
                    playlist = werock.playlist;
                jQuery.each(playlist, function(index, obj) {
                    if (index == current) {
                        $('.the-xv-Jplayer .audio-title').html('<span class="jp-artist">' + obj.artist + '</span><span class="jp-songTitle">' + obj.title + '</span>');
                    }
                });
            });
        }


        $('.jp-prev').click(function() {
            werock.previous();
        });
    }

    if ($('#audio-player-radio').length) {
        var streamUrl = $('#audio-player-radio').attr("data-radio-url"),
            radioName = $('#audio-player-radio').attr("data-title"),
            stream = {
                title: radioName,
                mp3: streamUrl
            },
            radio_ready = false;
        $("#player-instance-radio").jPlayer({
            ready: function(event) {
                radio_ready = true;
                $(this).jPlayer("setMedia", stream).jPlayer("play");
            },
            pause: function() {
                $(this).jPlayer("clearMedia");
            },
            error: function(event) {
                if (radio_ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
                    $(this).jPlayer("setMedia", stream).jPlayer("play");
                }
            },
            cssSelectorAncestor: "#audio-player-radio",
            swfPath: "assets/js/jPlayer/jquery.jplayer.swf",
            preload: "none"
        });
    }

    /*================
    WavePlayer ( used in header)
    ====================*/
    var $wavePlayer = $(".waveSurferPlayer"),
        $wave = $("#waveform"),
        wavColor = $wave.attr("data-wave-color"),
        waveProgress = $wave.attr("data-wave-progress"),
        waveCursor = $wave.attr("data-cursor"),
        waveHeight = +$wave.attr("data-height");

    function onWaveSurferInitialized(wavesurfer) {
        wavesurfer = Object.create(WaveSurfer),
            wavesurfer.init({
                container: '#waveform',
                waveColor: wavColor,
                progressColor: waveProgress,
                cursorColor: waveCursor,
                height: waveHeight
            });
        wavesurfer.load('assets/demo-data/demo.wav');
        wavesurfer.on('ready', function(e) {
            wavesurfer.play();
            $(".playWave").hide();
        });
        wavesurfer.on('error', function(err) {
            console.error(err);
        });
        wavesurfer.on('finish', function() {
            console.log('Finished playing');
            $(".pauseWave").hide();
            $(".playWave").show();
        });
        $("body").on("click", ".playWave", function(e) {
            e.preventDefault();
            wavesurfer.play();
            $(this).hide();
            $(".pauseWave").show();
        });
        $("body").on("click", ".pauseWave", function(e) {
            e.preventDefault();
            wavesurfer.pause();
            $(this).hide();
            $(".playWave").show();
        });
        $("body").on("click", ".muteWave", function(e) {
            e.preventDefault();
            $(this).toggleClass("pc-mute", "pc-volume");
            wavesurfer.toggleMute();
        });
    } /*wave init funtion*/


    if ($wavePlayer.length) {
      	var waveSurfer;
        if (WaveSurfer.Swf.supportsAudioContext() && WaveSurfer.Swf.supportsCanvas()) {
            waveSurfer = Object.create(WaveSurfer);
            onWaveSurferInitialized(waveSurfer);
        } else {
            swfobject.embedSWF('assets/js/wavesurfer/wavesurfer.swf', 'wavesurfer', '100%', '128', '11.1.0', 'expressInstall.swf', {}, {
                allowScriptAccess: 'always'
            }, {});
            waveSurfer = new WaveSurfer.Swf();
            waveSurfer.on('init', function() {
                onWaveSurferInitialized(waveSurfer);
            });
        }
    }

});