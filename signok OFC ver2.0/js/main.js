$(function(){
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    let scTop = 0;
    const body = $("body");
    var speed = 5000;

    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".process_video_container").each(function(){
            let offsetTop = $(this).offset().top - wH + 200 ;
            if(scTop > offsetTop){
                $(this).addClass("move");
            } else {
                $(this).removeClass("move");
            }
        });
    });

    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".process_utility_container").each(function(){
            let offsetTop = $(this).offset().top - wH + 200;
            if(scTop > offsetTop){
                $(this).addClass("utility_on");
            } else {
                $(this).removeClass("utility_on");
            }
        });
    });

    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".tb_video_wrap").each(function(){
            let offsetTop = $(this).offset().top - wH + 300;
            if(scTop > offsetTop){
                $(this).addClass("left_rotate");
            } else {
                $(this).removeClass("left_rotate");
            }
        });
    });

    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".mo_video_wrap").each(function(){
            let offsetTop = $(this).offset().top - wH + 300;
            if(scTop > offsetTop){
                $(this).addClass("right_rotate");
            } else {
                $(this).removeClass("right_rotate");
            }
        });
    });

    $("#tabVideoControl .ut_item").click(function(){
        var target = $(this).attr('name');
        $('.tb_video[name="'+target+'"], .mo_video[name="'+target+'"]').addClass('vd_active').siblings().removeClass('vd_active');
        $('.des_item1[name="'+target+'"]',).addClass('des_on').closest(".description_txt").siblings().find(".des_item1").removeClass('des_on');
        $('.des_item2[name="'+target+'"]',).addClass('des_on2').closest(".description_txt").siblings().find(".des_item2").removeClass('des_on2');
        $('.des_item3[name="'+target+'"]',).addClass('des_on3').closest(".description_txt").siblings().find(".des_item3").removeClass('des_on3');
        $('.target_img1[name="'+target+'"]',).addClass('icon_on').closest(".utility_item").siblings().find(".target_img1").removeClass('icon_on');
        $('.target_img2[name="'+target+'"]',).addClass('icon_off').closest(".utility_item").siblings().find(".target_img2").removeClass('icon_off');
        $(this).parent().siblings().find(".ut_item").removeClass("ut_active");
        $(this).addClass("ut_active");
    });

})