/**
* DaphneDixon: js/script.js
* author: 鍾耀堂 (Anthony Chung)
* date created: 4/22/2014
* date updated: 4/28/2014
**/

$( function() { 

 $( '#dd-menu li' ).each( function() {
  $( this ).hover( function() {
   clearTimeout( $.data( this, 'timer' ) );
   $( 'ul', this ).stop( true, true ).slideDown( 200 );
  }, function() {
   $.data( this, 'timer', setTimeout( $.proxy( function() {
    $( 'ul', this ).stop( true, true ).slideUp( 200 );
   }, this ), 100 ));
  });
 });
 
}); 