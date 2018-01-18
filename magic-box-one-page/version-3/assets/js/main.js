(function() { 
"use strict";
var cur_pos;
var indexLiActive = 0;
var leftUL = 0;
var ul = $("#portfolioGallery .imagesPortfolio");
var liWidth = $("#portfolioGallery .imagesPortfolio li").width($(window).width());
var ulWidth = $("#portfolioGallery .imagesPortfolio").width($(window).width() * $("#portfolioGallery .imagesPortfolio li").length);
var ulHeight = $("#portfolioGallery .imagesPortfolio").height($(window).height());
var li = $("#portfolioGallery .imagesPortfolio li");
var item;
var totalItems;
var indexAnterior;

function animationMouse() {
    var b = 45;
    var a = b / $(window).height();
    var e = b / $(window).width();
    var d = 25;
    var c = 25;
    $(".imageAnimatedBack").css({
        height: $(window).height()
    });
    $("#sector-home").on(function(i) {
        var h = i.pageX - ($(window).width() / 2);
        var g = i.pageY - ($(window).height() / 2);
        var f = e * h * -1 + 25;
        var j = a * g * -1 + 25;
        $(".imageAnimatedBack").css({
            "background-position": f + "px " + j + "px"
        });
    });
}
$.fn.sparallax = function(a) {
    var d = $(window),
        c = {
            $elements: $(this),
            speed: 4
        },
        b = $.extend(c, a);
    $.each(b.$elements, function(f, g) {
        var e = $(g),
            j = 0,
            h = (e.data("parallax-speed") ? e.data("parallax-speed") : c.speed);
        j = -(d.scrollTop() / h);
        e.css({
            top: j + "px"
        });
        d.scroll(function() {
            j = -(d.scrollTop() / h);
            e.css({
                top: j + "px"
            });
        });
    });
};

function resizeSliderPortfolio() {
    var b = 1903,
        a = 950,
        c = $("#portfolioGallery").width();
    var d = parseFloat(c * a / b,10);
    if ($("#mobileVisible").css("display") == ("block")) {
        ulHeight = $("#imagesPortfolio").css({
            height: d
        });
        if (d + 60 > 260) {
            $("#portfolioGallery .informations").css("margin-top", d + 60 + "px");
            $("#portfolioGallery .nextImage, #portfolioGallery .previousImage").css("top", d + 90);
            $("#portfolioGallery .lineLeft, #portfolioGallery .lineRight").height(d);
        } else {
            $("#portfolioGallery .informations").css("margin-top", "260px");
            $("#portfolioGallery .nextImage, #portfolioGallery .previousImage").css("top", "290px");
            $("#portfolioGallery .lineLeft, #portfolioGallery .lineRight").height("200px");
        }
    }
}

function sectorVisible() {
    if ($("#mobileVisible").css("display") == ("none")) {
        var b = $("#sector-home, #sector-about, #sector-process, #sector-portfolio, #sector-contact"),
            c = $("#main_menu li"),
            a = $(window).scrollTop() + ($(window).height() / 2);
        b.each(function() {
            var e = $(this).offset().top,
                d = e + $(this).outerHeight();
            if (a > e && a < d) {
                c.removeClass("selected");
                b.removeClass("visible");
                $(this).addClass("visible");
                c.find('a[href="#' + $(this).attr("id") + '"]').parent().addClass("selected");
            }
        });
        var a = $(window).scrollTop();
        if (a > 69) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
        if (!$("#sector-process").hasClass("visible")) {
            $(".limit").stop().animate({
                height: "36px"
            }, 200, function() {
                $("#sector-process a.area").removeClass("open");
            });
        }
    }
}

function contactFormMensage() {
    $("#contactForm .msg").fadeIn(300);
    setTimeout(function() {
        $("#contactForm .msg").fadeOut(200);
    }, 2500);
}

function detectIE() {
    var d = false;
    var c = window.navigator.userAgent;
    var a = c.indexOf("MSIE ");
    var b = c.indexOf("Trident/");
    var e = c.indexOf("Edge/");
    if ((a > -1) || (b > -1) || (e > -1)) {
        d = true;
    }
    if (d) {
        $("#portfolioGallery .nextImage, #portfolioGallery .previousImage, #storiesGallery .gallery #thousandStories .owl-nav .owl-next, #storiesGallery .gallery #thousandStories .owl-nav .owl-prev").css("cursor", "pointer");
        $("#portfolioGallery .imagesPortfolio").css("cursor", "crosshair");
        $("#storiesGallery .gallery #thousandStories").css("cursor", "e-resize");
    }
}
$(document).ready(function() {
    $("img.lazy").lazyload({
        threshold: 400,
        effect: "fadeIn"
    });
    if ($("#mobileVisible").css("display") == ("none")) {
        animationMouse();
        $(".parallax").sparallax();
    } else {
        $(".languagesMobile").css("left", $(window).width());
    }
    $("#contactForm .msg").on(function() {
        $(this).fadeOut(200);
    });
    FastClick.attach(document.body);
    $("#sector-home").height($(window).height());
    $("a.replica_btn, a.closeStories").click(function() {
        if ($("#storiesGallery").hasClass("open")) {
            $("#storiesGallery").removeClass("open").removeAttr("class");
            $("#storiesGallery").fadeOut(200);
            g();
        } else {
            if ($("#introCronology").css("display") == ("none")) {
                $("#storiesGallery").addClass("open");
                $("#storiesGallery").fadeIn(400);
                $("#storiesGallery").find(".intro").addClass("animate").delay(3100).queue(function() {
                    $("#storiesGallery").find(".intro").removeClass("animate");
                    $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length + 10);
                });
                setTimeout(function() {
                    if ($("#mobileVisible").css("display") == ("none")) {
                        $("#storiesGallery").find(".intro").hide();
                    } else {
                        $("#storiesGallery").children(".row").remove();
                    }
                }, 5200);
                $("#storiesGallery .gallery").delay(5200).animate({
                    opacity: "1"
                });
            } else {
                $("#introCronology").addClass("visible opening").delay(1100).queue(function(m) {
                    $(this).delay(300).fadeOut(400);
                    $("#storiesGallery").addClass("open");
                    $("#storiesGallery").fadeIn(400);
                    if ($("#mobileVisible").css("display") == ("none")) {
                        $(".paginationFake li").width($(".containerPagination").width() / 5 + "px");
                    } else {
                        $(".paginationFake li").width($(window).width() + "px");
                    }
                    $("#storiesGallery").find(".intro").addClass("animate").delay(3100).queue(function() {
                        $("#storiesGallery").find(".intro").removeClass("animate");
                        $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length + 10);
                        $("#storiesGallery .owl-item").each(function() {
                            var q = $(this).children("div").attr("data-pct");
                            var p = $(this).find("#bar");
                            var n = p.attr("r");
                            var s = Math.PI * (n * 2);
                            var o = ((100 - q) / 100) * s;
                            p.css({
                                strokeDashoffset: o
                            });
                        });
                    });
                    setTimeout(function() {
                        if ($("#mobileVisible").css("display") == ("none")) {
                            $("#storiesGallery").find(".intro").hide();
                        } else {
                            $("#storiesGallery").children(".row").remove();
                        }
                    }, 5200);
                    $("#storiesGallery .gallery").delay(5200).animate({
                        opacity: "1"
                    });
                    $(".containerPagination").height($(".paginationFake li").outerHeight());
                    m();
                });
            }
        }
      return false;
    });
    var b = $("#thousandStories");
    var d = 0;
    b.owlCarousel({
        slideSpeed: 5000,
        items: 1,
        addClassActive: true,
        rewindNav: false,
        dots: false,
        nav: true,
        navText: false,
        onInitialized: function() {
            $("#storiesGallery .owl-item .content .count .numbers span").html($("#storiesGallery .owl-item").length);
            $("#storiesGallery .owl-item .content .count .numbers strong, #storiesGallery .navigation .containerPagination .paginationFake li .number span").html("1");
            if ($("#storiesGallery .owl-item").length < 5 && $("#mobileVisible").css("display") == ("none")) {
                $("#storiesGallery .navigation .containerPagination .paginationFake").css({
                    left: "50%",
                    transform: "translateX(-50%)",
                    "-webkit-transform": "translateX(-50%)"
                });
            }
        },
        onResize: function() {
            if ($("#mobileVisible").css("display") == ("none")) {
                $(".paginationFake li").width($(".containerPagination").width() / 5 + "px");
                $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length + 10);
                if ($("#storiesGallery .owl-item").length < 5 && $("#mobileVisible").css("display") == ("none")) {
                    $("#storiesGallery .navigation .containerPagination .paginationFake").css({
                        left: "50%",
                        transform: "translateX(-50%)",
                        "-webkit-transform": "translateX(-50%)"
                    });
                }
            } else {
                $(".paginationFake li").width($(window).width() + "px");
                $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length + 10);
                $("#storiesGallery .navigation .containerPagination .paginationFake").css({
                    left: "inherit",
                    transform: "none",
                    "-webkit-transform": "none"
                });
            }
        }
    });
    var k = 1;

    function g() {
        b.trigger("to.owl.carousel", [0, 300, true]);
        if ($("#storiesGallery .owl-item").length < 5 && $("#mobileVisible").css("display") == ("none")) {
            $("#storiesGallery .navigation .containerPagination .paginationFake").css({
                left: "50%",
                transform: "translateX(-50%)",
                "-webkit-transform": "translateX(-50%)"
            });
        } else {
            $(".paginationFake").animate({
                left: "0"
            }, 100)
        }
        d = 0
    }
    $("#storiesGallery .owl-item").each(function() {
        var m = $(this).children("div").attr("data-title");
        var o = "";
        if (k < 10) {
            o = "0" + k
        } else {
            o = k
        }
        var n = '<li><span class="diamond"></span>\n                            <a href="#" rel="nofollow" title="Link">\n                                            <div class="caption">\n                                                <div class="number">' + o + '</div>\n                                                <div class="title">' + m + "</div>\n                                            </div></a></li>";
        $("#storiesGallery .navigation .containerPagination .paginationFake").append(n);
        k++;
        $(".paginationFake li").eq(0).addClass("active")
    });
    $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length);
    $("#storiesGallery").height($(window).height());
    b.on("changed.owl.carousel", function(m) {
        item = m.item.index + 1, totalItems = m.item.count - 1;
        if (indexAnterior < item) {
            if ($("#mobileVisible").css("display") == ("none")) {
                if (item > 3 && item < totalItems) {
                    $(".paginationFake").stop(true, true).animate({
                        left: (parseFloat($(".paginationFake").css("left")) - $(".paginationFake li").width())
                    }, 750);
                    d++
                }
            } else {
                if (item <= totalItems) {
                    $(".paginationFake").stop(true, true).animate({
                        left: (parseFloat($(".paginationFake").css("left")) - $(".paginationFake li").width())
                    }, 750);
                    d++
                }
            }
        } else {
            if ($("#mobileVisible").css("display") == ("none")) {
                if (item == d && d > 0) {
                    $(".paginationFake").stop(true, true).animate({
                        left: (parseFloat($(".paginationFake").css("left")) + $(".paginationFake li").width())
                    }, 750);
                    d--
                }
            } else {
                if (d > 0) {
                    $(".paginationFake").stop(true, true).animate({
                        left: (parseFloat($(".paginationFake").css("left")) + $(".paginationFake li").width())
                    }, 750);
                    d--
                }
            }
        }
        indexAnterior = item;
        $(".paginationFake li").removeClass("active").removeAttr("class");
        $(".paginationFake li").eq(m.item.index).addClass("active");
        $("#storiesGallery .owl-item .content .count .numbers strong").html(m.item.index + 1);
        if ($("#mobileVisible").css("display") == ("block")) {
            if ($(".paginationFake li").first().hasClass("active")) {
                $(".navigation .arrowLeft").fadeOut(100)
            } else {
                if ($(".paginationFake li").last().hasClass("active")) {
                    $(".navigation .arrowRight").fadeOut(100)
                } else {
                    $(".navigation .arrowRight, .navigation .arrowLeft").fadeIn(100)
                }
            }
        }
    });
    $("#main_menu li a").on(function() {
        var m = $($(this).attr("href")).offset();
        var n = $(this).attr("href");
        $("html, body").animate({
            scrollTop: m.top
        }, 500);
        $("#main_menu li").removeClass("selected");
        $(this).parent().addClass("selected");
        history.pushState({}, "", n);
        return false
    });
    $("a.languages_link, a.close_languages").click(function() {
        if ($("#container_languages").hasClass("open")) {
            $("#container_languages").removeClass("open").removeAttr("class");
            $("#container_languages").fadeOut(250)
        } else {
            $("#container_languages").addClass("open");
            $("#container_languages").fadeIn(250)
        }
        return false
    });
    $("a.scroll_icon").on(function() {
        var m = $($(this).attr("href")).offset();
        $("html, body").animate({
            scrollTop: m.top
        }, 500);
        return false
    });
    $("body").on("click", "#sector-process .area, .plusPopup", function() {
        var m = $(this);
        if ($("#mobileVisible").css("display") == ("none")) {
            if ($(this).hasClass("open")) {
                $(".limit").stop().animate({
                    height: "36px"
                }, 200, function() {
                    $("#sector-process a.area").removeClass("open")
                })
            } else {
                $(".limit").stop().animate({
                    height: "36px"
                }, 200, function() {
                    $("#sector-process a.area").removeClass("open");
                    m.addClass("open")
                });
                m.addClass("open");
                m.find(".limit").stop().animate({
                    height: m.find(".limit p").height() + "px"
                }, 300)
            }
        } else {
            if ($("#processPopup").hasClass("open")) {
                $("#processPopup").removeClass("open");
                $("body").removeAttr("style");
                $("#processPopup").fadeOut(300, function() {
                    $("#processPopup .icon, #processPopup h3, #processPopup .limit").remove()
                })
            } else {
                $("#processPopup").addClass("open");
                $("body").css("overflow", "hidden");
                m.find(".icon").clone().appendTo("#processPopup");
                m.find("h3").clone().appendTo("#processPopup");
                m.find(".limit").clone().appendTo("#processPopup");
                $("#processPopup").fadeIn(300)
            }
        }
        return false
    });
    $("#gallery .menu li a").click(function() {
        var m = $(this).attr("data-category-name");
        $("#gallery .menu li").removeClass("selected");
        $(this).closest("li").addClass("selected");
        $("#gallery .gallery_images li").addClass("inactive");
        $("#gallery .gallery_images li." + m + "").removeClass("inactive");
        if ($(this).attr("data-category-name") == 0) {
            $("#gallery .gallery_images li").removeClass("inactive")
        }
        return false
    });
    if ($("#gallery .menu li a").length) {
        $("#gallery .menu li:eq(0) a").trigger("click")
    }
    $("#gallery .gallery_images li a").on({
        mouseenter: function() {
            if (!$(this).parent().hasClass("inactive")) {
                $(this).find(".front").css({
                    "z-index": "4"
                })
            }
        },
        mouseleave: function() {
            $(this).find(".front").css({
                "z-index": "3"
            })
        }
    });
    $("#form .containerInput input").focus(function() {
        $(this).parent().addClass("active")
    });
    $("#form .containerInput input").blur(function() {
        $(this).parent().removeClass("active");
        if (!$(this).val()) {
            $(this).parent().removeClass("active")
        } else {
            $(this).parent().addClass("active")
        }
    });
    $("#form .containerInput input").each(function() {
        if (!$(this).val()) {
            $(this).parent().removeClass("active")
        } else {
            $(this).parent().addClass("active")
        }
    });
    $("#form .containerSelect").click(function() {
        if ($("#form .containerSelect").hasClass("open")) {
            $("#form .containerSelect").removeClass("open");
            $("#form .containerSelect .options").stop().slideUp(300)
        } else {
            $("#form .containerSelect").addClass("open");
            $("#form .containerSelect .options").stop().slideDown(300)
        }
        return false
    });
    $("#form .containerSelect .options li a").click(function() {
        var m = $(this).parent().index();
        $("#form .containerSelect .wordVisible").html($(this).html());
        $("#form .containerSelect .options li").removeClass("selected");
        $("#form .containerSelect select option").eq(m).prop("selected", "selected");
        $(this).parent().addClass("selected");
        $("#form .containerSelect").removeClass("open");
        $("#form .containerSelect .options").stop().slideUp(300);
        return false
    });
    $(document).click(function(m) {
        if (!$(m.target).is("#form .containerSelect")) {
            $("#form .containerSelect").removeClass("open");
            $("#form .containerSelect .options").stop().slideUp(300)
        }
    });
    $("a.contactFormLink, a.close_contactForm").click(function() {
        if ($("#contactForm").hasClass("open")) {
            $("#contactForm").removeClass("open");
            $("#contactForm").css("top", $("#sector-contact").outerHeight())
        } else {
            $("#contactForm").addClass("open");
            $("#contactForm").css("top", $("#sector-contact").outerHeight() - $("#contactForm").outerHeight())
        }
        return false
    });
    $("#imagesPortfolio, #portfolioGallery .informations").click(function() {
        if ($("#mobileVisible").css("display") == ("none")) {
            $("#portfolioGallery").fadeOut(400, function() {
                $("#portfolioGallery").removeClass("open").removeAttr("class")
            })
        }
        return false
    });
    $(".closePortfolio").click(function() {
        if ($("#mobileVisible").css("display") == ("block")) {
            $("#portfolioGallery").fadeOut(400, function() {
                $("#portfolioGallery").removeClass("open").removeAttr("class")
            })
        }
        return false
    });
    $("#sector-portfolio #gallery .container_gallery .gallery_images li a").click(function() {
        $("a.nextImage").show();
        $("a.previousImage").show();
        var m = $(this).parent();
        if ($("#portfolioGallery").hasClass("open")) {
            $("#portfolioGallery").fadeOut(400, function() {
                $("#portfolioGallery").removeClass("open").removeAttr("class")
            })
        } else {
            if ($(this).parent().hasClass("inactive")) {} else {
                $("#portfolioGallery").fadeIn(400, function() {
                    $("#portfolioGallery").addClass("open");
                    $("#portfolioGallery .imagesPortfolio li img").each(function() {
                        var v = $(this).width(),
                            w = $(this).height();
                        if (w > v) {
                            $(this).parent().addClass("vertical")
                        }
                    });
                    var n = m.attr("data-project-id");
                    var u = $("[data-project='t" + n + "']").first().index();
                    indexLiActive = u;
                    var t = -(u) * li.width();
                    $("#imagesPortfolio").css({
                        left: t + "px"
                    });
                    leftUL = t;
                    $("#portfolioGallery .informations .containerClient .content").html(m.attr("data-client"));
                    $("#portfolioGallery .informations .containerYear .content").html(m.attr("data-year"));
                    $("#portfolioGallery .containerCountLi .actived").html("1");
                    var q = $("[data-project='t" + n + "']").length;
                    $("#portfolioGallery .containerCountLi .total span").html(q);
                    $("#portfolioGallery .containerCountLi .actived").html(1);
                    var p = m.attr("class");
                    var s = $("#imagesPortfolio li").eq(indexLiActive);
                    var r = false;
                    var o = s.attr("data-project");
                    s.nextAll('[data-class="' + p + '"]').each(function() {
                        if (r != true) {
                            if ($(this).attr("data-project") != o && ($(this).attr("data-class") == p)) {
                                $("#portfolioGallery .informations .containerNextProject .content").html($(this).attr("data-client"));
                                r = true
                            }
                            return true
                        }
                    });
                    if (s.nextAll('[data-class="' + p + '"]').length == 0) {
                        $("a.nextImage").hide();
                        $("#portfolioGallery .informations .containerNextProject .content").html("--")
                    } else {
                        $("a.nextImage").show()
                    }
                    if (s.prevAll('[data-class="' + p + '"]').length == 0) {
                        $("a.previousImage").hide()
                    } else {
                        $("a.previousImage").show()
                    }
                    resizeSliderPortfolio()
                })
            }
        }
        return false
    });
    var l = 250;
    var f = $(window).width() - l;
    var i = 0;
    $("#portfolioGallery .nextImage").on({
        mouseenter: function() {
            if ($("#mobileVisible").css("display") == ("none")) {
                ul.stop(true, true).animate({
                    left: leftUL - l
                }, {
                    easing: "swing",
                    duration: 300,
                    done: function() {
                        leftUL = parseFloat(ul.css("left")),10
                    }
                });
                i = 0
            }
        },
        click: function() {
            $("a.nextImage").show();
            $("a.previousImage").show();
            if (!ul.is(":animated")) {
                if ($("#mobileVisible").css("display") == ("none")) {
                    if (i < 1) {
                        ul.stop(true, true).animate({
                            left: leftUL - f
                        }, {
                            easing: "easeOutExpo",
                            duration: 400,
                            done: function() {
                                leftUL = parseFloat(ul.css("left")),10;
                                i++
                            }
                        })
                    } else {
                        ul.stop(true, true).animate({
                            left: leftUL - $(window).width()
                        }, {
                            easing: "easeOutExpo",
                            duration: 400,
                            done: function() {
                                leftUL = parseFloat(ul.css("left")),10
                            }
                        })
                    }
                } else {
                    ul.stop(true, true).animate({
                        left: leftUL - $(window).width()
                    }, {
                        easing: "easeOutExpo",
                        duration: 400,
                        done: function() {
                            leftUL = parseFloat(ul.css("left")),10
                        }
                    })
                }
                indexLiActive++;
                j()
            }
            return false
        },
        mouseleave: function() {
            if ($("#mobileVisible").css("display") == ("none")) {
                if (!i > 0) {
                    ul.stop(true, true).stop(true, false).animate({
                        left: leftUL + l
                    }, {
                        easing: "swing",
                        duration: 300,
                        done: function() {
                            leftUL = parseFloat(ul.css("left")),10
                        }
                    })
                }
                i = 0
            }
        }
    });
    $("#portfolioGallery .previousImage").on({
        mouseenter: function() {
            if ($("#mobileVisible").css("display") == ("none")) {
                ul.stop(true, true).animate({
                    left: leftUL + l
                }, {
                    easing: "swing",
                    duration: 300,
                    done: function() {
                        leftUL = parseFloat(ul.css("left")),10
                    }
                });
                i = 0
            }
        },
        click: function() {
            $("a.nextImage").show();
            $("a.previousImage").show();
            if (!ul.is(":animated")) {
                if ($("#mobileVisible").css("display") == ("none")) {
                    if (i < 1) {
                        ul.stop(true, true).animate({
                            left: leftUL + f
                        }, {
                            easing: "easeOutExpo",
                            duration: 400,
                            done: function() {
                                leftUL = parseFloat(ul.css("left"));
                                i++,10
                            }
                        })
                    } else {
                        ul.stop(true, true).animate({
                            left: leftUL + $(window).width()
                        }, {
                            easing: "easeOutExpo",
                            duration: 400,
                            done: function() {
                                leftUL = parseFloat(ul.css("left")),10
                            }
                        })
                    }
                } else {
                    ul.stop(true, true).animate({
                        left: leftUL + $(window).width()
                    }, {
                        easing: "easeOutExpo",
                        duration: 400,
                        done: function() {
                            leftUL = parseFloat(ul.css("left")),10
                        }
                    })
                }
                indexLiActive--;
                j()
            }
            return false
        },
        mouseleave: function() {
            if ($("#mobileVisible").css("display") == ("none")) {
                if (!i > 0) {
                    ul.stop(true, true).animate({
                        left: leftUL - l
                    }, {
                        easing: "swing",
                        duration: 300,
                        done: function() {
                            leftUL = parseFloat(ul.css("left")),10
                        }
                    })
                }
                i = 0
            }
        }
    });

    function j() {
        var q = $("#imagesPortfolio li").eq(indexLiActive);
        $("#portfolioGallery .containerCountLi .actived").html(q.attr("data-num"));
        $("#portfolioGallery .informations .containerClient .content").html(q.attr("data-client"));
        $("#portfolioGallery .informations .containerYear .content").html(q.attr("data-year"));
        $("#portfolioGallery .containerCountLi .total span").html($("[data-project='" + q.attr("data-project") + "']").length);
        if ($("#gallery .menu li.selected a").attr("data-category-name") == 0) {
            var s = q.attr("data-client");
            var r = q.nextAll().not('[data-client="' + s + '"]').attr("data-client");
            if (r == undefined) {
                $("#portfolioGallery .informations .containerNextProject .content").html("--")
            } else {
                if (r.length != 0) {
                    $("#portfolioGallery .informations .containerNextProject .content").html(r)
                }
            }
            if (q.nextAll().length == 0) {
                $("a.nextImage").hide()
            } else {
                $("a.nextImage").show()
            }
            if (q.prevAll().length == 0) {
                $("a.previousImage").hide()
            } else {
                $("a.previousImage").show()
            }
        } else {
            var o = q.attr("data-class");
            var m = q.attr("data-project").toString().substring(1);
            var n = q.attr("data-project");
            var p = false;
            q.nextAll('[data-class="' + o + '"]').each(function() {
                if (p != true) {
                    if ($(this).attr("data-project") != n && ($(this).attr("data-class") == o)) {
                        $("#portfolioGallery .informations .containerNextProject .content").html($(this).attr("data-client"));
                        p = true
                    }
                    return true
                }
            });
            if (q.nextAll('[data-class="' + o + '"]').length == 0) {
                $("a.nextImage").hide();
                $("#portfolioGallery .informations .containerNextProject .content").html("--")
            } else {
                $("a.nextImage").show()
            }
            if (q.prevAll('[data-class="' + o + '"]').length == 0) {
                $("a.previousImage").hide()
            } else {
                $("a.previousImage").show()
            }
        }
    }
    var a = 1.78,
        h = 25,
        c = false;
    e();
    $(window).on("resize", function() {
        if (!c) {
            c = true;
            (!window.requestAnimationFrame) ? setTimeout(e, 300): window.requestAnimationFrame(e)
        }
    });

    function e() {
        var m = $(window).width(),
            p = $(window).height(),
            o, n;
        if (m / p > a) {
            n = m;
            o = n / a
        } else {
            o = p;
            n = o * a
        }
        $("#intro .introAnimation").css({
            width: n * h + "px",
            height: o + "px"
        });
        $("#introCronology .introAnimation").css({
            width: n * h + "px",
            height: o + "px"
        });
        c = false
    }
    $(".openMenuMobile").click(function() {
        if ($("header").hasClass("open")) {
            $("header").removeClass("open").delay(250).queue(function(m) {
                $("header").removeAttr("style");
                m()
            });
            $(".chooseLanguage").fadeOut(250);
            $("body").removeAttr("style");
            if ($(".languagesMobile").hasClass("open")) {
                $(".languagesMobile").removeClass("open")
            }
        } else {
            $("header").css("height", "100%");
            $("header").addClass("open");
            $("body").css("overflow", "hidden");
            $(".chooseLanguage").delay(50).fadeIn(250)
        }
        return false
    });
    $(".chooseLanguage, .backMenu").click(function() {
        if ($(".languagesMobile").hasClass("open")) {
            $(".languagesMobile").removeClass("open")
        } else {
            $(".languagesMobile").addClass("open")
        }
        return false
    });
    $("#menuMobile li a").click(function() {
        var m = $($(this).attr("href")).offset();
        var n = $(this).attr("href");
        $("html, body").animate({
            scrollTop: m.top
        }, 750);
        $("#menuMobile li").removeClass("selected");
        $(this).parent().addClass("selected");
        $("header").removeClass("open").delay(250).queue(function(o) {
            $("header").removeAttr("style");
            o()
        });
        $(".chooseLanguage").fadeOut(250);
        $("body").removeAttr("style");
        history.pushState({}, "", n);
        return false
    });
    $(".openFilter, .closeFilter").click(function() {
        if ($("#menuFilterMobile").hasClass("open")) {
            $("#menuFilterMobile").removeClass("open");
            $("#menuFilterMobile").fadeOut(300)
        } else {
            $("#menuFilterMobile").addClass("open");
            $("#menuFilterMobile").fadeIn(300)
        }
        return false
    });
    $(".filterMobile li a").click(function() {
        var m = $(this).attr("data-category-name");
        $(".filterMobile li").removeClass("selected");
        $(this).closest("li").addClass("selected");
        $("#gallery .gallery_images li").addClass("inactive");
        $("#gallery .gallery_images li." + m + "").removeClass("inactive");
        if ($(this).attr("data-category-name") == 0) {
            $("#gallery .gallery_images li").removeClass("inactive")
        }
        $("#sector-portfolio .openFilter .selected").html($(this).children(".text").clone());
        $("#menuFilterMobile").removeClass("open");
        $("#menuFilterMobile").fadeOut(300);
        return false
    });
    $(".showMore").click(function() {
        $(".gallery_images").removeClass("restrictLi");
        $(this).fadeOut(250);
        return false
    })
});
$(window).load(function() {
    sectorVisible();
    detectIE();
    $("#intro").addClass("visible opening").delay(1100).queue(function(a) {
        $(this).hide();
        a()
    });
    setTimeout(function() {
        $("#gallery").height($(".container_gallery .gallery_images").outerHeight(true) + $("#gallery .menu").outerHeight(true));
        $("#contactForm").css("top", $("#sector-contact").outerHeight())
    }, 400)
});
$(window).on("scroll", function() {
    sectorVisible()
});
$(window).resize(function() {
    $("#sector-home").height($(window).height());
    if (!$("#contactForm").hasClass("open")) {
        $("#contactForm").css("top", $("#sector-contact").outerHeight())
    }
    $("#storiesGallery").height($(window).height());
    liWidth = $("#portfolioGallery .imagesPortfolio li").width($(window).width());
    ulWidth = $("#portfolioGallery .imagesPortfolio").width($(window).width() * $("#portfolioGallery .imagesPortfolio li").length);
    ulHeight = $("#portfolioGallery .imagesPortfolio").height($(window).height());
    leftUL = parseFloat(ul.css("left", -(indexLiActive * $("#imagesPortfolio li").width())),10);
    if ($("#mobileVisible").css("display") == ("none")) {
        $(".paginationFake li").width($(".containerPagination").width() / 5 + "px");
        $("#portfolioGallery .lineLeft, #portfolioGallery .lineRight").removeAttr("style")
    } else {
        $(".paginationFake li").width($(window).width() + "px");
        $(".paginationFake").width($(".paginationFake li").width() * $(".paginationFake li").length);
        if (!$(".paginationFake li.active").index() == 0) {
            $(".paginationFake").css("left", parseFloat((-$(".paginationFake li").width()) * ($(".paginationFake li.active").index() - 1)))
        }
        $(".languagesMobile").css("left", $(window).width());
        resizeSliderPortfolio()
    }
});
if ($('#mobileVisible').css('display') == ('block')) { //MOBILE
    $('#premios').fadeOut();
}

function validacao(campo) {
    $.post('assets/php/email.php', {
            nome: $('#nome').val(),
            email: $('#email').val(),
            assunto: $('#assunto').val(),
            mensagem: $('#mensagem').val(),
            captcha: $('#captcha').val(),

            campo: campo,
            lang: 'en'
        },
        function(response) {
            //alert(response);
            var json = jQuery.parseJSON(response);
            var total_erros = 0;
            for (var i in json.error) {
                $('#' + i).parent().removeClass('error');
                if (json.error[i] == '1') {
                    total_erros++;
                    $('#' + i).parent().addClass('error');
                }
            }
            if (!campo != '' && !campo != 'undifined' && total_erros < 1) {
                //$("#form").submit();
                if (json.sucesso == 1) {
                    contactFormMensage();
                    $("#form input[type=text]").val("");
                }
            }
        });
}
})();