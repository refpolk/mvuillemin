(function(){

	var loadedImages = [];
	
	function loadImage(imageId) {
		
		if (loadedImages.indexOf(imageId) < 0) {
			loadedImages.push(imageId);
			$(imageId).attr('src', $(imageId).attr('data-src'));
		}
	}
		
	$('.nav a').on('click', function(){

		var sectionId = '#' + $(this).attr('data-section');
		
		$('.nav a').attr('class', '');
		$(this).attr('class', 'active');

			
		$('.section').hide();
		$(sectionId).show();
		$(sectionId + ' img').hide();
		$(sectionId + ' img').first().show();
		
		loadImage('#' + $(sectionId + ' img').first().attr('id'));

		return false;
	});
	
	$('.nav-gallery a').on('click', function(){

		if ($(this).attr('data-target') !== '') {

			var sectionId = '#' + $(this).closest('.section').attr('id');
			var targetId = '#' + $(this).attr('data-target');
			var targetType = $(this).attr('data-target').split("-")[0];			
			var targetNumber = $(this).attr('data-target').split("-")[1];
			
			console.log(sectionId);
			console.log(targetId);			
						
			$(sectionId + ' img').hide();

			loadImage(targetId);
			$(targetId).show();	
			
			$(sectionId + ' span').text(targetNumber);
			
			$(sectionId + ' .prev').attr('data-target', $(targetId).parent().prev('a').find('img').attr('id'));
			$(sectionId + ' .next').attr('data-target', $(targetId).parent().next('a').find('img').attr('id'));
		}

		return false;
	});
	
	$('#section-1 img').hide();
	$('#section-1 img').first().show();	
	
})();