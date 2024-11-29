// Code your solution in this file!
const returnFirstTwoDrivers= function(arr){
    return arr.slice(0,2);

}
let x= returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log (x);



const returnLastTwoDrivers= function (arr1){
   
    return arr1.slice(2, arr1.length);
} 
let y =returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(y);



const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers);



function createFareMultiplier(fare){
    return function (multiplier){
        return fare*multiplier;
    }
}
let result=createFareMultiplier(4);

console.log(result(4));



//takes the fare amount in creativeFareMultiplier and doubles it

const fareDoubler= createFareMultiplier(2);
   
console.log(fareDoubler(10));


//takes the fare amount in creativeFareMultiplier and triples it
const fareTripler= createFareMultiplier(3)
console.log(fareTripler(10));


const selectDifferentDrivers= function(array1, callback){

    return callback(array1);


}

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));