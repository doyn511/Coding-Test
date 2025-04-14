def solution(numbers):
    answer = []
    
    for i in range(len(numbers)-1):
        fixed = numbers[i]
        
        for j in range(i+1, len(numbers)):
            sum = fixed + numbers[j]
            if(sum in answer):
                continue
            else:
                answer.append(sum)
    
    answer.sort()
    return answer