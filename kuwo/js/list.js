
		$(document).ready(function() {
			$("#moregg").mouseover(function() {
				$("#moreget").show();
			}).mouseout(function() {
				$("#moreget").hide();
			});
		});

		$(document).ready(function() {
			$("#loginBtn").mouseover(function() {
				$(".loginMenu").show();
			}).mouseout(function() {
				$(".loginMenu").hide();
			});
		});

		$(document).ready(function() {
			$("#bang_navbar_world").click(function() {
				$("#bang_navbar_world2").toggle();
			});
		});

		$(document).ready(function() {
			$("#bang_navbar_class").click(function() {
				$("#bang_navbar_class2").toggle();
			});
		});

		$(document).ready(function() {
			$("#bang_navbar_special").click(function() {
				$("#bang_navbar_special2").toggle();
			});
		});

		//播放器
		var mymusic = document.getElementById("mymusic");
		var playmusic = document.getElementById("wp_playBtn");
		playmusic.onclick = function() {
			if(mymusic.paused) {
				mymusic.play();

				this.className = "zan";

			} else {
				mymusic.pause();
				this.className = "play";
			}
		}

		var prevmusic = document.getElementById("wp_playPreBtn");
		var nextmusic = document.getElementById("wp_playNextBtn");
		var musicindex = 0;
		prevmusic.onclick = function() {
			if(musicindex == 0) {
				mymusic.src = "img/1.mp3";
				mymusic.play();
				musicindex = 1;
			} else if(musicindex == 1) {
				mymusic.src = "img/2.mp3"
				mymusic.play();
				musicindex = 2
			} else {
				mymusic.src = "img/3.mp3"
				musicindex = 0;
			}
		}

		nextmusic.onclick = function() {
			if(musicindex == 0) {
				mymusic.src = "img/1.mp3";
				mymusic.play();
				musicindex = 1;
			} else if(musicindex == 1) {
				mymusic.src = "img/2.mp3"
				mymusic.play();
				musicindex = 2
			} else {
				mymusic.src = "img/3.mp3"
				musicindex = 0;
			}
		}

		var musicflag = document.getElementById("wp_processBtn");
		var musictime = document.getElementById("wp_playTime");
		setInterval(function() {
			var m = parseInt(mymusic.currentTime / 60);
			var s = parseInt(mymusic.currentTime % 60);
			if(m < 10) {
				m = "0" + m;
			}
			if(s < 10) {
				s = "0" + s;
			}
			musictime.innerHTML = m + ":" + s;
			var flag = ((mymusic.currentTime / mymusic.duration) * 100);
			musicflag.style.left = flag + "px";
		}, 1000)

		var pinzhi = document.getElementById("pinzhi");
		var changePz = document.getElementsByClassName("changePz")[0];
		var changeflag = 0;
		changePz.onclick = function() {
			if(changeflag == 0) {
				this.className = "";
				changeflag = 1;
			} else {
				this.className = "changePz";
				changeflag = 0;
			}
		}

		var musicmute = document.getElementById("wp_mute");
		var soundBox = document.getElementById("soundBox");
		var wp_volBar = document.getElementById("wp_volBar");
		var wp_volBtn = document.getElementById("wp_volBtn");

		var muteindex = 0;

		musicmute.onclick = function() {
			if(muteindex == 0) {
				musicmute.style.background = "url(img/icon.png) no-repeat -310px -113px";
				soundBox.style.display = "block";
				wp_volBar.style.height = "0"
				wp_volBtn.style.height = "0"
				mymusic.muted = true;
				muteindex = 1;
			} else {
				musicmute.style.background = "url(img/icon.png) no-repeat -263px -113px";
				soundBox.style.display = "none";
				muteindex = 0;
				mymusic.muted = false;
			}
		}

		var mode = document.getElementById("mode");
		var modeindex = 0;
		mode.onclick = function() {

			if(modeindex == 0) {
				this.className = "single";
				this.title = "单曲循环";
				modeindex = 1;
			} else if(modeindex == 1) {
				this.className = "order";
				this.title = "顺序播放";
				modeindex = 2;
			} else if(modeindex == 2) {
				this.className = "random";
				this.title = "随机播放";
				modeindex = 3;
			} else {
				this.className = "loop";
				this.title = "列表循环";
				modeindex = 0;
			}
		}

		var playlist = document.getElementById("playList");
		var menu = document.getElementsByClassName("menu")[0];
		var closelist = document.getElementById("closelist");

		var playlistflag = 0;
		menu.onclick = function() {

			if(playlistflag == 0) {
				playlist.style.visibility = "visible"
				playlistflag = 1;
			} else {
				playlist.style.visibility = "hidden";
				playlistflag = 0;
			}
		}

		closelist.onclick = function() {
			playlist.style.visibility = "hidden";
		}

		var share = document.getElementsByClassName("share")[0];
		var shareBox = document.getElementsByClassName("shareBox")[0];
		share.onmouseover = function() {
			shareBox.style.display = "block";
		}

		share.onmouseout = function() {
			shareBox.style.display = "none";
		}

		var ewm = document.getElementsByClassName("ewm")[0];
		var ewmBox = document.getElementsByClassName("ewmBox")[0];
		ewm.onmouseover = function() {
			ewmBox.style.display = "block";
		}

		ewm.onmouseout = function() {
			ewmBox.style.display = "none";
		}
		
		//登陆界面
		var userBox = document.getElementsByClassName("userBox")[0];
		var loginMenu = document.getElementsByClassName("loginMenu")[0];
		var closeWindow = document.getElementsByClassName("closeWindow")[0];
		var loginBox = document.getElementsByClassName("loginBox")[0];
		userBox.onmouseover = function() {
			loginMenu.style = "display: block";
		}
		userBox.onmouseout = function() {
			loginMenu.style = "display: none";
		}
		closeWindow.onclick = function() {
			loginBox.style = "display: none";
		}
		userBox.onclick = function() {
			loginBox.style = "display: block";
		}