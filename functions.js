//#1
function combineWords(word1, word2){
    console.log(word1 + word2);
}
combineWords('dog','house');

//#2
function repeatPhrase(phrase, n){
    for (i=0; i<n; i++){
        console.log(phrase);
    }
}
repeatPhrase("Hello",5);

//#3
function toTheNthPower(number, power){
  var total=1;
  for(var i=0;i<power;i++){
      total=total*number;
      }
      return total;
  }

     toTheNthPower(4,5);



//#4
function areaOfACircle(radius){
    var radiusSquared = Math.pow(radius,2);{
        console.log(radiusSquared*3.14159);
        }
    }
    areaOfACircle(2);

//#5 This one is not printing out..I've tried it several ways but it continues to read "syntax error: unexpected token {" WHY IS THIS HAPPENING
pythagoreanTheorem(a,b){
    var c= Math.sqrt((a*a)+(b*b));
    return c;
}
pythagoreanTheorem(3,4);

//#6

function isXEvenlyDivisibleByY(x,y){
    console.log(x%y===0);
}
isXEvenlyDivisibleByY(99,3)

//#7 - took from solutions. Had absolutely no clue how to get it this one. Andrea shared some notes with me on how this works. Super helpful!
function countVowels(word) {
var count = 0;
var word = word.toLowerCase();
for(var i = 0; i<word.length;i++) {
    if(word[i]==="a"||word[i]==="e"||word[i]==="i"||word[i]==="o"||word[i]==="u"||word[i]==="y") {
        count++;
    }
}

return count;
}
countVowels("stealing");

//#8 could not seem to find solution on my own, but the code makes sense now that i see it!!
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var tier = '';

		for(var j = 0; j < i; j++) {
			tier += '*';
		}

		console.log(tier);
	}

//#9 Tried to use what I gathered from #8, but still had problems.

function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
		}
		for(var k = 0; k < i; k++) {
			tier += '* ';
		}
		console.log(tier);
	}
}
