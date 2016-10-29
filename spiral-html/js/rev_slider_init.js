
/******************************************
	-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var tpj=jQuery;
tpj.noConflict();
var revapi12;
tpj(document).ready(function() {
	if(tpj("#rev_slider_12_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_12_1");
	}else{
		revapi12 = tpj("#rev_slider_12_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"rs-plugin/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"on",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"custom",
					enable:true,
					hide_onmobile:false,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:20,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"custom",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:45,
					space:-40,
					tmp:''
				}
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:1170,
			gridheight:960,
			lazyType:"all",
			parallax: {
				type:"mouse",
				origo:"enterpoint",
				speed:400,
				levels:[1,2,5,20,25,30,35,40,45,50,47,48,49,50,51,55],
				type:"mouse",
				disable_onmobile:"on"
			},
			shadow:0,
			spinner:"spinner5",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:769,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"on",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
				panZoomDisableOnMobile:"on",
			}
		});
	}
});	/*ready*/