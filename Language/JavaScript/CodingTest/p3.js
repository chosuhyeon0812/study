// 1. 문자열 처리

// 주어진 문자열이 회문(palindrome)인지 확인하는 함수를 작성하세요.

function isPalindrome(s) {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

// 2. 배열 처리

// 배열의 두 숫자를 더해 목표값을 만들 수 있는 인덱스를 반환하세요
function twoSum(nums, target) { // nums : 숫자 배열, target : 목표값
    const map = new Map();      // Map 객체 생성
    for(let i = 0; i < nums.length; i++) {  // nums 배열을 순회하며
        const complement = target - nums[i];// 목표값에서 현재 값을 뺀 값을 complement 변수에 저장한다.
        if(map.has(complement)) {        // map 객체에 complement가 존재할 경우
            return [map.get(complement), i];    // complement의 인덱스와 현재 인덱스를 반환한다.
        }
        map.set(nums[i], i);                    // map 객체에 현재 값을 키로, 현재 인덱스를 값으로 저장한다.
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]


// 3. 정렬 및 검색

// 정렬된 배열에서 주어진 숫자의 시작과 끝 인덱스를 반환하세요
function serachRange(nums, target) {
    function binarySearch(left) {
        let low = 0, high = nums.length -1;
        while(low <= high) {
            const mid = Math.fioor((low + high) / 2);
            if(nums[mid] > target || (left && nums[mid] === target)) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }

    const start = binarySearch(true);
    const end = binarySearch(false) - 1;

    if(start <= end && nums[start] === target && nums[end] === target) {
        return [start, end];
    } 
    return [-1, -1];
}

console.log(serachRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]

// 4. 스택과 큐

// 주어진 문자열에서 괄호의 유효성을 검사하세요

const check = (str) => {
    let stack = [], cnt = 0;
    for(let x of str){
        if(x === '('){
            stack.push(x);
            cnt++;
        }
        else {
            stack.pop();
            cnt--;
        }
    }
    if(cnt) return 'NO';
    return 'YES';
}