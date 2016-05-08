
$(document).ready(function(){

	function timefy() {
		var time = (new Date);
		var h = time.getHours();
		var m = (time.getMinutes()<10?'0':'') + time.getMinutes();
		var answer = h + ":" + m;
		return answer;
	}

	function send() {
        var msg = $("#new-message-body").val();
    	$(".chat").append('<ol id="conversation">' + '<li class="message">' + '<a class="delete" href="#">Delete</a>' + '<h3 class="author">Me</h3>' + '<p class="message-body">' + msg + '</p>' + '<span class="timestamp">' + timefy() + '</span>' + '</li>' + '</ol>');
    	$('#new-message-body').val("");
	}
    
	$("#new-message-button").on("click", send);

	// $("textarea").keypress(function (e) {
	// 	if (e.which == 13) {
	// 		send;
	// 		return false;
	// 	}
	// });

	// $("#conversation a").on("click", function(){
 //    	console.log("X was clicked");
 //    });

});