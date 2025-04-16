def solution(cards1, cards2, goal):
    cards1_idx = 0
    cards2_idx = 0
    res = True
    
    for word in goal:
        if(cards1_idx < len(cards1) and cards1[cards1_idx] == word):
            cards1_idx += 1
            continue
        elif(cards2_idx < len(cards2) and cards2[cards2_idx] == word):
            cards2_idx += 1
            continue
        else:
            res = False
            break
    
    if(res == True):
        return 'Yes'
    else:
        return 'No'
            