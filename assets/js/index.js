/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

    });

}(jQuery));




// Smooth Scroll To Top
    $(document).ready(function() {
		$('.back-top a').smoothScroll({offset: 0});
	});


// Parallax BG
	jQuery(document).ready(function() {
	  $('.no-touch body').stellar({
	    horizontalScrolling: false,
	    verticalOffset: -50
	  });
	});





// Syntax Highlighting
    $(document).ready(function() {
        $( 'pre' ).addClass( 'prettyprint' );
        $("pre[class=prettyprint]").each( function() {
            if ( ($(this).html().split(/\n/).length-1) > 3 ) {
                $(this).addClass( 'linenums' );
            }
        });
    });
