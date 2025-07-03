function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    schedules.forEach((target, idx) => {
        const arrival = timelogs[idx];
        let hour = parseInt(target / 100);
        let min = target % 100 + 10;
        let timeLimit = 0;
        let days = 0;
            
        if(min >= 60){
            min -= 60;
            hour += 1;
        }
            
        timeLimit = hour * 100 + min;
        
        for(let i = 0; i < 7; i++){
            let currentDay = (startday + i - 1) % 7 + 1;
            if(currentDay === 6 || currentDay === 7) continue;
            
            if(arrival[i] <= timeLimit) days++;
        }
        if(days === 5) answer++;
    })

    return answer;
}