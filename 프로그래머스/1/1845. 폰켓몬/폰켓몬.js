function solution(nums) {
    const setArr = new Set(nums);
    const max = nums.length/2;
    
    return Math.min(setArr.size, max);
}