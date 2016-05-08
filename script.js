
$(document).ready(function(){
	var array = ["I", "Myself", "Me"];

	function identify() {
		var n = ($('ol').length) % 3;
		var result = array[n];
		console.log("n = " + n);
		console.log("result = " + result);
		return result;
	}

	function timefy() {
		var time = (new Date);
		var h = time.getHours();
		var m = (time.getMinutes()<10?'0':'') + time.getMinutes();
		var answer = h + ":" + m;
		return answer;
	}

	function send() {
        var msg = $("#new-message-body").val();
    	$(".chat").append('<ol id="conversation">' + '<li class="message">' + '<a class="delete" href="#">Delete</a>' + '<h3 class="author">' + identify() + '</h3>' + '<p class="message-body">' + msg + '</p>' + '<span class="timestamp">' + timefy() + '</span>' + '</li>' + '</ol>');
    	$('#new-message-body').val("");
	}
    
	$("#new-message-button").on("click", send);

	$("#new-message-body").keypress(function (e) {
		if (e.which == 13) {
			send();
			return false;
		}
	});

	// $("#conversation a").on("click", function(){
 //    	console.log("X was clicked");
 //    });

});