$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var jsonURL = 'ajax/bono.json'; 

	

	$('button').click(function(){
		$('.results')
			.html(preload); 
			$.getJSON(
				jsonURL, 
				null, 
				function(){
					var singer = "Bono\'s real name is: \n" + bono.name; 
					$('.results').html(singer); 
				}
			); 
	}); 

}); 