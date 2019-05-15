var persondetails = {};
var fname = {firstName : 'Vivek'};
var lname = { lastName: 'Dhiman'};
var occup = { occupation: 'Software Engineer'};
var nationality = {country: 'India'};

console.log(persondetails);

Object.assign(persondetails, fname, lname, occup, nationality);

console.log("After mixin");
console.log(persondetails);