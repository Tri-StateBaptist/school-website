$(document).ready(function() {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev, next today',
			center: 'title',
			right: 'month, basicWeek, basicDay'
		},

		events: [
			{
				title: 'Teen Advent',
				start: '2016-01-23T18:00:00',
				allDay: false,
				description: 'Come join us for a thanksgiving dinner in the rec building',
			},
		],

		eventRender: function(evt, el) {
		},

		eventClick: function(evt, jsevt, view) {
			$('#eventpopup .title').html(evt.title);
			$('#eventpopup .description').html(evt.description);
			location.hash = '#eventpopup';
		},

		eventMouseover: function(evt, jsevt, view) {
			$(this).fadeTo(50, 0.8);
		},

		eventMouseout: function(evt, jsevt, view) {
			$(this).fadeTo(50, 1);
		},
	})
});
