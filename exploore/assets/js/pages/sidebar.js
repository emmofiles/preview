jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    // js for calendar
    SLZ.datepick = function() {
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });
    };

    // js for slide time
    SLZ.rangeSliderVisualize = function() {
        // $('.flight-time-visual-widget .visual .bar').nstSlider({
        //     "crossable_handles": false,
        //     "left_grip_selector": ".depart",
        //     "right_grip_selector": ".arrive",
        //     "value_changed_callback": function(cause, leftValue, rightValue) {
        //         var departTime = $(this).find('.depart time');
        //         var arriveTime = $(this).find('.arrive time');
        //         var departTimeText = (Math.floor(leftValue/60) > 12 ? Math.floor(leftValue/60) - 12 : Math.floor(leftValue/60)) + ':' + (leftValue%60 < 10 ? '0' + leftValue%60 : leftValue%60) + (Math.floor(leftValue/60) > 12 ? ' PM' : ' AM');
        //         var arriveTimeText = (Math.floor(rightValue/60) > 12 ? Math.floor(rightValue/60) - 12 : Math.floor(rightValue/60)) + ':' + (rightValue%60 < 10 ? '0' + rightValue%60 : rightValue%60) + (Math.floor(rightValue/60) > 12 ? ' PM' : ' AM');
        //         departTime.text(departTimeText);
        //         arriveTime.text(arriveTimeText);
        //         var departBoderRight = departTime.offset().left + departTime.width();
        //         var arriveBorderLeft = arriveTime.offset().left;
        //         if (departBoderRight >= arriveBorderLeft) {
        //             arriveTime.css("top","20px");
        //             console.log('true');
        //         } else {
        //             arriveTime.removeAttr("style");
        //         }
        //     }
        // });

        $(window).on('resize load', function(event) {
            $('.nstSlider').nstSlider({
                "crossable_handles": false,
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    var lft = $(this).find('.leftGrip .number');
                    var rht = $(this).find('.rightGrip .number');
                    lft.text(leftValue);
                    rht.text(rightValue);
                    //$(this).parent().find('.leftGrip .number').text(leftValue);
                    //$(this).parent().find('.rightGrip .number').text(rightValue);
                    var leftGripBoderRight = lft.offset().left + lft.width();
                    var rightGripBorderLeft = rht.offset().left;
                    if (leftGripBoderRight >= rightGripBorderLeft) {
                        rht.css("top", "20px");
                        console.log('true');
                    } else {
                        rht.removeAttr("style");
                    }
                    if (leftGripBoderRight <= $(".leftLabel").offset().left + 30) {
                        $(".leftLabel").css("top", "20px");
                    } else {
                        $(".leftLabel").removeAttr("style");
                    }
                    if (rightGripBorderLeft >= $(".rightLabel").offset().left - 30) {
                        $(".rightLabel").css("top", "20px");
                    } else {
                        $(".rightLabel").removeAttr("style");
                    }
                }
            });
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.datepick();
        SLZ.rangeSliderVisualize();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
