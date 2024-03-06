//          Import/Export

//  Sender.js
let numbers=[1,2,3,4]
let student={
    name:"mohan",
    id:38,
    arrears:1
}
export {numbers}            //export multiple things by {} braces
export default student      //single thing can export by the default 

//Receiver.js
import student,{numbers} from "./sender";       //default import without braces, multiple import by braces
console.log(numbers)
console.log(student)

/*-------------------------------------------------------------------------------------------------------- */
//      Spread operator

//      spread an array and adding new element

let number1=[1,2,3,4]
console.log(number1)
let number2=[...number1,5]
console.log(number2)


//      spred an object adding or replacing new attributes

let student={
    name:"vinoth",
    id:25
}
console.log(student)
student={...student,name:"vasanth"}
console.log(student)
student={...student,arrears:2}
console.log(student)


//      spread a two array and form new array

let num1=[1,3]
let num2=[2,4]
let num3=[...num1,...num2]
num3.sort()
console.log(num3)

/*-------------------------------------------------------------------------------------------------------- */
//      Destructuring

//      Destructuring an array into individual element

let colors = ["red", "blue", "green"];
let [r, b, g] = colors;
console.log(r);


//      Destructuring an object into individual values

let student = {
  name: "mohan",
  id: 25,
};
let { name, id } = student;
console.log(name);
console.log(id);


//      Through function destructuring a array

let numbers=[1,2,3]
const funNumbers=(props)=>{     // const numbers=([one])=>{
    let [one]=props
    console.log(one)
}
funNumbers(numbers)


//      Through function destructuring a object

let staff={
    name:"vasanth",
    id:11
}
const funStaff=(props)=>{       //const funStaff=({name})=>{
    let {name}=props
    console.log(name)
}
funStaff(staff)


//      REACT functional components

const functionalComponet=({item})=>{
    console.log(item)
}
functionalComponet({item:"Briyani",amount:500})
