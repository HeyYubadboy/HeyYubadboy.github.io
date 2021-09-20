$(window).scroll(function(){
    if($(window).scrollTop()>100){
        $(".con-navbar").removeClass("navbar-normal");
        $(".con-navbar").addClass("navbar-transparent");
    }
    
    else{
        $(".con-navbar").removeClass("navbar-transparent");
        $(".con-navbar").addClass("navbar-normal");
    }
    
})