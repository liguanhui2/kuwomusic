var spanList = document.getElementsByClassName("placeholder");
var inputList = document.getElementsByClassName("field");

function checkinput(which) {
	var inputName = which.getAttribute("name");
	var regtxt = "";
	switch(inputName) {
		//手机号
		case "regPhone":
			regtxt = /^1([38]\d|5[0-35-9]|7[3678])\d{8}&/;
			break;

        case "regEmail":
			regtxt = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
            break;
			
			//昵称
		case "regName":
			regtxt = /^[\u4E00-\u9FA5A-Za-z0-9]{1,9}$/;
			break;

			//设置密码
		case "regPwd":
			regtxt = /^[a-zA-Z]\w{6,18}$/;
			break;

			//确认密码	
		case "regPwdRepeat":
			regtxt = /^[a-zA-Z]\w{6,18}$/;
			break;

	}
	if(regtxt.test(which.value)) {
		return;
	} else {
		which.parentNode.nextSibling.nextSibling.innerHTML = which.getAttribute("warning");
		which.parentNode.style.border = "1px solid red";
	}
}

for(var i = 0; i < spanList.length; i++) {
	spanList[i].onclick = function() {
		this.style.display = "none";
		this.nextSibling.nextSibling.focus();
	}
}

for(var i = 0; i < inputList.length; i++) {
	inputList[i].onblur = function() {
		checkinput(this);
	}
}

var flag=0;

$(".change").click(function(){
	if (flag==0) {
		$("#a label").html("邮 箱");
		$("a input").attr("name","regEmail");
		
		$("#a span").html("请使用常用邮箱注册");
        $(".change").html("手机号注册")
        $("#b").css("display","none");
        flag=1;
	}else{
		$("#a label").html("手 机 号");
		$("a input").attr("name","regPhone");

		$("#a span").html("请使用常用手机注册");
        $(".change").html("邮箱注册")
        $("#b").css("display","block");
        flag=0;
	}
})