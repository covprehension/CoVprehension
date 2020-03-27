particlesJS('particles-js-Q1A', true,
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

particlesJS('particles-js-Q1B', true,
{
  "simulation": {
    "tick": 0,
    "walking_angle": 50,
    "transmission_distance": 40,
    "probability_transmission": 0.3,
    "speed": 3,
    "number_particles": 1000,
    "scenario": "Simulation 1b"
  }
});

// Pause simulation once loaded
for (var i = pJSDom.length - 1; i >= 0; i--) {
  pJSDom[i].pJS.fn.custom.pause();
}
