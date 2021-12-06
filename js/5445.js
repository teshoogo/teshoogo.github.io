/* Control */
div[id^="ssfa-table-wrap"] a,
div[id^="ssfa-table-wrap"] a:hover,
div[id^="ssfa-list-wrap"] a,
div[id^="ssfa-list-wrap"] a:hover {
	opacity: 1;
}
/* CSV EDITOR */
.ssfa-values-context-menu {
    background-color: #FEFEFE;
    border: 1px solid #999999;
    list-style-type: none;
    margin: 0;
    padding: 0;
}
.ssfa-values-context-menu a {
    color: #333333;
    display: block;
    padding: 2px 10px;
    text-decoration: none;
	font-size:14px;
}
.ssfa-values-context-menu a:hover {
    background-color: #666;
    color: white;
    text-decoration: none;
}
.ssfa-values-context-menu a span {
	color: #999999;
	font-size:12px;	
	margin-right:5px;
}
.ssfa-values-context-menu a:hover span {
	color: #F9F9F9;
	font-size:12px;	
	margin-right:5px;	
}
/* FLIGHTBOX */
.flightbox-spinner {
	width: 58px;
	height: 20px;
	text-align: left;
	font-size: 10px;
	position:relative; 
	float:left;
	margin-top: 0;
	vertical-align:middle;
	z-index:9999999999999999999999999999999999999999999999999;
}
.flightbox-spinner > div {
	background-color: #fff;
	height: 100%;
	width: 6px;
	display: inline-block;
	-webkit-animation: stretchdelay 1.2s infinite ease-in-out;
	animation: stretchdelay 1.2s infinite ease-in-out;
}
.flightbox-spinner .fb-rect2 {
	margin-left:2px;
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}
.flightbox-spinner .fb-rect3 {
	margin-left:2px;
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}
.flightbox-spinner .fb-rect4 {
	margin-left:2px;
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}
.flightbox-spinner .fb-rect5 {
	margin-left:2px;
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
}
@-webkit-keyframes stretchdelay {
	0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
	20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay { 
	0%, 40%, 100% { transform: scaleY(0.4); -webkit-transform: scaleY(0.4); } 
	20% { transform: scaleY(1.0); -webkit-transform: scaleY(1.0); } 
}
div#ssfa-flightbox {
	line-height:0!important;
	position: fixed;
	background: transparent;
	padding: 0!important;
	z-index: 999999999999999999999999999999999999999999999999;
	display: none;
	border-radius: 15px;
}
div#ssfa-flightbox.ssfa-silver-bullet{
	background: #e2e2e2;
	background: -moz-linear-gradient(45deg, #e2e2e2 0%, #e8e8e8 15%, #ededed 18%, #e0e0e0 21%, #808080 86%, #adadad 93%, #808080 97%, #7a7a7a 100%);
	background: -webkit-gradient(left bottom, right top, color-stop(0%, #e2e2e2), color-stop(15%, #e8e8e8), color-stop(18%, #ededed), color-stop(21%, #e0e0e0), color-stop(86%, #808080), color-stop(93%, #adadad), color-stop(97%, #808080), color-stop(100%, #7a7a7a));
	background: -webkit-linear-gradient(45deg, #e2e2e2 0%, #e8e8e8 15%, #ededed 18%, #e0e0e0 21%, #808080 86%, #adadad 93%, #808080 97%, #7a7a7a 100%);
	background: -o-linear-gradient(45deg, #e2e2e2 0%, #e8e8e8 15%, #ededed 18%, #e0e0e0 21%, #808080 86%, #adadad 93%, #808080 97%, #7a7a7a 100%);
	background: -ms-linear-gradient(45deg, #e2e2e2 0%, #e8e8e8 15%, #ededed 18%, #e0e0e0 21%, #808080 86%, #adadad 93%, #808080 97%, #7a7a7a 100%);
	background: linear-gradient(45deg, #e2e2e2 0%, #e8e8e8 15%, #ededed 18%, #e0e0e0 21%, #808080 86%, #adadad 93%, #808080 97%, #7a7a7a 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#7a7a7a', GradientType=1 );
	-moz-box-shadow: 0 10px 250px #222;
	-o-box-shadow: 0 10px 250px #222;	
	-webkit-box-shadow: 0 10px 250px #222;
	box-shadow: 0 10px 250px #222;
	border: 0!important;
}
div#ssfa-flightbox.ssfa-minimalist{
	background: transparent!important;
	background-image: none!important;
	background-color:transparent!important;
	border:0!important;
	border-radius:0!important;
	-webkit-border-radius:0!important;
	-moz-border-radius:0!important;
	-moz-box-shadow: none!important;
	-o-box-shadow: none!important;	
	-webkit-box-shadow: none!important;
	box-shadow: none!important;	
}
div#ssfa-flightbox.ssfa-minimalist div.ssfa-flightbox-controls.ssfa-black a span{
	color:#fff!important;	
}
div#ssfa-flightbox.ssfa-minimalist div.ssfa-flightbox-controls.ssfa-black .flightbox-spinner > div { 
	background-color: #FFF!important;
}
div#ssfa-flightbox.ssfa-yin{
	background: #131313;
	background: -moz-linear-gradient(45deg, #131313 0%, #4c4c4c 9%, #595959 17%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #2c2c2c 92%, #2c2c2c 100%);
	background: -webkit-gradient(left bottom, right top, color-stop(0%, #131313), color-stop(9%, #4c4c4c), color-stop(17%, #595959), color-stop(51%, #000000), color-stop(60%, #111111), color-stop(76%, #2b2b2b), color-stop(91%, #1c1c1c), color-stop(92%, #2c2c2c), color-stop(100%, #2c2c2c));
	background: -webkit-linear-gradient(45deg, #131313 0%, #4c4c4c 9%, #595959 17%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #2c2c2c 92%, #2c2c2c 100%);
	background: -o-linear-gradient(45deg, #131313 0%, #4c4c4c 9%, #595959 17%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #2c2c2c 92%, #2c2c2c 100%);
	background: -ms-linear-gradient(45deg, #131313 0%, #4c4c4c 9%, #595959 17%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #2c2c2c 92%, #2c2c2c 100%);
	background: linear-gradient(45deg, #131313 0%, #4c4c4c 9%, #595959 17%, #000000 51%, #111111 60%, #2b2b2b 76%, #1c1c1c 91%, #2c2c2c 92%, #2c2c2c 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#131313', endColorstr='#2c2c2c', GradientType=1 );
	-moz-box-shadow: 0 10px 350px #000;
	-o-box-shadow: 0 10px 350px #000;	
	-webkit-box-shadow: 0 10px 350px #000;
	box-shadow: 0 10px 350px #000;
	border:0!important;
}
div#ssfa-flightbox.ssfa-yang{
	background: #FFFFFF;
	background-image: -o-linear-gradient(top, #F1F1F1 100%, #FFFFFF 100%);
	background-image: -moz-linear-gradient(top, #F1F1F1 100%, #FFFFFF 100%);
	background-image: -webkit-linear-gradient(top, #F1F1F1 100%, #FFFFFF 100%);
	background-image: -ms-linear-gradient(top, #F1F1F1 100%, #FFFFFF 100%);
	background-image: linear-gradient(top, #F1F1F1 100%, #FFFFFF 100%);
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #F1F1F1),
		color-stop(1, #FFFFFF));
	-moz-box-shadow: 0 10px 250px #ACACAC;
	-o-box-shadow: 0 10px 250px #ACACAC;	
	-webkit-box-shadow: 0 10px 250px #ACACAC;
	box-shadow: 0 10px 250px #ACACAC;
	border:0!important;
}
div#ssfa-flightbox-shadow{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	filter: alpha(opacity=75);
	-moz-opacity: 0.75;
	-khtml-opacity: 0.75;
	opacity: 0.75;
	z-index: 999999999999999999999999999999999999999999999998;
	display: none;
}
div#ssfa-flightbox-shadow.ssfa-yang {
	background: #fff;	
}
div#ssfa-values-shadow,
div#ssfa-stats-shadow{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;	
	filter: alpha(opacity=25);
	-moz-opacity: 0.25;
	-khtml-opacity: 0.25;
	opacity: 0.25;
	z-index: 999999999999999999999999999999999999999999999998;
	display: none;
}
div#ssfa-flightbox-inner div.wp-video{
	background-color:#000!important;
}
div#ssfa-flightbox.ssfa-yin > div.ssfa-flightbox-controls.ssfa-classic > a > span,
div#ssfa-flightbox.ssfa-minimalist > div.ssfa-flightbox-controls.ssfa-classic > a > span{
	color:#FFFFFF;
}
div#ssfa-flightbox.ssfa-silver-bullet > div.ssfa-flightbox-controls.ssfa-classic > a > span,
div#ssfa-flightbox.ssfa-yang > div.ssfa-flightbox-controls.ssfa-classic > a > span{
	color:#444444;
}
div#ssfa-flightbox.ssfa-yin > div.ssfa-flightbox-controls.ssfa-classic .flightbox-spinner > div,
div#ssfa-flightbox.ssfa-minimalist > div.ssfa-flightbox-controls.ssfa-classic .flightbox-spinner > div{ 
	background-color: #FFF;
}
div#ssfa-flightbox.ssfa-silver-bullet > div.ssfa-flightbox-controls.ssfa-classic .flightbox-spinner > div,
div#ssfa-flightbox.ssfa-yang > div.ssfa-flightbox-controls.ssfa-classic .flightbox-spinner > div { 
	background-color: #444;
}
/* THUMBNAILS */
div.ssfa-play-overlay{
	width: 0;
	height: 0;
	opacity:0.5;
	position:absolute;
	z-index:3;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;	
}
div.ssfa-thumb:hover div.ssfa-play-overlay{
	opacity:0.7;
	border-left-color: #FFF!important;
}
div.ssfa-play-overlay-border{
	width: 0;
	height: 0;
	opacity:0.4;
	position:absolute;
	z-index:2;
}
div.ssfa-thumb{
	background-position:center; 
	background-size:cover;
	margin: 0 auto;	
	position:relative;
}
div.ssfa-thumb, img.ssfa-thumb{
	-webkit-opacity: 0.9;
	-moz-opacity: 0.9;
	opacity: 0.9;
	-webkit-box-shadow: #777 -1px 3px 10px;
	-moz-box-shadow: #777 -1px 3px 10px;
	box-shadow: #777 -1px 3px 10px;
	border: 1px solid #F1F1F1;
}
div.ssfa-thumb-widerounded, img.ssfa-thumb-widerounded{
	border-radius:10px;
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
}
div.ssfa-thumb-widesharp, img.ssfa-thumb-widesharp{
	border-radius:0px;
	-webkit-border-radius:0px;
	-moz-border-radius:0px;
}
div.ssfa-thumb-squarerounded, img.ssfa-thumb-squarerounded{
	border-radius:10px;
	-webkit-border-radius:10px;
	-moz-border-radius:10px;
}
div.ssfa-thumb-squaresharp, img.ssfa-thumb-squaresharp{
	border-radius:0px;
	-webkit-border-radius:0px;
	-moz-border-radius:0px;
}
div.ssfa-thumb-oval, img.ssfa-thumb-oval{
	border-radius:120px;
	-webkit-border-radius:120px;
	-moz-border-radius:120px;
}
div.ssfa-thumb-circle, img.ssfa-thumb-circle{
	border-radius:70px;
	-webkit-border-radius:70px;
	-moz-border-radius:70px;
}
div.ssfa-thumb-bw, img.ssfa-thumb-bw{
	-webkit-filter: grayscale(100%);
	filter: grayscale(100%);
	filter: gray;
	filter: url("data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' height='0'><filter id='greyscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0' /></filter></svg>#greyscale");
}
/* FILE UP */
.ssfa_fileup_wrapper {
	cursor: pointer;
	display: inline-block;
	overflow: hidden;
	position: relative;
	margin: 25px 0px 0px 40px;
	padding-bottom: 5px;
}
div.ssfa_fileup_files_container table[id^="ssfa-table"] > tbody > tr > td {
	vertical-align:middle!important;	
}
input.rename_ssfa_upfile, 
input.rename_ssfa_upfile:active, 
input.rename_ssfa_upfile:focus{
	width:94%!important; 
	height:32px!important; 
	font-size:12px!important; 
	border-radius: 0!important; 
	-moz-border-radius:0!important; 
	-webkit-border-radius:0!important; 
	text-align:center!important;
	display: inline-block!important;
	padding: 0 3%!important;
	margin-bottom: 9px!important;
	line-height: 21px!important;
	color: #555!important;
	border: 1px solid #ccc!important;
	background-color:#FFF!important;
	opacity:0.9!important;
	z-index:9999!important;
	box-sizing: content-box!important;
	-webkit-box-sizing: content-box!important;
	-moz-box-sizing: content-box!important;	
	outline:none!important;	
}
input.rename_ssfa_upfile, 
input.rename_ssfa_upfile:active{
	box-shadow: #ccc 1px 1px 10px!important;	
}
input.rename_ssfa_upfile:focus{
	box-shadow: #aaa 2px 2px 20px!important;
}
table[id^="ssfa-table"] input[readonly]{
	cursor:not-allowed!important;	
	background-color:#eee!important;
}
div.ssfa-upload-input-container{
	background:transparent;
	padding:0!important;
	position:relative!important;	
}
div.ssfa-upload-progress{
	width:0px;
	height: 32px!important;
	z-index: 0!important;
	position: absolute;
	background: #444;
	left: 1px;
	top: 1px;
	opacity: 1;
	padding: 0!important;
}
span.ssfa_add_files {
	background: #F1F1F1;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	color: #444;
	cursor: pointer;
	display: inline-block;
	font-size: 12px;
	margin-right: 5px;
	font-weight:normal;
	text-decoration:none;
	box-shadow: 0 1px 3px #F7F7F7!important;
	border-bottom: 1px solid rgba(0,0,0,0.25)!important;
	padding: 5px 10px 5px;
	line-height: 1;
}
div.ssfa_fileup_container{
	margin:0 0 30px 0;
	padding: 0;
	width: 100%;
}
span[id^="ssfa_submit_upload"]{
	margin-left: 10px;
	display: inline-block;
	padding: 5px 10px 5px;
	color: #444;
	font-size: 12px;
	text-decoration: none;
	font-weight: normal;
	line-height: 1;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0 1px 3px #F7F7F7;
	border-bottom: 1px solid rgba(0,0,0,0.25);
	position: relative;
	cursor: pointer;
	background: #F1F1F1; 
}
input.ssfa_hidden_browse{
	font-size: 100px;
	height: 100%!important;
	width: 85px!important;
	position: absolute!important;
	left: 0!important;
	top: 0!important;
	opacity:0!important;
	-moz-opacity:0!important;
	filter:alpha(opacity:0)!important;
	padding:0!important;
	cursor:pointer!important;
}
div.ssfa_fileup_files_container{
	margin: 40px 0;
	width: 100%;
}
.ssfa-filesize{
	font-family: verdana, arial;
	font-size: 10px;
	color: #444;	
}
.ssfa-fileup-warning{
	color: red!important;
}
/* MUSIC PLAYER */
.ssfa-player{
	display: inline-block;
}
.ssfa-player .ssfaButton_play, .ssfa-players .ssfaButton_play, .ssfa-player .ssfaButton_stop, .ssfa-players .ssfaButton_stop {
	cursor: pointer !important;
	border: none !important;
	position: relative;
	margin: 10px 0 0 0 !important;
	padding: 0 !important;
}
.ssfa-player .ssfaButton_stop, .ssfa-players .ssfaButton_stop{
	display:none;		
}
div.ssfa-audio-download{
	display: inline-block;
	background: #e7e7e7;
	font-size:9.5px;
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	padding: 2px 6px;
	margin: 3px 5px 0 0;
	color: #666;
	text-shadow: none!important;
}
div.ssfa-audio-download:hover, div.ssfa-audio-download:active{
	background: #BD5A35;
	color:#f8f8f8;
}
a:visited div.ssfa-audio-download{
	background: #E1E1E1;
	color:#f8f8f8;
}
span.ssfa-audio-download{
	margin: 0 4px 0 0;	
}
[id^="fileaplay_"], 
.ssfa-fileaplay-play4,
.ssfa-fileaplay-pause4{
	display:inline-block;
	color: #666666;
	font-size: 25px!important;
	text-decoration: none;
	text-shadow: none!important;
	display:inline-block;
}
/***************************************************** PRE-CONTENT STYLES ***********************************************/
/* HEADING */
h3.ssfa-heading {
	margin: 0 0 5px!important;
	text-align:left!important;
	display:block!important;
}
div.ssfa-minimal-list h3.ssfa-heading{
	margin-bottom:10px!important;	
}
/* CRUMBS */
div.ssfa-crumbs {
	background-color: #f3f3f3;
	float: left;
	padding: 4px 16px;
	color: #444;
	border-radius: 15px;
	margin-bottom:10px!important;
}
div.ssfa-crumbs a {
	color: #2B769E
}
div.ssfa-crumbs a:hover, div.ssfa-crumbs a:active{
	color: #BD5A35; 
	text-decoration: none;
}
/* SEARCH FIELD STYLES */
div.ssfa-search-wrap {
	float:right;
	position: relative;
	top:5px!important;
}
#content div.ssfa-search-wrap > .ssfa-searchfield,
#content div.ssfa-search-wrap > input.ssfa-searchfield,
#content div.ssfa-search-wrap > input[type="text"].ssfa-searchfield,
#content div.ssfa-search-wrap > input[type="search"].ssfa-searchfield,
#content div.ssfa-search-wrap > textarea.ssfa-searchfield,
div.ssfa-search-wrap > .ssfa-searchfield,
div.ssfa-search-wrap > input.ssfa-searchfield,
div.ssfa-search-wrap > input[type="text"].ssfa-searchfield,
div.ssfa-search-wrap > input[type="search"].ssfa-searchfield,
div.ssfa-search-wrap > textarea.ssfa-searchfield {
	background: none repeat scroll 0 0 #FFFFFF;
	border: 0.5px solid transparent;
	border-radius: 0;
	-moz-box-shadow: none;
	-o-box-shadow: none;
	-webkit-box-shadow: none;
	box-shadow: none;
	color: transparent;
	cursor: pointer;
	float: right;
	font-family: "Lucida Sans Unicode","Lucida Grande","Droid Sans",sans-serif;
	font-style: normal;
	font-size: 9px;
	letter-spacing: 0.5px;
	line-height: 14px;
	margin: 0;
	opacity: 0;
	padding: 0 6px 6px;	
	position: relative;
	text-align: left;
	text-indent: 22%;
	text-transform: none;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;
	width: 100%;
	z-index: 1;
	height:26px!important;
	box-sizing: content-box!important;
	-webkit-box-sizing: content-box!important;
	-moz-box-sizing: content-box!important;	
}
#content div.ssfa-search-wrap > .ssfa-searchfield:focus,
#content div.ssfa-search-wrap > input.ssfa-searchfield:focus,
#content div.ssfa-search-wrap > input[type="text"].ssfa-searchfield:focus, 
#content div.ssfa-search-wrap > input[type="search"].ssfa-searchfield:focus,
#content div.ssfa-search-wrap > .ssfa-searchfield:active,
#content div.ssfa-search-wrap > input.ssfa-searchfield:active,
#content div.ssfa-search-wrap > input[type="text"].ssfa-searchfield:active,
#content div.ssfa-search-wrap > input[type="search"].ssfa-searchfield:active,
#content div.ssfa-search-wrap > textarea.ssfa-searchfield:focus,
#content div.ssfa-search-wrap > textarea.ssfa-searchfield:active,
div.ssfa-search-wrap > .ssfa-searchfield:focus,
div.ssfa-search-wrap > input.ssfa-searchfield:focus,
div.ssfa-search-wrap > input[type="text"].ssfa-searchfield:focus, 
div.ssfa-search-wrap > input[type="search"].ssfa-searchfield:focus,
div.ssfa-search-wrap > .ssfa-searchfield:active,
div.ssfa-search-wrap > input.ssfa-searchfield:active,
div.ssfa-search-wrap > input[type="text"].ssfa-searchfield:active,
div.ssfa-search-wrap > input[type="search"].ssfa-searchfield:active,
div.ssfa-search-wrap > textarea.ssfa-searchfield:focus,
div.ssfa-search-wrap > textarea.ssfa-searchfield:active {
	border: 0.5px solid #F9F9F9!important;
	background: #FEFEFE!important;
	background-color: #FEFEFE!important;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	float:right;
	color: #888888;
	cursor: text;
	font-size: 9px;
	margin:0;
	margin-left: 10px;
	opacity: 1;
	padding: 0 6px 6px;
	text-indent: 0;
	width: 100%;
	z-index: 2;
	display: inline-block;
	height:26px!important;	
	border-radius: 0!important;
/*	padding: 2px 3px!important; 
	height: 20.5px!important;*/
	outline:none!important;
	box-sizing: content-box!important;
	-webkit-box-sizing: content-box!important;
	-moz-box-sizing: content-box!important;
}
.ssfa-searchicon {
	color: #888888;
	font-size: 18px;
	font-style: normal;
	position: absolute;
	right: 2px;
	z-index: 1;
	float:right;
}
.ssfa-searchicon:hover, 
.ssfa-searchicon:active {
	cursor: pointer;
}
span.ssfa-search-label-active{
	font-size:13px!important;
	background-color: #f3f3f3;
	padding: 1px 8px;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-o-border-radius: 10px;
}
/* End Search Field Styles */
div.ssfa-clearfix:after {
  content: "";
  display: table;
  clear: both;	
}
a.ssfa-rsslink, a.ssfa-rsslink:hover, a.ssfa-rsslink:active{
	margin-right:10px!important;
	text-decoration:none!important;	
	outline:none!important;
}
span.ssfa-rsslink{
	vertical-align:middle!important;
	font-size:16px!important; 
	color:#FFC36A!important;
	position:relative;
	top:-2px!important;
}
span.ssfa-rssmini{
	background-color:slategray!important;
	border-radius: 50px;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	padding: 0 9px!important;
	text-transform: uppercase;
	font-size: 9px!important;
	color: #FFFFFF!important;
	text-shadow: none!important;
	box-shadow: none!important;	
	-moz-box-shadow: none!important;
	-webkit-box-shadow: none!important;
	margin: 5px 0 0 3px!important;
	display: inline-block!important;
	cursor:pointer;
}
div.ssfa-meta-container{position:relative; margin-bottom:20px!important;}
/***************************************************** LIST STYLES ***********************************************/
/****** Silk List ******/
/* Primary Link Body */
div[id^="ssfa-list-wrap"].ssfa-silk a,
div[id^="ssfa-list-wrap"].ssfa-silk a:visited {
	background: #FFFFFF;
	background: -moz-linear-gradient(top,  #FFFFFF 0%, #F4F4F4 50%, #EFEFEF 100%);
	background: -ms-linear-gradient(top,  #FFFFFF 0%,#F4F4F4 50%,#EFEFEF 100%);
	background: -o-linear-gradient(top,  #FFFFFF 0%,#F4F4F4 50%,#EFEFEF 100%);
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFFFFF), color-stop(50%,#F4F4F4), color-stop(100%,#EFEFEF));
	background: -webkit-linear-gradient(top,  #FFFFFF 0%,#F4F4F4 50%,#EFEFEF 100%);
	background: linear-gradient(to bottom,  #FFFFFF 0%,#F4F4F4 50%,#EFEFEF 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FFFFFF', endColorstr='#EFEFEF',GradientType=0 );
	border: solid 1px #CCCCCC;	
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px; 
	-moz-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
	box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2); 
	cursor: pointer;
	display: block;	
	font-size: 14px;
	line-height: 1.2em;
	margin: 10px 0;
	padding: 10px 10px 10px 50px;
	position: relative;
	text-decoration: none;
	text-shadow: 0px 2px 0px #FFFFFF;
	-moz-transition: all .8s ease-in;
	-o-transition: all .8s ease-in;
	-webkit-transition: all .8s ease-in;
	transition: all .8s ease-in;	 
	zoom: 1;
}
/* Icon Area */
div[id^="ssfa-list-wrap"].ssfa-silk a:before {
	background: transparent;
	-moz-border-radius: 5px 0 0 5px;
	-webkit-border-radius: 5px 0 0 5px;
	border-radius: 5px 0 0 5px; 
	border-right: 1px solid #bbb;
	content: "";			
	display: block;		
	height: 100%;
	left: 0;
	margin-right: 2px;	
	position: absolute;
	top: 0;
	-moz-transition: all .8s ease-in;
	-o-transition: all .8s ease-in;
	-webkit-transition: all .8s ease-in;
	transition: all .8s ease-in;
	width: 38px;	
	zoom: 1;
}
/*Primary Link Body on Hover */
div[id^="ssfa-list-wrap"].ssfa-silk a:hover {
	background-color: #CCCCCC;
	border-color: #999999;
}
/* Primary Link Body on Click */
div[id^="ssfa-list-wrap"].ssfa-silk a:active {
	background-color: #ededed;	
	border-color: #777777;
	-moz-box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
	-o-box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.2);	
	box-shadow: inset 0px 2px 2px 0px rgba(0, 0, 0, 0.2); 	
}
/* Icon Area on Hover */
div[id^="ssfa-list-wrap"].ssfa-silk a:hover:before {
	background-color: rgba(0,0,0,0.1);
	border-right: solid 1px #999999;
}
/* Filetype Icon Style */
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon a:visited {
	color: #666666;
	font-size: 20px;
	left: 10px;
	margin-right: 2px;		
	position: absolute;
	text-decoration: none;
	top: 25%;
	vertical-align: middle;
}
/* Paperclip Icon Style */
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip a:visited {
	color: #666666;
	font-size: 20px;
	left: 10px;
	margin-right: 2px;		
	position: absolute;
	text-decoration: none;
	top: 25%;
	vertical-align: middle;
}
/* If No Icons are Chosen */
div[id^="ssfa-list-wrap"].ssfa-silk .noicons,
div[id^="ssfa-list-wrap"].ssfa-silk .noicons {
	padding-left: 10px;
}
/* If No Icons are Chosen */
div[id^="ssfa-list-wrap"] a.noicons:before,
div[id^="ssfa-list-wrap"] a.noicons:hover:before {
	background-color: transparent !important;
	border-right: 1px solid transparent !important;
}
/* Filesize Area */
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listfilesize,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listfilesize a,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listfilesize a:hover,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listfilesize a:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listfilesize a:visited {
	color: #666666;
	float: right;
	margin-left: 20px;	
}
/* Date Modified Line */
div[id^="ssfa-list-wrap"].ssfa-silk div.ssfa-listitem > div.ssfa-datemodified, 
div[id^="ssfa-list-wrap"].ssfa-silk div.ssfa-listitem > div.ssfa-datemodified a, 
div[id^="ssfa-list-wrap"].ssfa-silk div.ssfa-listitem > div.ssfa-datemodified a:hover, 
div[id^="ssfa-list-wrap"].silk div.ssfa-listitem > div.ssfa-datemodified a:active, 
div[id^="ssfa-list-wrap"].silk div.ssfa-listitem > div.ssfa-datemodified a:visited {
	background: transparent;
	color: #666666;
	font-size: 9px;
	text-decoration: none;	
	text-transform: uppercase;
}
/* Inline: for when Inline display is activated */
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-inline {
	display: inline-block;	
	margin-right: 10px;
}
/* Two Columns: for when Two Columns are activated */
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-twocol {
	display: inline-block;	
	margin-right: 10px;	
	width: 35%;
}
/* Sharp Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-sharp a,
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-sharp a:before {
	-moz-border-radius: 0px;
	-webkit-border-radius: 0px;
	border-radius: 0px; 
}
/* Rounded Right Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundright a {
	-moz-border-radius: 0 10px 10px 0;
	-webkit-border-radius: 0 10px 10px 0;
	border-radius: 0 10px 10px 0; 
}
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundright a:before {
	-moz-border-radius: 0px;
	-webkit-border-radius: 0px;
	border-radius: 0px; 
}
/* Rounded Left Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundleft a,
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundleft a:before {
	-moz-border-radius: 10px 0 0 10px;
	-webkit-border-radius: 10px 0 0 10px;
	border-radius: 10px 0 0 10px; 
}
/* Rounded Top Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundtop a {
	-moz-border-radius: 10px 10px 0 0;
	-webkit-border-radius: 10px 10px 0 0;
	border-radius: 10px 10px 0 0; 
}
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundtop a:before {
	-moz-border-radius: 10px 0 0 0;
	-webkit-border-radius: 10px 0 0 0;
	border-radius: 10px 0 0 0; 
}
/* Rounded Bottom Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundbottom a {
	-moz-border-radius: 0 0 10px 10px;
	-webkit-border-radius: 0 0 10px 10px;
	border-radius: 0 0 10px 10px; 
}
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-roundbottom a:before {
	-moz-border-radius: 0 0 0 10px;
	-webkit-border-radius: 0 0 0 10px;
	border-radius: 0 0 0 10px; 
}
/* Elliptical Corners */
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-elliptical a {
	-moz-border-radius: 10px 0 10px 0;
	-webkit-border-radius: 10px 0 10px 0;
	border-radius: 10px 0 10px 0; 
}
div[id^="ssfa-list-wrap"].ssfa-silk.ssfa-elliptical a:before {
	-moz-border-radius: 10px 0 0 0;
	-webkit-border-radius: 10px 0 0 0;
	border-radius: 10px 0 0 0; 
}
/****** MINIMAL LIST ******/
/* General Style */
div[id^="ssfa-list-wrap"].ssfa-minimal-list {
	color: #444444;
	font-size: 15px;
	line-height: 15px;
}
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-topline {
	background: transparent; 
	padding: 0 8px; 
	margin-left: -8px;
	-moz-transition: all .8s ease-in;
	-o-transition: all .8s ease-in;
	-webkit-transition: all .8s ease-in;	
	transition: all .8s ease-in;
}
div[id^="ssfa-list-wrap"].ssfa-minimal-list a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list a:active {
	text-decoration: none;
}
/* File Size Area */
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listfilesize, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listfilesize a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listfilesize a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listfilesize a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listfilesize a:visited {
	color: #444444;
	font-size: 11px;	
	margin: 0;
	padding: 0;
	text-decoration: none;
	vertical-align: top;
}
/* Primary Link Body */
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem {
	background: transparent;		
	border: 0;
	padding: 3px 5px;
	position:relative;
	width: 100%;
	-moz-transition: all .8s ease-in;
	-o-transition: all .8s ease-in;
	-webkit-transition: all .8s ease-in;
	transition: all .8s ease-in;
}
/* Primary Link Body on Hover or Click */
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem:active {
	background: transparent; 
}
/* Filetype Icon Style */
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon a:visited {
	color: #666666;
	margin-right: 2px;
	text-decoration: none;
	vertical-align: middle;
}
/* Paperclip Icon Style */
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip a:visited {
	color: #666666;
	font-size: 13px; 
	margin-right: 2px;	
	vertical-align: middle; 	
	text-decoration: none;
}
/* Date Modified Area */
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem > div.ssfa-datemodified, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem > div.ssfa-datemodified a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem > div.ssfa-datemodified a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem > div.ssfa-datemodified a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list div.ssfa-listitem > div.ssfa-datemodified a:visited {
	background: transparent;
	color: #666666;
	font-size: 9px;
	text-decoration: none;	
	text-transform: uppercase;
}
/* Inline: for when Inline display is activated */
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-inline {
	display: inline-block;	
	margin-right: 10px;
}
/* Two Columns: for when Two Columns are activated */
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-twocol {
	display: inline-block;	
	margin-right: 10px;	
	width: 45%;
}
/******** General List Styles ********/
/* Ellipsis: for when Two Columns are activated */
.ssfa-ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	width: 100%;
}
/*************************************** TABLE STYLES ******************************/
table[id^="ssfa-table"] {
	box-shadow: none!important;
	-webkit-box-shadow: none!important;
	-moz-box-shadow: none!important;
}
table[id^="ssfa-table"].mngr-table input[type="text"], 
table[id^="ssfa-table"].mngr-table input[type="password"], 
table[id^="ssfa-table"].mngr-table input[type="file"], 
table[id^="ssfa-table"].mngr-table input[type="email"], 
table[id^="ssfa-table"].mngr-table input[type="number"], 
table[id^="ssfa-table"].mngr-table input[type="search"], 
table[id^="ssfa-table"].mngr-table input[type="tel"], 
table[id^="ssfa-table"].mngr-table input[type="url"],
table[id^="ssfa-table"].ssfa-values-table input[type="text"], 
table[id^="ssfa-table"].ssfa-values-table input[type="password"], 
table[id^="ssfa-table"].ssfa-values-table input[type="file"], 
table[id^="ssfa-table"].ssfa-values-table input[type="email"], 
table[id^="ssfa-table"].ssfa-values-table input[type="number"], 
table[id^="ssfa-table"].ssfa-values-table input[type="search"], 
table[id^="ssfa-table"].ssfa-values-table input[type="tel"], 
table[id^="ssfa-table"].ssfa-values-table input[type="url"]
{ 
	background: transparent!important; 
	background-color: transparent!important; 
	display: inline-block;
	border: 0!important;
	border-bottom: 1px solid #AAA!important;
	border-radius: 0!important;
	padding: 2px 3px!important;
	height: 20.5px!important;
	box-shadow:none!important;
	-moz-box-shadow:none!important;
	-webkit-box-shadow:none!important;		
	font-size:13px!important;
	width:90%!important;
	outline:none!important;
	box-sizing: content-box!important;
	-webkit-box-sizing: content-box!important;
	-moz-box-sizing: content-box!important;
	line-height:16px!important;
	margin: 0!important;	
}
table[id^="ssfa-table"].mngr-table input[type="text"]:focus,
table[id^="ssfa-table"].mngr-table input[type="password"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="file"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="email"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="number"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="search"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="tel"]:focus, 
table[id^="ssfa-table"].mngr-table input[type="url"]:focus,
table[id^="ssfa-table"].ssfa-values-table input[type="text"]:focus,
table[id^="ssfa-table"].ssfa-values-table input[type="password"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="file"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="email"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="number"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="search"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="tel"]:focus, 
table[id^="ssfa-table"].ssfa-values-table input[type="url"]:focus
{
	background: #FEFEFE!important;
	background-color: #FEFEFE!important;
	display: inline-block;
	border-radius: 0!important;
	padding: 2px 3px!important;
	height: 20.5px!important;
	border: 1px solid #F9F9F9!important;
	box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.3)!important;	
	-moz-box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.3)!important;	
	-webkit-box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.3)!important;	
	-o-box-shadow: 2px 5px 25px rgba(0, 0, 0, 0.3)!important;	
	width:90%!important;
	outline:none!important;
	box-sizing: content-box!important;
	-webkit-box-sizing: content-box!important;
	-moz-box-sizing: content-box!important;
	margin: 0!important;	
}
/* General Table Styles */
table[id^="ssfa-table"] a,
table[id^="ssfa-table"] a:visited,
table[id^="ssfa-table"] a:hover,
table[id^="ssfa-table"] a:active, 
table[id^="ssfa-table"] > thead > tr > th > a,
table[id^="ssfa-table"] > thead > tr > th > a:visited,
table[id^="ssfa-table"] > thead > tr > th > a:hover,
table[id^="ssfa-table"] > thead > tr > th > a:active,
table[id^="ssfa-table"] > tbody > tr > td > a,
table[id^="ssfa-table"] > tbody > tr > td > a:visited,
table[id^="ssfa-table"] > tbody > tr > td > a:hover,
table[id^="ssfa-table"] > tbody > tr > td > a:active,
table[id^="ssfa-table"] > tfoot > tr > td > a,
table[id^="ssfa-table"] > tfoot > tr > td > a:visited,
table[id^="ssfa-table"] > tfoot > tr > td > a:hover,
table[id^="ssfa-table"] > tfoot > tr > td > a:active {
	text-decoration: none;
}
body table[id^="ssfa-table"] {
	padding: 0;
	width: 100%;		
}
table[id^="ssfa-table"] > thead > tr > th,
table[id^="ssfa-table"] > tbody > tr > td {
	text-align: center;
}
table[id^="ssfa-table"].ssfa-left > thead > tr > th,
table[id^="ssfa-table"].ssfa-left > tbody > tr > td {
	text-align: left;
}
table[id^="ssfa-table"].ssfa-right > thead > tr > th,
table[id^="ssfa-table"].ssfa-right > tbody > tr > td {
	text-align: right;
}
span.ssfa-faminicon {
	font-size: 20px;
	margin-left: 3px;
}
table[id^="ssfa-table"] > thead > tr > th:hover {
	cursor: pointer;
}
table[id^="ssfa-table"] td.ssfa-sorttype a, 
table[id^="ssfa-table"] td.ssfa-sorttype a:visited { 
	color: #666666;
	text-decoration: none;
}
/************************************* Silver Bullet **********************************/
table[id^="ssfa-table"].ssfa-silver-bullet thead > tr > th.ssfa-sortdate,
table[id^="ssfa-table"].ssfa-silver-bullet tbody > tr > td.ssfa-sortdate {
	width: 140px;
}
table[id^="ssfa-table"].ssfa-silver-bullet thead > tr > th.ssfa-sortsize,
table[id^="ssfa-table"].ssfa-silver-bullet tbody > tr > td.ssfa-sortsize {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-silver-bullet thead > tr > th.ssfa-sortstatus,
table[id^="ssfa-table"].ssfa-silver-bullet tbody > tr > td.ssfa-sortstatus {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td.ssfa-sorttype,
table[id^="ssfa-table"].ssfa-silver-bullet > thead > tr > th.ssfa-sorttype {
	text-align: center; 
	width: 75px;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td > a,
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td > a:link,
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td > a:visited,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination >  ul > li > a,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:link,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:visited {
	color: #666666;
	font-weight: bold;
	text-decoration: none;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td > a:hover,
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td > a:active {
	color: #BD5A35; 
}
table[id^="ssfa-table"].ssfa-silver-bullet {
	background: none repeat scroll 0 0 #FAFAFA;
	border: 1px solid #CCCCCC;
	border-collapse: separate;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
	border-spacing: 0;
	-moz-box-shadow: 0 1px 2px #D1D1D1;
	-o-box-shadow: 0 1px 2px #D1D1D1;	
	-webkit-box-shadow: 0 1px 2px #D1D1D1;
	box-shadow: 0 1px 2px #D1D1D1;
	color: #666666;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
	font-size: 12px;
	line-height: 15px;
	margin: 0 0 15px 0;
	text-shadow: 1px 1px 0 #FFFFFF;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;	
	vertical-align: baseline;
}
table[id^="ssfa-table"].ssfa-silver-bullet > thead > tr > th {	
	background: #EDEDED;
	background-image: -o-linear-gradient(top, #EBEBEB 100%, #EDEDED 100%);
	background-image: -moz-linear-gradient(top, #EBEBEB 100%, #EDEDED 100%);
	background-image: -webkit-linear-gradient(top, #EBEBEB 100%, #EDEDED 100%);
	background-image: -ms-linear-gradient(top, #EBEBEB 100%, #EDEDED 100%);
	background-image: linear-gradient(top, #EBEBEB 100%, #EDEDED 100%);
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #EBEBEB),
		color-stop(1, #EDEDED) );
	border-top: 1px solid #FAFAFA;
	border-bottom: 1px solid #E0E0E0;
	border-left: 0;
	border-right: 0;
	color: #666666;
	font-size: 12px;
	font-weight: bold;
	padding: 15px 15px;
	text-transform: uppercase;
	vertical-align: middle;	
}
table[id^="ssfa-table"].ssfa-silver-bullet > thead > tr:first-child > th:first-child{
	-moz-border-radius-topleft: 3px;
	-webkit-border-top-left-radius: 3px;
	border-top-left-radius: 3px;
}
table[id^="ssfa-table"].ssfa-silver-bullet > thead > tr:first-child > th:last-child {
	-moz-border-radius-topright: 3px;
	-webkit-border-top-right-radius: 3px;
	border-top-right-radius: 3px;
}	
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr:last-child > td:first-child {
	-moz-border-radius-bottomleft: 3px;
	-webkit-border-bottom-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr:last-child > td:last-child {
	-moz-border-radius-bottomright: 3px;
	-webkit-border-bottom-right-radius: 3px;
	border-bottom-right-radius: 3px;
}	
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td:first-child {
	border-left: 0;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr > td {
	background: #FAFAFA;
	background-image: -o-linear-gradient(top, #FBFBFB 100%, #FAFAFA 100%);
	background-image: -moz-linear-gradient(top, #FBFBFB 100%, #FAFAFA 100%);
	background-image: -webkit-linear-gradient(top, #FBFBFB 100%, #FAFAFA 100%);
	background-image: -ms-linear-gradient(top, #FBFBFB 100%, #FAFAFA 100%);
	background-image: linear-gradient(top, #FBFBFB 100%, #FAFAFA 100%);
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #FBFBFB),
		color-stop(1, #FAFAFA) );
	border-bottom: 1px solid #E0E0E0;
	border-left: 1px solid #E0E0E0;
	border-right: 0;
	border-top: 1px solid #FFFFFF;
	padding: 15px;
	vertical-align: middle;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr:last-child > td {
	border-bottom: 0;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td {
	background: #EDEDED;
	padding: 15px;
	border: 0;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr:hover > td {
	background: #F2F2F2;
	background-image: -o-linear-gradient(top, #F2F2F2 100%, #F0F0F0 100%);
	background-image: -moz-linear-gradient(top, #F2F2F2 100%, #F0F0F0 100%);
	background-image: -webkit-linear-gradient(top, #F2F2F2 100%, #F0F0F0 100%);
	background-image: -ms-linear-gradient(top, #F2F2F2 100%, #F0F0F0 100%);
	background-image: linear-gradient(top, #F2F2F2 100%, #F0F0F0 100%);
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #F2F2F2),
		color-stop(1, #F0F0F0) );
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination {
	border: 0;
	margin: 0;
	padding: 0;
	text-align: center; 
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul {
	background-color: transparent;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	display: inline-block;
	margin: 0;
	padding: 0;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li {
	display: inline;
	margin:0!important;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li > a,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li > span {
	border: 0;
	-moz-border-radius: 50px;	
	-webkit-border-radius: 50px;		
	border-radius: 50px;
	float: left;
	line-height: 15px;
	padding: 4px 8px;
	text-decoration: none;
	text-shadow: none;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:link,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:visited,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.active > span {
	background: #D8D8D8;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	color: #666666;
	cursor: default;
	text-shadow: none;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination ul > li > a:hover,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li > a:hover,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li > a:focus {
	background: #E0E0E0;
	color: #BD5A35; 	
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > span,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:link,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:visited,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:hover,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:focus {
	background-color: transparent;
	color: #C3C3C3;
	cursor: default;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-centered,
table[id^="ssfa-table"].ssfa-silver-bullet > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-right {
	text-align: center;
}
/*************************************************** Minimalist ******************************************/
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td.ssfa-sortdate,
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th.ssfa-sortdate {
	width: 140px;
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td.ssfa-sortsize,
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th.ssfa-sortsize {
	width: 100px;
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td.ssfa-sortstatus,
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th.ssfa-sortstatus {
	width: 45px;
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td.ssfa-sorttype,
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th.ssfa-sorttype {
	text-align: center; 
	width: 70px;
}
table[id^="ssfa-table"].ssfa-minimalist {
	background: #FFFFFF;
	border: 0;
	border-bottom: 0;
	border-collapse: separate;
	-moz-border-radius: 0;
	-webkit-border-radius: 0;
	border-radius: 0;
	border-spacing: 0;
	color: #666666;
	font-family: "Lucida Sans Unicode", "Lucida Grande", "Droid Sans", "Trebuchet MS", sans-serif;
	font-size: 12px;
	line-height: 16px;
	margin: 0 0 0 0;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;  
}
table[id^="ssfa-table"].ssfa-minimalist > thead {
	border: 0;
	margin: 0;
	padding: 0;
	vertical-align: baseline;
}
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th {
	border-bottom: 0;
	border-left: 1px solid #F0F0F0;
	border-right: 0;
	border-top: 1px solid #CCCCCC;
	color: #777777;
	font-family: "Lucida Sans Unicode", "Lucida Grande", "Droid Sans", "Open Sans", "Trebuchet MS", sans-serif;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 0.5px;
	padding: 10px;
	text-transform: uppercase;
}
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td {
	background-color: #FFFFFF;
	background-image: none;
	text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
	vertical-align: middle;    
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr:hover > td {
	background: #F9F9F9;
}
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th.ssfa-minimalist-first-column,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td.ssfa-minimalist-first-column,
table[id^="ssfa-table"].ssfa-minimalist > thead > tr > th:first-child,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td:first-child {
	border-left: none;
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td {
	border-bottom: 0;
	border-left: 1px solid #F0F0F0;
	border-right: 0;
	border-top: 1px solid #F0F0F0;
	line-height: 14px;
	padding: 10px;
	vertical-align: middle;    
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td > a:hover,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td > a:focus,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr > td > a:active {
	color: #BD5A35; 	
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td {
	background-image: none;
	border-bottom: 0;
	border-left: 0;  
	border-right: 0;  
	border-top: 1px solid #CCCCCC;
	box-shadow: none;
	padding: 10px;
	text-shadow: 0;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td {
	text-align: center; 
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr:hover, 
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr:hover td {
	background: transparent; 
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination {
	border: 0;
	padding: 0;
	margin: 0;
	text-align: center;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul {
	background-color: transparent;
	-moz-box-shadow: none;
	-o-box-shadow: none;
	-webkit-box-shadow: none;
	box-shadow: none;
	display: inline-block;
	margin: 0;
	padding: 0;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li {
	display: inline;
	margin:0!important;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li > a,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li > span {
	border: 0;
	float: left;
	line-height: 15px;
	padding: 4px 8px;
	text-decoration: none;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li > a:hover,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li > a:focus {
	background: #EEEEEE;
	color: #BD5A35; 		  
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > li.active > span {
	background: #EEEEEE;  
	color: #444444;
	cursor: default;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > .disabled > span,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > .disabled > a,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > .disabled > a:hover,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination > ul > .disabled > a:focus {
	background-color: transparent; 
	color: #D8D8D8;
	cursor: default;
}
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-centered,
table[id^="ssfa-table"].ssfa-minimalist > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-right {
	text-align: center;
}
/************************************* Grey Matter **********************************/
table[id^="ssfa-table"].ssfa-greymatter thead > tr > th.ssfa-sortdate,
table[id^="ssfa-table"].ssfa-greymatter tbody > tr > td.ssfa-sortdate {
	width: 140px;
}
table[id^="ssfa-table"].ssfa-greymatter thead > tr > th.ssfa-sortsize,
table[id^="ssfa-table"].ssfa-greymatter tbody > tr > td.ssfa-sortsize {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-greymatter thead > tr > th.ssfa-sortstatus,
table[id^="ssfa-table"].ssfa-greymatter tbody > tr > td.ssfa-sortstatus {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td.ssfa-sorttype,
table[id^="ssfa-table"].ssfa-greymatter > thead > tr > th.ssfa-sorttype {
	text-align: center; 
	width: 75px;
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td > a,
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td > a:link,
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td > a:visited{
	color: #666666;
	font-weight: bold;
	text-decoration: none;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination >  ul > li > a,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:link,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:visited {
	color: #D1D1D1;
	font-weight: bold;
	text-decoration: none;	
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td > a:hover,
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td > a:active {
	color: #BD5A35; 
}
table[id^="ssfa-table"].ssfa-greymatter {
	background: none repeat scroll 0 0 #E1E1E1;
	border: 1px solid darkslategray;
	border-collapse: separate;
	-moz-border-radius: 0px;
	-webkit-border-radius: 0px;
	border-radius: 0px;
	border-spacing: 0;
	-moz-box-shadow: 0 1px 2px #D1D1D1;
	-o-box-shadow: 0 1px 2px #D1D1D1;	
	-webkit-box-shadow: 0 1px 2px #D1D1D1;
	box-shadow: 0 1px 2px #D1D1D1;
	color: #666666;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
	font-size: 12px;
	line-height: 15px;
	margin: 0 0 15px 0;
	text-shadow: none;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;	
	vertical-align: baseline;
}
table[id^="ssfa-table"].ssfa-greymatter > thead > tr > th {	
	background: dimgray;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	border-top: 0;
	border-bottom: 0;
	border-left: 0;
	border-right: 0;
	color: #FFF;
	font-size: 12px;
	font-weight: bold;
	padding: 15px 15px;
	text-transform: uppercase;
	vertical-align: middle;	
}
table[id^="ssfa-table"].ssfa-greymatter > thead > tr:first-child > th:first-child{
	-moz-border-radius-topleft: 0px;
	-webkit-border-top-left-radius: 0px;
	border-top-left-radius: 0px;
}
table[id^="ssfa-table"].ssfa-greymatter > thead > tr:first-child > th:last-child {
	-moz-border-radius-topright: 0px;
	-webkit-border-top-right-radius: 0px;
	border-top-right-radius: 0px;
}	
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr:last-child > td:first-child {
	-moz-border-radius-bottomleft: 0px;
	-webkit-border-bottom-left-radius: 0px;
	border-bottom-left-radius: 0px;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr:last-child > td:last-child {
	-moz-border-radius-bottomright: 0px;
	-webkit-border-bottom-right-radius: 0px;
	border-bottom-right-radius: 0px;
}	
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td:first-child {
	border-left: 0;
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr > td {
	background: #E1E1E1;
	border-bottom: 1px solid transparent;
	border-left: 1px solid transparent;
	border-right: 0;
	border-top: 1px solid transparent;
	padding: 15px;
	vertical-align: middle;
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr:last-child > td {
	border-bottom: 0;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td {
	background:dimgray;
	color:#FFF!important;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	padding: 15px;
	border: 0;
}
table[id^="ssfa-table"].ssfa-greymatter > tbody > tr:hover > td {
	background: #D1D1D1;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination {
	border: 0;
	margin: 0;
	padding: 0;
	text-align: center; 
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul {
	background-color: transparent;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	display: inline-block;
	margin: 0;
	padding: 0;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li {
	display: inline;
	margin:0!important;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li > a,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li > span {
	border: 0;
	-moz-border-radius: 50px;	
	-webkit-border-radius: 50px;		
	border-radius: 50px;
	float: left;
	line-height: 15px;
	padding: 4px 8px;
	text-decoration: none;
	text-shadow: none;
}


table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:link,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:visited,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.active > span {
	background: #D8D8D8;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	color: #666666;
	cursor: default;
	text-shadow: none;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination ul > li > a:hover,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li > a:hover,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li > a:focus {
	background: #E0E0E0;
	color: #BD5A35; 	
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > span,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:link,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:visited,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:hover,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:focus {
	background-color: transparent;
	color: #C3C3C3;
	cursor: default;
}
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-centered,
table[id^="ssfa-table"].ssfa-greymatter > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-right {
	text-align: center;
}
/************************************* White Stripes **********************************/
table[id^="ssfa-table"].ssfa-whitestripes thead > tr > th.ssfa-sortdate,
table[id^="ssfa-table"].ssfa-whitestripes tbody > tr > td.ssfa-sortdate {
	width: 140px;
}
table[id^="ssfa-table"].ssfa-whitestripes thead > tr > th.ssfa-sortsize,
table[id^="ssfa-table"].ssfa-whitestripes tbody > tr > td.ssfa-sortsize {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-whitestripes thead > tr > th.ssfa-sortstatus,
table[id^="ssfa-table"].ssfa-whitestripes tbody > tr > td.ssfa-sortstatus {
	width: 70px;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td.ssfa-sorttype,
table[id^="ssfa-table"].ssfa-whitestripes > thead > tr > th.ssfa-sorttype {
	text-align: center; 
	width: 75px;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td > a,
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td > a:link,
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td > a:visited,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination >  ul > li > a,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:link,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination >  ul > li > a:visited {
	color: #666666;
	font-weight: bold;
	text-decoration: none;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td > a:hover,
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td > a:active {
	color: #BD5A35; 
}
table[id^="ssfa-table"].ssfa-whitestripes {
	background: none repeat scroll 0 0 #FFFFFF;
	border: 1px solid #CCCCCC;
	border-collapse: separate;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	border-radius: 10px;
	border-spacing: 0;
	-moz-box-shadow: 0 1px 20px #D1D1D1!important;
	-o-box-shadow: 0 1px 20px #D1D1D1!important;	
	-webkit-box-shadow: 0 1px 20px #D1D1D1!important;
	box-shadow: 0 1px 20px #D1D1D1!important;
	color: #666666;
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
	font-size: 12px;
	line-height: 15px;
	margin: 0 0 15px 0;
	text-shadow: 1px 1px 0 #FFFFFF;
	-moz-transition: all .4s ease-in;
	-o-transition: all .4s ease-in;
	-webkit-transition: all .4s ease-in;
	transition: all .4s ease-in;	
	vertical-align: baseline;
}
table[id^="ssfa-table"].ssfa-whitestripes > thead > tr > th {	
	background: #FFFFFF;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	border-top: 1px solid #FAFAFA;
	border-bottom: 1px solid #F1F1F1;
	border-left: 0;
	border-right: 0;
	color: #666666;
	font-size: 12px;
	font-weight: bold;
	padding: 15px 15px;
	text-transform: uppercase;
	vertical-align: middle;	
}
table[id^="ssfa-table"].ssfa-whitestripes > thead > tr:first-child > th:first-child{
	-moz-border-radius-topleft: 10px;
	-webkit-border-top-left-radius: 10px;
	border-top-left-radius: 10px;
}
table[id^="ssfa-table"].ssfa-whitestripes > thead > tr:first-child > th:last-child {
	-moz-border-radius-topright: 10px;
	-webkit-border-top-right-radius: 10px;
	border-top-right-radius: 10px;
}	
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr:last-child > td:first-child {
	-moz-border-radius-bottomleft: 10px;
	-webkit-border-bottom-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr:last-child > td:last-child {
	-moz-border-radius-bottomright: 10px;
	-webkit-border-bottom-right-radius: 10px;
	border-bottom-right-radius: 10px;
}	
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td:first-child {
	border-left: 0;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr > td {
	background: #FFF;
	border-bottom: 1px solid transparent;
	border-left: 1px solid transparent;
	border-right: 0;
	border-top: 1px solid transparent;
	padding: 15px;
	vertical-align: middle;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:last-child > td {
	border-bottom: 0;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td {
	background:#FFFFFF;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	padding: 15px;
	border: 0;
}
table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:hover > td {
	background: #F7F7F7;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination {
	border: 0;
	margin: 0;
	padding: 0;
	text-align: center; 
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul {
	background-color: transparent;
	-moz-box-shadow: none;
	-o-box-shadow: none;	
	-webkit-box-shadow: none;
	box-shadow: none;
	display: inline-block;
	margin: 0;
	padding: 0;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li {
	display: inline;
	margin:0!important;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li > a,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li > span {
	border: 0;
	-moz-border-radius: 50px;	
	-webkit-border-radius: 50px;		
	border-radius: 50px;
	float: left;
	line-height: 15px;
	padding: 4px 8px;
	text-decoration: none;
	text-shadow: none;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:link,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.active > a:visited,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.active > span {
	background: #D8D8D8;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
	color: #666666;
	cursor: default;
	text-shadow: none;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination ul > li > a:hover,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li > a:hover,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li > a:focus {
	background: #E0E0E0;
	color: #BD5A35; 	
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > span,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:link,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:visited,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:hover,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination > ul > li.disabled > a:focus {
	background-color: transparent;
	color: #C3C3C3;
	cursor: default;
}
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-centered,
table[id^="ssfa-table"].ssfa-whitestripes > tfoot > tr > td > div.ssfa-pagination.ssfa-pagination-right {
	text-align: center;
}
div.ssfa_fileup_files_container table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:first-child > td:first-child {
	-moz-border-radius-topleft: 10px;
	-webkit-border-top-left-radius: 10px;
	border-top-left-radius: 10px;	
}
div.ssfa_fileup_files_container table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:first-child > td:last-child {
	-moz-border-radius-topright: 10px;
	-webkit-border-top-right-radius: 10px;
	border-top-right-radius: 10px;	
}
div.ssfa_fileup_files_container table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:last-child > td:first-child {
	-moz-border-radius-bottomleft: 10px;
	-webkit-border-bottom-left-radius: 10px;
	border-bottom-left-radius: 10px;	
}
div.ssfa_fileup_files_container table[id^="ssfa-table"].ssfa-whitestripes > tbody > tr:last-child > td:last-child {
	-moz-border-radius-bottomright: 10px;
	-webkit-border-bottom-right-radius: 10px;
	border-bottom-right-radius: 10px;	
}
/************************************* PRIMARY COLORS (HEADINGS, ICONS AND LINKS) *************************************/
/* Black Primary */
h3.ssfa-black,
div.ssfa-flightbox-controls.ssfa-black span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-black span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-black span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-black span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-black,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-black:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-black:active,
table[id^="ssfa-table"] tbody td a.ssfa-black span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-black:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-black,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-black:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-black,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-black:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-black:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-black:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-black, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-black a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-black a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-black a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-black a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-black, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-black a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-black a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-black a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-black a:visited,  
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-black, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-black a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-black a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-black a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-black a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-black, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-black a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-black a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-black a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-black a:visited { 
	color: #444444!important; 
}
div.ssfa-flightbox-controls.ssfa-black .flightbox-spinner > div { background-color: #444444; }
div.ssfa-up-progress-black{background: #444444;}
/* Silver Primary */
h3.ssfa-silver,
div.ssfa-flightbox-controls.ssfa-silver span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-silver span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-silver span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-silver span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-silver,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-silver:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-silver:active,
table[id^="ssfa-table"] tbody td a.ssfa-silver span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-silver:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-silver,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-silver:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-silver,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-silver:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-silver:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-silver:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-silver, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-silver a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-silver a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-silver a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-silver a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-silver, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-silver a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-silver a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-silver a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-silver a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-silver, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-silver a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-silver a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-silver a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-silver a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-silver, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-silver a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-silver a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-silver a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-silver a:visited { 
	color: #777777; 
}
div.ssfa-up-progress-silver {background:#777777;}
div.ssfa-flightbox-controls.ssfa-silver .flightbox-spinner > div { background-color: #777777; }
/* Red Primary */
h3.ssfa-red,
div.ssfa-flightbox-controls.ssfa-red span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-red span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-red span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-red span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-red,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-red:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-red:active,
table[id^="ssfa-table"] tbody td a.ssfa-red span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-red:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-red,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-red:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-red,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-red:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-red:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-red:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-red, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-red a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-red a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-red a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-red a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-red, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-red a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-red a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-red a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-red a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-red, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-red a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-red a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-red a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-red a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-red, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-red a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-red a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-red a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-red a:visited { 
	color: #AD2125; 
}
div.ssfa-up-progress-red {background: #AD2125;}
div.ssfa-flightbox-controls.ssfa-red .flightbox-spinner > div { background-color: #AD2125; }
/* Blue Primary */
h3.ssfa-blue,
div.ssfa-flightbox-controls.ssfa-blue span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-blue span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-blue span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-blue span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-blue,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-blue:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-blue:active,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-blue,
table[id^="ssfa-table"] tbody td a.ssfa-blue span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-blue:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-blue,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-blue:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-blue,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-blue:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-blue:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-blue:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-blue, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-blue a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-blue a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-blue a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-blue a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-blue, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-blue a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-blue a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-blue a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-blue a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-blue, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-blue a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-blue a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-blue a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-blue a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-blue, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-blue a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-blue a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-blue a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-blue a:visited { 
	color: #2B769E; 
}
div.ssfa-up-progress-blue {background: #2B769E;}
div.ssfa-flightbox-controls.ssfa-blue .flightbox-spinner > div { background-color: #2B769E; }
 /* Green Primary */
h3.ssfa-green,
div.ssfa-flightbox-controls.ssfa-green span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-green span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-green span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-green span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-green,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-green:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-green:active,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-green,
table[id^="ssfa-table"] tbody td a.ssfa-green span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-green:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-green,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-green:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-green,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-green:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-green:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-green:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-green, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-green a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-green a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-green a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-green a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-green, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-green a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-green a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-green a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-green a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-green, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-green a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-green a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-green a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-green a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-green, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-green a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-green a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-green a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-green a:visited { 
	color: #569662; 
}
div.ssfa-up-progress-green {background: #569662;}
div.ssfa-flightbox-controls.ssfa-green .flightbox-spinner > div { background-color: #569662; }
/* Brown Primary */
h3.ssfa-brown,
div.ssfa-flightbox-controls.ssfa-brown span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-brown span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-brown span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-brown span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-brown,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-brown:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-brown:active,
table[id^="ssfa-table"] tbody td a.ssfa-brown span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-brown:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-brown,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-brown:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-brown,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-brown:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-brown:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-brown:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-brown, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-brown a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-brown a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-brown a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-brown a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-brown, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-brown a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-brown a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-brown a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-brown a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-brown, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-brown a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-brown a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-brown a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-brown a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-brown, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-brown a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-brown a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-brown a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-brown a:visited { 
	color: #6A523F; 
}
div.ssfa-up-progress-brown {background: #6A523F;}
div.ssfa-flightbox-controls.ssfa-brown .flightbox-spinner > div { background-color: #6A523F; }
/* Orange Primary */
h3.ssfa-orange,
div.ssfa-flightbox-controls.ssfa-orange span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-orange span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-orange span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-orange span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-orange,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-orange:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-orange:active,
table[id^="ssfa-table"] tbody td a.ssfa-orange span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-orange:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-orange,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-orange:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-orange,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-orange:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-orange:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-orange:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-orange, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-orange a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-orange a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-orange a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-orange a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-orange, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-orange a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-orange a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-orange a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-orange a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-orange, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-orange a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-orange a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-orange a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-orange a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-orange, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-orange a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-orange a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-orange a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-orange a:visited { 
	color: #BE5D38; 
}
div.ssfa-up-progress-orange {background: #BE5D38;}
div.ssfa-flightbox-controls.ssfa-orange .flightbox-spinner > div { background-color: #BE5D38; }
/* Purple Primary */
h3.ssfa-purple,
div.ssfa-flightbox-controls.ssfa-purple span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-purple span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-purple span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-purple span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-purple,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-purple:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-purple:active,
table[id^="ssfa-table"] tbody td a.ssfa-purple span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-purple:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-purple,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-purple:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-purple,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-purple:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-purple:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-purple:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-purple, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-purple a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-purple a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-purple a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-purple a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-purple, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-purple a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-purple a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-purple a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-purple a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-purple, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-purple a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-purple a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-purple a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-purple a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-purple, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-purple a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-purple a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-purple a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-purple a:visited { 
	color: #5B4886; 
}
div.ssfa-up-progress-purple{background: #5B4886;}
div.ssfa-flightbox-controls.ssfa-purple .flightbox-spinner > div { background-color: #5B4886; }
/* Pink Primary */
h3.ssfa-pink,
div.ssfa-flightbox-controls.ssfa-pink span,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-pink span[id^=fileaplay_], 
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-pink span[id^=fileaplay_]:hover,
table[id^="ssfa-table"] tbody td div.ssfa-player.ssfa-pink span[id^=fileaplay_]:active, 
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-pink,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-pink:hover,
table[id^="ssfa-table"] tbody td span.ssfa-faminicon.ssfa-pink:active,
table[id^="ssfa-table"] tbody td a.ssfa-pink span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-pink:visited span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-pink,
div[id^="ssfa-list-wrap"].ssfa-silk a.ssfa-pink:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-pink,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-pink:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-pink:hover,
div[id^="ssfa-list-wrap"].ssfa-minimal-list a.ssfa-pink:active,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-pink, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-pink a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-pink a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-pink a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-listicon.ssfa-pink a:visited,
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-pink, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-pink a, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-pink a:hover, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-pink a:active, 
div[id^="ssfa-list-wrap"].ssfa-silk span.ssfa-paperclip.ssfa-pink a:visited, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-pink, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-pink a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-pink a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-pink a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-listicon.ssfa-pink a:visited,
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-pink, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-pink a, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-pink a:hover, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-pink a:active, 
div[id^="ssfa-list-wrap"].ssfa-minimal-list span.ssfa-paperclip.ssfa-pink a:visited { 
	color: #DD416F; 
}
div.ssfa-up-progress-pink{background: #DD416F;}
div.ssfa-flightbox-controls.ssfa-pink .flightbox-spinner > div { background-color: #DD416F; }
/* ACCENT COLORS */
/* Black Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-black:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-black div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-black div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(0, 0, 0, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-black:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-black:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-black:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-black:active {
	color: #575757;
}
/* Silver Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-silver:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-silver div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-silver div.ssfa-listitem:active span.ssfa-topline {
	background: rgba(150, 150, 150, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-silver:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-silver:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-silver:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-silver:active {
	color: #969696;
}
/* Red Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-red:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-red div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-red div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(207, 71, 57, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-red:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-red:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-red:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-red:active {
	color: #CF4739;
}
/* Blue Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-blue:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-blue div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-blue div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(91, 160, 208, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-blue:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-blue:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-blue:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-blue:active {
	color: #5BA0D0;
}
/* Green Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-green:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-green div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-green div.ssfa-listitem:active span.ssfa-topline {
	background: rgba(109, 185, 123, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-green:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-green:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-green:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-green:active {
	color: #6DB97B;
}
/* Brown Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-brown:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-brown div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-brown div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(136, 105, 76, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-brown:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-brown:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-brown:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-brown:active {
	color: #88694C;
}
/* Orange Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-orange:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-orange div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-orange div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(203, 120, 88, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-orange:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-orange:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-orange:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-orange:active {
	color: #CB7858;
}
/* Purple Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-purple:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-purple div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-purple div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(113, 89, 163, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-purple:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-purple:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-purple:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-purple:active {
	color: #7159A3;
}
/* Pink Secondary */
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-pink:hover:before,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-pink div.ssfa-listitem:hover span.ssfa-topline,
div[id^="ssfa-list-wrap"].ssfa-minimal-list .accent-pink div.ssfa-listitem:active span.ssfa-topline {
    background: rgba(217, 98, 132, 0.1);
}
table[id^="ssfa-table"] tbody td a.ssfa-pink:hover span.ssfa-filename,
table[id^="ssfa-table"] tbody td a.ssfa-pink:active span.ssfa-filename,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-pink:hover,
div[id^="ssfa-list-wrap"].ssfa-silk a.accent-pink:active {
	color: #D96284;
}
/* Black Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-black div.ssfa-audio-download{
	background: #444444;
	color: #f8f8f8;	
}
/* Silver Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-silver div.ssfa-audio-download{
	background: #777777;
	color: #f8f8f8;	
}
/* Red Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-red div.ssfa-audio-download{
	background: #AD2125;
	color: #f8f8f8;	
}
/* Blue Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-blue div.ssfa-audio-download{
	background: #2B769E;
	color: #f8f8f8;	
}
/* Green Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-green div.ssfa-audio-download{
	background: #569662;
	color: #f8f8f8;	
}
/* Brown Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-brown div.ssfa-audio-download{
	background: #6A523F;
	color: #f8f8f8;	
}
/* Orange Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-orange div.ssfa-audio-download{
	background: #BE5D38;
	color: #f8f8f8;	
}
/* Purple Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-purple div.ssfa-audio-download{
	background: #5B4886;
	color: #f8f8f8;	
}
/* Pink Audio Downloads */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-pink div.ssfa-audio-download{
	background: #DD416F;
	color: #f8f8f8;	
}
/* Black Audio Downloads: Hover */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-black div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-black div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-black:visited div.ssfa-audio-download{
    background: #7c7c7c;
	color: #444444;	
}
/* Silver Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-silver div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-silver div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-silver:visited div.ssfa-audio-download{
	background: #c7c7c7;
	color: #444444;	
}
/* Red Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-red div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-red div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-red:visited div.ssfa-audio-download{
    background: #e39f98;
	color: #444444;	
}
/* Blue Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-blue div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-blue div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-blue:visited div.ssfa-audio-download{
    background: #a9cce4;
	color: #444444;	
}
/* Green Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-green div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-green div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-green:visited div.ssfa-audio-download{
	background: #b2d8b9;
	color: #444444;	
}
/* Brown Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-brown div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-brown div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-brown:visited div.ssfa-audio-download{
    background: #c0b0a2;
	color: #444444;	
}
/* Orange Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-orange div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-orange div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-orange:visited div.ssfa-audio-download{
    background: #e1b8a8;
	color: #444444;	
}
/* Purple Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-purple div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-purple div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-purple:visited div.ssfa-audio-download{
    background: #b4a8cd;
	color: #444444;	
}
/* Pink Audio Downloads: Hover  */
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-pink div.ssfa-audio-download:hover,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-pink div.ssfa-audio-download:active,
table[id^="ssfa-table"] tbody td a.ssfa-audio-download.ssfa-pink:visited div.ssfa-audio-download{
    background: #e8adbe;
	color: #444444;	
}
/********************************** FOO TABLE STYLES :: Pagination and Sorting ***************************************/
@font-face {
  font-family: 'footable';
  src: url('../fonts/footable.eot');
  src: url('../fonts/footable.eot') format('embedded-opentype'), 
	   url('../fonts/footable.woff') format('woff'), 
	   url('../fonts/footable.ttf') format('truetype'), 
	   url('../images/footable.svg') format('svg');
  font-style: normal;
  font-weight: normal;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  @font-face   {
    font-family: 'footable';
    src: url('../images/footable.svg') format('svg');
    font-style: normal;
    font-weight: normal;
  }
}
.footable > thead > tr > th.footable-sortable:hover {
  cursor: pointer;
}
.footable > thead > tr > th.footable-sorted > span.footable-sort-indicator:before {
  content: "\e013";
}
.footable > thead > tr > th.footable-sorted-desc > span.footable-sort-indicator:before {
  content: "\e012";
}
.footable > thead > tr > th > span.footable-sort-indicator {
  display: inline-block;
  font-family: 'footable';
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  padding-left: 5px;
  speak: none;
  text-transform: none;
}
.footable > thead > tr > th > span.footable-sort-indicator:before {
  content: "\e022";
}
.footable > tfoot .pagination {
  margin: 0;
}
.footable.no-paging .hide-if-no-paging {
  display: none;
}
.footable-row-detail-inner {
  display: table;
}
.footable-row-detail-row {
  display: table-row;
  line-height: 1.5em;
}
.footable-row-detail-group {
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  line-height: 2em;
}
.footable-row-detail-name {
  display: table-cell;
  font-weight: bold;
  padding-right: 0.5em;
}
.footable-row-detail-value {
  display: table-cell;
}
/* Miscellaneous */
code.ssfa-code {
    background-color: #F3F0EB;
    border: 1px solid #D0D0D0;
}
div[id^="ssfa-table-wrap"] a,
div[id^="ssfa-table-wrap"] a:visited,
div[id^="ssfa-table-wrap"] a:hover,
div[id^="ssfa-table-wrap"] a:active,
div[id^="ssfa-table-wrap"] a:focus,
div[id^="ssfa-list-wrap"] a,
div[id^="ssfa-list-wrap"] a:visited,
div[id^="ssfa-list-wrap"] a:hover,
div[id^="ssfa-list-wrap"] a:active,
div[id^="ssfa-list-wrap"] a:focus {
	outline: none;
}
tr.ssfa-selected td,
tr.ssfa-selected td a,
tr.ssfabd-selected td,
tr.ssfabd-selected td a {
	color: #AAA!important;
    border-left: 0!important;	
    border-right: 0!important;		
}
table[id^="ssfa-table"] > tbody > tr.ssfa-selected > td,
table[id^="ssfa-table"] > tbody > tr.ssfabd-selected > td {
	background: #DDDDDD!important;
	background-image: -o-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -moz-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -ms-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #EEEEEE),
		color-stop(1, #DDDDDD) )!important;
}
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr.ssfa-selected > td,
table[id^="ssfa-table"].ssfa-minimalist > tbody > tr.ssfabd-selected > td {
	background: #F9F9F9!important;
	background-image: -o-linear-gradient(top, #F9F9F9 100%, #F9F9F9 100%)!important;
	background-image: -moz-linear-gradient(top, #F9F9F9 100%, #F9F9F9 100%)!important;
	background-image: -webkit-linear-gradient(top, #F9F9F9 100%, #F9F9F9 100%)!important;
	background-image: -ms-linear-gradient(top, #F9F9F9 100%, #F9F9F9 100%)!important;
	background-image: linear-gradient(top, #F9F9F9 100%, #F9F9F9 100%)!important;
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #F9F9F9),
		color-stop(1, #F9F9F9) )!important;
}
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr.ssfa-selected > td,
table[id^="ssfa-table"].ssfa-silver-bullet > tbody > tr.ssfabd-selected > td {
	background: #DDDDDD!important;
	background-image: -o-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -moz-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -ms-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #EEEEEE),
		color-stop(1, #DDDDDD) )!important;
}
table[id^="ssfa-table"].ssfa-yang > tbody > tr.ssfa-selected > td,
table[id^="ssfa-table"].ssfa-yang > tbody > tr.ssfabd-selected > td {
	background: #DDDDDD!important;
	background-image: -o-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -moz-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -ms-linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: linear-gradient(top, #EEEEEE 100%, #DDDDDD 100%)!important;
	background-image: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(1, #EEEEEE),
		color-stop(1, #DDDDDD) )!important;
}
.chozed-container-single .chozed-single {
	background-image: none!important;
	height: 26px!important;
	padding: 0 0 0 5px!important;
	-webkit-background-clip: padding-box;
	background-clip: padding-box;
	-webkit-box-shadow: 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
	-moz-box-shadow: 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
	box-shadow: 0 0 3px #ffffff inset, 0 1px 1px rgba(0,0,0,0.1);
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	line-height: 23px;
	text-decoration: none;
	color: #444444;
	background-color: #eeeeee;
	border-color: #dddddd;
	border-width: 1px;
	border-style: solid;
	-moz-border-radius: 0;
	-webkit-border-radius: 0;
	border-radius: 0;
	width: 100%;
	max-width: 100%;
	font-size: 12px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}	
.chozed-single a, 
.chozed-single-with-deselect a,
.chozed-single a:hover, 
.chozed-single-with-deselect a:hover,
.chozed-container-single .chozed-single,
.chozed-container-single .chozed-single a,
.chozed-container-single .chozed-single a:hover {
	text-decoration:none!important;
}
.chozed-container-single .chozed-drop {
	-webkit-border-radius: 0 0 4px 4px;
	-moz-border-radius: 0 0 4px 4px;
	border-radius: 0 0 4px 4px;
	-moz-background-clip: padding;
	-webkit-background-clip: padding-box;
	background-clip: padding-box;
}
.chozed-container .chozed-drop {
	background: #fff;
	border: 1px solid #aaa;
	border-top: 0;
	position: absolute;
	-webkit-box-shadow: 0 4px 5px rgba(0,0,0,.15);
	-moz-box-shadow: 0 4px 5px rgba(0,0,0,.15);
	box-shadow: 0 4px 5px rgba(0,0,0,.15);
	z-index: 1010;
}
span.ssfa-bulk-action-engage, span.ssfa-bulk-download-engage, a.stataway-csv {
	margin-left:10px;
	background: #EDEDED url(../images/overlay.png) repeat-x;
	display: inline-block;
	padding: 5px 10px 5px;
	color: #444;
	font-size: 12px;
	text-decoration: none;
	font-weight: normal;
	line-height: 1;
	border-radius: 10px;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0 1px 3px #F7F7F7;
	border-bottom: 1px solid rgba(0,0,0,0.25);	
	position: relative;
	cursor: pointer;
}
abbr.search-choice-close {
	cursor: pointer!important;	
}
.filertify,
.filertify-show,
.filertify-log {
	-webkit-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
	   -moz-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
	    -ms-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
	     -o-transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
	        transition: all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275); /* easeOutBack */
}
.filertify-hide {
	-webkit-transition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	   -moz-transition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	    -ms-transition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	     -o-transition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	        transition: all 250ms cubic-bezier(0.600, -0.280, 0.735, 0.045); /* easeInBack */
}
.filertify-log-hide {
	-webkit-transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	   -moz-transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	    -ms-transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	     -o-transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
	        transition: all 500ms cubic-bezier(0.600, -0.280, 0.735, 0.045); /* easeInBack */
}
.filertify-cover {
	position: fixed; z-index: 99999;
	top: 0; right: 0; bottom: 0; left: 0;
	background-color:white;
	filter:alpha(opacity=0);
	opacity:0;
}
	.filertify-cover-hidden {
		display: none;
	}
.filertify {
	position: fixed; z-index: 99999;
	top: 25%; left: 50%;
	width: 550px;
	margin-left: -275px;
	opacity: 1;
}
	.filertify-hidden {
		-webkit-transform: translate(0,-150px);
		   -moz-transform: translate(0,-150px);
		    -ms-transform: translate(0,-150px);
		     -o-transform: translate(0,-150px);
		        transform: translate(0,-150px);
		opacity: 0;
		display: none;
	}
	/* overwrite display: none; for everything except IE6-8 */
	:root *> .filertify-hidden {
		display: block;
		visibility: hidden;
	}
.filertify-logs {
	position: fixed;
	z-index: 5000;
	bottom: 10px;
	right: 10px;
	width: 300px;
}
.filertify-logs-hidden {
	display: none;
}
	.filertify-log {
		display: block;
		margin-top: 10px;
		position: relative;
		right: -300px;
		opacity: 0;
	}
	.filertify-log-show {
		right: 0;
		opacity: 1;
	}
	.filertify-log-hide {
		-webkit-transform: translate(300px, 0);
		   -moz-transform: translate(300px, 0);
		    -ms-transform: translate(300px, 0);
		     -o-transform: translate(300px, 0);
		        transform: translate(300px, 0);
		opacity: 0;
	}
	.filertify-dialog {
		padding: 25px;
	}
		.filertify-resetFocus {
			border: 0;
			clip: rect(0 0 0 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			width: 1px;
		}
		.filertify-inner {
			text-align: center;
		}
		.filertify-text {
			margin-bottom: 15px;
			width: 100%;
			-webkit-box-sizing: border-box;
			   -moz-box-sizing: border-box;
			        box-sizing: border-box;
			font-size: 100%;
		}
		.filertify-buttons {
		}
			.filertify-button,
			.filertify-button:hover,
			.filertify-button:active,
			.filertify-button:visited {
				background: none;
				text-decoration: none;
				border: none;
				/* line-height and font-size for input button */
				line-height: 1.5;
				font-size: 100%;
				display: inline-block;
				cursor: pointer;
				margin-left: 5px;
				text-transform:none!important;
			}
@media only screen and (max-width: 680px) {
	.filertify,
	.filertify-logs {
		width: 90%;
		-webkit-box-sizing: border-box;
		   -moz-box-sizing: border-box;
		        box-sizing: border-box;
	}
	.filertify {
		left: 5%;
		margin: 0;
	}
}
.filertify,
.filertify-log {
	font-family: sans-serif;
}
.filertify {
	background: #FFF;
	border: 1px solid #8E8E8E; /* browsers that don't support rgba */
	border: 1px solid rgba(0,0,0,.3);
	border-radius: 6px;
	box-shadow: 0 3px 7px rgba(0,0,0,.3);
	-webkit-background-clip: padding;     /* Safari 4? Chrome 6? */
	   -moz-background-clip: padding;     /* Firefox 3.6 */
	        background-clip: padding-box; /* Firefox 4, Safari 5, Opera 10, IE 9 */
}
.filertify-dialog {
	padding: 0;
}
	.filertify-inner {
		text-align: left;
	}
		.filertify-message {
			padding: 15px;
			margin: 0;
		}
		.filertify-text-wrapper {
			padding: 0 15px;
		}
			.filertify-text {
				color: #555;
				border-radius: 4px;
				padding: 8px;
				background-color: #FFF;
				border: 1px solid #CCC;
				box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
			}
			.filertify-text:focus {
				border-color: rgba(82,168,236,.8);
				outline: 0;
				box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
			}
		.filertify-buttons {
			padding: 14px 15px 15px;
			background: #F5F5F5;
			border-top: 1px solid #DDD;
			border-radius: 0 0 6px 6px;
			box-shadow: inset 0 1px 0 #FFF;
			text-align: right;
		}
			.filertify-button,
			.filertify-button:hover,
			.filertify-button:focus,
			.filertify-button:active {
				margin-left: 10px;
				border-radius: 4px;
				font-weight: normal;
				padding: 4px 12px;
				text-decoration: none;
				box-shadow: inset 0 1px 0 rgba(255, 255, 255, .2), 0 1px 2px rgba(0, 0, 0, .05);
				background-image: -webkit-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
				background-image:    -moz-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
				background-image:     -ms-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
				background-image:      -o-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
				background-image:         linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
			}
			.filertify-button:focus {
				outline: none;
				box-shadow: 0 0 5px #2B72D5;
			}
			.filertify-button:active {
				position: relative;
				box-shadow: inset 0 2px 4px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.05);
			}
				.filertify-button-cancel,
				.filertify-button-cancel:hover,
				.filertify-button-cancel:focus,
				.filertify-button-cancel:active {
					text-shadow: 0 -1px 0 rgba(255,255,255,.75);
					background-color: #E6E6E6;
					border: 1px solid #BBB;
					color: #333;
					background-image: -webkit-linear-gradient(top, #FFF, #E6E6E6);
					background-image:    -moz-linear-gradient(top, #FFF, #E6E6E6);
					background-image:     -ms-linear-gradient(top, #FFF, #E6E6E6);
					background-image:      -o-linear-gradient(top, #FFF, #E6E6E6);
					background-image:         linear-gradient(top, #FFF, #E6E6E6);
				}
				.filertify-button-cancel:hover,
				.filertify-button-cancel:focus,
				.filertify-button-cancel:active {
					background: #E6E6E6;
				}
				.filertify-button-ok,
				.filertify-button-ok:hover,
				.filertify-button-ok:focus,
				.filertify-button-ok:active {
					text-shadow: 0 -1px 0 rgba(0,0,0,.25);
					background-color: #2A4C69;
					border: 1px solid #2A4C69;
					border-color: #2A4C69 #2A4C69 #002A80;
					border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
					color: #FFF;
				}
				.filertify-button-ok:hover,
				.filertify-button-ok:focus,
				.filertify-button-ok:active {
					background: #2A4C69;
				}
.filertify-log {
	background: #D9EDF7;
	padding: 8px 14px;
	border-radius: 4px;
	color: #3A8ABF;
	text-shadow: 0 1px 0 rgba(255,255,255,.5);
	border: 1px solid #BCE8F1;
}
	.filertify-log-error {
		color: #B94A48;
		background: #F2DEDE;
		border: 1px solid #EED3D7;
	}
	.filertify-log-success {
		color: #468847;
		background: #DFF0D8;
		border: 1px solid #D6E9C6;
	}
/* AUDIO PLAYER */
table[id^="ssfa-table"] .mejs-container {
    background: none repeat scroll 0 0 #fff;
    font-family: Helvetica,Arial;
    position: relative;
    text-align: left;
    text-indent: 0;
    vertical-align: top;
}
table[id^="ssfa-table"] .me-plugin {
    position: absolute;
}
table[id^="ssfa-table"] .mejs-embed, table[id^="ssfa-table"] .mejs-embed body {
    background: none repeat scroll 0 0 #000;
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-fullscreen {
    overflow: hidden !important;
}
table[id^="ssfa-table"] .mejs-container-fullscreen {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
}
table[id^="ssfa-table"] .mejs-container-fullscreen .mejs-mediaelement, table[id^="ssfa-table"] .mejs-container-fullscreen video {
    height: 100%;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-clear {
    clear: both;
}
table[id^="ssfa-table"] .mejs-background {
    left: 0;
    position: absolute;
    top: 0;
}
table[id^="ssfa-table"] .mejs-mediaelement {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-poster {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    left: 0;
    position: absolute;
    top: 0;
}
:root .mejs-poster img {
    display: none;
}
table[id^="ssfa-table"] .mejs-poster img {
    border: 0 none;
    padding: 0;
}
table[id^="ssfa-table"] .mejs-overlay {
    left: 0;
    position: absolute;
    top: 0;
}
table[id^="ssfa-table"] .mejs-overlay-play {
    cursor: pointer;
}
table[id^="ssfa-table"] .mejs-overlay-button {
    background: url("../images/bigplay.svg") no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 100px;
    left: 50%;
    margin: -50px 0 0 -50px;
    position: absolute;
    top: 50%;
    width: 100px;
}
table[id^="ssfa-table"] .no-svg .mejs-overlay-button {
    background-image: url("../images/bigplay.png");
}
table[id^="ssfa-table"] .mejs-overlay:hover .mejs-overlay-button {
    background-position: 0 -100px;
}
table[id^="ssfa-table"] .mejs-overlay-loading {
    background: linear-gradient(rgba(50, 50, 50, 0.9), rgba(0, 0, 0, 0.9)) repeat scroll 0 0 rgba(0, 0, 0, 0);
    height: 80px;
    left: 50%;
    margin: -40px 0 0 -40px;
    position: absolute;
    top: 50%;
    width: 80px;
}
table[id^="ssfa-table"] .mejs-overlay-loading span {
    background: url("../images/loading.gif") no-repeat scroll 50% 50% transparent;
    display: block;
    height: 80px;
    width: 80px;
}
table[id^="ssfa-table"] .mejs-container .mejs-controls {
    background: -webkit-gradient(linear,0% 0,0% 100%,from(rgba(236, 236, 236, 1)),to(rgba(236, 236, 236, 1)))!important;
    background: -webkit-linear-gradient(top,rgba(236, 236, 236, 1),rgba(236, 236, 236, 1))!important;
    background: -moz-linear-gradient(top,rgba(236, 236, 236, 1),rgba(236, 236, 236, 1))!important;
    background: -o-linear-gradient(top,rgba(236, 236, 236, 1),rgba(236, 236, 236, 1))!important;
    background: -o-linear-gradient(top,rgba(236, 236, 236, 1),rgba(236, 236, 236, 1))!important;
    background: -ms-linear-gradient(top,rgba(236, 236, 236, 1),rgba(236, 236, 236, 1))!important;
    background: linear-gradient(rgba(236, 236, 236, 1), rgba(236, 236, 236, 1)) repeat scroll 0 0 rgba(0, 0, 0, 0)!important;
    bottom: 0;
    height: 30px;
    left: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-container .mejs-controls div {
    background-image: none;
    border: 0 none;
    display: block;
    float: left;
    font-family: Helvetica,Arial;
    font-size: 11px;
    height: 26px;
    line-height: 11px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 26px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-button button {
    background: url("../images/controls.svg") no-repeat scroll 0 0 transparent;
    border: 0 none;
    cursor: pointer;
    display: block;
    font-size: 0;
    height: 16px;
    line-height: 0;
    margin: 7px 5px;
    padding: 0;
    position: absolute;
    text-decoration: none;
    width: 16px;
}
table[id^="ssfa-table"] .no-svg .mejs-controls .mejs-button button {
    background-image: url("../images/controls.png");
}
table[id^="ssfa-table"] .mejs-controls .mejs-button button:focus {
    outline: 1px dotted #999;
}
table[id^="ssfa-table"] .mejs-container .mejs-controls .mejs-time {
    box-sizing: content-box;
    color: #444;
    display: block;
    height: 17px;
    overflow: hidden;
    padding: 8px 3px 0;
    text-align: center;
    width: auto;
}
table[id^="ssfa-table"] .mejs-container .mejs-controls .mejs-time span {
    color: #444;
    display: block;
    float: left;
    font-size: 11px;
    line-height: 12px;
    margin: 1px 2px 0 0;
    width: auto;
}
table[id^="ssfa-table"] .mejs-controls .mejs-play button {
    background-position: 0 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-pause button {
    background-position: 0 -16px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-stop button {
    background-position: -112px 0;
}
table[id^="ssfa-table"] .mejs-controls div.mejs-time-rail {
    direction: ltr;
    padding-top: 5px;
    width: 200px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail span {
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    display: block;
    height: 10px;
    position: absolute;
    width: 180px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-total {
    background: gainsboro;
    margin: 5px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-buffering {
    animation: 2s linear 0s normal none infinite buffering-stripes;
    background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 15px 15px;
    width: 100%;
}
@keyframes buffering-stripes {
0% {
    background-position: 0 0;
}
100% {
    background-position: 30px 0;
}
}
@keyframes buffering-stripes {
0% {
    background-position: 0 0;
}
100% {
    background-position: 30px 0;
}
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-loaded {
    background: #CACACA;
    width: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-current {
    background: -webkit-gradient(linear,0% 0,0% 100%,from(rgba(255, 255, 255, 0.9)),to(rgba(200, 200, 200, 0.8)))!important;
    background: -webkit-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -moz-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -o-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -o-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -ms-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.8)) repeat scroll 0 0 rgba(0, 0, 0, 0)!important;
    width: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-handle {
    background: none repeat scroll 0 0 #444;
    border: 2px solid #333;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    margin: 0;
    position: absolute;
    text-align: center;
    top: -2px;
    width: 10px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-float {
    background: none repeat scroll 0 0 #eee;
    border: 1px solid #333;
    color: #111;
    display: none;
    height: 17px;
    margin-left: -18px;
    position: absolute;
    text-align: center;
    top: -26px;
    width: 36px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-float-current {
    display: block;
    left: 0;
    margin: 2px;
    text-align: center;
    width: 30px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-time-rail .mejs-time-float-corner {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-color: #eee transparent transparent;
    border-image: none;
    border-radius: 0;
    border-style: solid;
    border-width: 5px;
    display: block;
    height: 0;
    left: 13px;
    line-height: 0;
    position: absolute;
    top: 15px;
    width: 0;
}
table[id^="ssfa-table"] .mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float {
    width: 48px;
}
table[id^="ssfa-table"] .mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-current {
    width: 44px;
}
table[id^="ssfa-table"] .mejs-long-video .mejs-controls .mejs-time-rail .mejs-time-float-corner {
    left: 18px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-fullscreen-button button {
    background-position: -32px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-unfullscreen button {
    background-position: -32px -16px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-mute button {
    background-position: -16px -16px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-unmute button {
    background-position: -16px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button {
    position: relative;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button .mejs-volume-slider {
    background: none repeat scroll 0 0 rgba(50, 50, 50, 0.7);
    border-radius: 0;
    display: none;
    height: 115px;
    left: 0;
    margin: 0;
    position: absolute;
    top: -115px;
    width: 25px;
    z-index: 1;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button:hover {
    border-radius: 0 0 4px 4px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-total {
    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.5);
    height: 100px;
    left: 11px;
    margin: 0;
    position: absolute;
    top: 8px;
    width: 2px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current {
    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.9);
    height: 100px;
    left: 11px;
    margin: 0;
    position: absolute;
    top: 8px;
    width: 2px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-handle {
    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.9);
    border-radius: 1px;
    cursor: n-resize;
    height: 6px;
    left: 4px;
    margin: 0;
    position: absolute;
    top: -3px;
    width: 16px;
}
table[id^="ssfa-table"] .mejs-controls div.mejs-horizontal-volume-slider {
    height: 26px;
    position: relative;
    width: 60px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total {
    background: gainsboro;
    border-radius: 2px;
    font-size: 1px;
    height: 8px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 11px;
    width: 50px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current {
    background: -webkit-gradient(linear,0% 0,0% 100%,from(rgba(255, 255, 255, 0.9)),to(rgba(200, 200, 200, 0.8)))!important;
    background: -webkit-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -moz-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -o-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -o-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: -ms-linear-gradient(top,rgba(255, 255, 255, 0.9),rgba(200, 200, 200, 0.8))!important;
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 0.8)) repeat scroll 0 0 rgba(0, 0, 0, 0)!important;
    border-radius: 2px;
    font-size: 1px;
    height: 8px;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 11px;
    width: 50px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-handle {
    display: none;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button {
    position: relative;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button button {
    background-position: -48px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-selector {
    background: none repeat scroll 0 0 rgba(50, 50, 50, 0.7);
    border: 1px solid transparent;
    border-radius: 0;
    bottom: 26px;
    height: 100px;
    overflow: hidden;
    padding: 10px;
    position: absolute;
    right: -10px;
    visibility: hidden;
    width: 130px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-selector ul {
    display: block;
    list-style-type: none !important;
    margin: 0;
    overflow: hidden;
    padding: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-selector ul li {
    color: #fff;
    display: block;
    list-style-type: none !important;
    margin: 0 0 6px;
    overflow: hidden;
    padding: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-selector ul li input {
    clear: both;
    float: left;
    margin: 3px 3px 0 5px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-selector ul li label {
    float: left;
    font-family: helvetica,arial;
    font-size: 10px;
    line-height: 15px;
    padding: 4px 0 0;
    width: 100px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-captions-button .mejs-captions-translations {
    font-size: 10px;
    margin: 0 0 5px;
}
table[id^="ssfa-table"] .mejs-chapters {
    left: 0;
    position: absolute;
    top: 0;
    width: 10000px;
    z-index: 1;
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter {
    background: linear-gradient(rgba(50, 50, 50, 0.7), rgba(0, 0, 0, 0.7)) repeat scroll 0 0 rgba(0, 0, 0, 0);
    border: 0 none;
    float: left;
    overflow: hidden;
    position: absolute;
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter .mejs-chapter-block {
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 11px;
    padding: 5px;
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter .mejs-chapter-block-last {
    border-right: medium none;
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter .mejs-chapter-block:hover {
    background: linear-gradient(rgba(102, 102, 102, 0.7), rgba(50, 50, 50, 0.6)) repeat scroll 0 0 rgba(0, 0, 0, 0);
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter .mejs-chapter-block .ch-title {
    display: block;
    font-size: 12px;
    font-weight: bold;
    line-height: 12px;
    margin: 0 0 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
table[id^="ssfa-table"] .mejs-chapters .mejs-chapter .mejs-chapter-block .ch-timespan {
    display: block;
    font-size: 12px;
    line-height: 12px;
    margin: 3px 0 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
table[id^="ssfa-table"] .mejs-captions-layer {
    bottom: 0;
    color: #fff;
    font-size: 12px;
    left: 0;
    line-height: 22px;
    position: absolute;
    text-align: center;
}
table[id^="ssfa-table"] .mejs-captions-layer a {
    color: #fff;
    text-decoration: underline;
}
table[id^="ssfa-table"] .mejs-captions-layer[lang="ar"] {
    font-size: 20px;
    font-weight: normal;
}
table[id^="ssfa-table"] .mejs-captions-position {
    bottom: 15px;
    left: 0;
    position: absolute;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-captions-position-hover {
    bottom: 45px;
}
table[id^="ssfa-table"] .mejs-captions-text {
    background: none repeat scroll 0 0 rgba(20, 20, 20, 0.8);
    padding: 3px 5px;
}
.me-cannotplay a {
    color: #fff;
    font-weight: bold;
}
.me-cannotplay span {
    display: block;
    padding: 15px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-loop-off button {
    background-position: -64px -16px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-loop-on button {
    background-position: -64px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-backlight-off button {
    background-position: -80px -16px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-backlight-on button {
    background-position: -80px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-picturecontrols-button {
    background-position: -96px 0;
}
table[id^="ssfa-table"] .mejs-contextmenu {
    background: none repeat scroll 0 0 #fff;
    border: 1px solid #999;
    border-radius: 4px;
    left: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    width: 150px;
    z-index: 1001;
}
table[id^="ssfa-table"] .mejs-contextmenu .mejs-contextmenu-separator {
    background: none repeat scroll 0 0 #333;
    font-size: 0;
    height: 1px;
    margin: 5px 6px;
}
table[id^="ssfa-table"] .mejs-contextmenu .mejs-contextmenu-item {
    color: #333;
    cursor: pointer;
    font-family: Helvetica,Arial;
    font-size: 12px;
    padding: 4px 6px;
}
table[id^="ssfa-table"] .mejs-contextmenu .mejs-contextmenu-item:hover {
    background: none repeat scroll 0 0 #2c7c91;
    color: #fff;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button {
    position: relative;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button button {
    background-position: -128px 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector {
    background: none repeat scroll 0 0 rgba(50, 50, 50, 0.7);
    border: 1px solid transparent;
    border-radius: 0;
    bottom: 26px;
    height: 100px;
    overflow: hidden;
    padding: 10px;
    position: absolute;
    right: -10px;
    visibility: hidden;
    width: 130px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul {
    display: block;
    list-style-type: none !important;
    margin: 0;
    overflow: hidden;
    padding: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li {
    color: #fff;
    display: block;
    list-style-type: none !important;
    margin: 0 0 6px;
    overflow: hidden;
    padding: 0;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li input {
    clear: both;
    float: left;
    margin: 3px 3px 0 5px;
}
table[id^="ssfa-table"] .mejs-controls .mejs-sourcechooser-button .mejs-sourcechooser-selector ul li label {
    float: left;
    font-family: helvetica,arial;
    font-size: 10px;
    line-height: 15px;
    padding: 4px 0 0;
    width: 100px;
}
table[id^="ssfa-table"] .mejs-postroll-layer {
    background: none repeat scroll 0 0 rgba(50, 50, 50, 0.7);
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 1000;
}
table[id^="ssfa-table"] .mejs-postroll-layer-content {
    height: 100%;
    width: 100%;
}
table[id^="ssfa-table"] .mejs-postroll-close {
    background: none repeat scroll 0 0 rgba(50, 50, 50, 0.7);
    color: #fff;
    cursor: pointer;
    padding: 4px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
}
div.ssfa-mobile{overflow:auto;}
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */