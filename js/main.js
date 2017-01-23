// Add to Cart
		var totalItems = 0; //set initial to 0
		$("button").click(function(){ //when button is clicked, func runs
			$("div.total").css({"display":"flex"}); // shows the counter at the top
			totalItems = Number(totalItems) + Number($(this).val()); // .val() brings in the value which is 1 and adds it to the totalItems
			$(".total").text(totalItems);
		});

    $(function() {
        $('.products').flickity({
            cellAlign: 'center',
            contain: true,
            percentPosition: true,
            imagesLoaded: true,
            autoPlay: true,
            prevNextButtons: false
        });
})

// // Smooth Scroll
// 		$('a[href^="#"]').on("click",function (e) {
// 		    e.preventDefault();
//
// 		    var target = this.hash;
// 		    var $target = $(target);
//
// 		    $("html, body").stop().animate({
// 		        "scrollTop": $target.offset().top
// 		    }, 600, "swing", function () { //speed for scroll is here in this line
// 		        window.location.hash = target;
// 		    });
// 		});

    //smooth scrolling

// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// Slider
// $(function(){
//
//     $(".products").flickity({
//            cellAlign: 'right',
//         contain: true,
//     });
// });

// Email validator

$('.sign-up-email').submit( function(){
    return false;
})

})
