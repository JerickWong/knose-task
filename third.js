/*
  If you are to develop your own sorting method, how would you implement it? Given a set of integers, 
  how will you sort them from lowest to highest?

  A: If I am to develop my own sorting method, I would still use the existing ones but will just add
    an additional checker for the length of the entries. My reason for this is because even the 
    quickest known sorting method (quicksort) is not the quickest in bigger lengths. In a list of 100 
    entries, the best sorting method is the Bucket Sort. A list of 1000, Radix Sort stands out as the
    fastest. And in a list of 10000, Counting Sort is the fastest. This does not take into account the
    best and worst case scenarios (if the array is already sorted or not), but checking if it's already
    sorted will cost more time and so in my opinion this is taking the best chances if the array is not
    defined.
*/

const arr = [5,4,3,2,1,0]
console.log(prompt(arr))

function prompt(arr) {
  if (arr.length <= 1000)
    return bucketSort(arr)
  if (arr.length <= 10000)
    return radixSort(arr)

  return countingSort(arr)
}

function countingSort(arr){
  return arr.reduce( (acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [] )
            .reduce( (acc, n, i) => acc.concat(Array(n).fill(i)), [] )
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      digitBuckets[digit].push(arr[i])
    }
    // New order after each loop
    arr = [].concat(...digitBuckets)
  }

  function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }

  function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  }

  return arr
}

function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  arr.length = 0;

  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    arr.push(...buckets[i]);
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}
