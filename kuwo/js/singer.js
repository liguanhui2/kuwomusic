//歌手
$(".page a").not(".noprev").not(".next").click(function() {
	$(".page a").removeClass("current");
	$(this).addClass("current");
});

var topSelect = document.getElementsByClassName("topSelect")[0];
var aList = topSelect.getElementsByTagName("a");
for(var i = 0; i < aList.length; i++) {
	aList[0].onclick = function() {
		this.className = "hot fl active";
		var index = 27;
		for(var m = 1; m < index; m++) {
			aList[m].className = "select";
		}
	}

	aList[i].onclick = function() {
		var index = 27;
		for(var j = 1; j < index; j++) {
			aList[0].className = "hot fl";
			aList[j].className = "select";
			this.className = "select active";
		}
	}
}

$(".leftNav a").click(function() {
	$(".leftNav a").removeClass("active");
	$(this).addClass("active");
	$(".leftNav span").removeClass("activeline");
	$(this).parents(".area").find(".newlist");
	$(this).find("leftNav span").addClass("activeline");
});