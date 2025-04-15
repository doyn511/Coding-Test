def find_element_index(arr):
    for idx, el in enumerate(arr):
        if(el != 0):
            # 가장 처음 만난 인형의 idx 리턴
            return idx
        else:
            continue
    # 만약 빈 배열이라면 (아무런 인형이 들어있지 않다면)
    return -1

    
def solution(board, moves):
    answer = 0
    n = len(board)
    new_board = []
    
    # 새 board 생성
    for i in range(n):
        cur = [0] * n
        for j in range(n):
            cur[j] = board[j][i]
            
        new_board.append(cur)
    
    # moves 탐색
    stack = []
    for m in moves:
        # 뽑은 값 구하기 (인형이 없으면 -1, 있으면 idx 리턴)
        idx = find_element_index(new_board[m-1])
        pick_num = new_board[m-1][idx]
        new_board[m-1][idx] = 0
        
        if(idx == -1):
            continue
        else:
            # stack이 비어있다면 값 추가하기
            if(len(stack) == 0):
                stack.append(pick_num)
            
            # stack이 비어있지 않다면 가장 마지막 요소와 값 비교하기
            else:
                if(stack[-1] == pick_num):
                    stack.pop()
                    answer += 2
                else:
                    stack.append(pick_num)
    
    return answer