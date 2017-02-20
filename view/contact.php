<!doctype html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title>Contact &ndash; Olympic</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- CSS
        ================================================== -->
        <?php include("../modulos/estilos.php"); ?>

	<!-- Favicons
	================================================== -->
        <?php include("../modulos/favicons.php"); ?>
	
        <!-- Hammer reload -->
            <?php include("../modulos/hammerReload.php"); ?>
        <!-- /Hammer reload -->
      
</head>
<body class="">
<div id="mobile-bar">
	<a class="menu-trigger" href="#mobilemenu"></a>
	<h1 class="mob-title">Contact</h1>
</div>
<div id="page">
	<header id="header">
		<div class="container">
			<div class="col-sm-4">
				<h1 id="logo"><a href="index.html"><img src="images/demo/logo.png" alt=""/></a></h1>
			</div>

			<div class="col-sm-8">
				<nav id="nav">
	<ul id="navigation" class="group">
		<li>
			<a href="index.html">Home</a>
		</li>
		<li>
			<a href="blog.html">Blog</a>
			<ul>
				<li><a href="single.html">Single Article</a></li>
			</ul>
		</li>
		<li>
			<a href="template-staff-3col.html">Staff Templates</a>
			<ul>
				<li><a href="single-staff.html">Single Staff</a></li>
				<li><a href="template-staff-2col.html">Staff 2 Columns</a></li>
				<li><a href="template-staff-3col.html">Staff 3 Columns</a>
				<li><a href="template-staff-4col.html">Staff 4 Columns</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="template-classes-3col.html">Classes Templates</a>
			<ul>
				<li><a href="single-class.html">Single Class</a></li>
				<li><a href="template-classes-2col.html">Classes 2 Columns</a></li>
				<li><a href="template-classes-3col.html">Classes 3 Columns</a>
				<li><a href="template-classes-4col.html">Classes 4 Columns</a>
				</li>
			</ul>
		</li>
		<li class='current'>
			<a class='current' href="contact.html">Contact</a>
		</li>
	</ul><!-- #navigation -->
</nav><!-- #nav -->
			</div>
		</div>
	</header>

<div id="page-title">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h2>Contact</h2>
			</div>
		</div>
	</div>
</div>

<main id="main" class="container">
	<div class="row">
		<div class="col-xs-12">
			<div id="map"></div>
		</div>

		<div class="col-lg-9 col-sm-8">
			<article class="entry">
				<div class="entry-content">
				<h1 class="entry-title">Feel free to contact us for an appointment!</h1>

				<div id="done"><div class="wrap"><h2>Thank you for your message! We'll get back to you as soon as possible!</h2></div></div>

				<form id="cform" class="contact" action="contact.php">
					<p>
						<label for="name">Your Name:</label>
						<input type="text" id="name" name="name"/>
					</p>

					<p>
						<label for="email">Your Email:</label>
						<input type="email" id="email" name="email"/>
					</p>

					<p>
						<label for="subject">Subject:</label>
						<input type="text" id="subject" name="subject"/>
					</p>

					<p>
						<label for="message">Message</label>
						<textarea name="message" id="message" cols="30" rows="10"></textarea>
					</p>

					<p><input id="contact-submit" type="submit" value="Send" class="button"/></p>
				</form>
				</div>
			</article>
		</div>

		<div class="col-lg-3 col-sm-4 sidebar">
			<aside class="widget widget_text group">
	<h3 class="widget-title">Text Widget</h3>
	<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus.</p>
</aside><!-- /widget -->
		</div>
	</div>
</main>


<footer id="footer">
	<div class="container">
		<div class="row">
			<div class="col-sm-3 col-xs-12">
				<aside class="widget widget_text group">
	<h3 class="widget-title">Text Widget</h3>
	<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus.</p>
</aside><!-- /widget -->
			</div>
			<div class="col-sm-3 col-xs-12">
				<aside class="widget widget_ci_about group">
	<h3 class="widget-title">About Widget</h3>
	<div class="widget_about group">
		<img src="http://placehold.it/100x100" class="alignleft" alt="about me">
		Nam vestibulum, arcu sodales feugiat consectetur, nisl orci bibendum elit, eu euismod magna sapien ut nibh. Donec semper quam scelerisque tortor dictum gravida.
	</div>
</aside>
			</div>
			<div class="col-sm-3 col-xs-12">
				<aside class="widget widget_ci_twitter_widget group">
	<h3 class="widget-title">Twitter</h3>

	<div class="twitter_update_list">
		<ul>
			<li>
				<span>This is the twitter feed!</span>
				<a class="twitter-time" href="#">about 12 hours ago</a>
			</li>

			<li>
				<span>Great, I will prepare a few things this weekend so we have something to discuss!</span>
				<a class="twitter-time" href="#">about 11 hours ago</a>
			</li>

			<li>
				<span>thanx, always a work in progress :) btw i'm going to write down a few ideas about the regional meetup!</span>
				<a class="twitter-time" href="#">about 5 hours ago</a>
			</li>
		</ul>
	</div>
</aside>
			</div>
			<div class="col-sm-3 col-xs-12">
				<aside class="widget widget_search group">
	<h3 class="widget-title">Search</h3>

<form action="/" method="get" role="search" class="searchform">
	<div>
		<label class="screen-reader-text">Search for:    </label>
		<input type="text" class="s" name="s" value="" placeholder="Search">
		<input type="submit" value="GO" class="searchsubmit">
	</div>
</form>
</aside>
				<aside class="widget widget_text group">
	<h3 class="widget-title">Text Widget</h3>
	<p>Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus.</p>
</aside><!-- /widget -->
			</div>
		</div>
		<hr/>
		<div class="credits">
			<div class="row">
				<div class="col-sm-6">
					<p>Olympic &amp; Fitness / Gym Theme</p>
				</div>

				<div class="col-sm-6 text-right">
					<p>Made at <a href="http://www.cssigniter.com">cssigniter.com</a></p>
				</div>
			</div>
		</div>
	</div>
</footer>
</div> <!-- #page -->

<div id="mobilemenu" class="mm-menu">
	<ul class="group">
		<li>
			<a href="index.html">Home</a>
		</li>
		<li>
			<a href="blog.html">Blog</a>
			<ul>
				<li><a href="single.html">Single Article</a></li>
			</ul>
		</li>
		<li>
			<a href="template-staff-3col.html">Staff Listing</a>
			<ul>
				<li><a href="template-staff-2col.html">Staff 2 Columns</a></li>
				<li><a href="template-staff-3col.html">Staff 3 Columns</a>
				<li><a href="template-staff-4col.html">Staff 4 Columns</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="template-classes-3col.html">Class Listing</a>
			<ul>
				<li><a href="template-classes-2col.html">Classes 2 Columns</a></li>
				<li><a href="template-classes-3col.html">Classes 3 Columns</a>
				<li><a href="template-classes-4col.html">Classes 4 Columns</a>
				</li>
			</ul>
		</li>
		<li class='current'>
			<a class='current' href="contact.html">Contact</a>
		</li>
	</ul>
</div>
<!-- Javascript
================================================== -->
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script src='js/jquery-1.10.1.min.js'></script>
<script src='js/superfish.js'></script>
<script src='js/jquery.flexslider-min.js'></script>
<script src='js/jquery.mmenu.min.js'></script>
<script src='js/fancybox/jquery.fancybox.pack.js'></script>
<script src='js/contact.js'></script>
<script src='js/scripts.js'></script>

<!--[if (gte IE 6)&(lte IE 8)]>
<script type="text/javascript" src="js/selectivizr-min.js"></script>
<![endif]-->
</body>
</html>