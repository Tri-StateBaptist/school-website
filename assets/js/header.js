---
---


$(window).load(function() {
	var offset = $("#navbar").offset();

	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$("#navbar").css("position", "fixed");
			$("#navbar header").css('background', 'rgba(0, 0, 0, 0)');
		} else {
			$("#navbar").css("position", "relative");
			$("#navbar header").css('background', 'rgba(27, 27, 27, 0.75)');
		}
	});
});
