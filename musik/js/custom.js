jQuery(function ($) {
	"use strict";
    $(document).ready(function () {
		/* ----------------------------------------------------------- */
		/*  #Create Player
		/* ----------------------------------------------------------- */
		new jPlayerPlaylist({
			jPlayer: "#jquery_jplayer",
			cssSelectorAncestor: "#jp_container"
		},[
			{
				title:"Cro Magnon Man",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
			},
			{
				title:"Your Face",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
			},
			{
				title:"Cyber Sonnet",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
			},
			{
				title:"Tempered Song",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
			},
			{
				title:"Hidden",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
			},
			{
				title:"Lentement",
				free:true,
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
			},
			{
				title:"Thin Ice",
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-10-Thin-ice.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-10-Thin-ice.ogg"
			}
		],{
			swfPath: "",
			supplied: "OGA, MP3",
			wmode: "window",
			useStateClassSkin: true,
			autoBlur: false,
			smoothPlayBar: true,
			keyEnabled: false,
			enableRemoveControls:false,
		});	
    });
});	