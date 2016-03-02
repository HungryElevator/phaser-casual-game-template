
MyGame.LevelSelect = function() {
};

MyGame.LevelSelect.prototype = {
	preload : function() {

	},
    create: function() {
		this.game.stage.backgroundColor = "#444444";

		for (var i=0; i<LEVELS.length; i++) {
			var levelNumber = LEVELS[i],
				levelRow = (levelNumber > LEVELS.length/2) ? 2/3 : 1/3,
				levelColumn = (levelNumber-1)%(LEVELS.length/2),
				x = this.game.world.width*(1+levelColumn)/5,
				y = this.game.world.height*levelRow;

			var levelButton = this.game.add.button(x, y, 'btnLevels', this.startLevel, this);
			levelButton.frame = this.getFrame(levelNumber);
    		levelButton.anchor.setTo(0.5);
			var levelNumberImg = this.game.add.button(0, 0, 'level'+levelNumber);
    		levelNumberImg.anchor.setTo(0.5);
			levelButton.addChild(levelNumberImg);
			// We can add a custom attribute
			levelButton.levelID = levelNumber;
		}
		backButton = this.game.add.button(10, 10, 'btnBack', backHome, this);
    },
    getFrame: function(level) {
    	var frame = getLocalInt('StarsL'+level);

    	if (level > getLocalInt('MaxLevel')) {
    		frame = 4;
    	}

    	return frame;
    },
    startLevel: function(stage) {
    	if (stage.frame !== 4) {
        	//MyGame.mainMenuMusic.stop();
	    	var levelID = stage.levelID;
			this.state.start('GamePlay', true, false, levelID);
    	}
    }
};