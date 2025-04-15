'''
필요한 함수
1. s의 길이만큼 문자열 회전시켜서 새로운 문자열 Return하는 함수
2. 괄호의 쌍이 맞는지 체크하는 함수
'''
def check_pairs(new_s):
    stack = []
    
    for el in new_s:
        if(len(stack) == 0):
            stack.append(el)
            continue
            
        if(stack[-1] == '(' and el == ')'):
            stack.pop()
        elif(stack[-1] == '{' and el == '}'):
            stack.pop()
        elif(stack[-1] == '[' and el == ']'):
            stack.pop()
        else:
            stack.append(el)
        
    if(len(stack) == 0):
        return True
    else:
        return False
    

def create_new_str(s, split_idx):
    new_str = s[split_idx:] + s[0 : split_idx] 
    return new_str
    
    
def solution(s):
    answer = 0
    check_string = s
    
    for i in range (len(s)):
        if(check_pairs(check_string)):
            answer += 1
            
        check_string = create_new_str(s, i+1)
        
    return answer