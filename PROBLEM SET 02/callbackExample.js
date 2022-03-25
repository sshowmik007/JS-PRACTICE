const paymentSuccess = true;
const marks =70;

function enroll(callback){
    console.log('enrollmet is successful');

    setTimeout(function(){
        if (paymentSuccess){
            callback();
        }else{
            console.log('Failed')
        }
    },2000);
}

function progress(callback){
    console.log('on process.......');


    setTimeout(function(){
        if(marks>=80){
            callback();
        }else{
            console.log('not eligible..')
        }
    },3000);
}

function getCertificate(){
    console.log('preparing certificate');

    setTimeout(function(){
        console.log('congratulations')
    },2000);
}

enroll(function(){
    progress(getCertificate);
});
