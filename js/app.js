'user strict';

var name= prompt('Enter your name here : ');
console.log('my name is : ', name);

var   gender = prompt('Enter your gender here :   ');
 
if (gender = 'female') {
   
console.log('my gender is  : ', gender);}
else if (gender='male') {

    console.log('my gender is  : ', gender);
}



var age = prompt('Enter your age here : ');
console.log('enter age  : ', age);
value= age

if (value <= 0) {
    alert('Age must be greater than zero');
  
}
 

var result = confirm('are you Sure');
console.log('Confirm result is : ', result);

if (result == true) {
    if(gender='female ')
    {

    x = "welcome mis "+name;
    alert (x);}

    else if (gender='male')
    {
        x = "welcome mr "+name;
    alert (x);}
}

var ques = [array.question1,array.question2,array.question3];

function question1(array) {
    var array = [];
    let person = prompt("are you happy");
    if (person = "yes") {
      document.write( array.push("yes"));
 
    }
     else if (person="no") {
        document.write(array.push("no"));}
    else 
     {  document.write(array.push("invalid string "));}
    
 return document.write(array) ;

  }

  function question2(array) {
    var array = new Array();
    let person = prompt("Are you confident in yourself?");
    if (person = "yes") {
        document.write(array.push("yes"));
 
     }
      else if (person="no") {
        document.write(array.push("no"));}
     else 
     {  document.write(array.push("invalid string "));}
    return array ;

  }

  function question3(array) {
    var array = new Array();
     let person = prompt("did you cry today?");
     if (person = "yes") {
        document.write(array.push("yes"));
 
     }
     else if (person="no") {
        document.write(array.push("no"));}
     else 
     {  document.write(array.push("invalid string "));}
 return array ;

  }
  console.log(ques);

