//search()

let texts = "Visit W3Schools";
let n = texts.search(/w3schools/i);
console.log(n);

// replace()

let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);


// multiple same name changing
let text1 = "Visit Microsoft by microsoft!";
let result1 = text1.replace(/Microsoft/i, "W3Schools");
console.log(result1);


//g= global Perform a global match

let text2 = "Visit Microsoft\n by microsoft!";
let result2 = text2.replace(/Microsoft/ig, "W3Schools");
console.log(result2);

// Perform multiline matching