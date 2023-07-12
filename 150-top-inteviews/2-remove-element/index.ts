function removeElement(nums: number[], val: number): number {
  const filteredNums: number[] = [];

  nums.forEach((num, index) => {
    const shouldIgnoreVal = num === val;

    if (shouldIgnoreVal) {
      nums[index] = null;
      return;
    }

    nums[index] = num;
    filteredNums.push(num);
  });

  nums.sort((a, b) => a - b).reverse();

  const k = filteredNums.length;

  return k;
}
