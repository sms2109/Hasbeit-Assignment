let str = "sheshkaranSolankiMBMUniversity";
console.log(str);
console.log("total alphabets in str : ",str.length);

function countVowel(str) {
  let countVowel = 0;
  let countConso = 0;
  for (let i of str) {
    if ('aeiou'.includes(i.toLowerCase())) {
    countVowel++;
    }
    else{
        countConso++;
    }
  }
  console.log("total vowels are : " ,countVowel);
  console.log("total consonent are : " ,countConso);
}
countVowel(str);