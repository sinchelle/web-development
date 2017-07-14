$(document).ready(function(){
 $('nav a').slice(9,14).hide();
    $('nav a:last-child').click(function(event) {
        if($('nav a').slice(9,14).css('display')=='none'){
         $(this).siblings().show();
         $(this).find('i').addClass('cur');
        }else{
          $('nav a').slice(9,14).hide();
          $(this).find('i').removeClass('cur');
        }
    });

})