//=================================================================================================
//==============================Egyption Party===================================================
//=================================================================================================
//=================================================================================================
//================================Assignment[7]===============================================
'use strict'
import dateParty, {} from "./dateDeffrence.js"
let nav_width = $('.side_nav').outerWidth();
//____________________open and close nav bar by open click___________________________
$('.open_nav').click(function() {
    let navLeft = $('.open_nav').offset().left; //{left,top}
    console.log(nav_width);
    console.log(navLeft);
    if (navLeft === 0) {
        $('.side_nav').css({ left: `0px`, transition: 'left 1s' });
        $('.home_content').css({ marginLeft: `${nav_width}px`, transition: 'all 1s' });
    } else {
        $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' });
        $('.home_content').css({ marginLeft: `0px`, transition: 'all 1s' });
    }
});
//____________________open and close nav bar by close click_ on nav__________________________
$('.close_btn ').click(function() {
    let navLeft = $('.open_nav').offset().left; //{left,top}
    $('.side_nav').css({ left: `-${nav_width}px`, transition: 'left 1s' })
    $('.home_content').css({ marginLeft: `0px`, transition: 'all 1s' })
});
//________________ behavior scroll on nav link_______________________________
$('.side_nav a').click(function(e) {
    let sectionId = $(this).attr('href');
    let sectionTop = $(sectionId).offset().top;
    console.log(sectionTop)
    $('html,body').animate({
        scrollTop: sectionTop
    }, 2000)
});
//_________________slider effect and do slide up as deffault______________________________
$('.slider h3').next().slideUp()
$('.slider h3').click(function() {
    // console.log(this);
    $(this).next().slideToggle(1000);
    $(this).next().siblings('div').slideUp(1000);
});
//______________display deffrence dates________________________________
setInterval(dateParty, 1000);
//_______________________________________________
//__________________text area max char 100_____________________________
$('textarea').keyup(function(e) {
    let message = $('textarea').val();
    let letterNumber = (message.split('')).length;
    // console.log(letterNumber);

    if (letterNumber > 100) {
        $('.word_limit').html('your available character finished');
    } else {
        $('.word_limit').html(`${100-letterNumber}`);
    }
});
//______________________________________