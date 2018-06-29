// JavaScript Document
$(function () {
	
	
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
	
	
	
	//回调函数的作用是显示对应分页的列表项内容
	//回调函数在用户每次点击分页链接的时候执行
	//参数page_index{int整型}表示当前的索引页
	var initPagination = function() {
		var num_entries = $("#hiddenresult div.result").length;
		// 创建分页
		$("#Pagination").pagination(num_entries, {
			num_edge_entries: 3, //边缘页数
			num_display_entries: 3, //主体页数
			callback: pageselectCallback,
			items_per_page:1 ,//每页显示1项
			prev_text:"上一页",
			next_text:"下一页",
		});
	 }();
	 
	function pageselectCallback(page_index, jq){
		var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
		$("#Searchresult").empty().append(new_content); //装载对应分页的内容
		return false;
	}
	

	
});








