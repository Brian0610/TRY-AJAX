$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	$('button').click(function(){
		$('.results').html(preload);  
	}); 

}); 