$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})


/*
	+=======
	| Load Iframe
	*/
function loadIframeSimulator(id, aTag){
	newHtmlContent = "";
	divIframe = $(aTag).parent().next()[0];

	if (divIframe.innerHTML != ""){ // Clear view
		newHtmlContent = "";

		$(divIframe).removeAttr("class");
		$(divIframe).addClass("iframeContainer");
	}else{ // Set view
		newHtmlContent = '<iframe class="embed-responsive-item" src="/simulations/CoVprehension_Confinement_Q'+id+'.html"></iframe>';
		
		$(divIframe).removeAttr("class");
		$(divIframe).addClass("embed-responsive");
		$(divIframe).addClass("embed-responsive-4by3");
	}

	// Set new content
	$(divIframe).html(newHtmlContent);
}

/*
	+=======
	|  JS Simulation  |
               =======+
               */

/*
	+=======
	| Pause&Play
	*/

// Check if the double chart is in view
function elementInView(elem){
	return (($(window).scrollTop() + $(window).height()) > ($(elem).offset().top +  $(elem).height()/4))
			&& ( $(window).scrollTop() < ($(elem).offset().top + (3 * $(elem).height()/4)) );
};

// Pause&Play JS simulation if in view or not
$(window).scroll(function(){

	for (var i = pJSDom.length - 1; i >= 0; i--) {
		if (elementInView($(pJSDom[i].pJS.canvas.el).parent())) {
			pJSDom[i].pJS.fn.custom.play();
		} else {
			pJSDom[i].pJS.fn.custom.pause();
		}
	}

});


/*
	+=======
	| Restart
	*/
	function restartSimulation(tag_id, with_chart, params){

	/*
		Remove simulation from pJSDom
		*/
		for (var i = pJSDom.length - 1; i >= 0; i--) {
			if ( $(pJSDom[i].pJS.canvas.el).parent().attr('id') == tag_id ){
				pJSDom[i].pJS.fn.vendors.destroypJS();
				break;
			}
		}

	// Remove HTML elements from old simulations
	$("#" + tag_id).html("");

	params.simulation.startPlay = true;
	// Launch new one
	particlesJS(tag_id, with_chart, params);
}

function playPause(tag_id){
	for (var i = pJSDom.length - 1; i >= 0; i--) {
		if ( $(pJSDom[i].pJS.canvas.el).parent().attr('id') == tag_id ){
			if(pJSDom[i].pJS.simulation.isPlay == true) {
				pJSDom[i].pJS.fn.custom.pause();
			} else {
				pJSDom[i].pJS.fn.custom.play();
			}
			break;
		}
	}
}
