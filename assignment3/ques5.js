let string = "My nam is sheshkaran solanki"
function correctfn(string, wrong, correct){
    return string.replace(wrong,correct);
}
let correct = correctfn(string,"nam","name");
console.log(string);
console.log("correct sentance : ",correct);

