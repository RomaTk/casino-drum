let scroll=function(delta){
	let scrollColumn=function(columnIndex,column,game){
		let functionToEnd=function(){
			for (let i=0; i<column.length; i+=1){
				let sprite=column[i];
				sprite.y=game.sprites.firstYPosition+game.sprites.aboutSprite.height*i;
			}
			game.columsStages[columnIndex]='finished';
		}
		if ((Math.abs(game.scrollTimes.madeInPixeles[columnIndex])<Math.abs(game.scrollTimes.inPixeles[columnIndex]+game.columnsGoUp[columnIndex]))&&(game.columsStages[columnIndex]!='finished')){
			let lastSprite=column[column.length-1];
			if (lastSprite.y>=game.sprites.lastYPosition){
				game.application.stage.removeChild(lastSprite);
				column.pop();
				let newSprite=new PIXI.Sprite(PIXI.loader.resources[game.specificFunctions.getImageSrc(columnIndex,column.nextIndex)].texture);
				newSprite.x=sprites[i].left;
				newSprite.y=column[0].y-game.sprites.aboutSprite.height;
				newSprite.width=game.sprites.aboutSprite.width;
				newSprite.height=game.sprites.aboutSprite.height;
				column.unshift(newSprite);
				game.application.stage.addChild(newSprite);
				column.nextIndex+=1;
			}
			let firstSprite=column[0];// made for future
			if (firstSprite.y<=game.sprites.firstYPosition){
				game.application.stage.removeChild(firstSprite);
				column.shift();
				let newSprite=new PIXI.Sprite(PIXI.loader.resources[game.specificFunctions.getImageSrc(columnIndex,column.beforeIndex)].texture);
				newSprite.x=sprites[i].left;
				newSprite.y=column[column.length-1].y+game.sprites.aboutSprite.height;
				newSprite.width=game.sprites.aboutSprite.width;
				newSprite.height=game.sprites.aboutSprite.height;
				column.push(newSprite);
				game.application.stage.addChild(newSprite);
				column.beforeIndex-=1;
			}
			for (let sprite of column){
				sprite.y+=game.columnsSpeed[columnIndex];
			}

			game.columnsSpeed[columnIndex]=game.speedChangeFunction(columnIndex,game.columnsSpeed[columnIndex],game.columsStages[columnIndex]);
			game.scrollTimes.madeInPixeles[columnIndex]+=game.columnsSpeed[columnIndex];

			if ((game.columnsGoUp[columnIndex]==0)&&(Math.abs(game.scrollTimes.madeInPixeles[columnIndex])<Math.abs(game.scrollTimes.inPixeles[columnIndex]))){
				functionToEnd();
			}

		}else if(game.columsStages[columnIndex]=='running'){
			game.columnsSpeed[columnIndex]=-game.columnsSpeed[columnIndex];
			if (game.columnsSpeed[columnIndex]<0){
				game.scrollTimes.inPixeles[columnIndex]=game.scrollTimes.inPixeles[columnIndex]-game.scrollTimes.madeInPixeles[columnIndex];
			}else{
				game.scrollTimes.inPixeles[columnIndex]=game.scrollTimes.madeInPixeles[columnIndex]-game.scrollTimes.inPixeles[columnIndex];
			}
			game.columnsGoUp[columnIndex]=0;
			game.scrollTimes.madeInPixeles[columnIndex]=0;
			game.columsStages[columnIndex]='returning';
		}else if(game.columsStages[columnIndex]!='finished'){
			functionToEnd();
		}
	}
	let sprites=this.sprites.array;
	let isAllFinished=true;
	let i=0;
	for(let column of sprites){
		if (this.columsStages[i]!='finished'){
			scrollColumn(i,column,this);
			isAllFinished=false;
		}
		i+=1;
	}
	if (isAllFinished){
		this.stop();
	}
}
let getScrollTimeInPixeles=function(game){
	let returnArray=[];
	let heightOfSprite=game.sprites.aboutSprite.height
	
	for(let i=0; i<game.numberOfColumsInGame; i+=1){
		let sign=1;
		if (game.columnsSpeed[i]<0){
			sign=-1;
		}
		returnArray.push(heightOfSprite*game.scrollTimes.general[i]*sign);
	}
	return returnArray
}

export {scroll,getScrollTimeInPixeles}