//
// Authors: Arthur Brugiere and Benoit Gaudou
//
// This file took as basis the particles.js library.
// Authors added the behavior of the particles coming from a Netlogo model.

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

const COLOR_S 						= "#2CD13B";
const COLOR_INFECTED 				= "#D63239";
const COLOR_INFECTED_NO_SYMPTOM 	= '#2D8DBE';
const COLOR_INFECTED_FREE_RIDER 	= '#8C8C8C';

var pJS = function(tag_id, with_chart, params){
	/*
	+============
	| DOM
	*/
	var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

	var nb_quarantine = 0;

	/*
	+============
	| Charts.js
	*/
	var chart_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el-chart');

	if(with_chart) {
		var chart_obj = new Chart(chart_el.getContext('2d'), {
			// The type of chart we want to create
			type: 'line',

			// The data for our dataset
			data: {
				labels: ['0'],
				datasets: [
				{
					label: LABEL_DATA_S,
					fill: false,
					backgroundColor: COLOR_S,
					borderColor: COLOR_S,
					radius: 1,
					data: []
				}]
			},

			// Configuration options go here
			options: {
				scales: {
					yAxes: [{
						gridLines: {
							drawOnChartArea: false
						},
						scaleLabel: {
							display: true,
							fontSize: 18,
							labelString: LABEL_NB_CAS
						}
					}],
					xAxes: [{
						gridLines: {
							drawOnChartArea: false
						},
						ticks: {
							maxTicksLimit: 10
						},
						scaleLabel: {
							display: true,
							fontSize: 18,
							labelString: LABEL_TIME
						}
					}]
				}
			}
		});
	}


	/* particles.js variables with default values */
	this.pJS = {
		canvas: {
			el: canvas_el,
			w: canvas_el.offsetWidth,
			h: canvas_el.offsetHeight
		},
		chart: {
			el: chart_obj
		},
		simulation: {
			tick: 0,
			nb_infected_initialisation: 1,
			walking_angle: 50,
			transmission_distance: 20,							// 1
			distanciation_distance: 75,							// 5
			Respect_Distanciation: 90,
			infected_avoidance_distance: 50,					// 2
			probability_transmission: 1,
			probability_transmission_unreported_infected: 1.0,
			rate_unreported_infections: 50,
			speed: 2.5,											// 0.5
			number_particles: 0,
			scenario: '',
			startPlay: false,
			isPlay: true
		},
		particles: {
			number: {
				value: 100,
				density: {
					enable: false,
					value_area: 800
				}
			},
			shape: {
				type: 'circle',
				stroke: {
					width: 0,
					color: '#ff0000'
				},
				polygon: {
					nb_sides: 5
				},
				image: {
					src: '',
					width: 100,
					height: 100
				}
			},
			opacity: {
				value: 0.6,
				random: false,
				anim: {
					enable: false,
					speed: 2,
					opacity_min: 0,
					sync: false
				}
			},
			size: {
				value: 7.5,
				random: false,
				anim: {
					enable: false,
					speed: 20,
					size_min: 0,
					sync: false
				}
			},
			array: []
		},
		retina_detect: false,
		fn: {
			interact: {},
			modes: {},
			vendors:{},
			netlogo:{},
			custom:{},
			_tempFn:{}
		},
		tmp: {}
	};

	var pJS = this.pJS;

	/* params settings */
	if(params){
		Object.deepExtend(pJS, params);
	}

	pJS.tmp.obj = {
		size_value: pJS.particles.size.value,
		size_anim_speed: pJS.particles.size.anim.speed,
	};

	pJS.fn.retinaInit = function(){

		if(pJS.retina_detect && window.devicePixelRatio > 1){
			pJS.canvas.pxratio = window.devicePixelRatio;
			pJS.tmp.retina = true;
		}
		else{
			pJS.canvas.pxratio = 1;
			pJS.tmp.retina = false;
		}

		pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
		pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

		pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
		pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
		// pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
		// pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
		// pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
		// pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
		// pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
		// pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
		// pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
	};

	/* ---------- pJS functions - canvas ------------ */

	pJS.fn.canvasInit = function(){
		pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
	};

	pJS.fn.canvasSize = function(){
		pJS.canvas.el.width = pJS.canvas.w;
		pJS.canvas.el.height = pJS.canvas.h;
	};

	pJS.fn.canvasPaint = function(){
		pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
	};

	pJS.fn.canvasClear = function(){
		pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
	};

	/* --------- pJS functions - particles ----------- */

	pJS.fn.particle = function(color, opacity, position){
		// Attributes of particles
		// radius
		// color
		// shape
		// opacity
		// x
		// y
		// heading
		// epidemic_state
		// quarantine
		// nb_contacts
		// respect_rules

		/* infectious state */
		/* 0 = sain     */
		/* 1 = infecté  */
		this.setEpidemicState(0);
		this.quarantine = false;

		this.respect_rules = true;

		this.nb_contacts = 0;
		this.nb_other_infected = 0;

		/* size */
		// this.radius = pJS.particles.size.value;

		this.radius = pJS.canvas.w * pJS.particles.size.value / 800;
		//this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
		//if(pJS.particles.size.anim.enable){
		//	this.size_status = false;
		//	this.vs = pJS.particles.size.anim.speed / 100;
		//	if(!pJS.particles.size.anim.sync){
		//		this.vs = this.vs * Math.random();
		//	}
		//}

		/* position */
		this.x = position ? position.x : Math.random() * pJS.canvas.w;
		this.y = position ? position.y : Math.random() * pJS.canvas.h;

		/* heading */
		this.heading = getRandomInt(360);

		/* check position  - into the canvas */
		if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
		else if(this.x < this.radius*2) this.x = this.x + this.radius;
		if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
		else if(this.y < this.radius*2) this.y = this.y + this.radius;

		/* opacity */
		this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
		if(pJS.particles.opacity.anim.enable){
			this.opacity_status = false;
			this.vo = pJS.particles.opacity.anim.speed / 100;
			if(!pJS.particles.opacity.anim.sync){
				this.vo = this.vo * Math.random();
			}
		}

		/* shape */
		this.shape = 'circle';
	}

	pJS.fn.particle.prototype.setColor = function(col) {
		my_color = {};
		my_color.value = col;
		my_color.rgb = hexToRgb(col);
		this.color = my_color;
	}

	pJS.fn.particle.prototype.draw = function() {
		var p = this;

//		if(p.radius_bubble != undefined){
//			var radius = p.radius_bubble;
//		}else{
			var radius = p.radius;
//		}

		if(p.opacity_bubble != undefined){
			var opacity = p.opacity_bubble;
		}else{
			var opacity = p.opacity;
		}

		if(p.color.rgb){
			var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
		}else{
			var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
		}

		pJS.canvas.ctx.fillStyle = color_value;
		pJS.canvas.ctx.beginPath();

		switch(p.shape){

			case 'circle':
			pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
			break;

			case 'square':
			pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
			break;

			case 'triangle':
			pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
			break;

			case 'polygon':
			pJS.fn.vendors.drawShape(
				pJS.canvas.ctx,
					p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
					p.y - radius / (2.66/3.5), // startY
					radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
					pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
					1 // sideCountDenominator
					);
			break;

			case 'star':
			pJS.fn.vendors.drawShape(
				pJS.canvas.ctx,
					p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
					p.y - radius / (2*2.66/3.5), // startY
					radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
					pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
					2 // sideCountDenominator
					);
			break;

			case 'image':

			function draw(){
				pJS.canvas.ctx.drawImage(
					img_obj,
					p.x-radius,
					p.y-radius,
					radius*2,
					radius*2 / p.img.ratio
					);
			}

			if(pJS.tmp.img_type == 'svg'){
				var img_obj = p.img.obj;
			}else{
				var img_obj = pJS.tmp.img_obj;
			}

			if(img_obj){
				draw();
			}

			break;

		}

		pJS.canvas.ctx.closePath();

		if(pJS.particles.shape.stroke.width > 0){
			pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
			pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
			pJS.canvas.ctx.stroke();
		}

		pJS.canvas.ctx.fill();
	}

	/*
		+============
		| NetLogo
	*/

	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.setup_globals = function() {
		if( (pJS.simulation.scenario == LABEL_SIMULATION_1B)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_2B)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_3C) ) {
			pJS.simulation.number_particles = 500;
		} else if( (pJS.simulation.scenario == LABEL_SIMULATION_3B) ) {
			pJS.simulation.number_particles = 400;
		} else {
			pJS.simulation.number_particles = 100;
		}

		if( pJS.simulation.scenario == LABEL_SIMULATION_3B) {
			pJS.simulation.walking_angle = 50
		} else {
			pJS.simulation.walking_angle = 50
		}


		if (pJS.simulation.scenario == LABEL_SIMULATION_3C) {
			pJS.simulation.rate_unreported_infections = 50;
			pJS.simulation.probability_transmission_unreported_infected = 1;
			pJS.simulation.wall = 50 * pJS.canvas.w / 800;
		}

		if(pJS.simulation.scenario == LABEL_SIMULATION_3B) {
			pJS.simulation.nb_infected_initialisation = 20;
		} else {
			pJS.simulation.nb_infected_initialisation = 1;
		}

		pJS.simulation.wall = 5 * pJS.canvas.w / 800;
		pJS.simulation.transmission_distance = pJS.simulation.transmission_distance * pJS.canvas.w / 800;
		pJS.simulation.infected_avoidance_distance = pJS.simulation.infected_avoidance_distance * pJS.canvas.w / 800;
		pJS.simulation.distanciation_distance = pJS.simulation.distanciation_distance * pJS.canvas.w / 800;
  		pJS.simulation.speed = pJS.simulation.speed * pJS.canvas.w / 800;
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.setup = function() {
		pJS.fn.netlogo.setup_globals();

		for(var i = 0; i < pJS.simulation.number_particles; i++) {
			pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
		}

		/* init infected particles */
		pJS.fn.netlogo.set_infected_initialisation();

		if(pJS.simulation.scenario == LABEL_SIMULATION_2C) {
			pJS.fn.netlogo.set_respect_rules();
		}

		// Initialize the chart
		if(with_chart) {
			var dataMap = new Map();
			dataMap.set(LABEL_DATA_S, pJS.fn.netlogo.nb_S() );

			if(pJS.simulation.scenario == LABEL_SIMULATION_2C) {
				// Simulation 2C : S + Iabis + Ic

				var datasetIC = {
					label: LABEL_DATA_IC,
					fill: false,
					backgroundColor: COLOR_INFECTED_FREE_RIDER,
					borderColor: COLOR_INFECTED_FREE_RIDER,
					radius: 1,
					data: []
				};
				pJS.chart.el.data.datasets.push(datasetIC);

				var datasetIAbis = {
					label: LABEL_DATA_IAbis,
					fill: false,
					backgroundColor: COLOR_INFECTED,
					borderColor: COLOR_INFECTED,
					radius: 1,
					data: []
				}
				pJS.chart.el.data.datasets.push(datasetIAbis);

				dataMap.set(LABEL_DATA_IC, pJS.fn.netlogo.nb_Ifr());
				dataMap.set(LABEL_DATA_IAbis, pJS.fn.netlogo.nb_Ir() );
			} else {
				var datasetIA = {
					label: LABEL_DATA_IA,
					fill: false,
					backgroundColor: COLOR_INFECTED,
					borderColor: COLOR_INFECTED,
					radius: 1,
					data: []
				};
				pJS.chart.el.data.datasets.push(datasetIA);

				dataMap.set(LABEL_DATA_IA, pJS.fn.netlogo.nb_Ir() );

				if(pJS.simulation.scenario == LABEL_SIMULATION_3C) {
				// Simulation 3C : S + Ia + Ib

					var datasetIB = {
						label: LABEL_DATA_IB,
						fill: false,
						backgroundColor: COLOR_INFECTED_NO_SYMPTOM,
						borderColor: COLOR_INFECTED_NO_SYMPTOM,
						radius: 1,
						data: []
					};
					pJS.chart.el.data.datasets.push(datasetIB);

					dataMap.set(LABEL_DATA_IB, pJS.fn.netlogo.nb_Inr());
				}
			}

			addData(pJS.chart.el, pJS.simulation.tick, dataMap);
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.set_respect_rules = function() {
		if(pJS.simulation.scenario == LABEL_SIMULATION_2C) {
			var infected_particles = pJS.particles.array.filter(p => p.epidemic_state == 1)

			for(var i = 0; i < infected_particles.length ; i++) {
				infected_particles[i].respect_rules = false;
				infected_particles[i].shape = 'square';
				// set size 1.5
			}

			var nb_free_riders = pJS.particles.array.length
									- Math.round(pJS.simulation.Respect_Distanciation * pJS.particles.array.length / 100)
									- pJS.simulation.nb_infected_initialisation;
			var free_riders = pJS.fn.netlogo.n_of(nb_free_riders, pJS.particles.array.filter(p => p.epidemic_state == 0));
			for(var j = 0; j < free_riders.length ; j++) {
				free_riders[j].respect_rules = false;
				free_riders[j].shape = 'square';
				// set size 1.5
			}
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.set_infected_initialisation = function() {
	 	var n_particles = pJS.fn.netlogo.n_of(pJS.simulation.nb_infected_initialisation, pJS.particles.array);
	 	for(var i = 0; i < n_particles.length; i++) {
	 		var p = n_particles[i];
	 		p.setEpidemicState(1);
	 		// show_epidemic_state
	 	}
	 	if(pJS.simulation.scenario == LABEL_SIMULATION_3C) {
	 		var one_particle = pJS.fn.netlogo.one_of(pJS.particles.array.filter(p => p.epidemic_state == 0));
	 		one_particle.setEpidemicState(2)
	 		// show_epidemic_state
	 	}
	}

	////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////
	//                                  GO                                //
	////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////

	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.particlesUpdate = function(){
		// if nb_S = 0 [show_asymptotic_cases stop]
		//update_previous_epidemic_counts

		if( (pJS.simulation.scenario == LABEL_SIMULATION_2A)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_2B)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_2C) ) {
			pJS.fn.netlogo.move_distanciation_citizens();
		} else if( (pJS.simulation.scenario == LABEL_SIMULATION_3A)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_3B)
				|| (pJS.simulation.scenario == LABEL_SIMULATION_3C) ) {
			pJS.fn.netlogo.avoid_infected();
		} else {
			pJS.fn.netlogo.move_randomly_citizens();
		}

		// update_current_epidemic_counts

		pJS.simulation.tick++;

		// TODO : à mettre dans le draw ???
		if(with_chart) {
			var dataMap = new Map();
			// all scenario : S + Ia
			dataMap.set(LABEL_DATA_S, pJS.fn.netlogo.nb_S() );

			if(pJS.simulation.scenario == LABEL_SIMULATION_2C) {
				// Simulation 2C : S + Iabis + Ic
				dataMap.set(LABEL_DATA_IC, pJS.fn.netlogo.nb_Ifr());
				dataMap.set(LABEL_DATA_IAbis, pJS.fn.netlogo.nb_Ir());
			} else {
				dataMap.set(LABEL_DATA_IA, pJS.fn.netlogo.nb_Ir());
				if(pJS.simulation.scenario == LABEL_SIMULATION_3C) {
				// Simulation 3C : S + Ia + Ib
					dataMap.set(LABEL_DATA_IB, pJS.fn.netlogo.nb_Inr());
				}
			}
			addData(pJS.chart.el, pJS.simulation.tick, dataMap);
		}
	};

	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.avoid_infected = function() {
		for(var i = 0; i < pJS.particles.array.length; i++){
			var p = pJS.particles.array[i];

			var infected_particules_at_avoid_dist = p.in_radius(pJS.particles.array.filter(part => part.epidemic_state == 1),
															  pJS.simulation.infected_avoidance_distance);
			var other_close_particles = p.other(infected_particules_at_avoid_dist);
			var target = pJS.fn.netlogo.closest(p, other_close_particles);

			if( (p.epidemic_state != 1) && (typeof target !== 'undefined') ) {
				p.face(target);
				p.rt(180);
				p.avoid_walls();
			} else {
				p.heading = (p.heading + getRandomInt(pJS.simulation.walking_angle) - getRandomInt(pJS.simulation.walking_angle)) % 360;
				p.avoid_walls();
			}

			if(p.epidemic_state != 1) {
				p.fd(pJS.simulation.speed);
			} else if(pJS.simulation.scenario == LABEL_SIMULATION_3C) {
				p.quarantine_infected();
			} else {
				p.fd(pJS.simulation.speed / 2);
			}

			if(p.epidemic_state == 0) {
				p.get_virus();
			}
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.particle.prototype.quarantine_infected = function() {
		if(!this.quarantined) {
			this.shape = "square";

			var dx = Math.floor(nb_quarantine / (Math.floor(pJS.canvas.h / (3 * this.radius) )));
			var dy = nb_quarantine % (Math.floor(pJS.canvas.h / (3 * this.radius) ));

			this.x = 2*this.radius + (this.radius + 10) * dx;
			this.y = 2*this.radius + (this.radius + 10) * dy;

			// set size 1
			this.quarantined = true;
			nb_quarantine = nb_quarantine + 1;
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.move_distanciation_citizens = function() {
		for(var i = 0; i < pJS.particles.array.length; i++){
			var p = pJS.particles.array[i];

			if(p.respect_rules) {
			// ifelse any? other citizens in-radius distanciation-distance
				var particule_at_distanciation_dist = p.in_radius(pJS.particles.array, pJS.simulation.distanciation_distance);
				var other_close_particles = p.other(particule_at_distanciation_dist);

				if( any(other_close_particles ) ) {
					var target = pJS.fn.netlogo.closest(p, other_close_particles);

					p.face(target);
					p.rt(180);
					p.avoid_walls();
					p.fd(pJS.simulation.speed);
				} else {
					p.heading = (p.heading + getRandomInt(pJS.simulation.walking_angle) - getRandomInt(pJS.simulation.walking_angle)) % 360;
					p.avoid_walls();
					p.fd(pJS.simulation.speed);
				}
			} else {
				p.heading = (p.heading + getRandomInt(pJS.simulation.walking_angle) - getRandomInt(pJS.simulation.walking_angle)) % 360;
				p.avoid_walls();
				p.fd(pJS.simulation.speed);
			}

			if(p.epidemic_state == 0) {
				p.get_virus();
			}
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.netlogo.move_randomly_citizens = function() {
		for(var i = 0; i < pJS.particles.array.length; i++){
			var p = pJS.particles.array[i];

			p.heading = (p.heading + getRandomInt(pJS.simulation.walking_angle) - getRandomInt(pJS.simulation.walking_angle)) % 360;
			p.avoid_walls();
			p.fd(pJS.simulation.speed);

			if(p.epidemic_state == 0) {
				p.get_virus();
			}
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.particle.prototype.avoid_walls = function() {
		next_x = this.x + pJS.simulation.wall * pJS.simulation.speed*cosDegre(this.heading);
		next_y = this.y + pJS.simulation.wall * pJS.simulation.speed*sinDegre(this.heading);

		if((next_x > pJS.canvas.w) || (next_x < 0)) {
			this.heading = (180 - this.heading) % 360;
		}
		if((next_y > pJS.canvas.h) || (next_y < 0)) {
			this.heading = (360 - this.heading) % 360;
		}
	}


	//////////////////////
	// Check for 260320 //
	//////////////////////
	pJS.fn.particle.prototype.get_virus = function() {
		var infectious_neighbours = pJS.particles.array
										.filter(p2 => (distance(this,p2) <= pJS.simulation.transmission_distance) )
										.filter(p3 => (p3.epidemic_state == 1) || (p3.epidemic_state == 2));

		if( infectious_neighbours.length != 0) {
			target = pJS.fn.netlogo.one_of(infectious_neighbours);
			if(   ((target.epidemic_state == 1) && (Math.random(1.0) < pJS.simulation.probability_transmission))
				||((target.epidemic_state == 2) && (Math.random(1.0) < pJS.simulation.probability_transmission_unreported_infected)) ) {
				target.nb_other_infected = target.nb_other_infecteds + 1;

				if(pJS.simulation.scenario == LABEL_SIMULATION_3C) {

					if(Math.random() * 100 > pJS.simulation.rate_unreported_infections) {
						this.setEpidemicState(1);
					} else {
						this.setEpidemicState(2);
					}
				} else {
					this.setEpidemicState(1);
        			// ask target [set nb-other-infected nb-other-infected + 1]
				}
			}
		}

		// show_epidemic_state
    	// set infection-date ticks
	}


	pJS.fn.particle.prototype.setEpidemicState = function(new_state) {
		this.epidemic_state = new_state;
		if(this.epidemic_state == 0) {
			this.setColor(COLOR_S);
		} else if(this.epidemic_state == 1) {
			this.setColor(COLOR_INFECTED);
		} else if(this.epidemic_state == 2) {
			this.setColor(COLOR_INFECTED_NO_SYMPTOM);
		}
	}



	pJS.fn.particle.prototype.fd = function(sp) {
		this.x = this.x + sp*cosDegre(this.heading);
		this.y = this.y + sp*sinDegre(this.heading);
	}

	pJS.fn.particle.prototype.face = function(p) {
		this.heading = Math.atan2(p.y - this.y, p.x - this.x) * 360 / (2*Math.PI);
	}

	pJS.fn.particle.prototype.rt = function(angle) {
		this.heading = (this.heading - angle) % 360;
	}

	pJS.fn.netlogo.closest = function(p, array) {
		var target;
		if( any(array ) ) {
			var min_distance = Infinity;
			for(var k = 0; k < array.length; k++) {
				var dist = distance(p,array[k]);
				if(dist < min_distance) {
					min_distance = dist;
					target = array[k];
				}
			}
		}
		return target;
	}



	pJS.fn.netlogo.one_of = function(arr) {
		return arr[getRandomInt(arr.length)];
	}

	pJS.fn.netlogo.n_of = function(n, array) {
		var returned_array = array.concat();
		pJS.fn.netlogo.shuffle(returned_array);
		return returned_array.splice(0,n);
	}

	// other citizens in-radius distanciation-distance
	pJS.fn.particle.prototype.other = function(array) {
		return array.filter(item => item !== this)
	}

	// TODO / TO TEST

	pJS.fn.particle.prototype.in_radius = function(array, dist) {
		return array.filter(p => distance(this,p) <= dist);
	}

	// From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	pJS.fn.netlogo.shuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}


	////////////////////////////////////
	// Reporters
	////////////////////////////////////

	pJS.fn.netlogo.nb_S = function(){
		return pJS.particles.array.filter(x => x.epidemic_state == 0).length;
	}

	pJS.fn.netlogo.nb_I = function(){
		return pJS.particles.array.filter(x => (x.epidemic_state == 1) || (x.epidemic_state == 2)).length;
	}

	pJS.fn.netlogo.nb_Ir = function(){
		return pJS.particles.array.filter(x => x.epidemic_state == 1).length;
	}

	pJS.fn.netlogo.nb_Inr = function(){
		return pJS.particles.array.filter(x => x.epidemic_state == 2).length;
	}

	pJS.fn.netlogo.nb_Ifr = function() {
		return pJS.particles.array.filter(x => (!x.respect_rules) && (x.epidemic_state == 1)).length;
	}

	pJS.fn.netlogo.nb_R = function() {
		return pJS.particles.array.filter(x => x.epidemic_state == 3).length;
	}



	function addData(chart, label, data) {
		chart.data.labels.push(label);
		chart.data.datasets.forEach((dataset) => {
			dataset.data.push(data.get(dataset.label));
		});
		chart.update();

		if (data.get(LABEL_DATA_IA) == pJS.simulation.number_particles || data.get(LABEL_DATA_S) == 0){
			pJS.fn.vendors.draw = () => {}
//			restartButton(tag_id, params);
		}
	}

	/*
	+============
	| CUSTOM Function
	*/
	pJS.fn.custom.pause = function() {
		if (pJS.simulation.isPlay != false){
			pJS.simulation.isPlay = false;

			pJS._tempFn = pJS.fn.vendors.draw;
			pJS.fn.vendors.draw = () => {}
		}
	}
	pJS.fn.custom.play = function() {
		if (pJS.simulation.isPlay != true){
			pJS.simulation.isPlay = true;

			if(pJS._tempFn != undefined){
				pJS.fn.vendors.draw = pJS._tempFn;
			}
			pJS.fn.vendors.draw();
		}
	}

	pJS.fn.particlesDraw = function(){
		/* clear canvas */
		pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

		/* update each particles param */
		pJS.fn.particlesUpdate();

		/* draw each particle */
		for(var i = 0; i < pJS.particles.array.length; i++){
			var p = pJS.particles.array[i];
			p.draw();
		}
	};

	pJS.fn.particlesEmpty = function(){
		pJS.particles.array = [];
	};

	pJS.fn.particlesRefresh = function(){
		/* init all */
		cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
		cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
		pJS.tmp.source_svg = undefined;
		pJS.tmp.img_obj = undefined;
		pJS.tmp.count_svg = 0;
		pJS.fn.particlesEmpty();
		pJS.fn.canvasClear();

		/* restart */
		pJS.fn.vendors.start();
	};


	/* ---------- pJS functions - modes events ------------ */

	pJS.fn.modes.pushParticles = function(nb, pos){
		pJS.tmp.pushing = true;

		for(var i = 0; i < nb; i++){
			pJS.particles.array.push(
				new pJS.fn.particle(
					pJS.particles.color,
					pJS.particles.opacity.value,
					{
						'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
						'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
					}
					)
				)
			if(i == nb-1){
				if(!pJS.particles.move.enable){
					pJS.fn.particlesDraw();
				}
				pJS.tmp.pushing = false;
			}
		}
	};

	pJS.fn.modes.removeParticles = function(nb){
		pJS.particles.array.splice(0, nb);
		// if(!pJS.particles.move.enable){
		// 	pJS.fn.particlesDraw();
		// }
	};

	pJS.fn.vendors.densityAutoParticles = function(){

		if(pJS.particles.number.density.enable){

			/* calc area */
			var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
			if(pJS.tmp.retina){
				area = area/(pJS.canvas.pxratio*2);
			}

			/* calc number of particles based on density area */
			var nb_particles = area * pJS.simulation.number_particles / pJS.particles.number.density.value_area;

			/* add or remove X particles */
			var missing_particles = pJS.particles.array.length - nb_particles;
			if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
			else pJS.fn.modes.removeParticles(missing_particles);
		}
	};

	pJS.fn.vendors.checkOverlap = function(p1, position){
		for(var i = 0; i < pJS.particles.array.length; i++){
			var p2 = pJS.particles.array[i];

			var dx = p1.x - p2.x,
			dy = p1.y - p2.y,
			dist = Math.sqrt(dx*dx + dy*dy);

			if(dist <= p1.radius + p2.radius){
				p1.x = position ? position.x : Math.random() * pJS.canvas.w;
				p1.y = position ? position.y : Math.random() * pJS.canvas.h;
				pJS.fn.vendors.checkOverlap(p1);
			}
		}
	};

	pJS.fn.vendors.createSvgImg = function(p){
		/* set color to svg element */
		var svgXml = pJS.tmp.source_svg,
		rgbHex = /#([0-9A-F]{3,6})/gi,
		coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
			if(p.color.rgb){
				var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
			}else{
				var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
			}
			return color_value;
		});

		/* prepare to create img with colored svg */
		var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
		DOMURL = window.URL || window.webkitURL || window,
		url = DOMURL.createObjectURL(svg);

		/* create particle img obj */
		var img = new Image();
		img.addEventListener('load', function(){
			p.img.obj = img;
			p.img.loaded = true;
			DOMURL.revokeObjectURL(url);
			pJS.tmp.count_svg++;
		});
		img.src = url;
	};

	pJS.fn.vendors.destroypJS = function(){
		cancelAnimationFrame(pJS.fn.drawAnimFrame);
		canvas_el.remove();
		if(with_chart) {
			chart_el.remove();
		}
		pJSDom.splice( pJSDom.indexOf(pJS), 1);
	};

	pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){
		// By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
		var sideCount = sideCountNumerator * sideCountDenominator;
		var decimalSides = sideCountNumerator / sideCountDenominator;
		var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
		var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
		c.save();
		c.beginPath();
		c.translate(startX, startY);
		c.moveTo(0,0);
		for (var i = 0; i < sideCount; i++) {
			c.lineTo(sideLength,0);
			c.translate(sideLength,0);
			c.rotate(interiorAngle);
		}
		//c.stroke();
		c.fill();
		c.restore();
	};

	pJS.fn.vendors.exportImg = function(){
		window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
	};

	pJS.fn.vendors.loadImg = function(type){
		pJS.tmp.img_error = undefined;

		if(pJS.particles.shape.image.src != ''){

			if(type == 'svg'){

				var xhr = new XMLHttpRequest();
				xhr.open('GET', pJS.particles.shape.image.src);
				xhr.onreadystatechange = function (data) {
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							pJS.tmp.source_svg = data.currentTarget.response;
							pJS.fn.vendors.checkBeforeDraw();
						}else{
							console.log('Error pJS - Image not found');
							pJS.tmp.img_error = true;
						}
					}
				}
				xhr.send();

			}else{

				var img = new Image();
				img.addEventListener('load', function(){
					pJS.tmp.img_obj = img;
					pJS.fn.vendors.checkBeforeDraw();
				});
				img.src = pJS.particles.shape.image.src;

			}

		}else{
			console.log('Error pJS - No image.src');
			pJS.tmp.img_error = true;
		}
	};

	pJS.fn.vendors.draw = function(){
		if(pJS.particles.shape.type == 'image'){

			if(pJS.tmp.img_type == 'svg'){

				if(pJS.tmp.count_svg >= pJS.simulation.number_particles){
					pJS.fn.particlesDraw();
					if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
					else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
				}else{
					//console.log('still loading...');
					if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
				}

			}else{

				if(pJS.tmp.img_obj != undefined){
					pJS.fn.particlesDraw();
					if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
					else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
				}else{
					if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
				}

			}

		}else{
			pJS.fn.particlesDraw();
			//      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
			//      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
			pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
		}
	};

	pJS.fn.vendors.checkBeforeDraw = function(){
		// if shape is image
		if(pJS.particles.shape.type == 'image'){

			if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
				pJS.tmp.checkAnimFrame = requestAnimFrame(check);
			}else{
				//console.log('images loaded! cancel check');
				cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
				if(!pJS.tmp.img_error){
					pJS.fn.vendors.init();
					pJS.fn.vendors.draw();
				}

			}

		}else{
			pJS.fn.vendors.init();
			pJS.fn.vendors.draw();
			if(!pJS.simulation.startPlay) {
				pJS.fn.custom.pause();
			}
		}
	};

	pJS.fn.vendors.init = function(){
		/* init canvas + particles */
		pJS.fn.retinaInit();
		pJS.fn.canvasInit();
		pJS.fn.canvasSize();
		pJS.fn.canvasPaint();
		pJS.fn.netlogo.setup();
		pJS.fn.vendors.densityAutoParticles();
	};

	pJS.fn.vendors.start = function(){
		if(isInArray('image', pJS.particles.shape.type)){
			pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
			pJS.fn.vendors.loadImg(pJS.tmp.img_type);
		}else{
			pJS.fn.vendors.checkBeforeDraw();
		}
	};

	/* ---------- pJS - start ------------ */


	//  pJS.fn.vendors.eventsListeners();

	pJS.fn.vendors.start();

};	/*	===============	END var pJS = function(tag_id, params)	===============	*/

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
	for (var property in source) {
		if (source[property] && source[property].constructor &&
			source[property].constructor === Object) {
			destination[property] = destination[property] || {};
		arguments.callee(destination[property], source[property]);
	} else {
		destination[property] = source[property];
	}
}
return destination;
};

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame 	||
	window.webkitRequestAnimationFrame 		||
	window.mozRequestAnimationFrame    		||
	window.oRequestAnimationFrame      		||
	window.msRequestAnimationFrame     		||
	function(callback){
		window.setTimeout(callback, 1000 / 60);
	};
})();

window.cancelRequestAnimFrame = ( function() {
	return window.cancelAnimationFrame       ||
	window.webkitCancelRequestAnimationFrame ||
	window.mozCancelRequestAnimationFrame    ||
	window.oCancelRequestAnimationFrame      ||
	window.msCancelRequestAnimationFrame     ||
	clearTimeout
} )();

function hexToRgb(hex){
	// By Tim Down - http://stackoverflow.com/a/5624139/3493650
	// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	hex = hex.replace(shorthandRegex, function(m, r, g, b) {
		return r + r + g + g + b + b;
	});
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
};

function clamp(number, min, max) {
	return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function cosDegre(angle) {
	return Math.cos(angle*2*Math.PI/360);
}

function sinDegre(angle) {
	return Math.sin(angle*2*Math.PI/360);
}

function distance(p1,p2) {
	var dx = p1.x - p2.x,
	dy = p1.y - p2.y;
	return Math.sqrt(dx*dx + dy*dy);
}

function any(array) {
	return array.length > 0;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, with_chart, params){

	//console.log(params);

	/* no string id? so it's object params, and set the id with default id */
	if(typeof(tag_id) != 'string'){
		params = tag_id;
		tag_id = 'particles-js';
	}

	/* no id? set the id to default id */
	if(!tag_id){
		tag_id = 'particles-js';
	}

	/* pJS elements */
	var pJS_tag = document.getElementById(tag_id),

	pJS_canvas_class = 'particles-js-canvas-el',
	exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

	/* remove canvas if exists into the pJS target tag */
	if(exist_canvas.length){
		while(exist_canvas.length > 0){
			pJS_tag.removeChild(exist_canvas[0]);
		}
	}

	/* create relaunch button */
	$( "#"+tag_id ).append( '<a class="btn btn-info" style="color: white;" onclick=\'restartSimulation("' + tag_id + '", ' + with_chart + ', ' + JSON.stringify(params) + ')\'><i class="fas fa-redo-alt"></i> ' + BUTTON_RESTART + '</a>' );
	$( "#"+tag_id ).append( '<a class="btn btn-info" style="color: white;" onclick=\'playPause("' + tag_id + '")\'><i class="fas fa-play"></i> ' + BUTTON_PLAY_PAUSE + '</a>' );


	/* create canvas element */
	var canvas_el = document.createElement('canvas');
	canvas_el.className = pJS_canvas_class;

	/* append canvas */
	var canvas = document.getElementById(tag_id).appendChild(canvas_el);

	if(with_chart) {
		var pJS_canvas_chart_class = 'particles-js-canvas-el-chart';
		var chart_el = document.createElement('canvas');
		chart_el.className = pJS_canvas_chart_class;
		canvas = document.getElementById(tag_id).appendChild(chart_el);
	}

	/* launch particle.js */
	if(canvas != null){
		pJSDom.push(new pJS(tag_id, with_chart, params));
	}

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

	/* load json config */
	var xhr = new XMLHttpRequest();
	xhr.open('GET', path_config_json);
	xhr.onreadystatechange = function (data) {
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var params = JSON.parse(data.currentTarget.response);
				window.particlesJS(tag_id, params);
				if(callback) callback();
			}else{
				console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
				console.log('Error pJS - File config not found');
			}
		}
	};
	xhr.send();

};
