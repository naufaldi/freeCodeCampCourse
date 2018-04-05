//itnermediate

function diffArray(arr1,arr2) {
    return arr1
    .concat(arr2) //gabungkan arr1 dan arr2
    .filter(  //difilter, item yang arr1 tdk ada item / bukan array2  yang  sama 
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1,2,3,5], [1,2,3,4,5]);

//advanced code

function diffArray2(arr1,arr2){
    return arr1
    .filter(el => !arr2.includes(el))
    .concat(
        arr2.filter(el => !arr1.includes(el))
    )
}

diffArray2([1,2,3,5], [1,2,3,4,5]);