
$(".submit").on("click",function(){

	var newReservation = {
		customerName: $('#reserve_name').val().trim(),
		phoneNumber: $('#reserve_phone').val().trim(),
		customerEmail: $('#reserve_email').val().trim(),
		customerID: $('#reserve_email').val().trim()

	};

	console.log(newReservation);

	var currentURL = window.location.origin;

	$.post(currentURL + "/api/tables", newReservation,
	function(data){

		if(data == true){
			alert("Yay! You are officially booked!")
		}

		if(data == false){
			alert("Sorry you are on the wait list")
		}

		$('#reserve_name').val("");
		$('#reserve_phone').val("");
		$('#reserve_email').val("");
		$('#reserve_uniqueID').val("");
	});
    return false;
});

