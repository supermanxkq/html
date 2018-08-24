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
});
