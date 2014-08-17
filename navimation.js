// Navimated by Caleb Jessie

var main = function(){
	// Declare navState closed
	var navState = "closed";
	
	// Open Navimation
	function openNav() {
		$('.navimated-header div').animate({
			height: "170px"
		}, 300, 'easeInOutQuart').queue(function(){
			$('nav').animate({
				width: "85px"
			}, 300, 'easeInOutQuart').queue(function(){
				$('nav ul').show(250);
				$(this).dequeue();
			});
			$(this).dequeue();
		});
		navState = "open"
	};
	// Close Navimation
	function closeNav() {
		$('nav ul').hide(250);
		$('nav').animate({
			width: "0px"
		}, 300, 'easeInOutQuart').queue(function(){
			$('navimated-header div').animate({
				height: "0px"
			}, 300, 'easeInOutQuart');
			$(this).dequeue();
		});
		navState = "closed";
	}

	$('nav ul').hide();
	if (navState == "closed") {
		$('.navimated-sandwich').click(openNav);
	} 
	if (navState == "open") {
		$('.navimated-sandwich').click(closeNav);
	}
	console.log(navState);
};

$(document).ready(main);