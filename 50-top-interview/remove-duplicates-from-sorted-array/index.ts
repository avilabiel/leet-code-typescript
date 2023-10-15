function removeDuplicates(nums: (number | string)[]): number {
  let k = 0; // unique elements
  let i = 0;

  while (i < nums.length) {
    let current = nums[i];
    let next = nums[i + 1];

    if (current === "_") {
      break;
    }

    if (next === undefined) {
      k++;
      break;
    }

    if (current === next) {
      nums[nums.length] = "_";
      nums.splice(i, 1);
      continue;
    }

    i++;
    k++;
  }

  nums.splice(k, nums.length - k);

  return k;
}
