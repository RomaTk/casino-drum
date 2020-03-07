# CASINO DRUM
![gif](https://romatk.github.io/casino-drum/readme/gif.gif)
EXAMPLES 

 - [go down](https://romatk.github.io/casino-drum/index.html) 
 - [go up](https://romatk.github.io/casino-drum/index1.html) 
 - [go up (more)](https://romatk.github.io/casino-drum/index2.html)

## HeadingGeneral explanation

![Main explanation](https://romatk.github.io/casino-drum/readme/code.png)

## How to use?

 - Add [pixi.js](https://www.pixijs.com/) to page
 - You should add [createGame.js](https://github.com/RomaTk/casino-drum/blob/master/js/createGame.js) and add folder [module](https://github.com/RomaTk/casino-drum/tree/master/js/modules) to folder with [createGame.js](https://github.com/RomaTk/casino-drum/blob/master/js/createGame.js) .
 - Add js file with type module. `<script  type="module"  src="NAME"></script>`
 - Use this `import {createGame}from  './createGame.js'`
 - Other information you can get from [main.js](https://github.com/RomaTk/casino-drum/blob/master/js/main.js) used with this [index.html](https://github.com/RomaTk/casino-drum/blob/master/index.html)  to get [this example](https://romatk.github.io/casino-drum/index.html)
 Other information you can get from [main1.js](https://github.com/RomaTk/casino-drum/blob/master/js/main1.js) used with this [index1.html](https://github.com/RomaTk/casino-drum/blob/master/index1.html)  to get [this example](https://romatk.github.io/casino-drum/index1.html)
 Other information you can get from [main2.js](https://github.com/RomaTk/casino-drum/blob/master/js/main2.js) used with this [index2.html](https://github.com/RomaTk/casino-drum/blob/master/index2.html)  to get [this example](https://romatk.github.io/casino-drum/index2.html)
## Explanation of something
 - goUp - value of how many pixels to go after end position (plus or minus)
 - index in getImageSrc is a value of number 
	 - if we scroll drum down = number of images at first + added in scrolling
	 - if we scroll drum up = -(number of images at first + added in scrolling)
