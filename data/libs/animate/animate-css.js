//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
//Author URL: http://webdesign-master.ru
(function($) {
		$.fn.animated = function(inEffect, myOffset) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).addClass(inEffect).css("opacity", "1");
						};
				}, {
						offset: myOffset
				}).waypoint(function(dir) {
						if (dir === "up") {
								$(this).removeClass(inEffect).css("opacity", "0");
						} 
				}, {
						offset: "100%"
				});
		};
})(jQuery);