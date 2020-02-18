$(document).ready(function() {
    showAboutMeRow()
    // getCookie()
    // checkCookie
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
// function setCookie(BPattenPortfolioIndex, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "d"+ d.toUTCString();
//     document.cookie = BPattenPortfolioIndex + "=" + cvalue + ";" + expires + ";path=/";
//   }
//   function getCookie(BPattenPortfolioIndex) {
//     var name = BPattenPortfolioIndex + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for(var i = 0; i <ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }
//   function checkCookie() {
//     var username = getCookie("username");
//     if (username != "") {
//      alert("Welcome again " + username);
//     } else {
//       username = prompt("Please enter your name:", "");
//       if (username != "" && username != null) {
//         setCookie("username", username, 365);
//       }
//     }
//   }