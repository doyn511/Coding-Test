function solution(id_list, report, k) {
    let map = new Map();
    const mailCount = new Map();
    
    id_list.forEach((id) => {
        map.set(id, []);
        mailCount.set(id, 0);
    });
    
    
    report.forEach((r) => {
        const [from, to] = r.split(' ');
        const record = map.get(to); // 배열에 대한 참조를 가져왔기에 따로 set해줄 필요 없음
        if(!record.includes(from)){
            record.push(from);
        }
    })
    
    map = Array.from(map);
    map.forEach((item) => {
        const [name, reported] = item;
        
        if(reported.length >= k){
            reported.forEach((n) => {
                mailCount.set(n, mailCount.get(n)+1);
            })
        }
    });
    
    return [...mailCount.values()];
}