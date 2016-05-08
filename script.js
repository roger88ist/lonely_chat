$(document).ready(function(){
    
	$("#new-message-button").on("click", function(){
        msg = $("#new-message-body").val();
    	// alert(msg);
    	$("#conversation").append(msg);
    });


});