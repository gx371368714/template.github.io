$('#check').on('click',function(){
	if ($('#check').is(':checked')) {
		$('#paw').attr('type','text')
	}else{
		$('#paw').attr('type','password')
	}
})
$('#login').on('click',function(){
	$.ajax({
		
		type:"GET",
		url:" http://datainfo.duapp.com/shopdata/userinfo.php",
		data:{	
				status:'login',
				userID:$('#username').val(),
				password:$('#paw').val(),
			},
		success:function(data){
			if (data == 0) {
				alert('用户名不存在!`');
			}else if(data == 2){
				alert('用户名密码不符');
			}else{
				alert("登录成功!")
			}
		},
		
	})
})