// var firstname = prompt("Enter your name");
// var fathername = prompt("Enter your father name");
// var number1 = Number(prompt("Enter your first number"));
// var number2 = Number(prompt("Enter your second number"));
// var input = (firstname.toUpperCase() + fathername.toUpperCase())
// var input2 = (firstname.trim() + fathername.trim())
// var fullinput = [number1 + number2 , number1 - number2, number1 * number2 , number1 / number2]

// alert(number1 + number2);
// alert(number1 - number2);
// alert("your product is" + number1 * number2);
// alert("your division is" + number1 / number2);

// alert (input + "your final calcultion is"+fullinput)

// var promptuser = prompt("enter your desired day");
//  promptuser = promptuser.toLowerCase()
 

// switch(promptuser){
//     case "sat":
//         alert("this is saturday");
//         break;
//         case "sun":
//             alert("this is sunday")
//         default :
//         alert("invalid day")
// }
// var result = ((promptuser - 100) * 10) + 1000;

// switch(promptuser){
//     case "11":
//         alert("the number is given greater than 10")
//         break;
//         case "100" :
//             alert ("the value is equal to 100")
// }

// var obj ={
//     name : 'ahmer',
//     age : '28',
//     gender : 'male',
//     natinality : "pakistan"
// }

var stds = [
    {name : 'touseef',
        age : '28',
        gender : 'male',
        natinality : "pakistan"},
    {name : 'touseef',
        age : '18',
        gender : 'male',
        natinality : "pakistan"},
    {name : 'naseem',
        age : '18',
        gender : 'male',
        natinality : "pakistan"}
];


console.log(stds[2].natinality)
for (var i =0; i <= stds.length ; i++){
    if (stds[i].name === "touseef"){
        console.log(stds[i])
    }
}