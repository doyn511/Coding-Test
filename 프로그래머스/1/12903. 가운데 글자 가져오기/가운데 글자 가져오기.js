function solution(s) {
    const idx = Math.round(s.length/2);
    return s.length% 2 === 0 ? s.split('').splice(idx-1, 2).join(''): s.split('').splice(idx-1,1).join('');
}