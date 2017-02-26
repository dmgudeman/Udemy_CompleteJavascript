var johnAge = 25;
var bobAge = 25;
var johnHeight = 180;
var bobHeight = 181;

var johnScore = johnAge * 5 * johnHeight;
var bobScore = bobAge * 5 * bobHeight;


if (johnScore > bobScore ){
    console.log("John wins with a score of " + johnScore + " vs " + bobScore)
} else if (johnScore === bobScore ){
    
    console.log("John's score and Bob's score are equal at " + johnScore);
} else {
    console.log("Bob wins with a score of " + bobScore)

}