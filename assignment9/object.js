let person = {
    name : "karan",
    age : 19,
    occupation : "student",
};

let greet = (person) => {
    console.log(`Hello My name is ${person.name} , my age is ${person.age} , and i am a ${person.occupation};
        Thank you!!`);
}

greet(person);

let object = {
    width : 15,
    height : 20,
};

let area = (object) => {
    return object.width*object.height;
}
let result = area(object);
console.log("area is : ",result);

//Q7
const user = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: "coding",
  address: "Jodhpur",
};
function getObjectKeys(obj) {
    return Object.keys(obj);
}
let keys = getObjectKeys(user);
console.log(keys); 

//Q8 obj1:user,obj2:person

function mergeObjects(user,person){
    return Object.assign(user,person);
}

let mergedObject = mergeObjects(user,person);
console.log(mergedObject);

//Q9
let numbers = [1,2,3,4,5,6,7,9,8,10];
let sum = numbers.reduce((sum,el)=>sum+el);
console.log(sum);