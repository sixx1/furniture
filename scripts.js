var popUpOn = false;

function exit() { 
	$("body").css("overflow-y", "scroll");
	$("#pageWrap").css("overflow-y", "initial");
	 $("#FSWrap").css("display", "none");
	 $("#projectFS").css("display", "none");
	 $("#picFS img").remove();
	 $("#fromH h2").remove();
	 $("#fromP p").remove();
	 popUpOn = false;
}

$(".viewP").click( function () {
	if (popUpOn) exit();
	var temp;
	console.log($(window).scrollTop());
	if ($(window).width() > 800) temp=$(window).scrollTop() + 50;
	else temp = $(window).scrollTop();
	$("#FSWrap").css("display", "block");
	$("body").css("overflow-y", "hidden");
	$("#pageWrap").css("overflow-y", "hidden");
	$("#projectFS").css("top", temp);
	$("#projectFS").css("display", "block").hide();
	$("#projectFS").fadeIn(500);
	popUpOn = true;
});

$("#exitFS").click( function() {
	exit();
});

$(document).keyup(function(e) {
	if(e.keyCode === 27)
		exit();
});

$(".like img").click( function() {
	var temp;
	if ($(this).attr("src") == "img/srce.png") {
		$(this).attr("src", "img/srcered.png");
		$(this).hide().fadeIn(500);
		temp = parseInt($(this).next().text(),10);
		temp +=1;
		$(this).next().text("+"+temp);	
	}
	else { 
		$(this).attr("src", "img/srce.png");
		temp = parseInt($(this).next().text(),10);
		temp -=1;
		$(this).next().text("+"+temp);
	}
});

$(".viewP").click( function() {
	console.log($(this).parent().css("background-image"));
	var $str = $(this).parent().css("background-image").replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'').replace(".png", "_f.png");
	$str = "<img src=\"" + $str + "\" />";
	$("#picFS").append($str);
	$str = $(this).prev().clone();
	$("#fromP").append($str);
	$str = $(this).prev().prev().clone();
	$("#fromH").append($str);
});

var menuUp = false;

$("#menu").click( function() {
	if (!menuUp) {
	$("#menuList").css("width", "230px");
	setTimeout(function() {
    $("#close").css("display", "block");
    menuUp = true;
	}, 750);};
});
$("#menuList li").click( function() {
	var kojiDiv = $(this).html();
	if (kojiDiv === "projects") kojiDiv = "navProj";
	if (kojiDiv === "contact" && $(window).width() < 800) {
		$('html, body').animate({
        scrollTop: 10000
    }, 1600);
	}
	else {
	    $('html, body').animate({
	        scrollTop: $("#"+kojiDiv).offset().top
	    }, 1600);
	    if (menuUp) {
		$("#menuList").css("width", "0");
		$("#close").css("display", "none");	
		}
	}
	setTimeout( function() {
		menuUp = false; }, 500);
})
$("#close").click (function() {
	if (menuUp) {
	$("#menuList").css("width", "0");
	$("#close").css("display", "none");
	setTimeout( function() {
	menuUp = false; }, 500);
	}
});

$(".blockP").click ( function() {
	var temp = $(this).children().attr("src");
	console.log(temp);
	$(this).children().attr("src", $("#picFS").children().attr("src")); 
	$("#picFS").children().attr("src", temp);
	console.log(temp);
});
var x = 0;
$("#FSWrap").on('touchstart', '#projectFS', function(e) {
	if ($(window).width() < 800) {
		x = e.originalEvent.touches[0].pageX;
	}
})
$("#FSWrap").on('touchend', '#projectFS', function(e) {
	if ($(window).width() < 800) {
		var distance = x - e.originalEvent.changedTouches[0].pageX;
		if (distance < -20) {
			var temp = $("#picFS").children().attr("src");
			$("#picFS").children().attr("src", $("#blockImg2").attr("src"));
			$("#blockImg2").attr("src", $("#blockImg1").attr("src"));
			$("#blockImg1").attr("src", temp);
		}
		if (distance > 20) {
			var temp = $("#picFS").children().attr("src");
			$("#picFS").children().attr("src", $("#blockImg1").attr("src"));
			$("#blockImg1").attr("src", $("#blockImg2").attr("src"));
			$("#blockImg2").attr("src", temp);
		}
	}
})
$("#blockRightArrow").click ( function() {
	var temp = $("#picFS").children().attr("src");
	$("#picFS").children().attr("src", $("#blockImg2").attr("src"));
	$("#blockImg2").attr("src", $("#blockImg1").attr("src"));
	$("#blockImg1").attr("src", temp);
});

$("#blockLeftArrow").click ( function() {
	var temp = $("#picFS").children().attr("src");
	$("#picFS").children().attr("src", $("#blockImg1").attr("src"));
	$("#blockImg1").attr("src", $("#blockImg2").attr("src"));
	$("#blockImg2").attr("src", temp);
});