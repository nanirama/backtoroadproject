import { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
body, h1, h2, h3, h4, h5, h6 {
	font-family:'Poppins', sans-serif
}
body {
	overflow-x:hidden
}
body, ul {
	margin:0;
	padding:0
}
ul li {
	list-style:none;
	float:left
}
.sidenav a, a:hover {
	text-decoration:none
}
img {
	width:100%;
	height:auto
}
.container {
	max-width:1170px
}
h1, h2, h3, h4, h5, h6 {
	color:#08275c
}
h1 {
	line-height:55px;
	text-transform:uppercase
}
.parts_blk h1 {
	z-index:999;
	margin-bottom:60px
}
.parts_blk span {
	color:#f0f5ff;
	font-size:100px;
	line-height:110px;
	position:absolute;
	left:0;
	top:60px;
	z-index:-1;
	font-weight:700
}
h2 {
	font-size:32px;
	line-height:48px;
	font-weight:600;
	position:relative
}
h2:before, ul.links li:before {
	position:absolute;
	content:'';
	left:0;
	background:#5fa2dd
}
h2:before {
	bottom:0;
	width:78px;
	height:3px
}
.count_blk h4, h1, h2.tlt {
	font-size:42px;
	font-weight:700
}
h2.tlt {
	line-height:45px;
	z-index:999;
	margin-bottom:55px
}
h2.tlt:before {
	left:inherit;
	bottom:8px;
	right:inherit;
	margin:0 auto;
	width:150px;
	height:12px;
	background:#f0ac3f;
	z-index:-1
}
.faq_blk h2:before {
	width:80px
}
.btn1.ph i, p {
	font-size:18px
}
.btn1.ph strong{ width:0px; height:0px; display: none;}
p {
	line-height:30px;
	color:rgba(16, 25, 40, .8);
	margin-bottom:30px
}
.hide {
	display:none
}
.btn1, select {
	background-repeat:no-repeat
}
.btn1, label {
	font-size:14px
}
.btn1 {
	width:220px;
	border:0!important;
	float:left;
	background-color:#165da6;
	font-weight:600;
	line-height:45px;
	border-radius:5px;
	padding-left:30px;
	color:#fff;
	background-position:right 35px center;
	text-transform:uppercase;
	text-align:left
}
.btn1:hover {
	background-color:#165da6;
	color:#fff
}
.about_blk, .backroad_blk, .benifits_blk, .faq_blk, .how_work_blk, .journey_blk, .parts_blk, .popular_blk, .recent_post_blk, .tm_blk, .why_choose_blk {
	padding:90px 0
}
.about_blk, .backroad_blk, .how_work_blk, .popular_blk, .recent_post_blk {
	background-color:#fafafa
}
.backroad_blk img, .benifits_blk img, .recent_post_blk img {
	-webkit-border-radius:12px;
	-moz-border-radius:12px;
	border-radius:12px
}
.feature_img, .feature_img img, span.num {
	text-align:center;
	position:relative
}
.feature_img, .feature_img img {
	min-width:100%!important;
	width:100%!important;
	width:100vw
}
.logo img {
	width:128px;
	height:auto
}
.btn1.ph {
	width:auto;
	padding:0 20px;
	background-image:none;
	border:2px solid red
}
.btn1.ph i {
	transform:rotate(-35deg)
}
.nav ul li, nav ul li {
padding:.5rem 15px
}
.nav ul li a, nav ul li a {
	font-size:14px;
	font-weight:400;
	line-height:30px;
	color:#49494d;
	padding-bottom:8px;
	position:relative
}
.f_top h4:before, .nav ul li a.active:before, .nav ul li a:hover:before {
	position:absolute;
	content:'';
	height:2px;
	left:0;
	bottom:0;
	width:70px;
	background-color:#2e93e4
}
.nav ul li a.active:before, .nav ul li a:hover:before {
	width:24px;
	background-color:#165da6
}
.nav ul li a.active {
	color:#08275c;
	font-weight:500
}
#mobile_nav, .bot_banner h2:before, .owl-carousel.posts .owl-nav.disabled, .owl-carousel.slides .owl-nav.disabled, .owl-carousel.testimonials .owl-nav.disabled, .s_txt h2:before, .sidenav, span.num.brd:before {
	display:none
}
#mobile_nav, span.num:before {
	width:auto;
	position:absolute;
	top:10px;
	right:15px;
	color:#000
}
span.num:before {
	content:'';
	top:18px;
	width:45px;
	height:1px;
	border:1px dashed;
	right:-48px;
	color:#fafafa
}
#mobile_nav span {
	font-size:30px;
	cursor:pointer;
	line-height:25px
}
.sidenav {
	height:auto;
	width:0;
	position:fixed;
	top:0;
	right:0;
	background-color:#30231f;
	overflow-x:hidden;
transition:.3s;
	padding:40px 0;
	z-index:999
}
.sidenav ul li {
	width:100%
}
.sidenav a {
	padding:8px 8px 8px 20px;
	line-height:23px;
	color:#f3f3f3;
	display:block;
transition:.3s
}
.popular_blk ul li a:hover, .sidenav a:hover {
	color:#f0ac3f
}
.sidenav .closebtn {
	position:absolute;
	top:0;
	right:0;
	font-size:36px;
	margin-left:50px
}
.sidenav ul li ul {
	padding-left:10px
}
span.num {
	width:38px;
	float:left;
	height:38px;
	background:#fafafa;
	line-height:38px;
	color:#5b6472;
	font-weight:600;
	font-size:22px;
	border-radius:50%;
	margin:0 50px 0 0
}
span.num.brd {
	margin-right:0
}
span.num.active {
	background:#f0ac3f;
	color:#fff
}
label {
	color:#233a6c;
	line-height:21px
}
.form_input {
	line-height:55px;
	height:55px;
	border:1px solid #cfcfcf;
	box-sizing:border-box;
	border-radius:5px;
	padding:0 15px;
	margin-bottom:25px;
	color:#000
}
select {
	-moz-appearance:none;
	-webkit-appearance:none;
	background-position:right 15px center
}
.slider_form .form_outer .btn1 {
	border:0;
	width:auto;
	padding:0 25px
}
.slider_form label{
	width: 100%;
    float: left;
    color: #233A6C;
    font-size: 14px;
    line-height: 21px;
}
.button_outer, .form_input, label {
	width:100%;
	float:left
}
.button_outer {
	margin-top:10px;
	height:50px;
	overflow:hidden
}
.owl-carousel.posts .owl-dot, .owl-carousel.slides .owl-dot, .owl-carousel.testimonials .owl-dot {
	width:12px;
	height:12px;
	background:#fafafa;
	margin-top:0;
	margin-right:15px;
	border-radius:2px;
	transform:matrix(.71, .71, -.71, .71, 0, 0);
	border:0!important;
	float:none;
	display:inline-block
}
.owl-carousel.posts .owl-dot.active, .owl-carousel.posts .owl-dot:hover, .owl-carousel.slides .owl-dot.active, .owl-carousel.slides .owl-dot:hover, .owl-carousel.testimonials .owl-dot.active, .owl-carousel.testimonials .owl-dot:hover {
	background:#5fa2dd
}
.slides .owl-dots {
	display:block;
	margin-top:60px
}
.posts .owl-dots, .testimonials .owl-dots {
	display:block;
	text-align:center;
	margin-top:60px
}
.owl-carousel.posts .owl-dot, .owl-carousel.testimonials .owl-dot {
	background:#d1e9ff
}
.slides .owl-dots {
	text-align:left
}
.breadcrumb {
	padding:25px 0;
	border-bottom:1px solid #cdcdcd;
	background-color:inherit;
	border-radius:0
}
.breadcrumb ol{ list-style:none; width:100%; float:left; padding: 0px; margin:0px;}
.breadcrumb ol li, .breadcrumb ol li a {
	color:#060608;
	font-size:14px;
	float:left;
}
.breadcrumb ol li a {
	padding:0 25px 0 0;
	position:relative
}
.breadcrumb ol li a:before {
	content:'>';
	position:absolute;
	right:8px
}
.benifits_blk p span {
	font-weight:500;
	color:#101928
}
ul.links li {
	width:100%;
	font-size:18px;
	line-height:30px;
	margin-bottom:8px;
	color:rgba(16, 25, 40, .8);
	position:relative;
	padding-left:25px
}
ul.links li:before {
	width:8px;
	height:8px;
	top:14px
}
.journey_blk {
	background-position:center;
	background-repeat:no-repeat;
	background-size:cover
}
.journey_blk h2 {
	margin-bottom:90px
}
.count_blk {
	background-color:#fff;
	border-radius:5px
}
.count_blk .icon{ width:60px; height:60px; background-repeat: no-repeat; background-size:100% 100%; margin-top:-30px;}
.count_blk .icon svg{ line-height:30px !important; margin:14px; font-size:30px; text-align:center;}
.count_blk h3, .count_blk h4{
	color:#08275c;
	margin-top:20px;
	font-size: 42px;
	font-weight: 700;
}
.post_box h4, .sub_box h4, .work_box h4,
.post_box h3, .sub_box h3, .work_box h3 {
	font-size:20px;
	line-height:30px;
	font-weight:800
}
.sub_box p, .work_box p {
	font-size:16px;
	line-height:28px
}
.work_box .icon {
	background:#fff;
	box-shadow:0 4px 8px rgba(231, 231, 231, .2);
	border-radius:4px;
	width:120px;
	height:58px;
	display:inline-block
}
.work_box .icon img {
	margin-top:-20px
}
.tm_box {
	background:#fafafa;
	border-radius:10px;
	padding:30px 20px
}
.tm_box h4,.tm_box h3,h3.tm-sub-heading {
	font-size:18px;
	line-height:30px;
	margin-bottom:35px
}
.tm_box .bottom {
	border-top:1px solid #a8b2c1;
	margin-top:5px;
	padding-top:5px
}
.tm_box .rating i {
	color:#ffc93e;
	padding:0 1px
}
.tm_box .author_info {
	width:91%
}
.tm_box .google {
	width:8%;
	margin-top:8px
}
.post_box p, .tm_box h4 {
	font-weight:600
}
.post_box .btn1 {
	background-image:none;
	text-align:center;
	padding:0
}
.popular_blk .btn1 {
	width:125px;
	float:right;
	background-position:right 20px top 18px;
	line-height:40px;
	padding-left:25px;
	margin-top:10px
}
.popular_blk h3 {
	font-size:22px;
	line-height:34px;
	color:#08275c;
	font-weight:500;
	margin-bottom:40px
}
.f_top h4, .popular_blk ul li a {
	line-height:30px;
	position:relative;
	font-weight:500
}
.popular_blk ul li a {
	width:100%;
	float:left;
	font-size:18px;
	margin-bottom:8px;
	color:rgba(16, 25, 40, .8);
	padding-left:25px
}
.popular_blk ul li a:before, .slick-dots li button, ul.links li:before {
	border-radius:2px;
	transform:matrix(.71, .71, -.71, .71, 0, 0)
}
.popular_blk ul li a:before {
	position:absolute;
	content:'';
	width:8px;
	height:8px;
	top:10px;
	left:0;
	background:#5fa2dd
}
.post_box .btn1 {
	width:195px
}
.bot_banner {
	background:#1f1b3f;
	border-radius:10px;
	margin:0 0 50px
}
.bot_banner h2 {
	line-height:45px;
	font-weight:700;
	margin-bottom:30px
}
.left_text {
	padding:60px 90px 40px 100px
}
.ban_img {
	margin-top:-30px;
	padding-right:30px
}
.ban_img .gatsby-image-wrapper{ float:right;}
.bot_banner .btn1, .f_top .btn1 {
	width:195px;
	background-image:none;
	padding:0;
	text-align:center
}
.f_top .btn1 {
	width:155px
}
footer {
	background-color:#1f1b3f
}
.f_top {
	padding:75px 0
}
footer p {
	line-height:28px;
	word-wrap:break-word
}
footer p, footer p a {
	color:#b3b0cd
}
.f_top h4 {
	font-size:22px;
	margin-bottom:33px
}
.f_links ul li a {
	color:#b3b0cd;
	font-size:16px;
	line-height:30px
}
.f_links ul li a:hover, .s_links i:hover, footer p a:hover {
	color:#f0ac3f
}
.s_links i {
	color:#fff;
	font-size:25px;
	margin-right:35px
}
.s_links a span{ font-size:0px; text-indent: -1000px;}
.f_bot {
	border-top:1px solid #8e89b6;
	padding:45px 0 65px
}
.reviewcontentheight {
	margin-bottom:10px!important;
	height:300px;
	overflow:hidden
}
.recent_post_blk .slick-dots, .tm_blk .slick-dots {
	display:flex!important;
	flex-direction:row!important;
	justify-content:center!important;
	align-self:center!important
}
.slick-dots li button {
	width:12px!important;
	height:12px!important;
	background:#d1e9ff!important;
	margin-top:0;
	margin-right:15px;
	border:0!important;
	float:none;
	display:inline-block;
	opacity:1!important
}
.slick-dots li.slick-active button {
	background-color:#5fa2dd!important;
	opacity:1!important
}
.slick-dots li button:before {
	font-size:0!important
}
.faq_blk h3 {
	font-size:32px;
	font-weight:500;
	border-bottom:1px solid #cfddf6;
	padding-bottom:25px;
	margin-bottom:25px
}
.faq {
	margin-bottom:15px
}
.faq_blk .panel {
	padding:0 15px 0 30px;
	display:none;
	background-color:#fff;
	overflow:hidden
}
.faq_blk .panel p, footer p {
	font-size:16px
}
.faq_blk button:focus {
	outline:0 dotted
}
.faq-card {
	border:0!important;
	background-position:left 0 top 27px;
	background-repeat:no-repeat;
	background-color:#fff!important;
	padding:0 0 0 20px!important
}
.faq-card .card-header {
	background-color:inherit;
	color:#08275c;
	cursor:pointer;
	padding:20px 15px 20px 10px;
	width:100%;
	border:0;
	text-align:left;
	outline:0;
	font-size:22px;
	font-weight:600;
transition:.4s
}
.faq-card .card-body {
	width:100%;
	float:left;
	font-size:17px!important;
	line-height:28px!important;
	padding:0 15px 0 10px;
	background-color:#fff!important;
	font-weight:500
}
.faq-card .card-body p {
	font-size:16px!important;
	line-height:28px!important
}
.fullwidth_bg {
	width:100%;
	background-position:bottom center;
	background-repeat:repeat-y;
	background-size:cover;
	min-height:900px;
	position:relative
}
.slider_form {
	width:545px;
	margin-top:150px
}
.slider_form p {
	background:#fafafa;
	border-radius:0 5px 0 0;
	font-size:18px;
	line-height:20px;
	font-weight:500;
	width:545px;
	float:left;
	padding:14px 25px
}
.slider_form .form_outer {
	border-radius:0 0 5px 5px;
	background-color:#fff;
	padding:25px;
	width:545px;
	float:left
}
.main-slider img {
	z-index:-1!important
}
.slide-item {
	position:relative;
}
.main-slider {
	overflow:hidden
}
.padding-0 {
	padding:0
}
.main-slider .slick-dots, .s_txt_outer {
	position:absolute;
	z-index:99
}
nav {
	display:flex;
	justify-content:space-around;
	align-items:center;
	width:100%
}
.menu-bars {
	display:none;
	flex-direction:column;
	height:30px;
	justify-content:flex-end;
	position:relative
}
.menu-bars input,.menu-bars label, .menu-bars span {
	width:30px!important;
	height:30px!important
}
.menu-bars input {
	position:absolute;
	left:-5px;
	top:-3px;
	opacity:0;
	cursor:pointer;
	z-index:2
}
.menu-bars span {
	display:block;
	background-position:center center;
	background-repeat:repeat-y;
	background-size:100% 100%;
transition:all .3s;
	border:2px soild green
}
nav ul.slide {
	transform:translateX(0)
}
@media only screen and (min-width:1200px) {
.main-slider .slick-dots {
bottom:20%;
left:10%
}
.mob_form {
display:none
}
.slider_form_above {
display:block
}
.s_txt {
width:100%;
max-width:100%;
margin-top:5rem
}
.s_txt h2 {
font-size:60px;
line-height:73px;
font-weight:700;
color:#fff
}
.s_txt_outer {
width:100%;
bottom:8%
}
.slider_form h3 {
font-size:22px;
line-height:33px;
font-weight:600;
padding:12px 25px;
width:230px;
background-color:#fff;
border-radius:5px 5px 0 0;
float:left;
margin-right:50px
}
.form-container {
z-index:9999
}
.form-container .box {
height:600px;
width:100%;
z-index:9999;
border:2px solid #fff
}
}
@media only screen and (max-width:1199px) {
.mob_form, .slider_form .form_outer {
width:100%
}
.mob_form {
background-color:#f6f6f6;
float:left;
padding:30px 2rem;
margin:0
}
}
@media only screen and (min-width:1051px) and (max-width:1199px) {
.slider_form_above {
display:none!important;
width:0
}
.s_txt {
width:560px;
max-width:100%;
margin-bottom:17rem
}
.s_txt_outer {
width:90%;
bottom:8%;
left:8%
}
.slider_form h3 {
font-size:22px;
line-height:33px;
font-weight:600;
padding:12px 25px;
width:230px;
background-color:#fff;
border-radius:5px 5px 0 0;
float:left;
margin-right:50px
}
}
@media only screen and (min-width:992px) and (max-width:1200px) {
.main-slider .slick-dots {
bottom:10%;
left:5%
}
.container {
max-width:100%
}
.nav ul li {
padding:.5rem 9px
}
.h_rgt .btn1 {
padding:0 15px
}
.s_txt, .slider_form, .slider_form .form, .slider_form p {
width:100%
}
.slider_form {
margin-top:80px
}
.s_txt {
margin-top:130px
}
.s_txt h2 {
font-size:55px;
color:#fff
}
.slider_form h3 {
margin-right:20px
}
span.num {
margin:0 30px 0 0
}
span.num::before {
width:35px;
right:-35px
}
.form_input {
line-height:45px;
height:45px;
margin-bottom:10px
}
.left_text {
padding:40px 20px 25px 50px
}
.ban_img {
margin-top:-25px
}
.ban_img img {
width:200px!important
}
.f_top .btn1 {
width:130px
}
img.partners {
width:270px!important;
margin-top:4px
}
}
@media only screen and (max-width:1050px) {
.slider_form h3 {
font-size:22px;
line-height:33px;
font-weight:600;
padding:12px 25px;
width:230px;
background-color:#fff;
border-radius:5px 5px 0 0;
float:left;
margin-right:50px
}
.slider_form_above {
display:none!important;
width:0;
height:0;
visibility:hidden
}
.main-slider .slick-dots {
bottom:20%;
left:10%
}
.s_txt {
width:100%;
max-width:100%;
margin-bottom:4rem
}
.s_txt_outer {
width:100%;
bottom:8%;
left:8%
}
.s_txt h2 {
font-size:60px;
line-height:73px;
font-weight:700;
color:#fff
}
.row.first-col, .s_txt_outer .col-lg-6.first-col {
width:100%!important;
max-width:100%;
display:block!important
}
}
@media only screen and (min-width:1024px) {
nav ul li a.active:before, nav ul li a:hover:before {
position:absolute;
content:'';
width:24px;
height:2px;
left:0;
bottom:0;
background-color:#165da6
}
nav ul li a.active {
color:#08275c;
font-weight:500
}
nav ul li {
background-position:right 2225px top 4445px!important;
background-repeat:no-repeat!important
}
}
@media only screen and (max-width:1024px) {
.h_rgt {
display:flex!important;
flex-direction:row-reverse!important
}
.h_rgt .btn1 {
margin-right:10px;
margin-left:0!important
}
.mnav {
justify-content:flex-start
}
.menu-bars, .mnav, nav ul {
display:flex
}
.menu-bars, nav {
justify-content:flex-end
}
nav ul {
position:absolute;
right:0;
top:60px;
width:100%;
background-color:#08275c;
justify-content:space-evenly;
flex-direction:column;
align-items:flex-start;
transform:translateX(100%);
z-index:9999;
transition:all 1s
}
nav ul li, nav ul li a {
color:#b1c8ee;
position:relative
}
nav ul li {
background-position:right 15px center;
background-repeat:no-repeat;
width:100%;
float:left;
padding:.5rem 15px;
border-bottom:1px solid #2e4f88
}
nav ul li a {
font-size:14px;
font-weight:400;
line-height:30px;
padding-bottom:8px
}
nav ul li a.active, nav ul li a:hover, nav ul li:hover a {
color:#f0ac3f;
font-weight:500
}
}
@media only screen and (min-width:1024px) and (max-width:1100px) {
nav ul li {
padding:.5rem 10px
}
}
@media only screen and (min-width:992px) and (max-width:1050px) {
.slider img {
height:680px
}
.s_txt, .s_txt_outer {
width:80%
}
.s_txt {
overflow:hidden;
margin-top:15rem;
margin-left:5%
}
.main-slider .slick-dots {
bottom:10%;
left:5%
}
.s_txt h2 {
font-size:3rem;
line-height:4rem;
font-weight:700;
color:#fff
}
.popular_blk ul li a {
font-size:16px
}
}
@media only screen and (min-width:992px) {
.d-nav {
display:block
}
.m-nav {
display:none;
visibility:hidden
}
}
@media only screen and (max-width:991px) {
.d-nav {
display:none;
visibility:hidden
}
.m-nav {
display:block
}
}
@media only screen and (min-width:768px) and (max-width:991px) {
.container {
max-width:100%
}
.nav {
float:right!important;
margin-top:4px
}
.nav, .sub_box p br {
display:none
}
#mobile_nav, .sidenav {
display:block
}
.slider_form, .slider_form .form, .slider_form p {
width:100%
}
.slider_form {
margin-top:80px
}
.s_txt_outer {
width:90%;
bottom:15%
}
.s_txt h2 {
font-size:38px;
line-height:50px;
font-weight:700;
color:#fff
}
.slider_form h3 {
width:auto;
float:left;
font-weight:600;
margin-right:15px;
background-color:#fff;
border-radius:5px 5px 0 0
}
.slider_form h3, .slider_form p {
font-size:17px;
padding:10px 15px
}
.main-slider .slick-dots {
bottom:10%;
left:5%
}
span.num {
margin:0 20px 0 0;
width:32px;
height:32px;
line-height:32px;
font-size:18px
}
span.num::before {
width:25px;
right:-25px;
top:15px
}
.s_txt {
margin-top:100px;
width:100%;
overflow:hidden;
margin-left:5%
}
.form_input {
line-height:45px;
height:45px;
margin-bottom:10px
}
.slider img {
height:650px
}
.slider_form h3, p, ul.links li {
line-height:28px
}
.about_blk, .backroad_blk, .benifits_blk, .faq_blk, .how_work_blk, .journey_blk, .parts_blk, .popular_blk, .recent_post_blk, .tm_blk, .why_choose_blk {
padding:60px 0
}
.parts_blk span {
top:32px;
font-size:85px
}
.sub_box {
margin-bottom:30px
}
.work_box {
margin-bottom:50px
}
.faq_blk .accordion, .faq_blk .accordion h4 {
font-size:20px;
line-height: 22px;
}
.parts_blk .pr-4 {
padding-right:15px!important
}
h2.tlt {
font-size:34px
}
.popular_blk ul li a, p, ul.links li {
font-size:16px
}
.left_text {
padding:30px 20px
}
.bot_banner h2 {
font-size:30px;
line-height:40px
}
.ban_img {
margin-top:-25px
}
.ban_img img {
width:200px!important
}
img.partners {
width:250px!important;
margin-top:4px
}
.s_links {
margin-bottom:30px
}
}
@media only screen and (min-width:768px) {
.s_txt ul li {
width:100%;
font-size:18px;
line-height:37px;
font-weight:500;
color:#fff;
position:relative;
padding-left:25px
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:14px;
left:0;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
}
@media only screen and (max-width:767px) {
.container {
max-width:100%
}
h1 {
font-size:36px;
line-height:50px
}
h2, h2.tlt {
line-height:40px
}
h2.tlt {
font-size:32px;
margin-bottom:35px
}
.faq_blk h2.tlt::before, .faq_blk h2:before {
width:60px
}
.how_work_blk h2.tlt {
margin-bottom:50px
}
p {
font-size:16px;
line-height:28px;
margin-bottom:25px
}
.btn1, .post_box .btn1, .slider_form .form_outer .btn1 {
width:auto;
padding:0 20px;
background-image:none;
line-height:40px;
text-align:center
}
.nav, .slider_form, .slider_form.show, .sub_box p br {
display:none
}
#mobile_nav, .hide, .mob_form, .sidenav {
display:block
}
.slider_form, .slider_form .form_outer, .slider_form p {
width:100%
}
.form_input {
line-height:40px;
height:40px;
font-size:12px
}
.s_txt_outer {
width:90%;
bottom:15%;
left:0
}
.s_txt {
width:100%;
overflow:hidden;
margin-left:5%
}
.s_txt h2 {
font-size:2rem!important;
line-height:28px!important;
font-weight:700;
color:#fff;
margin-bottom:20px!important
}
.s_txt ul li {
width:100%;
font-size:18px;
line-height:37px;
font-weight:500;
color:#fff;
position:relative;
padding-left:25px
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:14px;
left:0;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
.slider_form h3 {
font-size:17px;
line-height:33px;
font-weight:600;
padding:12px 25px;
width:auto;
background-color:#fff;
border-radius:5px 5px 0 0;
float:left;
margin-right:30px
}
.main-slider .slick-dots {
bottom:10%;
left:5%
}
span.num {
margin-top:8px
}
span.num:before {
color:#5b6472
}
.about_blk, .backroad_blk, .benifits_blk, .faq_blk, .parts_blk, .popular_blk, .recent_post_blk, .tm_blk {
padding:50px 0
}
.how_work_blk, .why_choose_blk {
padding:50px 0 0
}
.breadcrumb {
padding:15px 0 20px
}
.parts_blk h1 {
margin-bottom:30px
}
ul.links li {
font-size:16px;
line-height:28px
}
.parts_blk .pr-4 {
padding-right:15px!important
}
.feature_img {
margin-top:20px
}
.journey_blk {
padding:50px 0 0
}
.journey_blk h2 {
margin-bottom:75px
}
.count_blk {
margin-bottom:65px
}
.count_blk .icon {
width:45px;
height:45px
}
.count_blk .icon i {
font-size:20px;
line-height:45px
}
.count_blk h4 {
font-size:22px
}
.sub_box {
margin-bottom:40px
}
.sub_box h4 {
font-size:16px;
line-height:25px;
margin-bottom:18px!important
}
.work_box {
margin-bottom:50px;
width:300px!important;
float:none!important;
display:inline-block
}
.faq_blk h3, .tm_box h4,.tm_box h3,h3.tm-sub-heading {
margin-bottom:20px
}
.tm_box .bottom {
margin-top:0;
padding-top:25px
}
.posts .owl-dots, .slides .owl-dots, .testimonials .owl-dots {
margin-top:40px
}
.post_img {
margin-bottom:.5rem!important
}
.post_box h4 {
line-height:25px
}
.faq_blk h3 {
font-size:26px;
padding-bottom:20px
}
.faq_blk .accordion, .faq_blk .accordion h4, .popular_blk ul li a, .post_box h4 {
font-size:16px
}
.popular_blk p {
font-size:18px;
line-height:30px
}
h2.tlt:before {
width:80px;
height:6px
}
.popular_blk .btn1 {
float:none;
display:inline-block;
padding-left:10px
}
.popular_blk .btn1.show {
display:none;
margin-top:30px
}
.left_text {
padding:50px 20px 30px
}
.bot_banner h2 {
font-size:30px;
line-height:40px
}
.ban_img {
margin-top:0
}
.ban_img img {
width:200px!important;
float:right
}
.bot_banner .btn1 {
width:auto;
padding:0 20px;
line-height:40px
}
.f_top {
padding:40px 0
}
.f_links, .s_links {
margin-bottom:30px
}
.f_bot {
padding:20px 0
}
.show {
display:none
}
.partners, .secure {
float:left!important;
margin-bottom:20px
}
.partners p, .secure p {
padding-right:1.5rem!important
}
p.copyright {
text-align:center
}
.f_nav ul li {
width:auto
}
.f_nav ul li a {
position:relative;
padding-right:30px
}
.f_nav ul li a:before {
content:'|';
position:absolute;
right:18px;
top:-3px;
width:1px;
height:100%
}
.f_nav ul li:last-child a:before {
display:none
}
}
@media only screen and (max-width:599px) {
header .col-xs-3 {
-ms-flex:0 0 33%;
flex:0 0 33%;
max-width:33%
}
header .col-xs-9 {
-ms-flex:0 0 66%;
flex:0 0 66%;
max-width:66%
}
h2.tlt {
font-size:28px
}
.slider img {
height:350px
}
.slides .owl-dots {
margin-top:0
}
.s_txt h2 {
font-size:38px;
line-height:50px
}
.slider_form h3 {
width:auto;
font-size:17px!important
}
span.num {
width:30px;
height:30px;
font-size:18px;
line-height:28px;
margin:8px 30px 0 0
}
span.num::before {
top:14px;
width:35px;
right:-36px
}
.owl-carousel.slides .owl-dot {
margin-top:30px
}
.slider_form h3, .slider_form p {
padding:10px 20px
}
.slider_form .form {
padding:20px
}
.how_work_blk h2 {
margin-bottom:55px
}
.journey_blk h2 {
margin-bottom:70px
}
.count_blk, .sub_box {
width:230px!important;
float:none!important;
display:inline-block
}
.sub_box {
width:300px!important
}
.f_links .col-xs-6, .popular_blk ul li {
width:50%
}
.popular_blk ul li a {
font-size:15px;
line-height:28px
}
}
@media only screen and (max-width:575px) {
.s_txt ul li {
font-size:16px;
line-height:26px;
font-weight:500;
position:relative;
padding-left:25px
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:8px;
left:4px;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
.mobile-right {
width:100%!important;
top:25px;
right:0;
position:absolute
}
.s_txt_outer {
bottom:2%;
width:100%
}
.slider_form h3 {
font-size:15px;
line-height:33px;
font-weight:600;
padding:12px 20px;
width:auto;
background-color:#fff;
border-radius:5px 5px 0 0;
float:left;
margin-right:50px
}
}
@media only screen and (max-width:479px) {
.s_txt ul li {
font-size:14px;
line-height:24px;
font-weight:500;
position:relative;
padding-left:25px
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:8px;
left:4px;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
h1 {
font-size:28px;
line-height:35px
}
h2, span.num {
line-height:30px
}
h2, h2.tlt {
font-size:22px
}
h2.tlt {
line-height:35px
}
p {
margin-bottom:15px
}
.popular_blk p .popular_blk ul li a, .sub_box p, .work_box p, p, ul.links li {
font-size:14px;
line-height:26px
}
.s_txt_outer {
bottom:0;
width:100%
}
.s_txt h2 {
font-size:20px!important;
line-height:26px!important;
margin-bottom:5px!important
}
.mob_form {
width:100%;
background-color:#f6f6f6;
float:left;
padding:20px 1.5rem;
margin:0
}
.slider_form h3 {
width:auto!important;
font-size:12px!important;
padding:6px 2rem!important;
margin-right:10px!important
}
span.num {
width:30px;
height:30px;
margin:12px 14px 0 0
}
span.num::before {
top:13px;
width:25px;
right:-26px
}
.slider_form p {
padding:10px 15px;
font-size:16px
}
.slider_form .form {
padding:20px 15px
}
.owl-carousel.posts .owl-dot, .owl-carousel.slides .owl-dot, .owl-carousel.testimonials .owl-dot {
width:8px;
height:8px;
margin-right:10px
}
.breadcrumb ul li a {
padding:0 24px 0 0;
font-size:12px
}
.breadcrumb ul li, span.num {
font-size:12px
}
.parts_blk span {
font-size:45px;
top:14px
}
.parts_blk h1 {
margin-bottom:35px
}
.owl-carousel.posts .owl-dot, .owl-carousel.testimonials .owl-dot {
margin-bottom:20px
}
.faq_blk h3 {
font-size:18px
}
.faq_blk .panel p {
font-size:12px;
line-height:24px
}
.tm_box h4 {
line-height:24px
}
.faq_blk .accordion, .faq_blk .accordion h4,.tm_box h4 {
font-size:14px
}
.tm_box {
padding:20px 14px
}
.tm_box .author_info {
width:94%
}
img.author {
width:35px!important
}
.tm_box .google {
width:6%
}
.tm_box .google img {
width:20px!important
}
.popular_blk ul li {
width:100%
}
.left_text {
padding:30px 15px
}
.bot_banner h2 {
font-size:20px;
line-height:30px
}
.ban_img img {
width:150px!important
}
img.partners {
width:210px!important;
margin-top:6px
}
.f_links ul li a, footer p {
font-size:14px;
line-height:26px
}
.address p {
font-size:16px
}
}
@media only screen and (max-width:400px) {
.slider_form h3 {
padding:6px 1rem!important
}
.s_txt_outer {
bottom:-7%!important;
width:100%
}
.s_txt ul li {
font-size:12px;
line-height:20px;
font-weight:400;
position:relative;
padding-left:20px
}
.s_txt h2 {
font-size:16px!important;
line-height:22px!important;
margin-bottom:5px!important
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:6px;
left:4px;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
.btn1.ph span {
	display:none !important;
	width:0px !important;
	height:0px !important;
	}
.btn1.ph {
	padding:0 10px;
	width:40px !important;
	overflow:hidden;
	}
}
@media only screen and (max-width:359px) {
h2.tlt {
font-size:19px
}
.sub_box, .work_box {
width:100%!important
}
img.secure {
width:160px!important
}
img.partners {
width:170px!important
}

.slider_form h3 {
padding:6px .5rem!important
}
.s_txt h2 {
font-size:15px!important;
line-height:20px!important;
margin-bottom:5px!important
}
.s_txt ul li:before {
position:absolute;
content:'';
width:8px;
height:8px;
top:6px;
left:4px;
background:#f0ac3f;
border-radius:2px;
transform:matrix(.71, .71, -.71, .71, 0, 0)
}
.s_txt ul li {
font-size:11px;
line-height:18px;
font-weight:400;
position:relative;
padding-left:20px
}
}
`