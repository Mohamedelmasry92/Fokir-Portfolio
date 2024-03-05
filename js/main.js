let aboutOffset = $('#About').offset().top

$(window).scroll(()=>{
    let scrollFromTop = $(window).scrollTop();
    if(scrollFromTop > aboutOffset - 100){
        $('#main-nav').css('backgroundColor' , 'rgba(0,0,0,0.9)')
        $('#btnUp').fadeIn(1000)
    }else{
        $('#main-nav').css('backgroundColor' , 'transparent')
        $('#btnUp').fadeOut(1000)

    }
})


$('#btnUp').click(()=>{
    $('html,body').animate({scrollTop : 0} , 100)
})


$('.nav-item a').click(function(){
    $(".nav-item a").removeClass('myActive')
    $(this).addClass('myActive')

    let aHref = $(this).attr('href')
    let Offset = $(aHref).offset().top
    $('html , body').animate({scrollTop : Offset},100)
})


$('.dots div').click(function(){
    $(".dots div").removeClass('dot-active')
    $(this).addClass('dot-active')
})