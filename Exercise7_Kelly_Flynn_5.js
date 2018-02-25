$(function() {
"use strict";

	var $flowers = $('#flower-items');
	
	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '80%',
            'slideshow' : true,
            'slideshowSpeed' : 3000,
            'transition' : "fade",
            'opacity' : .5,
            'current' : "Arrangement {current} of {total}"
    	});
});
    
    
   