const blueFront 	= 	11;
const blueBack 		= 	-11;
const purpleFront	= 	12;
const purpleBack	= 	-12;
const grayFront		= 	15;
const grayBack		= 	-15;
const redFront 		= 	16;
const redBack 		= 	-16;
var A = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var B = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var C = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var D = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var E = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var F = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var G = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var H = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var I = {left:grayFront, top:redBack, right:blueBack, bottom:purpleFront};
var game = [A,B,C,D,E,F,G,H,I];
/**
	* Rotate the card to the clockwise (to the right )
	* @param card
	*
*/
function rotateCard(card){
	var tmp = {};
	tmp.left = card.left;
	tmp.right = card.right;
	tmp.bottom = card.bottom;
	tmp.top = card.top;
	
	for(var i=0;i<4;i++){
		card.left = tmp.bottom;
		card.top = tmp.left;
		card.right= tmp.top;
		card.bottom = tmp.right;
	}
	return card;
}

/**
	* Checks the solution for correctness
	* @param game
	* @return bool
	*
*/
function checkSolution(game){
	console.time('checkSolution');
	// check left column 
	if( (game[0].right+game[1].left != 0) || (game[0].bottom+game[3].top != 0) ) return false;
	if( (game[3].right+game[4].left != 0) || (game[3].bottom+game[6].top != 0) ) return false;
	if( (game[6].right+game[7].left != 0) ) tryNewPosition();
	
	// check middle column 
	if( (game[1].right+game[2].left != 0) || (game[1].bottom+game[4].top != 0) ) return false;
	if( (game[4].right+game[5].left != 0) || (game[4].bottom+game[7].top != 0) ) return false;
	if( (game[7].right+game[8].left != 0) ) return false;
	// check right column 
	if( (game[2].bottom+game[5].top != 0) ) return false;
	if( (game[5].bottom+game[8].top != 0) ) return false;
	return true;
	console.timeEnd('checkSolution');
}
/**
	* Checks tries a new positon
	*
*/
function findSolution(game){
	while(checkSolution(game)!=true){
		console.log('try to find a solution');
	}
	// rotate every card to every position
	// switch cards around in the array to each position possible
	console.log('tryNewPosition');
}
function main(){
	console.log('Knobel Calculations');
	console.log('x x x');
	console.log('x x x');
	console.log('x x x');
	console.log(game);
	console.log(findSolution(game));
}
main();
