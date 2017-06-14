$(document).ready(function() {
	$('a[class*="-nav"]').click(function() {
		var classes = $(this).attr("class").split(' ');
		var content = "";
		var nav = "";
		for (i = 0; i < classes.length; i++) {
			if (classes[i].indexOf('-nav') != -1) {
				nav = '.' + classes[i];
				content = '#' + classes[i].substr(0, classes[i].length - 4) + '-content';
			}
			if (classes[i].indexOf('active-menu') != -1) { return; }
		}
		if (content) {
  		$('.active-menu').removeClass('active-menu');
  		$(nav).addClass('active-menu');
	    $('.active-content').fadeOut(function() {
	  		$('.active-content').removeClass('active-content');
	    	$(content).addClass('active-content');
	    	$(content).fadeIn(function() {
	    		$(content).addClass('active-content');
	    	});
	    });
		}
	});

	// var start_rotating = function(i, length) {
	// 	logo = $('.logo-skills-' + (i + 1)).first();
	// 	logo.addClass('rotating');
	// 	logo.fadeIn();
	// 	if (i < length) {
	// 		setTimeout(start_rotating.bind(null, i + 1, length), 2000);
	// 	}
	// }
	// var logo_skills_number = $('#skills-circle img').size();
	// setTimeout(start_rotating.bind(null, 0, logo_skills_number), 0);
});