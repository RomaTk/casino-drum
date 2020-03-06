let createGame=function(options){
	let functionAfterLoadingImages=function(){
		let setColumnsBasicProperies=function(game){
			game.scrollTimes.madeInPixeles=[];
			game.columnsSpeed=options.getSpeedForEachColumn();
			game.columnsGoUp=options.getGoUpForEachColumn();
			game.columsStages=[];
			for(let i=0; i<game.numberOfColumsInGame; i+=1){
				game.scrollTimes.madeInPixeles.push(0);
				game.columsStages.push('running');
			}
		}
		let gameLoop=function(delta) {
			game.scroll(delta);
		}
		game.sprites=setImages(application,game.imageSrcArray,game.numberOfColumsInGame,game.specificFunctions.getImageSrc);
		
		application.ticker.add(delta => gameLoop(delta));
		game.run=function(){
			if (game.running==false){
				game.running=true;
				game.scrollTimes.general=options.getScrollTimes();
				setColumnsBasicProperies(game);
				game.scrollTimes.inPixeles=getScrollTimeInPixeles(game);
				application.ticker.start();
			}
		};
		game.stop=function(){
			game.running=false;
			application.ticker.stop();
		};
		game.application.renderer.render(application.stage);
	}
	let application=createApplication(options.application);
	let imageSrcArray=options.images.srcs;
	let game={
		'run':null,
		'stop':null,
		'nodeElement':application.view,
		'application':application,
		'running':false,
		'sprites':null,
		'columnsSpeed':null,
		'columnsGoUp':null,
		'columsStages':null,
		'scroll':scroll,
		'imageSrcArray':imageSrcArray,
		'specificFunctions':{
			'getImageSrc':options.getImageSrc
		},
		'numberOfColumsInGame':options.numberOfColumns,
		'scrollTimes':{
			'general':null,
			'inPixeles':null,
			'madeInPixeles':null
		},
		'speedChangeFunction':options.speedChangeFunction,
	}
	uploadImages(imageSrcArray,functionAfterLoadingImages);
	return game;
}
import {createApplication , uploadImages} from './modules/common.js'
import {setImages} from './modules/setImages.js'
import {scroll,getScrollTimeInPixeles} from './modules/scroll.js'
export {createGame}
