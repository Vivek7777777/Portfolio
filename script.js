AOS.init();


//adding animation to front text and image
$(".intro_box1").addClass("animate__animated animate__fadeInLeft");
$(".intro_box2").addClass("animate__animated animate__fadeInRight");
;
setInterval(function(){$(".box2_svg").css( {"animation" : "move 4s infinite"})},1500);

// project

if($(window).width() < 992) { 
    $(".project_info_even").addClass("order-2");
} 


// adding animation to project
function projectImgIn(){
    $(".project_img").css({"scale" : ".95"})
    console.log($(".project_img"));
}

function projectImgOut(){
    $(".project_img").css({"scale" : "1"})
}