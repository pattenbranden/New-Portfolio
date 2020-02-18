$(document).ready(function() {
    showAboutMeRow()
});
function showAboutMeRow(){   
    $(".show-hide").hide();
    $("#about-me-row").show();
};
function showProjectsRow(){   
    $(".show-hide").hide();
    $("#projects-row").show();
};
function showContactsrow(){   
    $(".show-hide").hide();
    $("#contacts-row").show();
};
$('.nav-item').on('click', function () {
	$(".show-hide").hide()
	item = $(this).attr('data-show')
	console.log(item)
	$(item).show()
});