def solution(numbers):
    answer = []
    
    for i in range(len(numbers)-1):
        fixed = numbers[i]
        rest = numbers[i+1:]
        
        for num in rest:
            sum = fixed + num
            if(sum in answer):
                continue
            else:
                answer.append(sum)
    
    answer.sort()
    return answer