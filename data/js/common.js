$(document).ready(function() {

  //resize header for viewport

  heightResize("header");

  function heightResize(selector){
    var sel = document.querySelector(selector);
    sel.style.height = window.innerHeight+"px";
  };

	$(".btn_head").addClass("animated fadeIn");
	$(".main_nav").addClass("animated fadeIn");
	$("#service_first .fa-cogs").animated("fadeIn", "100%");
	$("#service_second .fa-desktop").animated("fadeIn", "100%");
	$(".portrait").animated("zoomIn", "80%");
	$(".name_field").animated("fadeInLeft", "80%");
	$(".mail_field").animated("fadeInLeft", "80%");
	$(".text_field").animated("fadeInLeft", "85%");
	$(".form_button").animated("fadeInUp", "90%");

	$("#head a").mPageScroll2id({
    offset:-50,
   	scrollingEasing: "easeInOutCirc"
});
	$("#scroll_nav a").mPageScroll2id({
});
	$("#mob_menu a").mPageScroll2id({
});

	$(function () { $("input,select,textarea").jqBootstrapValidation(); } );


	
	$("#scroll_nav").hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll_nav').fadeIn();
			} else {
				$('#scroll_nav').fadeOut();
			}});
		});

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > $(window).height()) {
				$("#mob_btn").css("opacity", "1");
			} else {
				$("#mob_btn").css("opacity", "0");
			}});
		});

	$("#mob_menu").mmenu({
			extensions: ["theme-dark"],
        	onClick: {
        		setSelected: false
        	}
      }, {
         // configuration
         offCanvas: {
            pageNodetype: "section"
         }
      });

     var API = $("#mob_menu").data( "mmenu" );
      
     $("#mob_btn").click(function() {
         API.open();
      });


});

$(window).load(function() {
$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
}); 


