//$(document).ready(function() {   //le dice al documento que hacer cuando la pagina termina de cargar. // .ready es un evento
//	$("h1").click(function() { //este es el target, elemento del html o .clase de css al que se le da la orden    // .click es un evento
//		$(this).css("color", "#ff0000");					//this es una instancia del target // .css Funcion (propiedad, valor) con dos parametros.
//	});
//});

$(document).ready(function() {
	/* Adding Sticky Navigation */
	$(".js--about-section").waypoint(function(direction) {
		if(direction=="down"){
			$("nav").addClass('sticky-nav');
		}
		else {
			$("nav").removeClass('sticky-nav');
		}
	});  //direction es un parametro que puede recibir DOWN (scrolleando de arriba a abajo) o UP (de abajo a arriba)

/* Scrolling to contact section */


/* Smooth scroling of navigation */

/*Animation on Scroll */
	$(".js--about-section").waypoint(function(direction) {
		$(".js--about-box").addClass('animate__animated animate__fadeIn')
	}, {
		offset:'75%'
	});

	$(".services-section").waypoint(function(direction) {
		$(".js--service-box").addClass('animate__animated animate__zoomIn')
	}, {
		offset:'50%'
	});

	$(".packages-section").waypoint(function(direction) {
		$(".js--enterprise").addClass('animate__animated animate__pulse')
	});

	$(".js--scroll-to-contac").click(function() {
		$("html, body").animate({scrollTop:$('.js--contact').offset().top},1000);
	})

});

