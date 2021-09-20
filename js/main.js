function to_home_page(){
    $('body,html').animate({ scrollTop: 0 }, 500, 'easeInOutCubic');
}
function to_about_page(){
    $('body,html').animate({ scrollTop: $('.page-2').offset().top }, 500, 'easeInOutCubic');
}
function to_cp_page(){
    $('body,html').animate({ scrollTop: $('.page-3').offset().top }, 500, 'easeInOutCubic');
}
function to_contact_page(){
    $('body,html').animate({ scrollTop: $('.page-4').offset().top }, 500, 'easeInOutCubic');
}