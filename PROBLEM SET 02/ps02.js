// input : linerSearch(['a','b','c','d','c'],'c')
// output: 2 or 'notfound'
// problem: linerSearch( function) implementation


function linerSearch(arr,val){
    const j=arr.length;
    for (let i =0;i<j; i++ ){
        if(arr[i]==val){
            return i;
        } 
    }
    return 'notFound';
}

console.log(linerSearch(['a','b','c','d','c'],'c'));