function solution(today, terms, privacies) {
    const answer = [];
    
    // 오늘 날짜
    today = today.split('.').map(Number);
    const [todayY, todayM, todayD] = today;
    
    // 타입 별 기간
    const termsMap = {};
    terms.forEach((t) => {
        t = t.split(' ');
        termsMap[t[0]] = +t[1];
    })
     
    privacies.forEach((p, idx) => {
        p = p.split(' ');
        const [getY, getM, getD] = p[0].split('.').map(Number);
        
        // 12가 넘을 경우 year +
        const termY = parseInt(termsMap[p[1]] / 12); 
        const termM = termsMap[p[1]] % 12;
        
        // 소유할 수 있는 최대 기간 구하기 
        let maxY = getY + termY;
        let maxM = getM + termM;
        let maxD = getD - 1;
        
        // 만일 DD가 0이라면 이전달 28일로
        if(maxD === 0){
            maxM -= 1;
            maxD = 28;
            
            // 만일 이전달이 0이라면 그 전 해 12월로
            if(maxM === 0){
                maxY -= 1;
                maxM = 12;
            }
        }
        
        // 만일 MM가 12가 넘는다면 YY +
        if(maxM > 12){
            if(maxM % 12 === 0){
                maxY += parseInt(maxM / 12) - 1;
                maxM = 12;
            }else{
                maxY += parseInt(maxM / 12);
                maxM = maxM % 12;
            }
        }
                
        // 수집일자 + term < 현재날짜이면 파기해야하므로 answer.push(idx+1)
        if(maxY < todayY){
            answer.push(idx+1);
            return;
        }else if(maxY === todayY){
            if(maxM < todayM){
                answer.push(idx+1);
                return;
            }else if(maxM === todayM){
                if(maxD < todayD){
                    answer.push(idx+1);
                    return;
                }
            }
        }
    })
    console.log(answer);
    
    return answer;
}