/*
  Given an integer n. Print the corresponding figure using '-' and '*' as shown in the following example.
  Sample Input 1:
  n = 5
  Sample Output 1:
  ----*
  ---**
  --***
  -****
  *****

  Sample Input 2:
  n = 7
  Sample Output 2:
  ------*
  -----**
  ----***
  ---****
  --*****
  -******

  *******
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
    let rowLength = input
    while (rowLength) {
      if (rowLength <= i) {
        process.stdout.write('*')
      } else {
        process.stdout.write('-')
      }
      rowLength--
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
