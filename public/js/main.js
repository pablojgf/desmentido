$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $(".header").addClass("is-small");
    } else{
        $(".header").removeClass("is-small");
    }
});