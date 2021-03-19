//create an array here
varr myArray [2, 4, 0, 8, 10];
//end of creating an array
function myArrayFunction(arr) {
var myItems = [ ...arr];
//code below
return myItems
//code under
}
console.log(myArrayFunction());
module.exports = myArrayFunction;
