(function($){

	'use strict';

	/*------------------------------------------
	GLOBAL VARIABLES
	------------------------------------------*/

	/* Window Object and variables */
	var $window = $(window),
		$document = $(document),
		_windowH = $window.height(),
		_windowW = $window.width(),
		_windowST = $window.scrollTop();

	/* Global objects */
	var $html = $('html'),
		$body = $('body');

	/* Update global variables when window is resized */
	$window.on('load resize', function() {
		_windowH = $window.height();
		_windowW = $window.width();
		_windowST = $window.scrollTop();
	});

	/* Update scrollTop on window scroll */
	$window.on('scroll', function() {
		_windowST = $window.scrollTop();
	});

	/* Functions that needs to run when window is resized */

	/********************************************
	----------- Initializing Functions
	********************************************/
	$(document).on('ready', function() {

		// blogTabs(); // Blog Tabs

	});


	/********************************************
	----------- Defining Functions
	********************************************/



	function blogTabs() {

		var tabLinks = $('.blog-tabs').find('a');

		tabLinks.on('click', function(event) {
			var $this = $(this);
			event.preventDefault();
			$this.addClass('active')
			.siblings('a').removeClass('active');

			$($this.attr('href')).fadeIn(300).siblings('.tab-contents').fadeOut(300);
		});
	};



})(jQuery);
