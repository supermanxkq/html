$(function(){
	 var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        paginationClickable :true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:4000
   });
   
   serachplace('内蒙古自治区阿拉善盟额济纳旗恒昌加油站(315省道旧东)');
    
   
});


function serachplace(address) {
		var map = new BMap.Map("allmap"); // 创建Map实例 
		map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
		// 添加带有定位的导航控件
		var navigationControl = new BMap.NavigationControl({
			// 靠左上角位置
			anchor : BMAP_ANCHOR_TOP_LEFT,
			// LARGE类型
			type : BMAP_NAVIGATION_CONTROL_LARGE
		});
		map.addControl(navigationControl);
		/// 百度地图API功能
		//一个关键字搜索
		var local = new BMap.LocalSearch(map, {
			pageCapacity : 1,//只显示一个搜索结果
			renderOptions : {
				map : map
			}
		});
		local.search(address);
	}