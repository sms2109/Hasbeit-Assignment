let string = 'INDIA';
let arr = string.split(''); 
arr.splice(3, 0, ...'ONES'); 
let result = `'${arr.join('')}'`;

console.log(result);  
