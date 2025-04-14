def solution(s):
    arrow = 0;
    
    for i in s:
        if(i == '('):
            arrow += 1
        elif(i == ')'):
            arrow -= 1
            
        if(arrow < 0):
            return False
    
    if(arrow == 0):
        return True
    else:
        return False
