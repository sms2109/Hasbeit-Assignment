//Q2
let arr = ["apple","bnana","orange","mango","grapes"];

console.log("second fruit of arr : ",arr[1]);

//Q3
function fun(arr){
    console.log(arr);
    arr.push("papaya","pineapple")
    console.log("arr after push method : ",arr);
    arr.pop();
    console.log("arr after pop method : ",arr);
}
fun(arr);