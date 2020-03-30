particlesJS('particles-js-Q1A', true,
  {
    "simulation": {
      "scenario": "Simulation 1a"
    }
  }
);

particlesJS('particles-js-Q1B', true,
{
  "simulation": {
    "scenario": "Simulation 1b"
  }
});

// Pause simulation once loaded
for (var i = pJSDom.length - 1; i >= 0; i--) {
  pJSDom[i].pJS.fn.custom.pause();
}
