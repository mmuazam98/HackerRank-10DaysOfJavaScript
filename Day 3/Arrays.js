function getSecondLargest(nums) {
  // Complete the function
  nums.sort((a, b) => a - b);
  let i,
    len = nums.length,
    largest;
  largest = nums[len - 1];

  for (i = len - 1; i >= 0; i--) {
    if (nums[i] < largest) {
      return nums[i];
      break;
    }
  }
}
