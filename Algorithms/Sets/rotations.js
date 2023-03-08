function rotations(arr = []){
    const result = [];

    for(let e of arr){
        arr.push(arr.shift());
        result.push([...arr]);
    }
    
    return result.slice(0, arr.length);
}