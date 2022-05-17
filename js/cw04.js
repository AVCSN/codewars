// Task

// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:
// [sign]a b/c
// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).
// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.
// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000

// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.

// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

//Imported gcd function to simplify fractions.

gcd = (a, b) => b == 0 ? a : gcd(b, a % b)

function mixedFraction(s){
  
//Turns the fraction into an array of numbers.
//array[0] will always be the numerator while array[1] will always be the denominator.
  
  let fraction = s.split('/').map(Number)
  
//We check for 0 at this point, because there's no point in continuing the code if the result will always be 0.
  
  if (fraction[1] == 0)
    throw 'ZeroDivisionError';
    
  if (fraction[0] == 0)
    return '0';
  
//We get the greatest common denominator then simplify the fraction.
  
  let gcdFraction = gcd(fraction[0], fraction[1])
  fraction = fraction.map(x => x/gcdFraction)
  
//We also pull the mod to put on the numerator if the numerator is larger than the denominator.
  
  let mod = fraction[0] % fraction[1]
  
//We put in a case for if the numerator>denominator, meaning that there should not be a whole number in the mixed fraction.
//We also need a specific case if the denominator is negative, since we need to put the - sign on the left if the fraction is negative.

  if (Math.abs(fraction[0]) < Math.abs(fraction[1]))
    if (fraction[0]/fraction[1] > 0)
      return `${fraction[0]}/${fraction[1]}`;
    else
      return `-${Math.abs(fraction[0])}/${Math.abs(fraction[1])}`
      
//This is a case if the fraction returns a whole number.
      
  if (mod == 0)
    return `${fraction[0]/fraction[1]}`;
  
//Finally, this returns a mixed fraction.
//The whole number needs to be an integer, so we use math.floor/ceil as the whole number must always be rounded towards 0.
//Due to how negative numbers interact with math.floor, we need a case for the fraction being negative where we use math.ceil instead.
  
  else {
    return fraction[0] > 0 && fraction[1] > 0 || fraction[0] < 0 && fraction[1] < 0 ? `${Math.floor(fraction[0]/fraction[1])} ${Math.abs(mod)}/${Math.abs(fraction[1])}` : `${Math.ceil(fraction[0]/fraction[1])} ${Math.abs(mod)}/${Math.abs(fraction[1])}`
  }
}
