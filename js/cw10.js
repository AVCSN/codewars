// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
  let walkNorSou = walk.filter(dir => dir !== 'w').filter(dir => dir !== 'e').map(dir => dir.replace('n', 1)).map(dir => dir.replace('s', -1)).map(Number).reduce((a, b) => a + b, 0)
  let walkEasWes = walk.filter(dir => dir !== 'n').filter(dir => dir !== 's').map(dir => dir.replace('e', 1)).map(dir => dir.replace('w', -1)).map(Number).reduce((a, b) => a + b, 0)
  if (walk.length === 10 && walkNorSou === 0 && walkEasWes === 0){
    return true
  } else {
    return false
  }
}
