function merge(
    collection_1:number[],
    collection_2:number[],
    collection_3:number[]
):number[] {

    const result:number[] = [];
    let idx_1 = 0;
    let idx_2 = 0;
    let idx_3 = collection_3.length - 1;

    while((idx_1 < collection_1.length) || (idx_2 < collection_2.length) || (idx_3 >= 0)) {
        const v_1 = idx_1 < collection_1.length? collection_1[idx_1]:Infinity;
        const v_2 = idx_2 < collection_2.length? collection_2[idx_2]:Infinity;
        const v_3 = idx_3 >= 0? collection_3[idx_3]:Infinity;

        const min = Math.min(v_1, v_2, v_3);

        if(min === v_1) {
            idx_1++;
            result.push(min);
        }else if(min === v_2) {
            idx_2++;
            result.push(min);
        }else if(min === v_3) {
            idx_3--;
            result.push(min);
        }
    }

    return result;
}
module.exports = merge;