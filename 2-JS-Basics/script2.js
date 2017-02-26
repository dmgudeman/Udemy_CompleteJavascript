var years1 = [1998, 1985, 1994, 2014, 1973];
var years2 = [1966, 2009, 1993];
var ages = [];
var NOW = 2017;
var MAJORITY = 18;

// for (var i=0; i<years.length; i++){
//     ages[i] = 2016 - years[i];
// }

// for (i=0; i<ages.length;i++){
//     if(ages[i] >= 18){
//         console.log('Person is ' + ages[i] + ' years old, and is of full age.')
//     } else {
//         console.log('Person is ' + ages[i] + ' years old, and is NOT of full age.')

//     }
// }

var getAges = function( years ){
    var ages= []
    for (var i=0; i < years.length; i++){
        var age = NOW - years[i]; 
       ages.push(age);
    }
        console.log(ages);
    return ages;
}

var printAges = function (ages){
    var bools = [];
    for (var i=0; i < ages.length; i++){
        let sparky =  (ages[i] >= MAJORITY)
        bools.push(sparky);
    }
    console.log(bools);
    return bools;
}
var printFullAge= function(years){
    let ages=getAges(years);
    printAges(ages);
}

printFullAge(years1 );
printFullAge(years2);
