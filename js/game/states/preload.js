
MyGame.Preload = function(game) {
	this.background = null;
	this.preloadBar = null;
};

MyGame.Preload.prototype = {
	preload: function() {

		// Show Loading Screen
		this.loadingBG = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loading');
		this.loadingBG.anchor.setTo(0.5);
		/* this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar); */

		this.load.image('logo', 'assets/img/logo.png');
		this.load.image('btnPlay', 'assets/img/btn_play.png');
		this.load.image('btnSettings', 'assets/img/btn_settings.png');
		this.load.image('btnBack', 'assets/img/btn_back.png');
		this.load.image('btnSetA', 'assets/img/btn_A.png');
		this.load.image('btnSetB', 'assets/img/btn_B.png');
		this.load.image('btnSetC', 'assets/img/btn_C.png');
		this.load.image('btnSetD', 'assets/img/btn_D.png');

		this.load.spritesheet('btnLevels', 'assets/img/btn_level.png', 200, 200);
		this.load.image('btnLevel0', 'assets/img/btn_level0.png');
		this.load.image('btnLevel1', 'assets/img/btn_level1.png');
		this.load.image('btnLevel2', 'assets/img/btn_level2.png');
		this.load.image('btnLevel3', 'assets/img/btn_level3.png');
		this.load.image('level1', 'assets/img/btn_1.png');
		this.load.image('level2', 'assets/img/btn_2.png');
		this.load.image('level3', 'assets/img/btn_3.png');
		this.load.image('level4', 'assets/img/btn_4.png');
		this.load.image('level5', 'assets/img/btn_5.png');
		this.load.image('level6', 'assets/img/btn_6.png');
		this.load.image('level7', 'assets/img/btn_7.png');
		this.load.image('level8', 'assets/img/btn_8.png');

		this.load.image('gameover', 'assets/img/gameover.png');
		this.load.image('btnRestart', 'assets/img/restart.png');
		this.load.image('btnLevelSelect', 'assets/img/level_select.png');

	},
	initLocalStorage: function() {
		//setupLocalStorage('bool_param', 'bool');
		//setupLocalStorage('string_param', 'string');
		//setupLocalStorage('number_param', 'number');

		setupLocalStorage('MaxLevel', 'level');
		setupLocalStorage('StarsL1', 'number');
		setupLocalStorage('StarsL2', 'number');
		setupLocalStorage('StarsL3', 'number');
		setupLocalStorage('StarsL4', 'number');
		setupLocalStorage('StarsL5', 'number');
		setupLocalStorage('StarsL6', 'number');
		setupLocalStorage('StarsL7', 'number');
		setupLocalStorage('StarsL8', 'number');
	},
	create: function() {
		//this.preloadBar.cropEnabled = false;
		this.initLocalStorage();

		this.state.start('MainMenu');
	},
	update: function() {
		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create
		//  function and delete the update function completely.
		
		/* if (this.cache.isSoundDecoded('titleMusic') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');
		} */
	}
};
