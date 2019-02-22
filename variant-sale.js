$(theme.init);
$( document ).ready(function() {
 if( typeof product_variants_removed != undefined ) {  // was there items to be removed?
   var $addToCartForm = $('form[action="/cart/add"]');
   if (window.MutationObserver && $addToCartForm.length) {
     if (typeof observer === 'object' && typeof observer.disconnect === 'function') {
       observer.disconnect();
     }
     var config = { childList: true, subtree: true };
     var observer = new MutationObserver(function() {
       product_variants_removed.forEach(function(item){
         $('.single-option-selector option').filter(function() { return $(this).text() === item; }).remove();
       });
       observer.disconnect();
         $('.single-option-selector').trigger('change');
     });  
     observer.observe($addToCartForm[0], config);
   }
 }
});
