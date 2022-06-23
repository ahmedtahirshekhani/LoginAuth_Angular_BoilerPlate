function removeDuplicates(arr) {
    // Set variable to avoid duplicates
    let temp_set = new Set();
    for(let i=0; i<arr.length; i++){
        try{
            temp_set.add(arr[i])
        }catch(e){
            //Do Nothing
        }
    }
    return Array.from(temp_set)
}

console.log(removeDuplicates(['a', 1, 2, 8, 1, 0, 1, 'b', 'a', 'c', 'b']))