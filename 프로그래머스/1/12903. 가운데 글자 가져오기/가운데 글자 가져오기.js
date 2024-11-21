function solution(s) {
    const idx = Math.round(s.length/2);
    return s.length% 2 ? s[idx-1] : s[idx-1]+s[idx]; 
}