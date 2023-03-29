function moveSlide(_this,targetData){
    let _parent = $(_this).closest('.slide-button-list')
    let targetGorup = _parent.siblings('.slide-content-list')
    let target = '.slide__item[data-slide="'+targetData+'"]'
    let activeClass = 'is-active'

    targetGorup.find(target).addClass(activeClass).siblings().removeClass(activeClass);
    // targetGorup.find(target).show().siblings().hide()
    
    console.log(target)
}