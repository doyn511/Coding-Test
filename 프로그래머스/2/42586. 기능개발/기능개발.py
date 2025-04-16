import math

def solution(progresses, speeds):
    answer = []
    end_day = []
    
    # task별 종료까지 걸리는 날짜 계산
    for idx, task in enumerate(progresses):
        end_day.append(math.ceil((100-task) / speeds[idx]))
    
    task_cnt = 1
    cur = end_day[0]
    
    for i in range(1, len(end_day)):
        if(cur >= end_day[i]):
            task_cnt += 1
        else:
            answer.append(task_cnt)
            task_cnt = 1
            cur = end_day[i]
            
    answer.append(task_cnt)
    
    return answer