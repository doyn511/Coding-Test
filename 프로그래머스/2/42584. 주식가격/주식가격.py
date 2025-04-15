def solution(prices):
    answer = []
    
    for idx, price in enumerate(prices):
        time = 0
        
        for i in range(idx+1, len(prices)):
            time += 1
            
            if(price <= prices[i]):
                continue
            else:
                break
                
        answer.append(time)
        
    return answer