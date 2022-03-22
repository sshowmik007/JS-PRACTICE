// how to find the large string from array and find its index?


function longestString(names){
    let longestWord= '' ;

    for (n of names){
        if (n.length>longestWord.length){
            longestWord= n;
        }
    }
    return [longestWord, names.indexOf(longestWord)]; //returing an array
}


console.log(longestString(['Sadman Showmik','imran hossain',' mardia mahzabin', 'nayaz mitul']))