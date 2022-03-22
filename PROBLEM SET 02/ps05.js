// how to remove FALSY VALUE from the object

const obj={
    a: "sad",
    b:  undefined,
    c: "sadman Showmik",
    d: false,
    e: "",
    f: "man",
    g: 40,
    h: "show",
    i: true,
    j: "SADMAN SHOWMIK",
    k: NaN,
};

const truthyObject= function(obj){
    for ( let i in obj){
        if (!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}
console.log(truthyObject(obj));