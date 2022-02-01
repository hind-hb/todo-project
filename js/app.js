
console.log("hi")
var userName = prompt("please Enter your name:")
console.log(userName)
var gender = prompt("please Enter your gender:Male or Female")
console.log(gender)
var age=prompt("please Enter your age:")
console.log(age)
if (age <=0 ){
    alert ("the age can't be less or equal to zero")
}
var genderConv = gender.toLowerCase();
var genType ="";
switch(genderConv){
    case "female":{
        genType= "Ms";
        break;
    }
    case "male":
        {genType = "Mr";
        break;}
    default:
        {genType = "";}

    }

        

console.log(genType);
 var confbutton ="Do you want to skip welcoming message ?"

  
  if (confirm(confbutton) == true) {
    text = "";
  } else {
    text = "You canceled!";
    alert ("welcome "+ genType + " " +userName);
  }
  


  const myArray= [];

  function promToInput (arr){
  var firstInput=prompt("are you at university? hint: yes, y, no ,n")
   while (firstInput !=="no" || firstInput !=="yes" || firstInput !=="y" ||  firstInput !=="n")
      if (firstInput == "")
          firstInput = prompt("are you at university? hint: yes, y, no ,n");
      
      else break;
  
  
  var secInput=prompt("are you at marriage? hint: yes, y, no ,n")
  while (secInput !=="no" || secInput !=="yes" || secInput !=="y" ||  secInput !=="n")
      if (secInput == "")
            secInput = prompt("are you at university? hint: yes, y, no ,n");
      else break;
  
  var thirdInput=prompt("Do you have childrens? hint: yes, y, no ,n")
  while (thirdInput !=="no" || thirdInput !=="yes" || thirdInput !=="y" ||  thirdInput !=="n")
      if (thirdInput == "")
      thirdInput = prompt("are you at university? hint: yes, y, no ,n");
      else break;
  
  console.log('first input is ');
  console.log(firstInput)
  console.log('second input is ');
  console.log(secInput)
  console.log('third input is ');
  console.log(thirdInput);
  
  
  arr.push(firstInput);
  arr.push(secInput);
  arr.push(thirdInput);
  
  console.log("your array in the right order :");
  printArray(arr);
  console.log("reversed");
  revArray(arr);
  }
  
  
  function printArray (arr)
  {
    for (var i=0; i<3; i++)
  
      console.log(arr[i]);
  }
  
  
  function revArray (arr)
  {
    const newArray = [];
    var j =2;
    for (var i=0; i<3; i++){
         newArray[j]= arr[i];
         j--;
    }
          printArray(newArray)
  }
  
  
  
  promToInput(myArray);
  
   
  
