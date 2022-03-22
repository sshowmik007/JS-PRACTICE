// from 1-10 which digits are 3,5 divisible and 3 &5 both divisible

function threeFive(num){
    for(let i=1 ; i<=num; i++){
        if(i%15==0){
            console.log(`${i} is threeFive`);
        } else if(i%5 == 0) {
            console.log(`${i} is Five`);

        }else if(i%3 == 0) {
            console.log(`${i} is three`);
    } else{
        console.log(i);
    }
    }
}

threeFive(100);