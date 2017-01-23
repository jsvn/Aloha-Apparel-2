// Add to Cart
		var totalItems = 0; //set initial to 0
		$("button").click(function(){ //when button is clicked, func runs
			$("div.total").css({"display":"flex"}); // shows the counter at the top
			totalItems = Number(totalItems) + Number($(this).val()); // .val() brings in the value which is 1 and adds it to the totalItems
			$(".total").text(totalItems);
		});

//     $(function() {
//         $('.products').flickity({
//             cellAlign: 'center',
//             contain: true,
//             percentPosition: true,
//             imagesLoaded: true,
//             autoPlay: true,
//             prevNextButtons: false
//         });
// })


Slider
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
