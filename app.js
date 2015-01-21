$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var loadURL = 'ajax/grootbio.text'; 

	

	$('button').click(function(){
		$('.results').html(preload).load(loadURL + " #groot"); 		
	}); 

}); 