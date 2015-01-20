$(document).ready(function(){
	
	$.ajaxSetup({
		cache: false
	}); 

	var preload = '<img src="images/preloader.gif" alt="loading..." />'; 

	var loadURL = 'ajax/statement.txt'; 

	$('button').click(function(){
		$('.results').html(preload).load(loadURL);  
	}); 

}); 