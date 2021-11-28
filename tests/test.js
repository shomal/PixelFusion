const sumChecker = require('../src/sumChecker');

test('Input arrays should be defined', ()=>{
    let arrayA;
    let arrayB;
    const result = sumChecker(arrayA, arrayB);
    expect(arrayA).not.toBeDefined() && 
    expect(arrayB).not.toBeDefined() && 
    expect(result).toBe('Please provide two arrays as input') ;
})

test('Input arrays should not be null', ()=>{
    let arrayA = [];
    let arrayB = [];
    const result = sumChecker(arrayA, arrayB);
    expect(arrayA).not.toBeNull() && 
    expect(arrayB).not.toBeNull() && 
    expect(result).toBe('Please provide two arrays as input') ;
})

test('Input array should have distinct items', ()=>{
    let arrayB = [2, 3, 3, 5, 5, 7];
    let expectedResult = [2, 3, 5, 7];
    const result = [... new Set(arrayB)];
    expect(result).toEqual(expect.arrayContaining(expectedResult));
})

test('Correct list of sums returned', ()=>{
    let arrayA = [3, 6, 9, 10, 12, 14, 3, 9];
    let arrayB = [1, 2, 4, 6, 5, 5, 6];
    let expectedResult = "Result: 3,6,9,10";
    const result = sumChecker(arrayA, arrayB);
    expect(result).toEqual(expectedResult);
})

test('Correct list of sums returned (negative numbers)', ()=>{
    let arrayA = [3, -1, 4, 0, -5, 6, -3];
    let arrayB = [-5, -2, 0, 2, -1];
    let expectedResult = "Result: -1,0,-5,-3";
    const result = sumChecker(arrayA, arrayB);
    expect(result).toEqual(expectedResult);
})

test('No sums returned', ()=>{
    let arrayA = [9, 12, 14, 32, 9];
    let arrayB = [1, 4, 6, 7, ];
    let expectedResult = "No sum found";
    const result = sumChecker(arrayA, arrayB);
    expect(result).toEqual(expectedResult);
})

