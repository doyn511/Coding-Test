/**
조건 : 최대 bridge_length 개의 트럭 & weight까지 가능
다리를 건너는데 걸리는 시간 : bridge_length만큼 걸림

무조건 첫번째 들어간 트럭이 첫번째로 나옴
*/
function solution(bridge_length, weight, truck_weights) {
    const queue = [];
    const TRUCK_MAX = bridge_length;
    const truckNum = truck_weights.length;
    let complete = 0;
    let time = 1;
    
    const getSum = () => {
        let sum = 0;
        queue.forEach((el) => sum+=el[0]);
        return sum;
    }
    
    do{ 
        if(queue.length === 0 || (getSum() + truck_weights[0] <= weight && queue.length < TRUCK_MAX)){
            queue.push([truck_weights.shift(), 0]);
        }
        
        for(let truck of queue){
            truck[1]++;
        }
        
        if(queue[0][1] === bridge_length){
            queue.shift();
            complete++;
        }
        
        time++;
    }while(complete !== truckNum);
    
    return time;
}
