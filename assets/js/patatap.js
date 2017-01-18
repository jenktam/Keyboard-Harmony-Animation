// Remove hint text after first key clicked
$("body").on("keypress", function(e) {
	$("#hint").fadeOut(1000, function() {
		$(this).remove();
	});
});