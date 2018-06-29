// JavaScript Document
$(function () {
	
    //toTop返回顶部
    	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.toTop');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('toTop_visible') : $back_to_top.removeClass('toTop_visible toTop_fadeout');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('toTop_fadeout');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
    //新闻向上滚动
    setInterval(function AutoScroll() {
        $('#news_scroll').find("ul:first").animate({
            marginTop: "-25px"
        }, 1000, function () {
            $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
        });
    }, 3500)	
		
	
	//内容页左边导航
    $(".float_nav dl").click(function () {
        $(this).addClass("selected")
          .children("dd").show(1000).end()
          .siblings().removeClass("selected")
          .children("dd").hide(1000); 
    });
	
	$(".float_nav dl dd a").click(function(){
		$(this).addClass("a_selected").parent().siblings().find("a").removeClass("a_selected")
		}
	)
	

	
	//百度统计
	var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?b58d18764a096a7ea8f4120faebc95e1";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
	
	
	
});








