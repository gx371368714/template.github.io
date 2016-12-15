$('#sign').on('click',function(){
	var boluser = $('#username').val().length >= 8;
    var bolpaw = $('#paw').val().length >= 6 ;
    var bolpaw1 = $('#paw1').val() == $('#paw').val();
    if (!boluser) {
    	alert("用户名不能少于八位!");
    }
    if (!bolpaw) {
    	alert("密码不能少于六位!");
    }
    if (!bolpaw1) {
    	alert("两次密码输入不一致!")
    }

if (boluser && bolpaw && bolpaw1) {
	$(function(){
		$.ajax({
			type:'POST',
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			data:{
				status:'register',
				userID:$('#username').val(),
				password:$('#paw').val(),
			},
			success:function(data){
					console.log(data)
    					if (data == 0) {
    						alert('用户名重名!');
    					}else if (data == 2) {
    						alert('未知错误');
    					}else if (data == 1) {
    						alert('注册成功!')
    					}
    				},	
		})
	})
}
})




