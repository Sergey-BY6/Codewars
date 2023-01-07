function solution(nums){
    return nums === [] || nums === null ? [] : nums.sort((a,b) => a - b)
}