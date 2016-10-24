(jQuery), ! function(t) {
    "use strict";
    t.fn.swipeIt = function(a) {
        var e = t.extend({
                swipeThreshold: 40,
                scrollThreshold: 10,
                draggable: !1,
                preventTouchOn: "",
                onSwipeMove: null,
                onSwipeEnd: null
            }, a),
            i = this,
            n = 0,
            s = 0,
            o = e.swipeThreshold,
            r = "ontouchend" in document,
            l = r ? "touchstart" : "pointerdown",
            d = r ? "touchmove" : "pointermove",
            c = r ? "touchend" : "pointermove",
            u = function(t) {
                t.stopPropagation(), n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t, i.on(d, h)
            },
            h = function(a) {
                if (!t(a.target).closest(e.preventTouchOn).length || "" === e.preventTouchOn) {
                    if (s = a.originalEvent.touches ? a.originalEvent.touches[0].pageX : a, Math.abs(n - s) > e.scrollThreshold && a.preventDefault(), e.draggable) {
                        var o;
                        o = -(n - s), e.onSwipeMove(o)
                    }
                    if (s === n) return !1;
                    i.on(c, p)
                }
            },
            p = function() {
                var t;
                Math.abs(s - n) > o && (t = s > n ? "left" : "right", e.onSwipeEnd(t)), i.off(d, h), i.off(c, p)
            };
        return i.on(l, u), this
    }
}(jQuery), ! function(t, a, e, i) {
    "use strict";
    var n, s = function(a, i) {
            var n = t.extend({}, t.fn.horizon.tmhOpts, i);
            if (a = t(a), w) return a.css({
                opacity: 1,
                visibility: "visible"
            }), !1;
            a.data("scrolling", !1).css("-webkit-backface-visibility", "hidden");
            var s = (a.data("animate-in") + "").split(";");
            t.each(s, function(t, e) {
                e = e.split(":");
                var i = e[0],
                    n = e[1];
                "opacity" === i && a.data("o", n), "scale" === i && a.data("s", n), "easing" === i && a.data("e", n), "transX" === i && a.data("tx", parseFloat(n)), "transY" === i && a.data("ty", parseFloat(n)), "transZ" === i && a.data("tz", parseFloat(n)), "rotateX" === i && a.data("rx", parseFloat(n)), "rotateY" === i && a.data("ry", parseFloat(n)), "rotateZ" === i && a.data("rz", parseFloat(n)), "duration" === i && a.data("du", parseFloat(n)), "delay" === i && a.data("de", parseFloat(n))
            }), t(e).on("scroll", function() {
                o(a, n)
            }), t(e).on("resize", function() {
                o(a, n)
            }), d(a, n), o(a, n)
        },
        o = function(t, a) {
            t.data("scrolling") || (requestAnimationFrame(function() {
                r(t, a)
            }), t.data("scrolling", !0))
        },
        r = function(t, a) {
            if (l(t, a)) {
                var e = t.data("du") ? t.data("du") : a.speed,
                    i = t.data("de") ? t.data("de") : 0,
                    n = t.data("e") ? b[t.data("e")] : b[a.easing];
                p ? c(t, 1, 0, 0, 0, 0, 0, 0, 1, e, i, n, a) : t.css({
                    visibility: "visible"
                }).stop().animate({
                    opacity: 1
                }, a.speed, a.easingFallback, function() {
                    a.inView && a.inView()
                })
            }
            t.data("scrolling", !1)
        },
        l = function(a, i) {
            var n = t(e).scrollTop(),
                s = n + t(e).height(),
                o = a.data("threshold") ? parseFloat(a.data("threshold")) : i.threshold,
                r = a.data("ty") ? parseFloat(a.data("ty")) : 0,
                l = a.offset().top,
                c = a.offset().top - r,
                u = c + a.outerHeight() - a.outerHeight() * o,
                h = c + a.outerHeight() * o;
            return (l - n > t(e).height() || l - n < -a.outerHeight()) && (i.recurring && d(a, i), i.outOfView && i.outOfView()), s >= h && u >= n
        },
        d = function(t) {
            var a = t.data("o") ? parseFloat(t.data("o")) : 0,
                e = t.data("tx") ? parseFloat(t.data("tx")) : 0,
                i = t.data("ty") ? parseFloat(t.data("ty")) : 0,
                n = t.data("tz") ? parseFloat(t.data("tz")) : 0,
                s = t.data("rx") ? parseFloat(t.data("rx")) : 0,
                o = t.data("ry") ? parseFloat(t.data("ry")) : 0,
                r = t.data("rz") ? parseFloat(t.data("rz")) : 0,
                l = t.data("s") ? parseFloat(t.data("s")) : 1;
            t.css(p ? {
                transition: "none",
                transform: "translate3d(" + e + "px, " + i + "px, " + n + "px)rotate3d( 1, 0, 0, " + s + "deg )rotate3d( 0, 1, 0, " + o + "deg )rotate3d( 0, 0, 1, " + r + "deg )scale3d(" + l + ", " + l + ", " + l + ")",
                opacity: a,
                visibility: "hidden"
            } : {
                opacity: 0
            })
        },
        c = function(a, e, i, n, s, o, r, l, d, c, u, h, p) {
            var f = {};
            f.transform = "translate3d(" + i + "px, " + n + "px, " + s + "px)rotate3d( 1, 0, 0, " + o + "deg)rotate3d( 0, 1, 0, " + r + "deg)rotate3d( 0, 0, 1, " + l + "deg)scale3d(" + d + ", " + d + ", " + d + ")", f.transitionProperty = g + ", opacity", f.transitionDuration = c + "ms", f.transitionDelay = u + "ms", f.transitionTimingFunction = h, f.visibility = "visible", f.opacity = e, a.css(f).on(v, function(a) {
                a.stopPropagation(), t(this).off(v), p.inView && p.inView()
            })
        },
        u = a.body || a.documentElement,
        h = u.style,
        p = h.transition !== i || h.WebkitTransition !== i || h.MozTransition !== i || h.MsTransition !== i || h.OTransition !== i,
        f = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var m in f) h[f[m]] !== i && (n = "-" + f[m].replace("Transform", "").toLowerCase());
    var g = n + "-transform",
        v = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        b = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.18,1.92,.59,1.33)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeHickUp: "cubic-bezier(.28,1.78,.01,0)"
        },
        w = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (w = !0),
    function() {
        for (var t = 0, a = ["ms", "moz", "webkit", "o"], i = 0; i < a.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[a[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[a[i] + "CancelAnimationFrame"] || e[a[i] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame || (e.requestAnimationFrame = function(a) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - t)),
                s = e.setTimeout(function() {
                    a(i + n)
                }, n);
            return t = i + n, s
        }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), t.fn.horizon = function(a) {
        return this.each(function() {
            var e = t(this);
            if (!e.data("horizon")) {
                var i = new s(this, a);
                e.data("horizon", i)
            }
        })
    }, t.fn.horizon.tmhOpts = {
        easing: "swing",
        easingFallback: "swing",
        speed: 500,
        threshold: 1,
        recurring: !0,
        inView: null,
        outOfView: null
    }
}(jQuery, document, window), ! function(t, a, e, i) {
    "use strict";

    function n(a) {
        a.find(".tms-caption").each(function() {
            var a = t(this),
                e = (a.data("animate-in") + "").split(";");
            a.addClass(a.is("[data-no-scale]") ? "no-scale" : "scale"), t.each(e, function(t, e) {
                e = e.split(":");
                var i = e[0],
                    n = e[1];
                "opacity" === i && a.data("o", n), "scale" === i && a.data("s", n), "easing" === i && a.data("e", n), "transX" === i && a.data("tx", parseFloat(n)), "transY" === i && a.data("ty", parseFloat(n)), "transZ" === i && a.data("tz", parseFloat(n)), "rotateX" === i && a.data("rx", parseFloat(n)), "rotateY" === i && a.data("ry", parseFloat(n)), "rotateZ" === i && a.data("rz", parseFloat(n)), "duration" === i && a.data("du", parseFloat(n)), "delay" === i && a.data("de", parseFloat(n))
            }), a.data("w", parseFloat(a.css("width"))), a.data("h", parseFloat(a.css("height"))), a.data("fs", parseFloat(a.css("font-size"))), a.data("lh", parseFloat(a.css("line-height"))), a.data("pt", parseFloat(a.css("padding-top"))), a.data("pr", parseFloat(a.css("padding-right"))), a.data("pb", parseFloat(a.css("padding-bottom"))), a.data("pl", parseFloat(a.css("padding-left"))), a.data("mt", parseFloat(a.css("margin-top"))), a.data("mr", parseFloat(a.css("margin-right"))), a.data("mb", parseFloat(a.css("margin-bottom"))), a.data("ml", parseFloat(a.css("margin-left"))), a.data("bt", parseFloat(a.css("border-top-width"))), a.data("br", parseFloat(a.css("border-right-width"))), a.data("bb", parseFloat(a.css("border-bottom-width"))), a.data("bl", parseFloat(a.css("border-left-width")))
        })
    }

    function s(a, i, n) {
        var s = a.find(".tms-slide"),
            r = 0;
        s.each(function() {
            var s = t(this),
                l = s.find("img").length,
                d = s.find("iframe, video").length;
            s.children(".tms-caption").length, w(s, i);
            var c = t('<div class="tm-loader"><div id="circle" /></div>');
            if (l > 0 && (i.lazyLoad ? c.appendTo(s) : a.find(c).length || c.appendTo(a)), d) {
                V && s.is("[data-video-bkg]") && s.children("video").css({
                    display: "none"
                });
                var u = s.find("iframe, video");
                S(u, i), v(s, i), g(a, i)
            }
            l ? s.find("img").each(function(a, d) {
                d = t(this).data("src");
                var c = d.substr(d.lastIndexOf("."));
                (e.isRetinaDevice() && i.retinaSupport || e.isRetinaDevice() && t(this).is("[data-retina]")) && (!V && !i.retinaSupportMobile || V && i.retinaSupportMobile) && (d.match(/\.(svg)/i) || (d = t(this).data("src").replace(c, i.retinaSuffix + c))), t(this).css({
                    opacity: 0
                }).attr("src", d).one("load", function() {
                    t(this).data("loaded", !0).css({
                        opacity: 1
                    }), a++, a === l && (r++, o(s, r, i, n))
                }).one("error", function() {
                    console.log("Error src:" + d)
                })
            }) : (r++, v(s, i), g(a, i), o(s, r, i, n))
        })
    }

    function o(t, a, e, i) {
        var n = t.closest(".tm-slider-container"),
            s = n.find(".tms-slides"),
            o = n.find("li.active"),
            r = null,
            l = null;
        if (t.find(".no-transition").css({
                visibility: "visible"
            }), 0 === n.height() && t.hasClass("active")) {
            o.children("img").css({
                maxHeight: "none"
            });
            var d = o.children("img").height();
            n.data("refH", d), n.css({
                height: d + "px"
            }), o.children("img").css({
                maxHeight: "100%"
            })
        }
        if (v(t, e), g(n, e), e.carousel && !e.lazyLoad && (s.children().css({
                opacity: 1
            }), s.css({
                opacity: 0
            })), n.find("iframe, video").css({
                opacity: 1
            }), a === s.children().length && e.onLoadEnd && e.onLoadEnd(), e.lazyLoad || a !== s.children().length ? e.lazyLoad && 1 === a && (n.data("loaded", !0), e.autoAdvance && i.initSlideshow()) : (n.data("loaded", !0), e.autoAdvance && i.initSlideshow()), e.lazyLoad) {
            if (t.find(".tm-loader").length && t.find(".tm-loader").remove(), (t.is(o) || e.carouselVisible > 1) && t.find(".tms-caption").show(), !t.hasClass("active")) return !1;
            O ? (o.css({
                transition: "none",
                opacity: 0
            }), clearTimeout(l), l = setTimeout(function() {
                o.css({
                    transitionProperty: "opacity",
                    transitionDuration: "700ms",
                    opacity: 1
                })
            }, 50)) : t.animate({
                opacity: 1
            }), clearTimeout(r), r = setTimeout(function() {
                p(o, e)
            }, 300)
        } else a === s.children().length && (n.find(".tm-loader").length && n.find(".tm-loader").remove(), o.find(".tms-caption").show(), e.carouselVisible > 1 && n.find(".tms-caption").show(), O ? e.carousel ? s.css({
            transitionProperty: "opacity",
            transitionDuration: "700ms",
            opacity: 1
        }) : o.css({
            transitionProperty: "opacity",
            transitionDuration: "700ms",
            opacity: 1
        }) : e.carousel ? s.animate({
            opacity: 1
        }) : o.animate({
            opacity: 1
        }), clearTimeout(r), r = setTimeout(function() {
            p(o, e)
        }, 300), n.find(".tms-arrow-nav, .tms-pagination").css({
            display: "block"
        }))
    }
    var r = function(o, r) {
            var c = t.extend({}, t.fn.avalancheSlider.tmsOpts, r),
                p = t(o),
                b = this;
            c.scaleUnder = p.data("scale-under") ? p.data("scale-under") : c.scaleUnder;
            var y = c.fulscreen ? t(e).width() : c.fullwidth ? c.scaleUnder : parseFloat(p.data("width") ? p.data("width") : p.css("width")),
                x = c.fulscreen ? t(e).height() : parseFloat(p.data("height") ? p.data("height") : p.css("height"));
            c.animation = p.data("animation") ? p.data("animation") : c.animation, c.easing = p.data("easing") ? p.data("easing") : c.easing, c.speed = p.data("speed") ? p.data("speed") : c.speed, c.carousel = p.data("carousel") ? p.data("carousel") : c.carousel, c.carouselVisible = p.data("carousel-visible-slides") ? p.data("carousel-visible-slides") : c.carouselVisible, c.autoAdvance = p.is("[data-auto-advance]") ? !0 : c.autoAdvance, c.interval = p.data("auto-advance-interval") ? p.data("auto-advance-interval") : c.interval, p.data("transitioning", !1).data("setup", !1).data("loaded", !1).data("refW", y).data("refH", x).data("carousel-height", x), n(p);
            var C = p.find(".tms-slides").children("li:first-child").addClass("active");
            c.lazyLoad || C.css({
                opacity: 0
            }), v(C, c), g(p, c);
            var z = p.find(".tms-slides"),
                S = [];
            if (z.children(".tms-slide").each(function(a) {
                    a++, t(this).attr("id", "tms-slide-" + a), S.push(t(this).attr("id")), c.carousel || t(this).not(".active").css(O ? {
                        transition: "none",
                        transform: "translate3d( 100%, 0, 0)"
                    } : {
                        left: "100%"
                    }), (c.forceFit || t(this).is("[data-force-fit]")) && t(this).addClass("tms-forcefit")
                }), V && (c.autoPlay = !1, c.useVideoAPI = !1), c.fullscreen && (p.css({
                    top: 0,
                    left: 0
                }).addClass("tms-fullscreen"), c.carouselVisible = 1), c.parallax = p.is("[data-parallax]") ? !0 : c.parallax, c.parallaxSpeed = p.data("parallax-speed") ? p.data("parallax-speed") : c.parallaxSpeed, c.parallaxScaleOut = p.is("[data-parallax-scale-out]") ? !0 : c.parallaxScaleOut, c.parallaxFadeOut = p.is("[data-parallax-fade-out]") ? !0 : c.parallaxFadeOut, c.captionScaling || p.addClass("tms-caption-no-scaling"), !c.carousel && c.carouselVisible && (c.carouselVisible = 1), c.carouselVisible > 1 && (c.animation = "slide"), c.carousel && p.addClass("tms-carousel"), c.carouselScaleHeight && p.addClass("tms-scalable-height"), c.navArrows && z.children().length > 1) {
                var T = t('<a href="#" />').attr("id", "tms-prev").addClass("tms-arrow-nav").appendTo(p),
                    k = t('<a href="#" />').attr("id", "tms-next").addClass("tms-arrow-nav").appendTo(p);
                T.each(function() {
                    t(this).on("click", function(t) {
                        t.preventDefault(), c.autoAdvance && p.data("loaded") && b.resetSlideshow(), b.prevSlide()
                    })
                }), k.each(function() {
                    t(this).on("click", function(t) {
                        t.preventDefault(), c.autoAdvance && p.data("loaded") && b.resetSlideshow(), b.nextSlide()
                    })
                }), c.lazyLoad && p.find(".tms-arrow-nav").css({
                    display: "block"
                })
            }
            if (c.navPagination && z.children().length > 1) {
                for (var I = t("<div>").addClass("tms-pagination").appendTo(p), A = 1; A < z.children().length + 1; A++) p.find(I).append('<a href="#" id="tms-pagination-' + A + '" data-index="' + A + '" class="tms-bullet-nav" />');
                var M = p.find("bullets" === c.paginationType ? ".tms-bullet-nav" : ".tms-thumb-nav");
                M.each(function() {
                    t(this).on("click", function() {
                        return C = p.find("li.active"), t(this).hasClass("active") ? !1 : (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), parseFloat(t(this).data("index")) > parseFloat(I.find(".active").data("index")) ? b.slideTo(t(this).data("index"), "next") : b.slideTo(t(this).data("index"), "prev"), !1)
                    })
                }), I.find(".tms-bullet-nav:first-child").addClass("active"), c.lazyLoad && I.css({
                    display: "block"
                })
            }
            if (c.navShowOnHover && p.addClass("show-on-hover"), c.navKeyboard && z.children().length > 1) {
                var H = [];
                t(a).on("keydown", function(t) {
                    return H[t.keyCode] = !0, H[37] && H[39] ? !1 : (H[37] ? (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), c.lazyLoad ? b.prevSlide() : p.data("loaded") && b.prevSlide()) : H[39] && (c.autoAdvance && p.data("loaded") && b.resetSlideshow(), c.lazyLoad ? b.nextSlide() : p.data("loaded") && b.nextSlide()), i)
                }).on("keyup", function(t) {
                    H[t.keyCode] = !1
                })
            }
            p.swipeIt({
                draggable: !1,
                onSwipeMove: function() {},
                onSwipeEnd: function(t) {
                    "left" === t ? b.prevSlide() : b.nextSlide()
                }
            }), t(e).on("resize", function() {
                C = p.find("li.active"), c.carousel && c.carouselVisible > 1 ? z.children(".tms-slide").each(function() {
                    v(t(this), c)
                }) : v(C, c), g(p, c), p.addClass("resizing"), F(function() {
                    p.removeClass("resizing")
                }, 300, "resize")
            }), p.parent().hasClass("tm-slider-parallax-container") && c.parallax ? (t(e).on("scroll", function() {
                l(p, c)
            }), d(p, c)) : !p.parent().hasClass("tm-slider-parallax-container") && c.parallax && console.log("Add the class tm-slider-parallax-container to slider parent"), c.onSetup && c.onSetup(), p.data("setup", !0), p.data("first-load", !0);
            var P, _, D, E, B, W, L, j = null,
                $ = null;
            b.initSlideshow = function() {
                return P || z.children().length < 2 ? !1 : (c.autoAdvance = !0, !V && c.pauseOnHover && (z.on("mouseleave ", b.resumeSlideshow), z.on("mouseenter ", b.pauseSlideshow)), c.showProgressBar && (L = t("<div>").addClass("tms-progress-bar").appendTo(p)), b.startSlideshow(), R(c.interval), _ = (new Date).getTime(), B = c.interval, c.onSlideshowStart && c.onSlideshowStart(), i)
            }, b.startSlideshow = function(t) {
                t = t ? E : c.interval, P = setInterval(function() {
                    t !== c.interval && (clearInterval(P), t = c.interval, B = c.interval, b.startSlideshow()), _ = (new Date).getTime(), i !== L && L.css({
                        transition: "none",
                        width: "0px"
                    }), R(c.interval), b.nextSlide()
                }, t)
            }, b.pauseSlideshow = function() {
                return W || !P ? !1 : (clearInterval(P), D = (new Date).getTime(), E = 50 > B - (D - _) ? 50 : B - (D - _), B = 0 === B ? c.interval : E, i !== L && L.stop().css({
                    width: L.width() + "px"
                }), W = !0, c.onSlideshowPause && c.onSlideshowPause(), i)
            }, b.resumeSlideshow = function() {
                return W ? (clearInterval(P), p.data("ssPaused", !1), _ = (new Date).getTime(), R(E), b.startSlideshow(E), W = !1, i) : !1
            }, b.resetSlideshow = function() {
                return P ? (clearInterval(P), i !== L && L.css({
                    transition: "none",
                    width: "0px"
                }), R(c.interval), _ = (new Date).getTime(), E = c.interval, B = c.interval, b.startSlideshow(c.interval), i) : !1
            }, b.endSlideshow = function() {
                return P ? (clearInterval(P), P = "", W = !1, !V && c.pauseOnHover && (z.off("mouseleave ", b.resumeSlideshow), z.off("mouseenter ", b.pauseSlideshow)), i !== L && L.remove(), c.onSlideshowEnd && c.onSlideshowEnd(), i) : !1
            };
            var R = function(t) {
                return i === L ? !1 : (O ? (clearTimeout(j), j = setTimeout(function() {
                    L.css({
                        transitionProperty: "width",
                        width: "100%",
                        transitionDuration: t + "ms",
                        transitionTimingFunction: "ease"
                    })
                }, 50)) : L.stop(!0, !0).animate({
                    width: "100%"
                }, t), i)
            };
            b.nextSlide = function() {
                if (p.data("transitioning")) return !1;
                var a;
                C = p.find("li.active");
                var e = S[t.inArray(C.attr("id"), S) + 1];
                if (a = t.inArray(e, S) + 1 === 0 ? 1 : t.inArray(e, S) + 1, c.carousel && c.carouselVisible > 1) {
                    var i = m(p, c);
                    1 !== i && (a = a === z.children().length - (i - 2) ? 1 : t.inArray(e, S) + 1)
                }
                this.slideTo(a, "next")
            }, b.prevSlide = function() {
                if (p.data("transitioning")) return !1;
                var a;
                C = p.find("li.active");
                var e = S[t.inArray(C.attr("id"), S) - 1];
                if (a = t.inArray(e, S) + 1 === 0 ? z.children().length : t.inArray(e, S) + 1, c.carousel && c.carouselVisible > 1) {
                    var i = m(p, c);
                    a = a === z.children().length ? z.children().length - (i - 1) : t.inArray(e, S) + 1
                }
                this.slideTo(a, "prev")
            }, b.slideTo = function(a, e) {
                if (p.data("first-load", !1), e || (C = p.find("li.active")), p.data("transitioning") || a === t.inArray(C.attr("id"), S) + 1) return !1;
                f(p, a);
                var i = p.width(),
                    n = "slide" === c.animation ? i : 0;
                n *= c.carousel ? a - 1 : 1;
                var s = p.find("#tms-slide-" + a);
                s.addClass("target").css({
                    zIndex: 2,
                    opacity: 0 === n ? 0 : 1
                }), C.css({
                    zIndex: 1
                }), w(s, c), (s.children("img").data("loaded") || !s.children("img").length) && v(s, c), g(p, c, s), e || (e = "next"), e = c.carousel ? 1 : "next" === e ? 1 : -1;
                var o = m(p, c);
                O ? c.carousel ? u(z, 1, -(n / o) * e, 0, 0, 0, 0, 0, 1, c.speed, 0, Q[c.easing], c) : (s.css({
                    transition: "none",
                    transform: "translate3d(" + n * e + "px, 0, 0)"
                }), clearTimeout($), $ = setTimeout(function() {
                    u(C, 1, -n * e, 0, 0, 0, 0, 0, 1, c.speed, 0, Q[c.easing], c), u(s, 1, 0, 0, 0, 0, 0, 0, 1, c.speed, 0, Q[c.easing], c)
                }, 50)) : c.carousel ? (p.data("transitioning", !0), z.animate({
                    opacity: 1,
                    left: -(n / o) * e + "px"
                }, c.speed, c.easingFallback, function() {
                    h(p, c)
                })) : (p.data("transitioning", !0), s.css({
                    left: i * e + "px",
                    visibility: "visible"
                }).animate({
                    opacity: 1,
                    left: "0px"
                }, c.speed, c.easingFallback, function() {
                    h(p, c)
                }), C.animate({
                    left: -i * e + "px"
                }, c.speed, c.easingFallback))
            }, s(p, c, b)
        },
        l = function(a, i) {
            var n = t(e);
            n.data("animating") || (n.data("animating", !0), e.requestAnimationFrame(function() {
                d(a, i), n.data("animating", !1)
            }))
        },
        d = function(a, i) {
            var n = t(e),
                s = n.scrollTop(),
                o = (n.height(), a.parent().height() + a.parent().offset().top - s),
                r = s * i.parallaxSpeed,
                l = i.parallaxScaleOut ? 2 - o / a.parent().height() : 1;
            l = 1 > l ? 1 : l;
            var d = i.parallaxFadeOut ? o / a.parent().height() : 1;
            !V && O && c(a.parent()) && a.css({
                transform: "translate3d( 0, " + -r + "px, 0) scale3d( " + l + "," + l + ", 1 )",
                opacity: d.toFixed(2)
            })
        },
        c = function(a) {
            var i = t(e).scrollTop(),
                n = i + t(e).height(),
                s = a.offset().top,
                o = s + a.outerHeight();
            return n >= s && o >= i
        },
        u = function(a, e, i, n, s, o, r, l, d, c, u, p, f) {
            var m = a.closest(".tm-slider-container");
            (a.hasClass("active") || a.hasClass("target") || a.hasClass("tms-slides")) && (m.data("transitioning", !0), f.onSlideBefore && f.onSlideBefore());
            var g = {};
            g.transform = "translate3d(" + i + "px, " + n + "px, " + s + "px)rotate3d( 1, 0, 0, " + o + "deg)rotate3d( 0, 1, 0, " + r + "deg)rotate3d( 0, 0, 1, " + l + "deg)scale3d(" + d + ", " + d + ", " + d + ")", g.transitionProperty = H + ", opacity", g.transitionDuration = c + "ms", g.transitionDelay = u + "ms", g.transitionTimingFunction = p, g.visibility = "visible", g.opacity = e, a.css(g).on(P, function(a) {
                a.stopPropagation(), t(this).off(P), (t(this).hasClass("target") || t(this).hasClass("tms-slides")) && h(m, f), t(this).hasClass("tms-caption") && t(this).css({
                    transition: ""
                })
            })
        },
        h = function(t, a) {
            t.data("transitioning", !1), a.onSlideAfter && a.onSlideAfter();
            var e = t.find("li.active"),
                n = t.find("li.target");
            return y(e, "pause", a), 1 === a.carouselVisible && e.find(".tms-caption").not(".no-transition").css({
                display: "none",
                visibility: "hidden"
            }), a.carousel || e.css({
                visibility: "hidden"
            }), e.removeClass("active"), n.removeClass("target").addClass("active"), e = n, y(e, "play", a), a.carouselVisible > 1 ? !1 : (p(e, a), i)
        },
        p = function(a, e) {
            a.find(".tms-caption").not(".no-transition").show().each(function() {
                var a = t(this),
                    i = t(this).data("du") ? a.data("du") : e.speed,
                    n = t(this).data("de") ? a.data("de") : 0,
                    s = t(this).data("e") ? Q[a.data("e")] : Q[e.easing],
                    o = null;
                O ? (clearTimeout(o), o = setTimeout(function() {
                    u(a, 1, 0, 0, 0, 0, 0, 0, 1, i, n, s)
                }, 500)) : (s = e.easingFallback, a.delay(n).css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, i, s))
            })
        },
        f = function(t, a) {
            var e = t.find(".tms-pagination");
            e.find(".active").removeClass("active"), e.find("#tms-pagination-" + a).addClass("active")
        },
        m = function(a, i) {
            var n;
            return n = t(e).width() < 768 || t(e).width() > 959 || i.carouselVisible <= 3 ? t(e).width() < 480 || t(e).width() > 767 || i.carouselVisible <= 2 ? t(e).width() > 479 ? i.carouselVisible : 1 : 2 : 3
        },
        g = function(a, e) {
            if (!e.carousel) return !1;
            var i, n, s = a.find(".tms-slides"),
                o = a.find("li.active"),
                r = o.index(),
                l = a.find(".tms-pagination"),
                d = s.children().length,
                c = m(a, e),
                u = a.width() / c,
                h = 0,
                p = null;
            s.css({
                overflow: "visible"
            }).children().each(function(a) {
                e.carouselVisible = 0 === e.carouselVisible ? 1 : e.carouselVisible, 1 === e.carouselVisible ? (t(this).css(O ? {
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    transform: "translate3d(" + u * a + "px, 0, 0)"
                } : {
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    left: u * a + "px"
                }), a++) : t(this).css({
                    width: u + "px",
                    opacity: 1,
                    visibility: "visible",
                    "float": "left",
                    position: "relative"
                }), h = h > t(this).outerHeight() ? h : t(this).outerHeight()
            }), 2 === c && r > s.children().length - 2 ? (i = s.children().length - 1, n = !0) : 3 === c && r > s.children().length - 3 ? (i = s.children().length - 2, n = !0) : r > s.children().length - c ? (i = s.children().length - c + 1, n = !0) : (i = r, n = !1), l.children().hide().slice(0, s.children().length - c + 1).show(), n && (o.removeClass("active"), s.find("li:nth-child(" + i + ")").addClass("active"), f(a, i)), O ? (a.data("transitioning") || s.css({
                width: u * d + "px",
                transition: "none",
                transform: "translate3d(" + -(u * i) + "px, 0, 0)"
            }), clearTimeout(p), p = setTimeout(function() {
                s.css({
                    transitionProperty: "opacity, " + H,
                    transitionDuration: e.speed + "ms"
                })
            }, 50)) : s.css({
                width: u * d + "px",
                left: -(u * i) + "px"
            })
        },
        v = function(a, i) {
            var n = a.closest(".tm-slider-container, .featured-media"),
                s = n.parent().width(),
                o = n.data("refW"),
                r = n.data("refH"),
                l = i.fullscreen ? t(e).width() / t(e).height() : o / r,
                d = n.data("external-padding") ? parseFloat(n.data("external-padding")) : i.externalPadding,
                c = i.fullscreen || i.fullwidth ? t(e).width() - d : s,
                u = i.fullscreen ? t(e).height() - d : i.carousel && i.carouselVisible > 1 && !i.carouselScaleHeight ? r : i.fullwidth && s / l > r ? r - d : s / l - d,
                h = c / u,
                p = i.carouselScaleHeight && 1 === i.carouselVisible ? !0 : !1;
            if (n.data("newSW", c), n.data("newSH", u), i.carousel ? n.css({
                    width: Math.round(c) + "px",
                    height: n.data("first-load") && p ? n.find("li:first-child").find(".tms-content-scalable, img").outerHeight() + "px" : !n.data("first-load") && p ? a.find(".tms-content-scalable, img").outerHeight() : "auto"
                }) : (n.css({
                    width: Math.round(c) + "px",
                    height: u > i.scaleMinHeight || "auto" === i.scaleMinHeight ? Math.round(u) + "px" : i.scaleMinHeight + "px"
                }), i.parallax && n.parent().css({
                    height: n.height() + "px"
                }), u = u > i.scaleMinHeight || "auto" === i.scaleMinHeight ? u : i.scaleMinHeight, n.data("newSH", u)), !n.data("setup") || i.carousel && i.carouselVisible > 1) return !1;
            var f = a.is("[data-image]") ? "image" : "video",
                m = a.is("[data-video-bkg]") ? !0 : !1,
                g = a.is("[data-video-ratio]") ? parseFloat(a.data("video-ratio")) : 1.778;
            a.find("img, iframe, video, .mejs-container").not(".tms-caption img, .tms-caption iframe, .tms-caption video").each(function() {
                var e, n, s;
                if ("image" === f ? (e = t(this).width(), n = t(this).height()) : "video" === f && ((!i.respectRatio && !m || i.fullscreen && !m) && a.addClass("tms-video-no-ratio"), m ? (e = i.fullwidth ? u * g : c, n = i.fullwidth ? u : c / g) : (e = t(this).attr("width") && c > t(this).attr("width") ? t(this).attr("width") : c, n = e / g)), s = e / n, "image" === f && i.fullscreen || i.forceFit || t(this).parent().is("[data-force-fit]") || "video" === f && m) {
                    if (t(this).is("img") && !t(this).data("loaded")) return !1;
                    t(this).css(h > s ? {
                        width: !i.fullwidth || i.forceFit || t(this).parent().is("[data-force-fit]") ? c + "px" : "auto",
                        height: Math.round(c / s) + "px",
                        top: Math.round(-((c / s - u) / 2)) + "px",
                        left: 0
                    } : {
                        width: !i.fullwidth || i.forceFit || t(this).parent().is("[data-force-fit]") || m ? Math.round(u * s) + "px" : "auto",
                        height: u + "px",
                        top: 0,
                        left: Math.round(-((u * s - c) / 2)) + "px"
                    })
                } else "video" === f && t(this).css({
                    width: Math.floor(e) + "px",
                    height: Math.floor(n) + "px",
                    top: Math.floor((u - n) / 2) + "px",
                    left: Math.floor((c - e) / 2) + "px"
                })
            }), b(a, i)
        },
        b = function(a, e) {
            var n = a.closest(".tm-slider-container"),
                s = n.data("newSW"),
                o = n.data("newSH"),
                r = n.data("refW"),
                l = n.data("refH");
            return !e.captionScaling || e.carouselVisible > 1 ? !1 : (a.find(".tms-caption").each(function() {
                if (!t(this).is("[data-no-scale]")) {
                    var a = t(this),
                        i = a.data("x"),
                        n = a.data("y"),
                        d = a.data("w"),
                        c = a.data("pt"),
                        u = a.data("pr"),
                        h = a.data("pb"),
                        p = a.data("pl"),
                        f = a.data("mt"),
                        m = a.data("mr"),
                        g = a.data("mb"),
                        v = a.data("ml"),
                        b = a.data("bt"),
                        w = a.data("br"),
                        y = a.data("bb"),
                        x = a.data("bl"),
                        C = a.data("fs"),
                        z = 0 === a.data("lh") ? C : a.data("lh"),
                        S = a.is("[data-offsetx]") ? parseFloat(a.data("offsetx")) : 0,
                        F = a.is("[data-offsety]") ? parseFloat(a.data("offsety")) : 0,
                        T = 0 > s * (S / r) ? s * (S / r) : s * (S / r) > S ? S : s * (S / r),
                        k = 0 > o * (F / l) ? s * (F / r) : s * (F / r) > F ? F : o * (F / l);
                    e.fullwidth && F > k && 0 > k && (k = F);
                    var I;
                    a.find("img, iframe, video").length && (I = s * (d / r) > d ? d : s * (d / r) > s ? s : s * (d / r)), a.css(a.find("img").length || a.find("iframe, video").length ? {
                        width: I + "px",
                        height: a.children("iframe, video").length ? I / 1.778 + "px" : "auto"
                    } : {
                        fontSize: s * (C / r) > C ? C : s * (C / r) + "px",
                        lineHeight: s * (z / r) > z ? z + "px" : s * (z / r) + "px",
                        paddingTop: s * (c / r) > c ? c : s * (c / r) + "px",
                        paddingRight: s * (u / r) > u ? u : s * (u / r) + "px",
                        paddingBottom: s * (h / r) > h ? h : s * (h / r) + "px",
                        paddingLeft: s * (p / r) > p ? p : s * (p / r) + "px",
                        marginTop: s * (f / r) > f ? f : s * (f / r) + "px",
                        marginRight: s * (m / r) > m ? m : s * (m / r) + "px",
                        marginBottom: s * (g / r) > g ? g : s * (g / r) + "px",
                        marginLeft: s * (v / r) > v ? v : s * (v / r) + "px",
                        borderTopWidth: s * (b / r) > b ? b : Math.ceil(s * (b / r)) + "px",
                        borderRightWidth: s * (w / r) > w ? w : Math.ceil(s * (w / r)) + "px",
                        borderBottomWidth: s * (y / r) > y ? y : Math.ceil(s * (y / r)) + "px",
                        borderLeftWidth: s * (x / r) > x ? x : Math.ceil(s * (x / r)) + "px",
                        whiteSpace: "nowrap"
                    }), a.css({
                        top: "top" === n ? 0 + k : "bottom" === n ? o - a.outerHeight() - k : (o - a.outerHeight()) / 2 + k + "px",
                        left: "left" === i ? 0 + T : "right" === i ? s - a.outerWidth() - T : (s - a.outerWidth()) / 2 + T + "px"
                    })
                }
            }), i)
        },
        w = function(a, e) {
            return e.carouselVisible > 1 ? !1 : (a.find(".tms-caption").not(".no-transition").each(function() {
                var a = t(this),
                    e = a.data("o") ? parseFloat(a.data("o")) : 0,
                    i = a.data("tx") ? parseFloat(a.data("tx")) : 0,
                    n = a.data("ty") ? parseFloat(a.data("ty")) : 0,
                    s = a.data("tz") ? parseFloat(a.data("tz")) : 0,
                    o = a.data("rx") ? parseFloat(a.data("rx")) : 0,
                    r = a.data("ry") ? parseFloat(a.data("ry")) : 0,
                    l = a.data("rz") ? parseFloat(a.data("rz")) : 0,
                    d = a.data("s") ? parseFloat(a.data("s")) : 1;
                a.css(O ? {
                    transition: "none",
                    transform: "translate3d(" + i + "px, " + n + "px, " + s + "px)rotate3d( 1, 0, 0, " + o + "deg)rotate3d( 0, 1, 0, " + r + "deg)rotate3d( 0, 0, 1, " + l + "deg)scale3d(" + d + ", " + d + ", " + d + ")",
                    opacity: e
                } : {
                    opacity: 0
                })
            }), i)
        },
        y = function(a, e, n) {
            if (!n.useVideoAPI || n.carouselVisible > 1) return !1;
            var s;
            try {
                if (a.find("iframe").length) {
                    s = "#" + a.find("iframe").attr("id");
                    var o = t(s).attr("src");
                    i !== o && o.indexOf("vimeo") > -1 ? (s = $f(t(s)[0]), s.api("play" === e && n.autoPlay ? "play" : "pause")) : i !== o && o.indexOf("youtu") > -1 && (s = s.replace("#", ""), "play" === e && n.autoPlay ? x[s].playVideo() : x[s].stopVideo())
                } else a.find("video").length && (s = "#" + a.find("video").attr("id"), "play" === e && n.autoPlay ? t(s)[0].play() : t(s)[0].pause())
            } catch (r) {}
        },
        x = {},
        C = !1,
        z = !1,
        S = function(n, s) {
            if (!s.useVideoAPI || s.carouselVisible > 1) return !1;
            var o = n.attr("src"),
                r = new Date;
            if (n.attr("id", "video-" + r.getTime()), i !== o && o.indexOf("vimeo") > -1) {
                if (n.attr("src", n.attr("src") + "&player_id=" + n.attr("id")).addClass("vimeo"), !C) {
                    C = !0;
                    var l = a.createElement("script");
                    l.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
                    var d = a.getElementsByTagName("script")[0];
                    d.parentNode.insertBefore(l, d)
                }
                n.on("load", function() {
                    var a = "#" + t(this).attr("id"),
                        e = $f(t(a)[0]),
                        i = t(this).closest("li").is(":first-child") ? !0 : !1;
                    e.addEvent("ready", function() {
                        i && s.autoPlay && e.api("play"), e.addEvent("finish", function() {
                            s.replayOnEnd && e.api("play")
                        })
                    })
                })
            } else if (i !== o && o.indexOf("youtu") > -1) {
                if (n.addClass("youtube"), !z) {
                    z = !0;
                    var c = a.createElement("script");
                    c.src = "http://www.youtube.com/player_api";
                    var u = a.getElementsByTagName("script")[0];
                    u.parentNode.insertBefore(c, u)
                }
                var h = function() {
                    t(".youtube").each(function() {
                        var a = t(this).attr("id"),
                            e = t(this).closest("li").is(":first-child") ? !0 : !1;
                        x[a] = new YT.Player(a, {
                            events: {
                                onStateChange: function(t) {
                                    t.data === YT.PlayerState.ENDED && s.replayOnEnd && x[a].playVideo()
                                },
                                onReady: function() {
                                    e && s.autoPlay && x[a].playVideo()
                                }
                            }
                        })
                    })
                };
                e.onYouTubePlayerAPIReady = function() {
                    h()
                }
            } else if (n.is("video")) {
                var p = a.getElementById(n.attr("id")),
                    f = n.closest("li").is(":first-child") ? !0 : !1;
                f && s.autoPlay && (p.load(), p.autoplay = !0), n.parent().is("[data-video-bkg]") && (p.muted = s.muteBkgVideo), s.replayOnEnd && (p.loop = !0)
            }
        },
        F = function() {
            var t = {};
            return function(a, e, i) {
                i || (i = "id"), t[i] && clearTimeout(t[i]), t[i] = setTimeout(a, e)
            }
        }();
    e.isRetinaDevice = function() {
        var t = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(t).matches ? !0 : !1
    };
    var T, k = a.body || a.documentElement,
        I = k.style,
        O = I.transition !== i || I.WebkitTransition !== i || I.MozTransition !== i || I.MsTransition !== i || I.OTransition !== i,
        A = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var M in A) I[A[M]] !== i && (T = "-" + A[M].replace("Transform", "").toLowerCase());
    var H = T + "-transform",
        P = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        Q = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.18,1.92,.59,1.33)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeHickUp: "cubic-bezier(.28,1.78,.01,0)"
        },
        V = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (V = !0),
    function() {
        for (var t = 0, a = ["ms", "moz", "webkit", "o"], i = 0; i < a.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[a[i] + "RequestAnimationFrame"],
            e.cancelAnimationFrame = e[a[i] + "CancelAnimationFrame"] || e[a[i] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame || (e.requestAnimationFrame = function(a) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - t)),
                s = e.setTimeout(function() {
                    a(i + n)
                }, n);
            return t = i + n, s
        }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(), t.fn.avalancheSlider = function(a) {
        return this.each(function() {
            var e = t(this);
            if (!e.data("avalancheSlider")) {
                var i = new r(this, a);
                e.data("avalancheSlider", i)
            }
        })
    }, t.fn.avalancheSlider.tmsOpts = {
        animation: "slide",
        parallax: !1,
        easing: "easeInOutQuint",
        easingFallback: "easeInOutQuint",
        speed: 700,
        parallaxSpeed: .2,
        parallaxScaleOut: !1,
        parallaxFadeOut: !1,
        navArrows: !0,
        navPagination: !0,
        navShowOnHover: !0,
        paginationType: "bullets",
        navKeyboard: !0,
        forceFit: !1,
        fullwidth: !1,
        fullscreen: !1,
        externalPadding: 0,
        scaleUnder: 1140,
        scaleMinHeight: 214,
        captionScaling: !0,
        carousel: !1,
        carouselVisible: 1,
        carouselScaleHeight: !1,
        autoAdvance: !0,
        showProgressBar: !0,
        interval: 6e3,
        pauseOnHover: !0,
        useVideoAPI: !0,
        autoPlay: !0,
        replayOnEnd: !0,
        respectRatio: !0,
        muteBkgVideo: !1,
        lazyLoad: !0,
        retinaSupport: !0,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        onSetup: null,
        onLoadEnd: null,
        onSlideBefore: null,
        onSlideAfter: null,
        onSlideshowStart: null,
        onSlideshowPause: null,
        onSlideshowEnd: null
    }
}(jQuery, document, window),
function(t) {
    var a, e, i = t.event;
    a = i.special.debouncedresize = {
        setup: function() {
            t(this).on("resize", a.handler)
        },
        teardown: function() {
            t(this).off("resize", a.handler)
        },
        handler: function(t, n) {
            var s = this,
                o = arguments,
                r = function() {
                    t.type = "debouncedresize", i.dispatch.apply(s, o)
                };
            e && clearTimeout(e), n ? r() : e = setTimeout(r, a.threshold)
        },
        threshold: 150
    }
}(jQuery), jQuery(document).ready(function(t) {
    "use-strict";

    function a() {
        t(".masonry-container").each(function() {
            $grid = t(this).isotope({
                layoutMode: "masonry",
                itemSelector: "*[class*='col-']"
            }), $grid.imagesLoaded().progress(function() {
                $grid.isotope("layout")
            })
        })
    }

    function e() {
        t(".isotope-container").each(function() {
            var a = t(this),
                e = a.find(".iso-grid").isotope({
                    layoutMode: "packery",
                    itemSelector: ".grid-item",
                    transitionDuration: "0.4s"
                });
            e.imagesLoaded().progress(function() {
                e.isotope("layout")
            });
            var i = a.data("filter-nav") ? t(a.data("filter-nav")) : a.find(".portfolio-filter-group");
            i.find(".iso-button").on("click", function(a) {
                a.preventDefault(), e.isotope({
                    filter: t(this).attr("data-filter")
                }), t(this).siblings().removeClass("is-checked"), t(this).addClass("is-checked")
            })
        })
    }

    function i() {
        t(".portfolio-group ").each(function() {
            t(this).magnificPopup({
                delegate: ".zoom-link",
                type: "image",
                gallery: {
                    enabled: !0
                },
                mainClass: "mfp-fade",
                zoom: {
                    enabled: !0,
                    duration: 300,
                    easing: "ease-in-out",
                    opener: function(t) {
                        return t.hasClass("img-wrapper") ? t.find("img") : t.parents(".overlay")
                    }
                }
            })
        })
    }

    function n() {
        var a = t(".blog-container");
        a.isotope({
            itemSelector: ".blog-selector",
            percentPosition: !0
        })
    }

    function s() {
        function a(a) {
            t(a).each(function() {
                if ("[data-padding]" === a) var e = {
                    padding: t(this).data("padding")
                };
                else if ("[data-padding-top]" === a) var e = {
                    paddingTop: t(this).data("padding-top")
                };
                else if ("[data-padding-right]" === a) var e = {
                    paddingRight: t(this).data("padding-right")
                };
                else if ("[data-padding-bottom]" === a) var e = {
                    paddingBottom: t(this).data("padding-bottom")
                };
                else if ("[data-padding-left]" === a) var e = {
                    paddingLeft: t(this).data("padding-left")
                };
                t(this).css(e)
            })
        }

        function e(a) {
            t(a).each(function() {
                if ("[data-margin]" === a) var e = {
                    margin: t(this).data("margin")
                };
                else if ("[data-margin-top]" === a) var e = {
                    marginTop: t(this).data("margin-top")
                };
                else if ("[data-margin-right]" === a) var e = {
                    marginRight: t(this).data("margin-right")
                };
                else if ("[data-margin-bottom]" === a) var e = {
                    marginBottom: t(this).data("margin-bottom")
                };
                else if ("[data-margin-left]" === a) var e = {
                    marginLeft: t(this).data("margin-left")
                };
                t(this).css(e)
            })
        }
        t("[data-bg-color]").each(function() {
            var a = t(this).data("bg-color");
            t(this).css({
                backgroundColor: a
            })
        }), t("[data-bg-image]").each(function() {
            var a = t(this).data("bg-image");
            t(this).css({
                backgroundImage: "url(" + a + ")"
            })
        }), a("[data-padding]"), a("[data-padding-top]"), a("[data-padding-right]"), a("[data-padding-bottom]"), a("[data-padding-left]"), e("[data-margin]"), e("[data-margin-top]"), e("[data-margin-right]"), e("[data-margin-bottom]"), e("[data-margin-left]")
    }

    function o() {
        t('[data-parallax="image"]').each(function() {
            var a = t(this).position().top,
                e = (t(this).data("parallax-speed"), a - t(window).scrollTop()),
                i = -(e / 2),
                n = i + "px";
            t(this).css({
                "background-position": "50% " + n
            })
        })
    }

    function r() {
        t("#nav-trigger").click(function() {
            t("#top-menu").toggleClass("active"), t("#mobile-menu").toggleClass("active"), t("#top-menu .menu-items").removeClass("active"), t("#top-menu .menu-items").delay(50).queue(function() {
                t(this).addClass("active").clearQueue()
            })
        }), t(".has-submenu").hover(function() {
            t(this).toggleClass("active")
        })
    }

    function l() {
        window.innerHeight < 600 || window.innerWidth < 600 ? t("#header").addClass("scrolled") : t(window).scrollTop() > 10 ? t("#header").addClass("scrolled") : t("#header").removeClass("scrolled")
    }

    function d() {
        t("body").removeClass("expanded")
    }

    function c() {
        x || jQuery(".parallax-section-yes").each(function() {
            var a = "" != t(this).data("parallax-speed") ? t(this).data("parallax-speed") : 1;
            t(this).parallax("50%", .4 * a)
        })
    }
    if (t(window), a(), e(), i(), n(), t(".show-map").on("click", function(a) {
            a.preventDefault(), t(".contact-info-wrapper").toggleClass("map-open"), t(".show-info-link").toggleClass("info-open")
        }), t(".show-info-link").on("click", function(a) {
            a.preventDefault(), t(".contact-info-wrapper").toggleClass("map-open"), t(this).toggleClass("info-open")
        }), s(), o(), t(document).on("scroll", function() {
            o(), l()
        }), r(), (window.innerHeight < 600 || window.innerWidth < 600) && t("#header").addClass("scrolled"), l(), t("body").is(".menu")) {
        ! function(t, a, e, i) {
            var n = function(i, n) {
                this.elem = i, this.$elem = t(i), this.options = n, this.metadata = this.$elem.data("plugin-options"), this.$win = t(a), this.sections = {}, this.didScroll = !1, this.$doc = t(e), this.docHeight = this.$doc.height()
            };
            n.prototype = {
                defaults: {
                    navItems: "a",
                    currentClass: "current",
                    changeHash: !1,
                    easing: "swing",
                    filter: "",
                    scrollSpeed: 750,
                    scrollThreshold: .5,
                    begin: !1,
                    end: !1,
                    scrollChange: !1
                },
                init: function() {
                    return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this
                },
                adjustNav: function(t, a) {
                    t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), a.addClass(t.config.currentClass)
                },
                bindInterval: function() {
                    var t, a = this;
                    a.$win.on("scroll.onePageNav", function() {
                        a.didScroll = !0
                    }), a.t = setInterval(function() {
                        t = a.$doc.height(), a.didScroll && (a.didScroll = !1, a.scrollChange()), t !== a.docHeight && (a.docHeight = t, a.getPositions())
                    }, 250)
                },
                getHash: function(t) {
                    return t.attr("href").split("#")[1]
                },
                getPositions: function() {
                    var a, e, i, n = this;
                    n.$nav.each(function() {
                        a = n.getHash(t(this)), i = t("#" + a), i.length && (e = i.offset().top, n.sections[a] = Math.round(e))
                    })
                },
                getSection: function(t) {
                    var a = null,
                        e = Math.round(this.$win.height() * this.config.scrollThreshold);
                    for (var i in this.sections) this.sections[i] - e < t && (a = i);
                    return a
                },
                handleClick: function(e) {
                    var i = this,
                        n = t(e.currentTarget),
                        s = n.parent(),
                        o = "#" + i.getHash(n);
                    s.hasClass(i.config.currentClass) || (i.config.begin && i.config.begin(), i.adjustNav(i, s), i.unbindInterval(), i.scrollTo(o, function() {
                        i.config.changeHash && (a.location.hash = o), i.bindInterval(), i.config.end && i.config.end()
                    })), e.preventDefault()
                },
                scrollChange: function() {
                    var t, a = this.$win.scrollTop(),
                        e = this.getSection(a);
                    null !== e && (t = this.$elem.find('a[href$="#' + e + '"]').parent(), t.hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
                },
                scrollTo: function(a, e) {
                    var i = t(a).offset().top - 65;
                    t("html, body").animate({
                        scrollTop: i
                    }, this.config.scrollSpeed, this.config.easing, e)
                },
                unbindInterval: function() {
                    clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
                }
            }, n.defaults = n.prototype.defaults, t.fn.onePageNav = function(t) {
                return this.each(function() {
                    new n(this, t).init()
                })
            }
        }(jQuery, window, document);
        var u = {
                resize: function() {
                    t(window).on("debouncedresize", function() {
                        u.init()
                    })
                }
            },
            h = t("body").hasClass("transparent-header") ? "transparent" : "solid";
        u.init(), u.resize(), jQuery("#main_menu li , #side_menu li  , #mobile_navigation .mobile_menu li").each(function() {
            jQuery(this).hasClass("current-menu-item") ? jQuery(this).children("a").removeClass("external") : jQuery(this).children("a").addClass("external")
        }), jQuery("body").hasClass("home") ? (jQuery("#main_menu > li:first-child").addClass("active"), jQuery(" #mobile_navigation .mobile_menu > li:first-child").addClass("active"), jQuery(" #side_menu > li:first-child").addClass("active"), t("#logo a").click(function(a) {
            t(window).scrollTo({
                top: 0
            }, 750, {
                easing: "easeInOutQuart",
                offset: 0,
                axis: "y"
            }), a.preventDefault()
        })) : jQuery("#main_menu > li").each(function(a, e) {
            (t(this).hasClass("current-menu-ancestor") || t(this).hasClass("current-menu-item") || t(this).hasClass("current-menu-parent")) && t(this).addClass("active")
        }), jQuery("#side_menu li").each(function() {
            t(this).find("> .sub-menu").length > 0 && t(this).hoverIntent({
                over: function() {
                    t(this).addClass("selected").find("> .sub-menu").slideDown()
                },
                out: function() {
                    t(this).removeClass("selected").find("> .sub-menu").slideUp()
                },
                timeout: 1e3
            })
        }), jQuery("#main_menu, #side_menu").onePageNav({
            currentClass: "active",
            filter: ":not(.external)",
            easing: "easeInOutQuart"
        }), jQuery("#mobile_navigation .mobile_menu").onePageNav({
            currentClass: "active",
            filter: ":not(.external)",
            easing: "easeInOutQuart",
            begin: function() {
                d()
            }
        }), t(".toggle-menu").click(function(a) {
            a.preventDefault(), t("body").toggleClass("expanded")
        }), t("#close-mobile-menu").click(function(a) {
            a.preventDefault(), t("body").removeClass("expanded")
        }), t(".side-navigation-mobile .current-page").html(t(".side-navigation-mobile .current_page_item > a").html()), t(".side-navigation-mobile .current-page").on("click", function(a) {
            a.preventDefault(), t(".side-navigation-mobile").toggleClass("clicked")
        }), t(window).on("debouncedresize", function() {
            t(window).width() > 1e3 && d()
        });
        var h = t("body").hasClass("transparent-header") ? "transparent" : "solid",
            p = t("#header_wrapper").offset().top,
            f = t("#header").outerHeight(),
            m = 1 == t("#header").data("auto-offset") ? p + (f - t("#header").data("shrinked-height")) : p + parseInt(t("#header").data("offset")),
            g = p + f + parseInt(t("#header").data("second-nav-offset"));
        t("#header").data("height");
        if (!x) {
            var v;
            t(window).scroll(function() {
                var a = t(window).scrollTop();
                t("#header").hasClass("sticky-nav") ? (a > p ? (t("#header").addClass("stuck"), t("#header").parent().css("height", f + "px")) : t("#header").removeClass("stuck"), a > m && !t("#header").hasClass("shrinked") ? (t("#header").addClass("shrinked"), "transparent" == h && t("#header_wrapper").removeClass("transparent-header")) : (m > a || a == m) && (t("#header").removeClass("shrinked"), "transparent" == h && t("#header_wrapper").addClass("transparent-header"))) : t("#header").hasClass("second-nav") && (a > g && !t("#header").hasClass("to-stuck") ? (t("#header").addClass("to-stuck shrinked"), t("#header").parent().css("height", f + "px"), clearTimeout(v), v = setTimeout(function() {
                    t("#header").addClass("stucked"), "transparent" == h && t("#header_wrapper").removeClass("transparent-header")
                }, 100)) : g > a && t("#header").hasClass("to-stuck") && (t("#header").removeClass("stucked shrinked to-stuck"), "transparent" == h && t("#header_wrapper").addClass("transparent-header")))
            })
        }
        c()
    }
    var b = t("#header-search-button > a"),
        w = t("#header-search-panel"),
        y = (t("#header-search"), w.find('input[type="text"]'), w.find(".close-icon"));
    b.click(function(a) {
        a.preventDefault();
        var e = t(this);
        e.hasClass("active") ? (e.removeClass("active"), w.fadeOut()) : (w.fadeIn(), e.addClass("active"))
    }), y.click(function() {
        b.removeClass("active"), w.fadeOut()
    });
    var x = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android|iemobile)/);
    t("#header").hasClass("sticky-nav") ? !0 : !1, t(".go-top").on("click", function(a) {
        a.preventDefault(), t(window).scrollTo({
            top: 0
        }, 750, {
            easing: "easeInOutQuart",
            offset: 0,
            axis: "y"
        })
    });
    var C = {
        init: function() {
            var a = t(".carousel-container");
            a.each(function() {
                var a = t(this),
                    e = a.find(".carousel-items"),
                    i = a.find(".bx-next"),
                    n = a.find(".bx-prev"),
                    s = a.find(".pagination"),
                    o = parseInt(e.attr("data-columns"), 10),
                    r = "yes" == a.attr("data-autoplay") ? !0 : !1;
                t(window).width() < 500 ? o = 1 : t(window).width() < 800 && (o = 2), e.imagesLoaded(function() {
                    t(".flexible-slider", e).length > 0 && t(".flexible-slider", e).bxSlider({
                        prevText: "",
                        nextText: "",
                        autoHidePager: !0,
                        easing: "easeInOutQuart",
                        adaptiveHeight: !1
                    }), e.carouFredSel({
                        circular: !0,
                        responsive: !0,
                        items: {
                            height: e.find("> div:first").outerHeight(),
                            width: e.find("> div:first").width(),
                            minimum: 2,
                            visible: {
                                min: 1,
                                max: o
                            }
                        },
                        scroll: {
                            items: o,
                            easing: "easeInOutQuart",
                            duration: 800,
                            pauseOnHover: !1
                        },
                        pagination: {
                            container: s
                        },
                        swipe: {
                            onTouch: !0,
                            onMouse: !0
                        },
                        auto: {
                            play: r
                        },
                        prev: {
                            button: n,
                            key: "left"
                        },
                        next: {
                            button: i,
                            key: "right"
                        },
                        onCreate: function() {
                            C.resize(), c(), jQuery.waypoints("viewportHeight"), jQuery.waypoints("refresh")
                        }
                    }), a.animate({
                        opacity: 1
                    }, 800)
                })
            })
        },
        resize: function() {
            var a = t(".carousel-items");
            a.each(function() {
                var a = t(this),
                    e = parseInt(a.data("columns"), 10);
                t(window).width() < 500 ? e = 1 : t(window).width() < 800 && (e = 2), a.trigger("configuration", {
                    items: {
                        height: a.find("> div:first").outerHeight(),
                        width: a.find("> div:first").width(),
                        visible: {
                            min: 1,
                            max: e
                        },
                        scroll: {
                            items: e
                        }
                    }
                })
            })
        }
    };
    if (C.init(), t(window).on("debouncedresize", function() {
            C.resize()
        }), t("div").is(".image.hoverlay")) {
        var z = {
            animation_speed: "fast",
            overlay_gallery: !0,
            autoplay_slideshow: !1,
            slideshow: 5e3,
            theme: "pp_default",
            opacity: .8,
            show_title: !0,
            deeplinking: !1,
            allow_resize: !0,
            counter_separator_label: "/",
            default_width: 1200,
            default_height: 640
        };
        jQuery("a[rel^='prettyPhoto']").prettyPhoto(z)
    }
    var S = ".team-slider",
        F = ".previous-team-slider",
        T = ".next-team-slider",
        k = ".testimonial-slider",
        I = ".previous-testimonial-slider",
        O = ".next-testimonial-slider",
        A = ".masonry-grid",
        M = ".grid-item, .masonry-stamp",
        H = ".portfolio-filter-menu",
        P = "0.7s",
        Q = !1;
    templateFunctions = {
        init: function() {
            templateFunctions.horizon(".horizon", ".parallax .horizon", "easeInOutQuint", !1, 1), templateFunctions.teamSlider(), templateFunctions.testimonialSlider(), templateFunctions.masonry()
        },
        parallax: function(a, e, i, n) {
            t(a).snowBridge({
                scaleContainer: e,
                scaleUnder: 960,
                scaleMinHeight: 214,
                fullscreen: i,
                fadeInOut: n,
                fadeThreshold: .5,
                retinaSupport: !1,
                parallaxFactor: .6,
                onLoaded: function() {
                    templateFunctions.horizon(".horizon", "", "easeInOutQuint", !1, 1)
                }
            })
        },
        horizon: function(a, e, i, n, s) {
            t(a).not(e).horizon({
                easing: i,
                recurring: n,
                threshold: s
            })
        },
        teamSlider: function() {
            t(S).avalancheSlider({
                animation: "slide",
                easing: "easeInOutQuart",
                speed: 900,
                autoAdvance: !1,
                carousel: !0,
                carouselVisible: 3,
                carouselScaleHeight: !0,
                lazyLoad: !1,
                navArrows: !1,
                navPagination: !0,
                navShowOnHover: !1,
                retinaSupport: !1
            });
            var a = t(S).data("avalancheSlider");
            t(F).on("click", function(t) {
                t.preventDefault(), a.prevSlide()
            }), t(T).on("click", function(t) {
                t.preventDefault(), a.nextSlide()
            })
        },
        testimonialSlider: function() {
            t(k).avalancheSlider({
                animation: "slide",
                easing: "easeInOutQuart",
                speed: 900,
                autoAdvance: !1,
                scaleMinHeight: "auto",
                carousel: !0,
                carouselVisible: 1,
                carouselScaleHeight: !0,
                lazyLoad: !1,
                navArrows: !1,
                navPagination: !0,
                navShowOnHover: !1,
                retinaSupport: !1
            });
            var a = t(k).data("avalancheSlider");
            t(I).on("click", function(t) {
                t.preventDefault(), a.prevSlide()
            }), t(O).on("click", function(t) {
                t.preventDefault(), a.nextSlide()
            })
        },
        masonry: function() {
            t(A).each(function() {
                var a, e = t(this),
                    i = e.closest(".section-block").hasClass("fit-rows") ? "fitRows" : "masonry";
                e.closest(".section-block").is(".portfolio-5, .portfolio-6, .masonry-set-dimensions") ? (e.closest(".section-block").is(".full-width.no-margins") && templateFunctions.masonryWrapperWidth(e), a = templateFunctions.masonryColWidth(e), templateFunctions.masonryThumbSizes(e, templateFunctions.masonryColWidth(e))) : a = ".grid-sizer", imagesLoaded(e, function() {
                    e.isotope({
                        filter: "*",
                        itemSelector: ".grid-item",
                        isResizeBound: Q ? !0 : !1,
                        transitionDuration: P,
                        layoutMode: i,
                        stamp: ".masonry-stamp",
                        masonry: {
                            columnWidth: a
                        }
                    }), e.css({
                        visibility: "visible",
                        minHeight: "initial"
                    });
                    var n = e.children().length - 1;
                    t("body").hasClass("transition-support") || e.removeClass("fade-in-progressively"), e.children().each(function(a) {
                        t(this).delay(100 * a).animate({
                            opacity: 1
                        }, 500, "easeInOutQuart", function() {
                            a === n && e.removeClass("fade-in-progressively")
                        })
                    }), t(window).on("resize", function() {
                        e.closest(".section-block").is(".full-width.no-margins") && templateFunctions.masonryWrapperWidth(e), templateFunctions.masonryThumbSizes(e, templateFunctions.masonryColWidth(e)), Q ? e.isotope({
                            transitionDuration: P,
                            masonry: {
                                columnWidth: ".grid-sizer" !== a ? templateFunctions.masonryColWidth(e) : ".grid-sizer"
                            }
                        }) : (e.removeClass("filtering"), e.isotope({
                            transitionDuration: 0,
                            masonry: {
                                columnWidth: ".grid-sizer" !== a ? templateFunctions.masonryColWidth(e) : ".grid-sizer"
                            }
                        }).isotope("layout").isotope({
                            transitionDuration: P
                        }))
                    })
                })
            }), t(H).each(function() {
                t(this).find("a").on("click", function(a) {
                    a.preventDefault(), t(this).closest(H).find(".active").removeClass("active"), t(this).addClass("active");
                    var e = t(this).closest(H).data("target-grid") ? t(this).closest(H).data("target-grid") : t('[class*="portfolio-"]').find(".masonry-grid"),
                        i = t(this).attr("data-filter");
                    t(e).addClass("filtering").isotope({
                        filter: i
                    })
                })
            })
        },
        masonryWrapperWidth: function(t) {
            var a = Math.ceil(1.001 * t.closest(".section-block").width());
            t.css({
                maxWidth: a + "px",
                width: a + "px"
            })
        },
        masonryColWidth: function(a) {
            var e, i = t(window).width(),
                n = Math.ceil(a.closest(".section-block").width()),
                s = a.closest(".section-block").is(".full-width.no-margins") ? Math.ceil(1.001 * n) : a.width();
            return a.closest(".section-block").is(".full-width.small-margins, .full-width.no-margins") ? (a.hasClass("content-grid-2") && (e = i >= 480 ? s / 2 : s / 1), a.hasClass("content-grid-3") && (e = i > 768 ? s / 3 : 768 >= i && i > 480 ? s / 2 : s / 1), a.hasClass("content-grid-4") && (e = i > 1140 ? s / 4 : 1140 >= i && i > 768 ? s / 3 : 768 >= i && i > 480 ? s / 2 : s / 1), a.hasClass("content-grid-5") && (e = i > 1300 ? s / 5 : 1300 >= i && i > 1140 ? s / 4 : 1140 >= i && i >= 768 ? s / 3 : 768 >= i && i > 480 ? s / 2 : s / 1), a.hasClass("content-grid-6") && (e = i > 1300 ? s / 6 : 1300 >= i && i > 1140 ? s / 4 : 1140 >= i && i >= 768 ? s / 3 : 768 >= i && i > 480 ? s / 2 : s / 1)) : (a.hasClass("content-grid-2") && (e = i >= 600 ? s / 2 : s / 1), a.hasClass("content-grid-3") && (e = i > 960 ? s / 3 : 960 >= i && i > 600 ? s / 2 : s / 1), a.hasClass("content-grid-4") && (e = i > 1140 ? s / 4 : 1140 >= i && i > 960 ? s / 3 : 960 >= i && i > 600 ? s / 2 : s / 1), a.hasClass("content-grid-5") && (e = i > 1300 ? s / 5 : 1300 >= i && i > 1140 ? s / 4 : 1140 >= i && i > 960 ? s / 3 : 960 >= i && i > 600 ? s / 2 : s / 1), a.hasClass("content-grid-6") && (e = i > 1300 ? s / 6 : 1300 >= i && i > 1140 ? s / 4 : 1140 >= i && i > 960 ? s / 3 : 960 >= i && i > 600 ? s / 2 : s / 1)), e = Math.floor(e)
        },
        masonryThumbSizes: function(a, e) {
            var i, n = t(window).width(),
                s = 2,
                o = t(".portfolio-5, .masonry-set-dimensions").hasClass("no-margins") ? 0 : parseFloat(a.find(".grid-item").css("padding-left")),
                r = a.closest(".section-block").is(".portfolio-5, .masonry-set-dimensions") ? a.is("[data-grid-ratio]") ? parseFloat(a.data("grid-ratio")) : 1.5 : 1;
            if (i = Math.floor((e - o) / r + o), a.closest(".section-block").is(".portfolio-5, .masonry-set-dimensions")) {
                var l = a.closest(".section-block").is(".full-width.small-margins, .full-width.no-margins") ? 480 : 600;
                a.find(M).each(function() {
                    t(this).is(".large, .masonry-stamp.large") ? t(this).is(".portrait, .masonry-stamp.portrait") ? t(this).css({
                        width: n > l ? Math.floor(e * s) + "px" : e + "px",
                        height: n > l ? Math.floor(i * (2 * s)) + "px" : 2 * i + "px"
                    }) : t(this).css({
                        width: n > l ? Math.floor(e * s) + "px" : e + "px",
                        height: n > l ? Math.floor(i * s) + "px" : i + "px"
                    }) : t(this).is(".portrait, .masonry-stamp.portrait") ? t(this).css({
                        width: e + "px",
                        height: Math.floor(i * s) + "px"
                    }) : t(this).css({
                        width: e + "px",
                        height: i + "px"
                    })
                })
            }
            a.closest(".section-block").is(".portfolio-6") && (n > 600 ? a.find(M).each(function() {
                t(this).hasClass("horizontal") ? t(this).hasClass("two-third") ? t(this).children(".item-description").length ? t(this).css({
                    width: Math.floor(e * (s + 1)) + "px",
                    height: Math.floor(i) + "px"
                }) : t(this).addClass("no-description").css({
                    width: Math.floor(e * s) + "px",
                    height: Math.floor(i) + "px"
                }) : t(this).css({
                    width: Math.floor(e * s) + "px",
                    height: Math.floor(i) + "px"
                }) : t(this).hasClass("vertical") ? t(this).hasClass("two-third") && t(this).children(".item-description").length ? t(this).css({
                    width: e + "px",
                    height: Math.floor(e * (s + 1)) + "px"
                }) : t(this).css({
                    width: e + "px",
                    height: Math.floor(i * s) + "px"
                }) : t(this).css({
                    width: e + "px",
                    height: Math.floor(i) + "px"
                })
            }) : a.find(M).each(function() {
                t(this).find("iframe, video, .tm-slider-container").length ? t(this).css({
                    width: e + "px",
                    height: i + "px"
                }) : t(this).css({
                    width: "",
                    height: ""
                })
            }))
        },
        counter: function(a, e, i) {
            t(e).counter({
                autoStart: !1
            }), t(a).each(function() {
                var a = t(this);
                a.horizon({
                    recurring: i,
                    inView: function() {
                        return a.find(e).data("counting") ? !1 : void a.find(e).each(function() {
                            a.find(e).data("counting", !0);
                            var i = t(this).data("counter");
                            i.startCounter()
                        })
                    },
                    outOfView: function() {
                        return i && a.find(e).data("counting") ? void a.find(e).each(function() {
                            a.find(e).data("counting", !1);
                            var i = t(this).data("counter");
                            i.clearCounter()
                        }) : !1
                    }
                })
            })
        }
    }, templateFunctions.init(), t(".pull-menu a.section-link").click(function(a) {
        t(window).width() <= 500 && t("#close-button").click()
    }), app = {
        init: function() {
            app.lazy()
        },
        lazy: function() {
            t(".do-lazy-load-on-shown").each(function(a, e) {
                var i = t(e),
                    n = i.find("img[data-src]"),
                    s = [];
                if (1 != i.data("sbwp-lazy-loaded")) {
                    "IMG" == i.prop("tagName") && (n = i), i.addClass("is-loading").data("sbwp-lazy-loaded", !0), n.each(function(a, e) {
                        s.push({
                            src: t(e).data("src"),
                            el: e
                        })
                    });
                    for (var o in s) ! function(a, e) {
                        var i = (s[a].src, scrollMonitor.create(e[0], -e.outerHeight() / 10));
                        i.enterViewport(function() {
                            var i = t(s[a].el),
                                n = new Image,
                                o = s[a].src;
                            e.addClass("is-loading"), n.onload = function() {
                                i.attr("src", o).removeAttr("data-src"), setTimeout(function() {
                                    e.removeClass("is-loading"), i.addClass("img-loaded"), e.addClass("loading-finished");
                                    var n = [s[a].el, o];
                                    e.trigger("lazyLoadedOnShown", n), t(window).trigger("globalLazyLoadShown", n)
                                }, 50)
                            }, n.src = o
                        })
                    }(o, i)
                }
            })
        }
    }, app.init()
});