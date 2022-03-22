
// how many times in the sentence sumit is given? whats the index no of first word sumit?

const sentence = "Learn with Sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn ith Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// using RegExp

const match = sentence.match(/sumit/gi);
console.log(match);

// const occurances = match.length;
const occurances = match? match.length: 0;

console.log(occurances);


//position
let position = sentence.search(/sumitx/i);
position = position >= 0 ? position : "notfound!";
console.log(position); 