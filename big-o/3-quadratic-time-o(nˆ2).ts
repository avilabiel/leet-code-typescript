// O(nˆ2)

function hasDuplicates(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  return false;
}

function findPairsWithSum(arr: number[], sum: number): number[][] {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

let expenses = [10, 20, 30, 40, 50];
let budget = 60;
console.log(findPairsWithSum(expenses, budget)); // Output: [[10, 50], [20, 40]]
