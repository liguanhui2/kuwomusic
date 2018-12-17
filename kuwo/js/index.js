//顶部及其登录框
	$(".more").mouseover(function(){
		$(".more ul").css("display","block");
	})

	$(".more").mouseout(function(){
		$(".more ul").css("display","none");
	})

	$(".loginBtn").mouseover(function(){
		$(".loginMenu").css("display","block");
	})

	$(".loginBtn").mouseout(function(){
		$(".loginMenu").css("display","none");
	})

	$(".loginBtn").click(function(){
		$(".loginBox").css("display","block");
	})

	$(".closeWindow").click(function(){
		$(".loginBox").css("display","none");
	})

	//播放器
    var flag=false;


	$(".prev").click(function(){
       $("#mymusic").attr("src","./img/1.mp3");
       $("#mymusic").play()[0];
	})

	$(".play").click(function(){
       if (flag==false) {
         $("#mymusic")[0].play();
         $(this).attr("class","zan");
       flag=true;
       } else {
       	 $("#mymusic")[0].pause();
         $(this).attr("class","play");
       flag=false;
       }
      
	})

	$(".next").click(function(){
       $("#mymusic").attr("src","./img/3.mp3");
       $("#mymusic").play()[0];
	})

    //进度条
    
  

    setInterval(function(){
    	var m=parseInt($("#mymusic")[0].currentTime/60);
    	var s=parseInt($("#mymusic")[0].currentTime%60);

    	if(m<10){
    		m="0"+m;
    	}

    	if (s<10) {
    		s="0"+s;
    	}

    	$("#wp_playTime").html(m+":"+s);

    	var grow=(($("#mymusic")[0].currentTime)/($("#mymusic")[0].duration)*100);
   
         $("#wp_processBar").css("width",grow+"px");
    	$("#wp_processBtn").css("left",grow+"px");

    	
    },1000);


    var index=1;
    
    //循环播放
	$("#mode").click(function(){
		if (index==1) {
			$(this).attr("class","single");
			index=2;
		} else if(index==2){
			$(this).attr("class","order");
			index=3;
		} else if(index==3){
			$(this).attr("class","random");
			index=4;
		} else {
			$(this).attr("class","loop");
			index=1;
		} 
	})
    
    //静音
	$("#wp_mute").click(function(){
		if (flag==false) {
			$("#soundBox").css("display","block");
			flag=true;
		} else {
			$("#soundBox").css("display","none");
			flag=false;
		}
	})
    
    //分享
	$(".share").mouseover(function(){
		$(".shareBox").css("display","block");
	})

	$(".share").mouseout(function(){
		$(".shareBox").css("display","none");
	})

	//二维码

	$(".ewm").mouseover(function(){
		$(".ewmBox").css("display","block");
	})

	$(".ewm").mouseout(function(){
		$(".ewmBox").css("display","none");
	})
