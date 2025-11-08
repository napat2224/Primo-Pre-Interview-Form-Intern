const merge_array = require("../src/merge");

describe('merge()',()=>{
    describe('Normal Case',()=>{
        test(('Normal Case1'),()=>{
            const c1 = [1, 4, 7];
            const c2 = [2, 3, 6, 9];
            const c3 = [10, 8, 5];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        });
        test(('Normal Case2'),()=>{
            const c1 = [1, 2, 90];
            const c2 = [3, 4, 6, 60];
            const c3 = [10, 9, 0];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([0, 1, 2, 3, 4, 6, 9, 10, 60, 90]);
        });
    })

    describe(('Empty Array'),()=>{
        test(('Empty Array1'),()=>{
            const c1:number[] = [];
            const c2 = [2, 3, 6, 9];
            const c3 = [10, 8, 5];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([2, 3, 5, 6, 8, 9, 10]);
        });
        test(('Empty Array2'),()=>{
            const c1 = [5, 8, 9];
            const c2 = [2, 3, 6];
            const c3:number[] = [];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([2, 3, 5, 6, 8, 9]);
        });
        test(('Empty Array3'),()=>{
            const c1:number[] = [];
            const c2:number[] = [];
            const c3:number[] = [];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([]);
        });
    })

    describe(('Duplicate Value'),()=>{
        test(('Duplicate Value1'),()=>{
            const c1 = [1, 1, 1];
            const c2 = [2, 7, 8];
            const c3 = [10, 5, 4];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([1, 1, 1, 2, 4, 5, 7, 8, 10]);
        })
        test(('Duplicate Value2'),()=>{
            const c1 = [1, 9];
            const c2 = [2, 7, 8];
            const c3 = [10, 5, 4 ,1];
            const result = merge_array(c1, c2, c3);
            expect(result).toEqual([1, 1, 2, 4, 5, 7, 8, 9, 10]);
        })
    })

})
