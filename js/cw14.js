// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

uniqueInOrder = item => {
  let curatedItem = []
  let itemArr 
  if (typeof item === String) 
  {itemArr = item.split('')} else
    {itemArr = item}
  for (i = 0; i < itemArr.length; i++) {
    if (itemArr[i] !== itemArr[i-1]) {
      curatedItem.push(itemArr[i])
    }
  }
  return curatedItem
}
