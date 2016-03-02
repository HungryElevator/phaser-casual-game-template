var MyGame = MyGame || {};

MyGame.EndGame = function() {
};

MyGame.EndGame.prototype = {
	init: function(stage, stars) {
		this.stage = stage;
		this.stars = stars;
	},
	preload: function() {

	},
    create: function() {
        this.game.stage.backgroundColor = "#000000";

        var centerX = this.game.world.centerX,
        	centerY = this.game.world.centerY;
        
        var gameOver = this.game.add.image(centerX, centerY/2, 'gameover');
    	gameOver.anchor.set(0.5);

    	for (var i=0; i<ENDGAME_BUTTONS.length; i++) {
			var option = ENDGAME_BUTTONS[i],
				x = this.game.world.width*((i+1)/3),
				y = this.game.world.height*MAINMENU_BUTTON_POSY;

				var optionButton = this.game.add.button(x, y, 'btn'+option, this.switchOption, this);
    			optionButton.anchor.setTo(0.5);
		}
        var gameOver = this.game.add.text(centerX, centerY-50, this.stars+' selected', TEXT_STYLE);
    	gameOver.anchor.set(0.5);
        var gameOver = this.game.add.text(centerX, centerY, 'High-Score: '+getLocal('StarsL'+this.stage), TEXT_STYLE);
    	gameOver.anchor.set(0.5);
    },
    switchOption: function(optionImg) {
    	switch(optionImg.key) {
		case 'btnRestart':
			this.restartLevel();
			break;
		case 'btnLevelSelect':
			this.backToLevelSelection();
			break;
    	}
    },
    restartLevel: function() {
    	this.state.start('GamePlay', true, false, this.stage);
    },
    backToLevelSelection: function() {
        //MyGame.inGameMusic.stop();
    	this.state.start('LevelSelect');
    }
};