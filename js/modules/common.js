let createApplication=function(aplicationOptions){
	let stopTicker=function(ticker){
		ticker.autoStart = false;
		ticker.stop();
	}

	let isOnlyCanvasApi=false;
    if(!PIXI.utils.isWebGLSupported()){
		console.log("WebGL is not supported");
		isOnlyCanvasApi=true;
	}

	let application = new PIXI.Application({ 
		width: aplicationOptions.width,
		height: aplicationOptions.height,
		antialias: aplicationOptions.antialias,
		transparent: aplicationOptions.transparent,
		resolution: aplicationOptions.resolution,
		forceCanvas: isOnlyCanvasApi 
	});
	stopTicker(application.ticker);
	
	return application
}

let uploadImages=function(imageSrcArray,functionAfterLoadingImages){
	
	PIXI.loader.add(imageSrcArray).load(functionAfterLoadingImages);
}

export {createApplication , uploadImages}