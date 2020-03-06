let setImages=function(application,imageSrcArray,numberOfColumsInGame,getImageSrc){
	let calcSpritesWidth=function(application,numberOfColumsInGame){
		return Math.floor(application.renderer.options.width/numberOfColumsInGame);
	}
	let calcSpritesHeight=function(imageSrcArray,widthOfSprite){// made for future. If image width != image height
		let sprite=new PIXI.Sprite(PIXI.loader.resources[imageSrcArray[0]].texture);
		let coficient=sprite.height/sprite.width;
		let heightOfSprite=widthOfSprite*coficient;
		return heightOfSprite
	}
	let getNumberOfSpritesInColumn=function(heightOfApp,heightOfSprite){
		let returnValue=1;
		returnValue+=(Math.round(((heightOfApp/2)-heightOfSprite/2)/heightOfSprite)+2)*2;
		return returnValue;
	}
	let widthOfSprite=calcSpritesWidth(application,numberOfColumsInGame);
	let heightOfSprite=calcSpritesHeight(imageSrcArray,widthOfSprite);
	let numberOfSpritesInColumn=getNumberOfSpritesInColumn(application.renderer.options.height,heightOfSprite);
	let beginYSprites=-((numberOfSpritesInColumn*heightOfSprite)-application.renderer.options.height)/2
	let sprites=[];
	for(let i=0; i<numberOfColumsInGame; i+=1){
		sprites.push([]);
		sprites[i].nextIndex=numberOfSpritesInColumn;
		sprites[i].beforeIndex=-numberOfSpritesInColumn;
		sprites[i].left=widthOfSprite*i;
		for(let j=0; j<numberOfSpritesInColumn; j+=1){
			let sprite=new PIXI.Sprite(PIXI.loader.resources[getImageSrc(i,j)].texture);
			sprite.x=sprites[i].left;
			sprite.y=beginYSprites+heightOfSprite*j;
			sprite.width=widthOfSprite;
			sprite.height=heightOfSprite;
			application.stage.addChild(sprite);
			sprites[i].push(sprite);
		}
	}
	return {
		'array':sprites,
		'aboutSprite':{
			'width':widthOfSprite,
			'height':heightOfSprite
		},
		'firstYPosition':beginYSprites,
		'lastYPosition':beginYSprites+numberOfSpritesInColumn*(heightOfSprite-1),
	}
}

export {setImages}