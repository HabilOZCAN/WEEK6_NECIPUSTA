/**
 * In the first part all animals genarated randomly.
 * In the second part we assume that we don't know the number of 
 * animals.
 * The results are shown with console.log "funktion" 
 * @habilozcan@gmail.com
 */

//FIRST PART --generation of farm whith chickens, cows and pigs 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const maximumanimal = 15; //generate a random number between 0 - (maximumnumber-1) 
//Generate random number for the number of chickens within range 20
let chickensNumber = getRandomInt(maximumanimal);
console.log(chickensNumber + " chickenNumber");

//Generate random number for the number of cows within range 20
let cowsNumber = getRandomInt(maximumanimal);
console.log(cowsNumber + " cowsNumber");

//Generate random number for the number of sheeps within range 20
let sheepsNumber = getRandomInt(maximumanimal);
console.log(sheepsNumber + " sheepsNumber");

//Generate random number for the number of pigs within range 20
let pigsNumber = getRandomInt(maximumanimal);
console.log(pigsNumber + " pigsNumber");

//totalNumber re
let totalAnimalNumber = chickensNumber + pigsNumber +sheepsNumber + cowsNumber;
console.log(totalAnimalNumber + " totalNumber");
let farmList = new Array(totalAnimalNumber); //represent the farm
let index = 0;
//while loop used for fill the "farmList" with the animal names
while (index < totalAnimalNumber) {
    randTemp = getRandomInt(4); //0, 1, 2, 3 
    switch (randTemp) {
        case 0: //0 represents chickens
            if (chickensNumber > 0) {
                farmList[index] = "chicken";
                index++; //to reach consecutively next farmList[] element's index.
                chickensNumber--; //helps that the while loop not works if all chicken are pushed in the farmList[] 
            }
            break;
        case 1: //1 represents cows
            if (cowsNumber > 0) {
                farmList[index] = "cows";
                index++;
                cowsNumber--;
            }
            break;
        case 2: //2 represents sheeps
            if (sheepsNumber > 0) {
                farmList[index] = "sheeps";
                index++;
                sheepsNumber--;
            }
            break;

        case 3: //3 represents pigs
            if (pigsNumber > 0) {
                farmList[index] = "pigs";
                index++;
                pigsNumber--;
            }
            break;
    }
}
//SECOND PART --leg calculation--
// In this part we assume that the number is animals in the farmList unknown.
farmList.forEach(function (item, index) {
    console.log(item, index);
});
let chickenIndexList = []; //this array used for calculation of chinken number.
let legs = 0;
//while chicken are the only animal have two feet we callculated how many chicken in the farm
farmList.forEach((element, index) => element == "chicken" ? chickenIndexList.push(index) : null);
legs += chickenIndexList.length * 2; //added chicken legs;
legs += (farmList.length - chickenIndexList.length) * 4; //pigs and cows have 4 legs =) 
console.log("the number of all legs are here =)) = " + legs);