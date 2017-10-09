(function () {

var $carousel = $('.carousel'),
	$carouselCellLink = $('.carousel-cell a');

$carousel.flickity({
  imagesLoaded: true,
  adaptiveHeight: true,
  resize: true,
  autoPlay: true,
  wrapAround: true
});

$carouselCellLink.on('click', function () {
	alert("Clicking thsi would take you to the \""+ $(this).attr("title")+ "\" project.");
})


	
})();