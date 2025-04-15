def solution(N, stages):
    answer = []
    
    # 스테이지 별 도전한 사람의 수
    # 길이가 N+2인 이유: N번째 스테이지를 클리어한 사람의 값은 N+1임
    # 배열은 0부터 시작하기에 N+2번째 인덱스에 저장됨
    challenger = [0] * (N+2)
    for stage in stages:
        challenger[stage] += 1
    
    fails = {}
    total = len(stages)
    
    for i in range(1, N+1):
        if(challenger[i] != 0):
            fails[i] = challenger[i] / total
            total -= challenger[i]
        else:
            fails[i] = 0
    
    # fails는 딕셔너리 형식이기에 fails[x]는 실패율을 의미함
    answer = sorted(fails, key = lambda x: fails[x], reverse=True)
    
    return answer