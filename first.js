/*
  Given an integer n. Loop from 1 to n and print each number from 1 to n. There are some special cases though. For numbers divisible by 5, print “Knose” instead. For numbers divisible by 7, print “Pet Care Made Easy”. For numbers divisible by 5 and 7, print “Knose Pet Care Made Easy”.
  Sample Input:
  n = 35
  Sample Output:
  1
  2
  3
  4
  Knose
  6
  Pet Care Made Easy
  8
  9
  Knose
  …
  34
  Knose Pet Care Made Easy
*/
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const processInteger = (n) => {
  let input = n * 1

  if (!Number.isInteger(input)) {
    console.log('Invalid Input')
    return prompt()
  }

  if (n <= 0) {
    console.log('Integer is not positive')
    return prompt()
  }

  let i = 1

  while (i != input + 1) {
    if (i % 5 == 0) {
      process.stdout.write('Knose ')
    }
    if (i % 7 == 0) {
      process.stdout.write('Pet Care Made Easy')
    } else {
      if (i % 5 != 0) {
        process.stdout.write(i + '')
      }
    }

    process.stdout.write('\n')
    i++;
  }
  readline.close()
}

const prompt = () => {
  readline.question('Enter a positive integer: ', n => {
    processInteger(n)
  });
}

prompt()
