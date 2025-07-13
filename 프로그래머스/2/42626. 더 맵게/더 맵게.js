class MinHeap {
    constructor(){
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = Math.floor((curIdx - 1) / 2);
        
        // 부모는 자식보다 무조건 작아야하므로 curIdx보다 parIdx가 크면 swap
        while(curIdx > 0 && this.heap[curIdx] < this.heap[parIdx]){
            const tmp = this.heap[curIdx];
            this.heap[curIdx] = this.heap[parIdx];
            this.heap[parIdx] = tmp;
            curIdx = parIdx;
            parIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    pop(){
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let curIdx = 0;
        
        while(curIdx * 2 + 1 < this.heap.length){
            let leftIdx = curIdx * 2 + 1;
            let rightIdx = curIdx * 2 + 2;
            
            let minIdx = leftIdx; // 기본값을 leftIdx로 설정
            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]){
                minIdx = rightIdx;
            }
            
            // 힙 정렬 완료 -> break
            if(this.heap[curIdx] < this.heap[minIdx]) break;
            
            // swap
            const tmp = this.heap[curIdx];
            this.heap[curIdx] = this.heap[minIdx];
            this.heap[minIdx] = tmp;
            curIdx = minIdx;
        }
        
        return min;
    }
    
    root(){
        return this.heap[0];
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    let mixCnt = 0;
    
    // heap 정렬
    for(const sc of scoville){
        minHeap.push(sc);
    }
    
    while(minHeap.size() >= 2 && minHeap.root() < K){
        const first = minHeap.pop();
        const second = minHeap.pop();
        const mixed = first + second * 2;
        minHeap.push(mixed);
        mixCnt ++;
    }
    
    return minHeap.root() >= K ? mixCnt : -1;
}