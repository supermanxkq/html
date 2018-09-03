$(function(){
	$('#spinner').spinner();
	
	$('#tel').blur(function(){
		if($(this).val()!==""){
			if($(this).val().match(/^1[3|4|5|7|8|][0-9]{9}$/)){
				$(this).next('span').text(" ");
			}else{
				$(this).next('span').text("*请输入正确的电话号码！");
			}
		}
		
	});
	
	$('#mail').blur(function(){
		if($(this).val()!==""){
			if($(this).val().match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)){
				$(this).next('span').text(" ");
			}else{
				$(this).next('span').text("*请输入正确的邮箱！");
			}
		}
		
	});
});