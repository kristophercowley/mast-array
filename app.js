//Write a function called cubed(x) that accepts an argument x and returns its cubed value
function cubed(x){
    return x * x * x;
}

//write a function called power that accepts two args (base, exp) and returns the power  
function power(base, exp){
    var result = base;
    for (var i = 0; i < exp.length; i++) {
        result = result * base;    
    }return result;
}
/*
* write a function called logArr that will log each item in an array
*/
function logArr(array){
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);       
    }
}
/**
    Fill in the necessary parts of the findById function below
*/
var users = [{id: 1, name: 'Jon'},{id: 2, name: 'Yuli'},{id: 21, name: 'Peter'},{id: 17, name: 'St. MaryLou de la playa carmen'},{id: 51, name: 'Doug'},{id: 881, name: 'Paul'},{id: 0, name: 'Jon'},{id: 999, name: 'Timma'}]

function findById(id){
for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
        return users[i];
    }
    
}
}
findById(17) //Should return {id: 17, name: 'St. MaryLou de la playa carmen'}
findById(1000) //Should return 4 {error: 'Sorry that user id could not be found'} ****Upshift Challenge

//Write a function that accepts a name argument and will loop over theBand and return the band member's name and the instrument that he/she plays
//use string concat to return the sentence below 
// [band-members-name] is in the band and plays the [band-members-instrument];

var theBand = {
    members: [{
        name: 'Johnny P',
        instrument: 'Sax'
    },{
        name: 'River',
        instrument: 'Drums'
    },{
        name: 'Kris',
        instrument: 'Guitar'
    }]
}
 
 function find(name){
     for (var i = 0; i < theBand.length; i++) {
         if (theBand[i].name === name) {
          return theBand[i].name + " is in the band and plays the " + theBand[i].instrument;   
         }
         
     }
 }
//write a fn that accepts two arguments a (sentence, letter) have the function return the number of times that letter repeats in the sentence


//write a fn called pythagorean(a,b) have it return the value of c^2


/**
    Best Practice: Constructor functions are the only variables that start with an uppercase letter
    The keyword this refers to a single instance
    When calling or invoking a constructor function you must use the *** new *** keyword
*/

//Write a CellPhone constructor function that accepts the following arguments (string: brand, number: screenSize, string: carrier)
function CellPhone(brand,screenSize,carrier){
    this.brand = brand;
    this.screenSize = screenSize;
    this.carrier = carrier;
}
var myPhone = new CellPhone("HTC",4,"T-Mobile");
//Write a function called sumAll that accepts an array of numbers and returns the sum of all items in the array
function sumAll(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
    sum += array[i];      
    }return sum;
}
//write an isEqual function that accepts two arguments and returns a boolean (3,'3') returns false ('abc', 'abc') returns true
function isEqual(a,b){
    if (a === b) {
        return true;
    }else {
        return false;
    }
}
//write a function called inStock that accepts a productId or productName and returns the product if it is in stock based on its quantity
function inStock(name){
    for (var i = 0; i < products.length; i++) {
        if (products[i].name === name && products[i].quantity > 0) {
            return products[i];         
    }
   
}

var products =[{
    id: 123,
    name: 'Squaty Potty', 
    url: 'https://www.youtube.com/watch?v=YbYWhdLO43Q',
    quantity: 5,
    price: 19.99
},{
    id: 124,
    name: 'Design Your Own Cage', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/e93da6b3583ea782f5b3814305c16960.jpeg',
    quantity: 0,
    price: 1.99
},{
    id: 125,
    name: 'Worlds Best Chap Stick', 
    url: 'http://res.cloudinary.com/spartz/image/upload/c_lfill,f_auto,fl_lossy,q_60,w_806/v1/prod/images/dde306374cd35acff10f52eb4c586b5d.jpeg',
    quantity: 280,
    price: 0.99
}]