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
  return (($(window).scrollTop() + $(window).height()) > $(elem).offset().top + (3 * $(elem).parent().height()/4))
          && ( $(window).scrollTop() < $(elem).offset().top + $(elem).parent().height()/2 ) ;
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
