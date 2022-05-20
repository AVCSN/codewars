// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  let finalOrder = []
  let array = words.split(' ')
  for (i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        finalOrder.push(array[j]);
      }
    }
  }
  return finalOrder.join(' ')
}
