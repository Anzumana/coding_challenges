//---------------------------------------
//	Data definition 
//---------------------------------------
class Card {
  constructor(left,top,right,bottom) {
		this.left = left;
		this.right = right;
		this.top= top;
		this.bottom = bottom;
  }
}
Card.prototype.toString = function dogToString() {
	var convert = function convert(number){
		const blueFront 	= 	11;
		const blueBack 		= 	-11;
		const purpleFront	= 	12;
		const purpleBack	= 	-12;
		const grayFront		= 	15;
		const grayBack		= 	-15;
		const redFront 		= 	16;
		const redBack 		= 	-16;
		switch(number){
			case blueFront : 
				return 'blueFront';
			case blueBack: 
				return 'blueBack';  	
			case purpleFront: 
				return 'purpleFront'; 	
			case purpleBack: 
				return 'purpleBack'; 	
			case grayFront: 
				return 'grayFront'; 	
			case grayBack: 
				return 'grayBack'; 	
			case redFront: 
				return 'redFront'; 	
			case redBack: 
				return 'redBack'; 	
			default:
				return "error in element";
		}
	}
	  var result = '(' + convert(this.left)  + ' '  + convert(this.top) + ' ' + convert(this.bottom) + ' ' + convert(this.bottom) + ')';
		  return result;
}
class Game {
  constructor(cardsArray) {
		this.cards=cardsArray;
  }
}


//---------------------------------------
//	Function Defintions 
//---------------------------------------
/**
	* Rotate the card clockwise (to the right )
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
//print each array permutation of the game array 
/**
	* returns an array that contains every permutation of our game array
	* @param game array initial game array
	* @return array containing every permuation of the game array
	*
*/
function print(array, n){
	if(array.length==1) {
		//return n.push(array[0]);
		return console.log(n + "," +  array[0]);
	}
	for(var i = 0;i<array.length;i++){
		var oldValue  = [];
		if(n!==undefined){
			oldValue.push(n);
		}
		var tmp = array.slice();
		oldValue.push(tmp.splice(i,1));
		print(tmp, oldValue);
	}
}
/**
	* 
	*
*/
function rotate(array,n){
}
function fact(x){
	if(x==1) { return 1;}
	return x*fact(x-1);
}
/**
	* Checks if the game was solved and all card are in the
	* right places
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
	console.log('Solution correct');
	console.log(game);
	solved=true;
	return true;
	console.timeEnd('checkSolution');
}

function main(){
	const blueFront 	= 	11;
	const blueBack 		= 	-11;
	const purpleFront	= 	12;
	const purpleBack	= 	-12;
	const grayFront		= 	15;
	const grayBack		= 	-15;
	const redFront 		= 	16;
	const redBack 		= 	-16;
	var soluion = [];
	var solved = false;
	console.log('Knobel Calculations');
	console.log('x x x');
	console.log('x x x');
	console.log('x x x');
	//console.log(game);

	var card0= new Card(grayFront, redBack, blueBack, purpleFront);
	var card1 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card2 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card3 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card4 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card5 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card6 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card7 = new Card(grayFront, redBack, blueBack, purpleFront);
	var card8  = new Card(grayFront, redBack, blueBack, purpleFront);
	var cardsArray = [card0,card1,card2,card3,card4,card5,card6,card7,card8];
	var game = new Game(cardsArray);
	//console.log(game);
	var result;
	//console.log(fact(4));
	var rotateArray= [card0,card1];
	var array= [1,2,3];
	console.log('this is our array');
	console.log(array);
	console.log(print(array));
	console.log(print(rotateArray));

	//create 1 configuration 
	//create Array size game.length array of arrays

//1234	

//234

//2
//1
	//1  23.length
	//123

	//1
	//2


	
	//for(var i = 0;i<9 && !solved;i++ ){
		//rotateCard(game[i]);
		//checkSolution(game);
	//}
//create every configuration for the way the cards could be layed out.9! possibilities save those
//take the first possible configuration and rotate all the cards to every possible position.
//if sucessfull done.
//do until possibleSolutions array is empty
			

	
}
//---------------------------------------
//	Code Execution 
//---------------------------------------

main();
