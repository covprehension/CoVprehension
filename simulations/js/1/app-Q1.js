particlesJS('particles-js-Q1A',
  {
    "simulation": {
      "tick": 0,
      "walking_angle": 50,
      "transmission_distance": 40,
      "probability_transmission": 0.3,
      "speed": 3,
      "number_particles": 100,
      "scenario": "Simulation 1a"
    }
  }
);

particlesJS('particles-js-Q1B',
{
  "simulation": {
//       "scenario": Window.LABEL_SIMULATION_2A
    "scenario": "Simulation 1b"
  }
});

for (var i = pJSDom.length - 1; i >= 0; i--) {
  pJSDom[i].pJS.fn.custom.pause();
}

function elementInView(elem){
  return (($(window).scrollTop() + $(window).height()) > $(elem).offset().top + (3 * $(elem).height()/4))
          && ( $(window).scrollTop() < $(elem).offset().top + $(elem).height()/2 ) ;
};

$(window).scroll(function(){

  for (var i = pJSDom.length - 1; i >= 0; i--) {
    if (elementInView($(pJSDom[i].pJS.canvas.el))) {
      pJSDom[i].pJS.fn.custom.play();
    } else {
      pJSDom[i].pJS.fn.custom.pause();
    }
  }

});