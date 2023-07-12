/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const sliceNums1 = nums1.slice(0, m);
  const sliceNums2 = nums2.slice(0, n);

  const merge = [...sliceNums1, ...sliceNums2];

  const sorted = merge.sort((a, b) => a - b);

  // Conclusion: sorted.length will always be equal to nums1.length based on requirements
  nums1.forEach((num1, index) => {
    nums1[index] = sorted[index];
  });
}
