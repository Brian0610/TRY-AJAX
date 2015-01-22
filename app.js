$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var myScript = 'ajax/script.js'; 

	

	$('button').click(function(){
		$('.results')
			.html(preload); 
			$.getScript(
				myScript, 
				function(){
					$('.results').html(myScript); 
				}
			); 
	}); 

}); 