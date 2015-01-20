$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var loadURL = 'ajax/u2.json'; 

	$('button').click(function(){
		$('.results').html(preload).load(loadURL).append("<p>" + u2[0].name + " is the " + u2.[0].job + " vocalist for U2.</p>");  
	}); 

}); 