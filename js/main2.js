import {createGame}from './createGame.js'





let getArrayOfImagesSrc=function(){
	let imageSrcArray=[];
	for(let i=0; i<10; i+=1){
		imageSrcArray.push(['images/M0'+i+'_000.jpg']);
	}
	for(let i=10; i<13; i+=1){
		imageSrcArray.push(['images/M'+i+'_000.jpg']);
	}
	return imageSrcArray
}
let getSpeedForEachColumn=function(){//how many pixeles do at the beginning
	let returnArray=[];
	for(let i=0; i<numberOfColumns; i+=1){
		returnArray.push(-numberOfColumns+i);
	}
	return returnArray
}
let getGoUpForEachColumn=function(){//how many pixeles return after necessary position
	let returnArray=[];
	for(let i=0; i<numberOfColumns; i+=1){
		returnArray.push(-40);
	}
	return returnArray
}
let speedChangeFunction=function(columnIndex,nowSpeed,columnStatus){//how change speed in each step
	//columnStatus - running or returning
	return nowSpeed;
}
let getImageSrc=function(index,row){
	//index - very specific meaning
	return imageSrcArray[Math.floor(Math.random() * Math.floor(imageSrcArray.length))]
}
let getScrollTimes=function(){// how many pictures to scroll
	let returnArray=[];
	maxTimes=maxTimes-numberOfColumns;
	let oneColumnTimes=Math.floor(Math.random() * (maxTimes - minTimes)) + minTimes;
	for(let i=0; i<numberOfColumns; i+=1){
		returnArray.push(oneColumnTimes);
		oneColumnTimes=oneColumnTimes+1;
	}
	return returnArray
}

let maxTimes=30;
let minTimes=10;
let numberOfColumns=8;
let imageSrcArray=getArrayOfImagesSrc();
let game=createGame({
	'application':{
		'width': 800,
		'height': 500,
		'antialias': true,
		'transparent': false,
		'resolution': 1
	},
	'images':{
		'srcs':imageSrcArray
	},
	'numberOfColumns':numberOfColumns,
	'getSpeedForEachColumn':getSpeedForEachColumn,
	'getGoUpForEachColumn':getGoUpForEachColumn,
	'getImageSrc':getImageSrc,
	'getScrollTimes':getScrollTimes,
	'speedChangeFunction':speedChangeFunction
});
document.body.appendChild(game.nodeElement);

let button=document.createElement("button");
button.innerText="Scroll";
document.body.appendChild(button);
button.addEventListener('click',function(){game.run()});
