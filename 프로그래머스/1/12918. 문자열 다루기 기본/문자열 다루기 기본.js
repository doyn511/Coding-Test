function solution(s) {
    if(s.length === 4 || s.length === 6){
        for(const item of s){
            if(isNaN(item)){
                return false;
            }else{
                continue;
            }
        }
        
        return true;
    }
    return false;
}