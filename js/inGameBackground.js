
var rect = {};
var backStars = {};

var planetCounter = 0;

bgController = createBGController();

function createBGController(){

	backgroundController = {};
	backgroundController.backHole = {};

	backgroundController.planet_1 = {};
	backgroundController.planet_2 = {};
	backgroundController.planet_3 = {};

	backgroundController.update = function(){
		backgroundController.backStars.update();

		backgroundController.planet_1.update();
		backgroundController.planet_2.update();
		backgroundController.planet_3.update();

		backgroundController.backHole.update();

	};

	return backgroundController;
}

function startInGameBackground(agv){	

	agv.rect = new Konva.Rect({
		x: 0,
		y: 0,
		width: cCanvasWidth,
		height: cCanvasHeight,
		fill: '#141925'
	});

	//layer.add(rect);

	bgController.backHole = createHole();
	bgController.backHole.addToLayer(agv);


	createPlanets(agv);


	bgController.backStars = createStarsBackground();
	bgController.backStars.addToLayer(agv);


	//anim_background.start();

	
}

function createPlanets(agv){

	var imageObj_1 = new Image();
	var imageObj_2 = new Image();
	var imageObj_3 = new Image();

	imageObj_1.src = "assets/planet_1.png";
	imageObj_2.src = "assets/planet_2.png";
	imageObj_3.src = "assets/planet_3.png";


	bgController.planet_1 = createPlanet(imageObj_1, 360, 360);
	bgController.planet_2 = createPlanet(imageObj_2, 260, 270);
	bgController.planet_3 = createPlanet(imageObj_3, 90, 90);

	bgController.planet_1.addToLayer(agv);
	bgController.planet_2.addToLayer(agv);
	bgController.planet_3.addToLayer(agv);

	/*
	layer.add(planet_1.vSprite);
	layer.add(planet_2.vSprite);
	layer.add(planet_3.vSprite);
	*/
}


function updateInGameBackground(frame){
	planet_1.update();
	planet_2.update();
	planet_3.update();

	backHole.update(frame);

	backStars.update();
}

function createStar(){
	var value_x = (Math.random() * cCanvasWidth) + 0;
	var value_y = (Math.random() * cCanvasHeight) + 0;

	var star = {};

	star.speed = (Math.random() * 0.1) + 0.01;
 
	star.rect = new Konva.Rect({
		x: value_x,
		y: value_y,
		width: 2,
		height: 2,
		fill: 'white'
	});



	star.getRectangle = function(){
		return star.rect;
	};

	star.update = function(){
		star.rect.x(star.rect.getX() - star.speed);
	};

	return star;
}

function createPlanet(planet_image, planet_width, planet_height){
	var value_x = (Math.random() * (cCanvasWidth - cCanvasWidth/2)) + 0;
	var value_y = (Math.random() * (cCanvasHeight - cCanvasHeight/2)) + 0;

	var planet = {};

	planet.speed = (Math.random() * 0.05) + 0.005;

	planet.number_id = planetCounter;

	planet.vSprite = new Konva.Sprite({
		x: value_x,
		y: value_y,
		image: planet_image,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, planet_width, planet_height
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	planet.vSprite.start();

	planetCounter++;

	planet.addToLayer = function(layer){
		layer['planet' + planet.number_id] = planet.vSprite;
	};

	planet.update = function(){
		planet.vSprite.x(planet.vSprite.x() - planet.speed);
	};

	return planet;
}


function createStarsBackground(){

	backWidth = 1920;
	backHeight = 947;

	starsBackground = {};

	var imageStars_1 = new Image();
	imageStars_1.src = "assets/stars.png";

	var imageStars_2 = new Image();
	imageStars_2.src = "assets/stars_2.png";

	var imageStars_3 = new Image();
	imageStars_3.src = "assets/stars_3.png";


	//UpperLayer

	starsBackground.backUpperLayer = [];
	starsBackground.backUpperLayer[0] = {};
	starsBackground.backUpperLayer[1] = {};

	starsBackground.backUpperLayer[0].vSprite = new Konva.Sprite({
		x: 0,
		y: 0,
		image: imageStars_1,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 947
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	starsBackground.backUpperLayer[1].vSprite = new Konva.Sprite({
		x: cCanvasWidth,
		y: 0,
		image: imageStars_1,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 947
			]
		},
		frameRate: 7,
		frameIndex: 0
	});




	//Mid layer

	starsBackground.backMidLayer = [];
	starsBackground.backMidLayer[0] = {};
	starsBackground.backMidLayer[1] = {};

	starsBackground.backMidLayer[0].vSprite = new Konva.Sprite({
		x: 0,
		y: 0,
		image: imageStars_2,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 1500
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	starsBackground.backMidLayer[1].vSprite = new Konva.Sprite({
		x: cCanvasWidth,
		y: 0,
		image: imageStars_2,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 1500
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	//Lower Layer

	starsBackground.backLowerLayer = [];
	starsBackground.backLowerLayer[0] = {};
	starsBackground.backLowerLayer[1] = {};

	starsBackground.backLowerLayer[0].vSprite = new Konva.Sprite({
		x: 0,
		y: 0,
		image: imageStars_3,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 1500
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	starsBackground.backLowerLayer[1].vSprite = new Konva.Sprite({
		x: cCanvasWidth,
		y: 0,
		image: imageStars_3,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, 1920, 1500
			]
		},
		frameRate: 7,
		frameIndex: 0
	});




	starsBackground.addToLayer = function(layer){
		
		layer['bsLowerLayer' + 0] = starsBackground.backLowerLayer[0].vSprite;
		layer['bsLowerLayer' + 1] = starsBackground.backLowerLayer[1].vSprite;

		layer['bsMidLayer' + 0] = starsBackground.backMidLayer[0].vSprite;
		layer['bsMidLayer' + 1] = starsBackground.backMidLayer[1].vSprite;

		layer['bsUpperLayer' + 0] = starsBackground.backUpperLayer[0].vSprite;
		layer['bsUpperLayer' + 1] = starsBackground.backUpperLayer[1].vSprite;
		
	
	};

	starsBackground.update = function(){


		for(var i = 0; i < 2; i++){
			
			starsBackground.backUpperLayer[i].vSprite.x(starsBackground.backUpperLayer[i].vSprite.x() - 0.2);
			if(starsBackground.backUpperLayer[i].vSprite.x() + backWidth < 0){
				starsBackground.backUpperLayer[i].vSprite.x(cCanvasWidth);
			}


			starsBackground.backMidLayer[i].vSprite.x(starsBackground.backMidLayer[i].vSprite.x() - 0.1);
			if(starsBackground.backMidLayer[i].vSprite.x() + backWidth < 0){
				starsBackground.backMidLayer[i].vSprite.x(cCanvasWidth);
			}

			starsBackground.backLowerLayer[i].vSprite.x(starsBackground.backLowerLayer[i].vSprite.x() - 0.3);
			if(starsBackground.backLowerLayer[i].vSprite.x() + backWidth < 0){
				starsBackground.backLowerLayer[i].vSprite.x(cCanvasWidth);
			}
			
		}
	
	};

	return starsBackground;

}

function createHole(){

	var holeWidth = 1500;
	var holeHeight = 1500;

	var angularSpeed = 0.8;

	var timeMax = 1;
	var timerCounter = timeMax;
	var angleToGo = 0;

	var hole = {};

	hole.vGroup = new Konva.Group();
	hole.vGroup.x(cCanvasWidth/2);
	hole.vGroup.y(cCanvasWidth/2 - holeHeight/5);

	var imageObj = new Image();
	imageObj.src = "assets/hole.png";

	hole.vSprite = new Konva.Sprite({
		x: -holeWidth/2,
		y: -holeHeight/2,
		width: holeWidth,
		height: holeHeight,
		image: imageObj,
		animation: 'idle',
		animations: {
			idle: [
				0, 0, holeWidth, holeHeight
			]
		},
		frameRate: 7,
		frameIndex: 0
	});

	hole.vGroup.add(hole.vSprite);

	hole.addToLayer = function(layer){
		layer.hole = hole.vGroup;
	};

	hole.update = function(){
		//var angleDiff = frame.timeDiff * angularSpeed / 1000;
        //hole.vGroup.rotate(angleDiff);

        timerCounter--;
        if(timerCounter < 0){
        	angleToGo -= 0.1;
        	hole.vGroup.rotate(angleToGo);
        	timerCounter = timeMax;
        	if(angleToGo > -360) angleToGo = 0;
        }

        
	};

	return hole;
}