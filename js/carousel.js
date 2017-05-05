$(document).ready(function(){
	var carouselList = $("#carousel ul"),
	interval = setInterval(changeLeftSlide, 3000);
	
	function moveLeftSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem); //tu tworzy sie pętla
		carouselList.css({marginLeft: 0});
	};
	function changeLeftSlide(){
		carouselList.animate({'marginLeft':-800}, 500, moveLeftSlide);			
	};	

	function moveRightSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem); //tu tworzy sie pętla
		carouselList.css({marginLeft: 0});
	};
	function changeRightSlide(){
		carouselList.animate({'marginLeft':-800}, 500, moveRightSlide);			
	};	

	function resetInterval(){
		clearInterval(interval);
	};

	$(".fa-chevron-left").on("click", function(){
		moveLeftSlide();
		resetInterval();
	});

	$(".fa-chevron-right").on("click", function(){
		moveRightSlide();
		resetInterval();
	});
});