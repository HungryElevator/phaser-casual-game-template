var MyGame = {
    mainMenuMusic: null,
    inGameMusic: null,

    orientated: false
};

MyGame.Boot = function (game) {
    
};

MyGame.Boot.prototype = {
    init: function () {
        //  No multi-touch
        this.input.maxPointers = 1;
        //  Phaser will automatically pause if the browser tab the game is in loses focus.
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        }
    },
    preload: function () {
    	this.load.image('loading', 'assets/img/logo.png');
        // Assets for the Proload Screen
        // this.load.image('preloaderBackground', 'assets/img/preloader_background.jpg');
        // this.load.image('preloaderBar', 'assets/img/preloadr_bar.png');
    },
    create: function () {
        this.state.start('Preload');
    },
    enterIncorrectOrientation: function () {
        BasicGame.orientated = false;
        //document.getElementById('orientation').style.display = 'block';
    },

    leaveIncorrectOrientation: function () {
        BasicGame.orientated = true;
        //document.getElementById('orientation').style.display = 'none';
    }
};