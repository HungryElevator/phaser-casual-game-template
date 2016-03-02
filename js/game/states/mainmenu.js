
MyGame.MainMenu = function(game) {
    
};

MyGame.MainMenu.prototype = {
	preload: function() {
		// We have our assets loaded.
	},
    create: function() {
        /* MyGame.mainMenuMusic = this.add.audio('titleMusic');
        MyGame.mainMenuMusic.play(); */

        this.game.stage.backgroundColor = "#555555";
        
        var world = this.game.world;

        var play = this.game.add.button(world.width*MAINMENU_BUTTON_POSX, world.height*MAINMENU_BUTTON_POSY, 'btnPlay', this.selectLevel, this);
        play.anchor.set(0.5);
      
        var settings = this.game.add.button(world.width*(1 - MAINMENU_BUTTON_POSX), world.height*MAINMENU_BUTTON_POSY, 'btnSettings', this.changeSettings, this);
        settings.anchor.set(0.5);
        
        var logo = this.game.add.image(world.centerX, world.centerY, 'logo');
        logo.anchor.set(0.5);
    },
    changeSettings: function() {
    	this.state.start('Settings');
    },
    selectLevel: function(stage) {
    	this.state.start('LevelSelect');
    }
};