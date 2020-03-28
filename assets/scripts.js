$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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
  return (($(window).scrollTop() + $(window).height()) > $(elem).offset().top + ( $(elem).parent().height()/2))
          && ( $(window).scrollTop() < $(elem).offset().top + $(elem).parent().height()/3 ) ;
};

// Pause&Play JS simulation if in view or not
$(window).scroll(function(){

  for (var i = pJSDom.length - 1; i >= 0; i--) {
    if (elementInView($(pJSDom[i].pJS.canvas.el))) {
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
function restartButton(tag_id, params){
	if ( $( "#"+tag_id ).find("a.btn").length == 0 ){
		$( "#"+tag_id ).append( '<a class="btn btn-info" style="color: white;" onclick=\'restartSimulation("' + tag_id + '", ' + JSON.stringify(params) + ')\'><i class="fas fa-redo-alt"></i> Recommencer la simulation</a>' );
	}else{
		console.error( "Already a tag in #" + tag_id );
	}
}
function restartSimulation(tag_id, params){

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

	// Launch new one
	particlesJS(tag_id, params);
}
