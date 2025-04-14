def solution(answers):
    std1 = [1,2,3,4,5]
    std2 = [2,1,2,3,2,4,2,5]
    std3 = [3,3,1,1,2,2,4,4,5,5]
    std_list = [0,0,0]
    
    answer = []
    
    for i, a in enumerate(answers):
        if(a == std1[i % len(std1)]):
            std_list[0]+=1
        if(a == std2[i % len(std2)]):
            std_list[1]+=1
        if(a == std3[i % len(std3)]):
            std_list[2]+=1
    
    std_max = max(std_list)
    
    for i, correct in enumerate(std_list):
        if(correct == std_max):
            answer.append(i+1)
    
    return answer