
MyGame.GamePlay = function(game) {

};

MyGame.GamePlay.prototype = {
	init: function(stage) {
		this.stage = stage;
		this.starsAchieved = 0;
	},
	preload: function() {

	},
    create: function() {
        /* MyGame.inGameMusic = this.add.audio('gameMusic');
        MyGame.inGameMusic.play(); */

        this.game.stage.backgroundColor = "#222222";

		for (var i=0; i<STARS.length; i++) {
			var starNumber = STARS[i],
				x = this.game.world.width*(starNumber/4),
				y = this.game.world.height/2;

			var starButton = this.game.add.button(x, y, 'btnLevel'+starNumber, this.selectStars, this);
    		starButton.anchor.setTo(0.5);
		}
    },
    update: function() {
    	this.updateGame();
        this.checkGameOver();
    },
    updateGame: function() {
    	// Update logic and/or physics
    },
    selectStars: function(starsImg) {
    	this.starsAchieved = starsImg.key.slice(-1);
    },
    saveProgress: function() {
    	// Save level stars
    	var starsRecord = 'StarsL'+this.stage;
    	if (this.starsAchieved > getLocalInt(starsRecord)) {
    		saveLocal(starsRecord, this.starsAchieved);
    	}
        // Save Max Level
        if (this.stage === getLocalInt('MaxLevel')) {
            saveLocal('MaxLevel', this.stage+1);
        }
    },
    checkGameOver: function() {
    	// Check the end of the game
    	var gameOverCondition = this.starsAchieved !== 0;
    	if (gameOverCondition) {
    		this.endGame();
    	}
    },
    endGame: function() {
    	this.saveProgress();
    	this.state.start('EndGame', true, false, this.stage, this.starsAchieved);
    }
};