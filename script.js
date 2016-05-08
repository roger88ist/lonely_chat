$(document).ready(function(){
    
	$("#new-message-button").on("click", function(){
         var msg = $("#new-message-body").val();
    	// alert(msg);
    	$(".chat").append('<ol id="conversation">' + '<li class="message">' + '<a class="delete" href="#">Delete</a>' + '<h3 class="author">Me</h3>' + '<p class="message-body">' + msg + '</p>' + '<span class="timestamp">01:12</span>' + '</li>' + '</ol>');
    	$('#new-message-body').val("");
    });


});