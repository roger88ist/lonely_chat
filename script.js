$(document).ready(function(){
    
	$("#new-message-button").on("click", function(){
		var time = (new Date);
		var h = time.getHours();
		var m = (time.getMinutes()<10?'0':'') + time.getMinutes()
		var str = h + ":" + m
        var msg = $("#new-message-body").val();
    	// alert(msg);
    	$(".chat").append('<ol id="conversation">' + '<li class="message">' + '<a class="delete" href="#">Delete</a>' + '<h3 class="author">Me</h3>' + '<p class="message-body">' + msg + '</p>' + '<span class="timestamp">' + str + '</span>' + '</li>' + '</ol>');
    	$('#new-message-body').val("");
    });


});