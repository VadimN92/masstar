$(document).ready(function(){
	// Script fot header 
    $('.link-menu').click(function(e){
    	e.preventDefault(); // If this method is called, the default action of the event will not be triggered.
    
    	var popup = $(this).attr('href');

        $(this).toggleClass('active').siblings('.link-menu').removeClass('active');
    	$(popup).fadeToggle().siblings('.popup').fadeOut();
	});

	$(document).on('click', function(e) {
    	if (!$(e.target).closest('.popup,.link-menu').length) {
        	$('.popup').fadeOut();
            $('.link-menu').removeClass('active');
    	}
	});
});