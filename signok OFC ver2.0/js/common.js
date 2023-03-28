$(function(){
    const depth1 = $(".depth1 li a");
    const depth2 = $(".gnb_depth2_wrap");

    $(depth1).mouseenter(function(){
        $(depth2).addClass("depth2_on");
    });
    $(depth2).mouseleave(function(){
        $(depth2).removeClass("depth2_on");
    });
})


// tag toggle event
$(document).on('click','.sub-tag',function(){
   var _parent = $(this).closest('.tag-area')
   var activeClass = 'active'
   var targetClass = '.sub-tag'

   $(this).addClass(activeClass).siblings(targetClass).removeClass(activeClass)
})

function chrgDesc(_this,value){
    var containerClass = '.toggle-container'
    var targetClass= '.toggle-container.'+value
    var _parent = $(_this).closest('.sub-description-button-area')

    console.log(_parent)
    
    $(targetClass).show().siblings(containerClass).hide()
    _parent.find('li').removeClass('active')
    $(_this).closest('li').addClass('active')
}