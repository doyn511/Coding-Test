function solution(arr) {
    let lcm = 1;
    
    while(true){
        let bool = true;
        
        for(let i = 0; i < arr.length; i++){
            if(lcm % arr[i] !== 0){
                bool = false;
                break;
            }
        }
        
        if(!bool){
            lcm++;
        }else{
            return lcm;
        }
    }
}