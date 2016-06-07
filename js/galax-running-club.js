// JavaScript Document

jQuery(document).ready(function($) {
	
	// Lightcase activation
	$('a[data-rel^=lightcase]').lightcase({
			maxWidth: 1200,
			maxHeight: 800,
			showCaption: false
	});


	// Set active class automatically
	var url = window.location;
	// Will only work if string in href matches with location
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');

	// Will also work for relative and absolute hrefs
	$('ul.nav a').filter(function() {
	    return this.href == url;
	}).parent().addClass('active');

});
