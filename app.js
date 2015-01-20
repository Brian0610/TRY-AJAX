$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var loadURL = 'ajax/u2.json'; 

	var u2 = {
		name: "Bono", 
		job: "vocalist"
	}; 

	$('button').click(function(){
		//$('.results').html(preload).load(loadURL); 
		$('.results').append("<p>" + u2.name + " is the " + u2.job + " for U2.</p>");  
	}); 

}); 