$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 50){
        $(".faqbody").addClass(".change");
    }else{
        $(".faqbody").removeClass(".change");

    }
    });
