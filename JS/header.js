// Function used to shrink nav bar removing paddings and adding black background 
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('header').addClass('header2');
    } else {
        $('header').removeClass('header2');
    }
});

