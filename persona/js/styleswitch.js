/**
* Styleswitch stylesheet switcher built on jQuery
* Under an Attribution, Share Alike License
* By Kelvin Luck ( http://www.kelvinluck.com/ )
**/
function createCookie(e,t,i){if(i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var r="; expires="+n.toGMTString()}else var r="";document.cookie=e+"="+t+r+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){for(var r=i[n];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}!function(e){function t(t){e("link[rel*=style][title]").each(function(e){this.disabled=!0,this.getAttribute("title")==t&&(this.disabled=!1)})}e(document).ready(function(){e(".styleswitch").click(function(){return t(this.getAttribute("data-rel")),!1});var i=readCookie("style");i&&t(i)})}(jQuery);