$(document).ready(function(){
    $(".buttonFilter").click(function(){
        let name = $(this).attr("data-filter")
        if(name == "all") {
            $(".filter").show("2000");

        }else {
            $(".filter").not("."+name).hide("1000");
            $(".filter").filter("."+name).show("2000");

        }

    })
    $(".buttonFilter").click(function(){
        $(this).addClass("active").siblings().removeClass('active')

    })
    $('.toggle').click(function(){
              $(this).toggleClass('active')
              $('.menu_mobile').toggleClass('active')
              $('body').toggleClass('overflow-hide')
          })
})