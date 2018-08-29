$(function(){
	$("#datetimepicker1").datetimepicker({
		language: 'zh-CN',
		format: 'yyyy-mm-dd',//显示格式
		todayHighlight: 1,//今天高亮
		minView: "month",//设置只显示到月份
		startView:2,
		startDate:"+0d",
		forceParse: 0,
		showMeridian: 1,
		autoclose: 1//选择后自动关闭
	});
	$("#datetimepicker2").datetimepicker({
		language: 'zh-CN',
		format: 'yyyy-mm-dd',//显示格式
		todayHighlight: 1,//今天高亮
		minView: "month",//设置只显示到月份
		startView:2,
		startDate:"+0d",
		forceParse: 0,
		showMeridian: 1,
		autoclose: 1//选择后自动关闭
	}).on("show",function(){
		if($('#beginDate').val()!=" "){
		 var startDate = $("#beginDate").val().replace(/-/g,"/");
         var date = new Date(startDate);
         var date1 =new Date(date);
         date1.setDate(date.getDate()+1);
         var time= date1.getFullYear()+"-"+(date1.getMonth()+1)+"-"+date1.getDate();
         $("#datetimepicker2").datetimepicker("setStartDate",time);
		}
		
	});
	
	
	$('.serach_position').each(function(){
		$(this).click(function(){
			var mapModal = $('#map_Modal');
			var address = $(this).data("positionname");
				mapModal.on('shown.bs.modal', function(event) {
				serachplace(address);
			});
		});
	});
	
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