/**
붕대감기 실시 -> 1초에 x만큼 체력 회복
붕대감기 성공 -> x * t + y(보너스)만큼 체력 회복 (최대 체력보다 커지는건 불가능)

붕대감는 도중 공격 당할 시,
- 당하는 순간 체력 회복 불가
- 정해진 피해량만큼 현재 체력 감소
- 현재 체력 0 이하가 되면 캐릭터 죽음 (-1 리턴)

붕대감기 기술이 취소 or 완료
- 연속 성공시간 0초로 초기화
*/
function solution(bandage, health, attacks) {
    let time = 1;
    let seq = 0;
    const [duration, recover, bonus] = bandage;
    let currentHealth = health;
    
    for(const [t, damage] of attacks){
        // t-1까지는 붕대감기 성공
        if(time < t){
            for(let i = time; i < t; i++){
                currentHealth = Math.min(health, currentHealth + recover);
                seq++;

                if(seq === duration){
                    currentHealth = Math.min(health, currentHealth + bonus);
                    seq = 0;
                }
            }
        }
        
        currentHealth -= damage;
        seq = 0;
        time = t+1;
        
        if(currentHealth <= 0) return -1;
    }
    

    return currentHealth;
    
}