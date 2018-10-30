// Write a function to manipulate the provided string

// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
let nums = ['2', '4', '25', '10', '3']

const paddedNum = nums.map(el => el.padStart(2, '0'))


// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best"

const toLowerSplited = str => str.toLowerCase().split(" ");

const toTitle = arr => arr.reduce((acc, current) => {
  acc = acc[0].toUpperCase() + acc.slice(1)
  current = current[0].toUpperCase() + current.slice(1)

  return `${acc} ${current}`
})

toTitle(toLowerSplited(camelCase)


// 3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
const newCamel = text => {
  //   Insert function

}
newCamel(newTitle)


// 4. Passage Counter
// How many seconds will it tke to read the provided text? 
// If it goes past 60 seconds, quote in minutes!
const passage = `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`

const howMany = text => {
  //   Insert function

}
howMany(passage);


// 5. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = "hamlet"
const pigLatin = text => {
  //   Insert function

}
pigLatin(word);

document.addEventListener()