// Add to Cart
		var totalItems = 0; //set initial to 0
		$("button").click(function(){ //when button is clicked, func runs
			$("div.total").css({"display":"flex"}); // shows the counter at the top
			totalItems = Number(totalItems) + Number($(this).val()); // .val() brings in the value which is 1 and adds it to the totalItems
			$(".total").text(totalItems);
		});

// Smooth Scroll
		$('a[href^="#"]').on("click",function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    var $target = $(target);

		    $("html, body").stop().animate({
		        "scrollTop": $target.offset().top
		    }, 600, "swing", function () { //speed for scroll is here in this line
		        window.location.hash = target;
		    });
		});

// Slider
$(function(){

    $(".products").flickity({
           cellAlign: 'right',
        contain: true,
    });
});

// Email validator

$('.sign-up-email').submit( function(){
    return false;
})

})


// $( "form" ).submit(function( event ) {
//   if ( $( "input:first" ).val() === “email“ ) {
//     $( "span" ).text( "Validated..." ).show();
//     return;
//   }
//
//   $( "span" ).text( “Please submit valid email address” ).show().fadeOut( 1000 );
//   event.preventDefault();
// });
