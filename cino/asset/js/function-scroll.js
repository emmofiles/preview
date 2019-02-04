  $(document).ready(function() {
    'use trick';
      $('body').css('visibility','visible');
      // TimelineLite for title animation, then start up superscrollorama when complete
      (new TimelineLite({onComplete:initScrollAnimations}))       
        .from( $('#title-line2'), .4, {css:{top:'0',opacity:'0'}, ease:Expo.easeOut})  
      function initScrollAnimations() {
        var controller = $.superscrollorama();
        controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), 1, {css:{left:'1000px'}}),0,-150,false);
        // ------------
        controller.addTween('#fly-it-2', TweenMax.from( $('#fly-it-2'), 1, {css:{right:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-3', TweenMax.from( $('#fly-it-3'), 1, {css:{right:'1000px'}}),0,-150,false);
        // ------------
        controller.addTween('#fly-it-4', TweenMax.from( $('#fly-it-4'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-5', TweenMax.from( $('#fly-it-5'), 1, {css:{right:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-6', TweenMax.from( $('#fly-it-6'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-7', TweenMax.from( $('#fly-it-7'), 1, {css:{right:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-8', TweenMax.from( $('#fly-it-8'), 1, {css:{right:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-9', TweenMax.from( $('#fly-it-9'), 1, {css:{right:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-10', TweenMax.from( $('#fly-it-10'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-11', TweenMax.from( $('#fly-it-11'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-12', TweenMax.from( $('#fly-it-12'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-13', TweenMax.from( $('#fly-it-13'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-14', TweenMax.from( $('#fly-it-14'), 1, {css:{left:'1000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-15', TweenMax.from( $('#fly-it-15'), 1, {css:{left:'2000px'}}),0,-150,false);
        // -------------
        controller.addTween('#fly-it-16', TweenMax.from( $('#fly-it-16'), 1, {css:{left:'2000px'}}),0,-150,false);
        // -------------
        controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-2', TweenMax.fromTo( $('#scale-it-2'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-3', TweenMax.fromTo( $('#scale-it-3'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-4', TweenMax.fromTo( $('#scale-it-4'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-5', TweenMax.fromTo( $('#scale-it-5'), .7, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-6', TweenMax.fromTo( $('#scale-it-6'), .7, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-7', TweenMax.fromTo( $('#scale-it-7'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-8', TweenMax.fromTo( $('#scale-it-8'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-9', TweenMax.fromTo( $('#scale-it-9'), 1, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
        controller.addTween('#scale-it-10', TweenMax.fromTo( $('#scale-it-10'), .7, {css:{opacity:0, transform:'scale(0)'}}, {css:{opacity:1,  transform:'scale(1)'}}),0,-150,false);
        // ------------
      }
    });