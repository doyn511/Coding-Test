function solution(elements) {
    const sum = new Set();
    const len = elements.length;

    // i는 더할 요소의 개수 (1부터 len까지)
    for (let i = 1; i <= len; i++) {
        // j는 덧셈을 시작할 인덱스
        for (let j = 0; j < len; j++) {
            // i번 반복하면서 값 더하기
            let tmp = 0;
            for (let k = 0; k < i; k++) {
                tmp += elements[(j + k) % len]; // j에서 시작하여 i개 더하기
            }
            sum.add(tmp);
        }
    }
    return sum.size;
}
