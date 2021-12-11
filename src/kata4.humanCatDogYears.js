const humanCatDogYears = number => {
//when a number is passed for human years e.g. 10 it shoudl return
//an array of three numbers // first number is human, second cat years
// and thrid dog years
let catYears = 0;
let dogYears = 0;

//for (let i=1; i <= number; i++)
 //{
    if (number === 1) {
        catYears = 15;
        dogYears = 15;
    } if(number === 2) {
        catYears = 24;
        dogYears = 24;
    } if (number >= 3 ) {
        catYears = 24 + (number - 2) * 4;
        dogYears = 24 + (number - 2) * 5;
    }
//}
    return [number,catYears,dogYears]
};


module.exports = humanCatDogYears;
