function countWords(paragraph) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < paragraph.length; i++) {
    const char = paragraph[i];

    if (char !== ' ' && char !== '\n' && char !== '\t') {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return count;
}


const para = "This is a sample paragraph with some words.";
console.log(countWords(para)); 
