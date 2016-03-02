var MyGame = MyGame || {};

MyGame.Settings = function() {
};

MyGame.Settings.prototype = {
	preload : function() {

	},
    create: function () {
    	var world = this.game.world;

        var settingA = this.game.add.button(world.width*QUARTER, world.height*QUARTER, 'btnSetA', this.changeA, this),
    		settingB = this.game.add.button(world.width*THREEQUARTERS, world.height*QUARTER, 'btnSetB', this.changeB, this),
	    	settingC = this.game.add.button(world.width*QUARTER, world.height*THREEQUARTERS, 'btnSetC', this.changeC, this),
	    	settingD = this.game.add.button(world.width*THREEQUARTERS, world.height*THREEQUARTERS, 'btnSetD', this.changeD, this),
	    	backButton = this.game.add.button(10, 10, 'btnBack', backHome, this);
    	
    	settingA.anchor.set(0.5);
      	settingB.anchor.set(0.5);
      	settingC.anchor.set(0.5);
      	settingD.anchor.set(0.5);
    },
    changeA: function() {
    	// Change and save this setting
    },
    changeB: function() {
    	// Change and save this setting
    },
    changeC: function() {
    	// Change and save this setting
    },
    changeD: function() {
    	// Change and save this setting
    }
};