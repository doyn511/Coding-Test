function solution(a, b) {
    const lastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayIdx = new Date(`${2016}-${a}-${b}`).getDay();
    return days[dayIdx]
}