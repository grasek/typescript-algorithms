function rotationsTS<T>(arr: T[] = []): T[][] {
    const result: T[][] = [];

    for (let e of arr) {
        arr.push(arr.shift()!);
        result.push([...arr]);
    }

    return result.slice(0, arr.length);
}