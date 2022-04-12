const sentence = "hello there from lighthouse labs"; 

//make function that prints one character
const printOne = (input, i) => process.stdout.write(input[i])


//make function that types
let timeVal = 0;
const typePhrase = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      printOne(sentence, i)
    }, timeVal)
    timeVal += 50;
  }
  return timeVal;
}

//call typing function
typePhrase(sentence);

//add a new line after calling function
setTimeout(() => {
  process.stdout.write('\n')
}, (timeVal));




