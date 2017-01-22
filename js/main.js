$('#my-form').on('submit', function(event) {
   event.preventDefault();
   if ( $('#my-text-input').val() == '' ) {
      alert('You missed the field.');
   } else {
      alert('Thanks for filling the field!');
   }
});
