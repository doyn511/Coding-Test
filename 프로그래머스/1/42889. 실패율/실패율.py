# challenge : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수
# player : 스테이지에 도달한 플레이어 수
def filterList(n, stages):
    return stages
def solution(N, stages):
    answer = []
    failure = {}
    
    # 스테이지에 도달한 참가자 수
    player = len(stages)
    
    # i는 stage의 단계를 의미 / stage 1부터 N까지 존재
    for i in range(1, N+1):
        if player != 0:
            # 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 수 (i와 같은 값의 수)
            challenger = stages.count(i)
            failure[i] = challenger / player
            player -= challenger
        else:
            failure[i] = 0
    
    # 실패율 내림차순 정렬
    answer = sorted(failure, key = lambda x: failure[x], reverse = True)
    
    return answer