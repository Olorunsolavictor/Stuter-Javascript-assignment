/*question 1 */
function printSum() {
    let myArray = [15, 32, 20, 4, 35];
    let sum = 0;
    for (let i = 0; i < myArray.length; i++)
    {sum += myArray[i];}
    console.log(sum)

}
printSum()

/*question 2*/

let a = [3, 8, 5]
let b = [1, 6, 9]

let aScore = 0;
let bScore = 0;
let finalScore = [];
for (let i = 0; i < 3; i++)

if (a[i] > b[i]) {
    aScore++;
}
else if (b[i] > a[i]) {
    bScore++;
}
else if (a[i] > b[i]) {
    bScore + 0;
    aScore + 0;
}

finalScore.push('Alice\'s ' + 'score' + ': ' + aScore);
finalScore.push('Bob\'s ' + 'score' + ': ' + bScore);
console.log(finalScore);


/*question 3 */
let newArray = [3,-2,-5,7,0]
let numP = 0;
let numN = 0;
let numZ = 0;
function ratio() {
    let numP = 0;
    let numN = 0;
    let numZ = 0;
    for (let i = 0; i < newArray.length; i++)
    {
     if (newArray[i] > 0){
         numP++;
     }
 
    else if (newArray[i] < 0){
        numN++;
    }
   else if (newArray[i] === 0) {
    numZ++;
    }
   }

   console.log(parseFloat(numP/newArray.length))
   console.log(parseFloat(numN/newArray.length))
   console.log(parseFloat(numZ/newArray.length))
};
ratio()

  /*Question 4*/

function firstFunction (a, b) {
    let sum = a + b
    return sum;

}
console.log(firstFunction(5, 6));



