
var MyGame = MyGame || {};

MyGame.game = new Phaser.Game(BROWSER_WIDTH, BROWSER_HEIGHT, Phaser.AUTO, 'myGame');

MyGame.game.state.add('Boot', MyGame.Boot);
MyGame.game.state.add('Preload', MyGame.Preload);
MyGame.game.state.add('MainMenu', MyGame.MainMenu);
MyGame.game.state.add('Settings', MyGame.Settings);
MyGame.game.state.add('LevelSelect', MyGame.LevelSelect);
MyGame.game.state.add('GamePlay', MyGame.GamePlay);
MyGame.game.state.add('EndGame', MyGame.EndGame);

MyGame.game.state.start('Boot');