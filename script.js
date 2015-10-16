$(document).ready(function() {
    $('.circle').draggable();
	    $( ".circle" ).click(function() {
	  	$('.triangle').fadeOut();
	 	$('.square').fadeOut();
		});
 });
 
$(document).ready(function() {
    $('.square').draggable();
	    $( ".square" ).click(function() {
	  	$('.circle').fadeOut();
	 	$('.triangle').fadeOut();
	 	});
});
 
 
 $(document).ready(function() {
    $('.triangle').draggable();
	    $( '.triangle').click(function() {
	  	$('.circle').fadeOut();
	 	$('.square').fadeOut();
	 	});
});
