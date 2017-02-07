// Add to Cart
$(function() {

// Every time I click add button then you add 1 to the cart.
var cartTotal = 0;
$('.cart_button').click(function(e){
	e.preventDefault();
	cartTotal = cartTotal + 1;
	console.log(cartTotal);
	$('.total').text(cartTotal);
	$('.total').show();

})


//flicity slider
	$('.products').flickity({
	    cellAlign: 'left',
	    contain: true,
	    percentPosition: true,
	    imagesLoaded: true,
	    autoPlay: true,
	    prevNextButtons: false
	});

//smooth scrolling
function pageJump(id) {
	   $('html,body').animate({
			     scrollTop: $(id).offset().top - 150

		 }, 'slow');
};
 $('.navlink_names').on('click', function(e) {
	      e.preventDefault();
				var hashHref = $(this).attr('href');

				pageJump(hashHref);
 });



// Email validator

$('.subscribe').submit( function(e) {
	// if empty(.inputEmail)
	e.preventDefault();
 	if($('.inputEmail').val() == ''){
		 alert('Please enter a valid email');
	}

  else{alert( 'Thanks for submitting ')}


})

})
