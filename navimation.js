// Navimated by Caleb Jessie

var main = function(){

	// toggle navimation
	function toggleNav() {
		if($('nav').css("width") == "0px") {
			$('.navimated-header div').stop(true).animate({
				height: "170px"
			}, 300).queue(function(){
				$('nav').animate({
					width: "85px"
				}, 300).queue(function(){
					$('nav ul').show(250);
					$(this).dequeue();
				});
				$(this).dequeue();
			});
		} else {
			$('nav ul').hide(250);
			$('nav').animate({
				width: "0px"
			}, 300).queue(function(){
				$('.navimated-header div').animate({
					height: "30px"
				}, 300);
				$(this).dequeue();
			});
		};
	};

	$('nav ul').hide();
	$('.navimated-sandwich').click(toggleNav);
};

$(document).ready(main);