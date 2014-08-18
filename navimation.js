// Navimated by Caleb Jessie

var main = function(){

	// toggle navimation
	function toggleNav() {
		// if($('nav').css("width") == "0px") {
		// 	$('.navimated-header div').stop(true).animate({
		// 		height: "170px"
		// 	}, 300).queue(function(){
		// 		$('nav').stop(true).animate({
		// 			width: "85px"
		// 		}, 300).queue(function(){
		// 			$('nav ul').show(250);
		// 			$(this).dequeue();
		// 		});
		// 		$(this).dequeue();
		// 	});
		// } else {
		// 	$('nav ul').hide(250);
		// 	$('nav').stop(true).animate({
		// 		width: "0px"
		// 	}, 300).queue(function(){
		// 		$('.navimated-header div').stop(true).animate({
		// 			height: "30px"
		// 		}, 300);
		// 		$(this).dequeue();
		// 	});
		// };
		if($('nav').css("display") == "none") {
			function menuIconAnimate() {
				$('.navimated-menu-icon:before').animate({
					margin-top: 0
				});
				$('.navimated-menu-icon:after').animate({
					margin-top: 0
				});
				$('.navimated-menu-icon').animate({
					-webkit-transform: "45deg",
					-moz-transform:    "45deg",
					-ms-transform:     "45deg",
					-o-transform:      "45deg",
					transform:         "45deg"
				});
			};
			$('nav').show();
			$('nav').animate({
				opacity: "1",
				top: "30px"
			}, 250);
		} else {
			$('nav').animate({
				opacity: "0",
				top: "20px"
			}, 250).queue(function(){
				$('nav').hide();
				$(this).dequeue();
			});
		}
	};

	// $('nav ul').hide();
	$('.navimated-menu').click(toggleNav);
};

$(document).ready(main);