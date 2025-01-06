function solution(strings, n) {
    strings.sort();
    strings.sort((a,b) => a[n].charCodeAt() - b[n].charCodeAt());
    
    return strings;
}