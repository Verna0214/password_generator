function generatePassword(option) {
  // define user's option data
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  let collection = []
  let password = ''

  // set collection that can gather user's choose letters
  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (option.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // take away that user's don't want to include letters
  // use filter, includes, boolean
  if (option.excludeCharacters) {
    collection = collection.filter(letter => !option.excludeCharacters.includes(letter))
  }

  // error alert
  if (!collection.length) {
    return 'There is no valid characters in your selection!'
  }

  // start generating the password
  // random number as index
  // function, for loop

  for (let i = 1; i <= option.length; i++) {
    password += generateLetter(collection)
  }

  // return password
  return password
}

// generate each letter
function generateLetter(collection) {
  const randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

module.exports = generatePassword