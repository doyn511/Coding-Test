# 좌표 범위 내에 존재하는지 체크하는 함수
def checkRange(pos) :
    [x,y] = pos
    if(x >= -5 and x <= 5 and y >= -5 and y <= 5):
        return True
    else:
        return False

# 명령어에 따른 새로운 좌표를 반환하는 함수
def getNewPos(pos, direction):
    [cur_x, cur_y] = pos 
    if(direction == 'U'):
        return [cur_x, cur_y+1]
    elif(direction == 'D'):
        return [cur_x, cur_y-1]
    elif(direction == 'R'):
        return [cur_x+1, cur_y]
    elif(direction == 'L'):
        return [cur_x-1, cur_y]
    
def solution(dirs):
    cur = [0,0]
    visited = set()
    
    for d in dirs:
        newPos = getNewPos(cur, d)
        
        # 새 좌표가 범위 내부일 때
        if(checkRange(newPos)):
            visited.add((cur[0], cur[1], newPos[0], newPos[1]))
            visited.add((newPos[0], newPos[1], cur[0], cur[1]))
        else:
            continue
            
        cur = newPos 
            
    
    return len(visited)/2