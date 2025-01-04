function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length -1; i++) {
        let prefix = phone_book[i];
        let nextNumber = phone_book[i + 1];
        
        if (nextNumber.startsWith(prefix)) {
            return false; 
        }
    }
    return true; 
}
