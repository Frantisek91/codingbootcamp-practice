// DATA TYPES: Number, string, array, object

/* let number1 = "35";
let number2 = "40";

alert ("My favourite number is " + number2); */

// NAMING CONVENTIONS: variables can contain letters, numbers, underscores, dollar signs; but they should not start with number 
// var are also case sensitive!!

/* var test = "This is a test";
var Test = "This is another test";

alert (test) */

//styles of variables: camel case (myFavouriteNumber); underscore_style (my_favourite_number); partial case (MyFavouriteNumber);

//ARRAYS = used to store multiple values within one variable

/* let colors = ["red", "blue", "green"];
alert (colors[0]); */

/* let colors = new Array("white", "yellow", "orange");

colors [3] = "black" 
colors.push("purple") preferred way of adding variables

alert (colors[3]); */

/* let numbers = [5, 77, 6, 25, "Seven", 37];


alert(numbers.sort()).reverse (); .length; */

//LOOPS = the FOR LOOP, the WHILE LOOP, the FOR EACH LOOP 

//FOR LOOP
/* for (let i = 0; i <= 10; i++) {
    console.log ("I love the number "+ i);
} */

//WHILE LOOP 
/* let i = 0;
 while (i < 10) {
     console.log (i);
     i++;
 }
 */

 //FOR EACH LOOP work with arrays

/*  let numbers = [1,5,63,82,74];
 
 numbers.forEach(function(number){
     console.log(number);
 }); */

 //CONDITIONALS if x else and so on
 //tend to use === to guarantee match
 // && = AND ; || = OR

/*  let var1 = 3;
 let var2 = 4;
 if(var1 == var2 || var1 ==3){
     console.log("This is true");
 } else {
     console.log("This is false");
 }
 */

/*  var fruit = "grapes";

 switch(fruit){
    case "banana":
        alert("I hate bananas");
        break;
    case "apple":
        alert("I love apples");
        break;
    case "orange":
        alert("Oranges are ok");
        break;
    default:
        alert("I love all other fruits");
        break;
 } */

 //OBJECTS
 //OBJECT LITERAL - for funciton () are needed, otherwise NOT   

/*  var person = {
     firstName: "Frantisek",
     lastName: "Demi",
     age: 27,
     children: ["Erik", "Ludmila"],
     address: {
         street: "555 ulice",
         city: "Jirkov",
         state: "CZ"
     },
     fullName: function () {
         return this.firstName + " " + this.lastName;
     }
 }

 console.log(person.fullName()); */

 //OBJECT CONSTRUCTOR

/*  var apple = new Object();
 apple.color = "red";
 apple.shape = "round";

 apple.describe = function (){
     return "An apple is the color "+this.color+" and is the shape "+this.shape;
 }

 console.log(apple.describe); */

 //CONSTRUCTOR PATTERN
/*  function Fruit(name,color,shape){
     this.name = name;
     this.color = color;
     this.shape = shape;

     this.describe = function () {
         return "A " +this.name+" is the color "+ this.color+ " and is the shape "+this.shape; 
     }
 }

 var apple = new Fruit("apple", "red", "round");
 var melon = new Fruit("melon", "green", "round");

 console.log(melon.describe()); */

 let users = [
     {
         name: "John Brock",
         age: 30
     },
     {
         name:"Mark Smith",
         age:40
     },
     {
         name: "Shelly McCallister",
         age:30
     }
 ];

 console.log(users [0].name);
