// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  let vowelCheck = str.split('')
  for (let vowel of vowelCheck) {
    vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' ? vowelsCount++ : vowelsCount + 0
  }
  return vowelsCount;
}
