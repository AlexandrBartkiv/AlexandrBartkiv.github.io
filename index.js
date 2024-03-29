$(function() {
    
var target = $('#65');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
var styles = {
    width: $('.work').find('div').css("width"),
    height:$('.work').find('div').css("height")
}

$('.work').find('p').css(styles)
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
        $('#50').text('50')
        $('#90').text('90')
        $('#65').text('65')

        $('#50').parent().parent().find('.line_bl').animate({
            width: "50%"
        }, 2000)
        $('#90').parent().parent().find('.line_bl').animate({
            width: "90%"
        }, 2000)
        $('#65').parent().parent().find('.line_bl').animate({
            width: "65%"
        }, 2000)
    }
});

   function scr(){
    if ($(window).width()<=375){
        $('.work').find('div:first, div:last, div:eq(3), div:eq(4)').css({'background-color':'#d8d8d8'})
        $('.work').find('div:eq(2)').css({'background-color':'white'})

        console.log($('.work').find('div:first, div:last, div:eq(3), div:eq(4)'))
    }
   }
   scr();


   var setBlur = function(ele, radius) {
    $(ele).find('img').css({
       "-webkit-filter": "blur("+radius+"px)",
        "filter": "blur("+radius+"px)",
        
   });
    },
    tweenBlur = function(ele, startRadius, endRadius) {
        $({blurRadius: startRadius}).animate({blurRadius: endRadius}, {
            duration: 200,
            easing: 'swing', 
                            
            step: function() {
                setBlur(ele, this.blurRadius);
            },
            callback: function() {
                setBlur(ele, endRadius);
            }
        });
    };

   $('.work').find('div').on('mouseover',function(){
    console.log($(this).closest('div'))
    tweenBlur($(this).closest('div'), 0, 5);
    $(this).find('p').animate({
        opacity: "1",
    }, 200) 
   })
   $('.work').children().on('mouseout',function(){
    tweenBlur($(this).closest('div'), 5, 0);
    $(this).find('p').animate({
        opacity: "0"
    }, 200)    
   })
   $('.work').children().on('mouseup',function(){
       console.log($(this).find('a'))
    $(this).find('img').trigger("click")
   })

    $('.forma, .popupForm').submit(function(e){
        e.preventDefault(e)
        var name = $(this).find('.name').val()
        var mail = $(this).find('.mail').val()
        var title = $(this).find('.title').val()
        var comment = $(this).find('.comment').val()
        
        axios({
            method: 'post',
            url:'https://formspree.io/f/xdolkbzk',
            data:{
                name,
                mail,
                title,
                comment
            },
        });
        $(this).find('span').fadeIn(200).delay(2000).fadeOut(200);
        $('.popupWraper').delay(1500).fadeOut(200);
        $('.popupBack').delay(1500).fadeOut(200);
        $('body').css({"overflow":"scroll"})
    })
    $(document).keyup(function (e) { 
        if(e.key == "Escape")$('.popupWraper').fadeOut(200)
        $('.popupBack').fadeOut(200)
        $('body').css({"overflow":"scroll"});
    });
// running procent of skills
    $('#about').on('click',function(){
        $('body').scrollTo('.about', 1200)
    })
    $('#work').on('click',function(){
        $('body').scrollTo('.work', 1200)
    })
    $('#process').on('click',function(){
        $('body').scrollTo('.work_process', 1200)
    })
    $('#services').on('click',function(){
        $('body').scrollTo('.services', 1200)
    })
    $('#contact').on('click',function(){
        $('body').scrollTo('.need_a_proj', 1200)
    })

    $('.btn').on('click',function(){
        $('.popupWraper').css({"display":"flex"})
        $('.popupBack').fadeIn(200)
        $('body').css({"overflow":"hidden"})
    })

    $('.play').click(function (e) { 
        $('.play').hide()
        $('iframe').show()
        console.log($('#myframe'))
        console.log($('#myframe').attr('src'))
        src = $('#myframe').attr('src');
        $('#myframe').attr('src', src + '&autoplay=1')
    });
});
