// 1. Write a program that checks if a given number is even or odd.

// function getNum(num){
//     if (num%2==0){
//         console.log(`${num} is Even`);
//     }
//     else{
//         console.log(`${num} is not Even`);
//     }
// }
// getNum(2);


// 2. Create a function that takes two numbers as parameters and returns the larger one.

// function getLarger(a,b){
//     if (a>b){
//         console.log(`${a} is larger here`);
//     }
//     else{
//         console.log(`${a} is not larger here`);
//     }
// }
// getLarger(20,10);


// 3. Write a function that determines if a given year is a leap year.

// function getYear(year){
//     if(year%4==0 && year%100==0){
//         console.log("It a Leap year");
//     }
//     else if(year%4==0 && year%100!=0){
//         console.log("It a Leap year");
//     }
//     else{
//         console.log("Not a leap year");
//     }
// }
// getYear(2024);


// 4. Implement a program that checks whether a given character is a vowel or consonant.

// function getChar(char){
//     if (char==="a" || char==="A" || char==="e" || char==="E" || char==="i" || char==="I" || char==="o" || char==="O" || char==="u" || char==="U"){
//         console.log("It is Vowel");
//     }
//     else{
//         console.log("It is Consonent");
//     }
// }
// getChar("Z");


// 5. Create a function that takes three numbers as input and returns the largest among them.

// function getMax(a,b,c){
//     if(a>b && b>c && a>c){
//         console.log(`Max is ${a}`);
//     }
//     else if (b>a && b>c){
//         console.log(`max is ${b}`);
//     }
//     else{
//         console.log(`max is ${c}`);
//     }
// }
// getMax(2,3,1);


// 6. Write a program that checks if a given number is positive, negative, or zero.

// function getNum(num){
//     if (num>0){
//         console.log("It Positive");
//     }
//     else if (num==0){
//         console.log("It zero");
//     }
//     else{
//         console.log("It Negative");
//     }
// }
// getNum(-1);


// 7. Implement a function that calculates the grade of a student based on their score.

// function getScore(math,science,english,hindi,marathi){
//     score=(math,science,english,hindi,marathi)*100/500;
//     if (score>=80){
//         console.log("Grade A");
//     }
//     else if (score<=60){
//         console.log("Grade B");
//     }
//     else if (score<=20){
//         console.log("Grade C");
//     }
//     else{
//         console.log("Fail");
//     }
// }
// getScore(60,80,80,90,76);



// 8. Create a program that determines if a given string is a palindrome.

// function getReverse(num) {
//     let originalNum = num; 
//     let reverse = 0;
    
//     while (num > 0) {
//         let remainder = num % 10;
//         reverse = reverse * 10 + remainder;
//         num = Math.floor(num / 10);
//     }
    
//     if (originalNum === reverse) {
//         console.log(`${originalNum} is a palindrome number`);
//     } else {
//         console.log(`${originalNum} is not a palindrome number`);
//     }

//     return reverse;
// }

// getReverse(121);



// 9. Write a function that checks whether a person is eligible to vote based on their age.

// function getAge(name,age){
//     if (age>=18){
//         console.log(`${name} your age is ${age} now ,yes you are eligible to vote `);
//     }
//     else{
//         console.log(`${name} your age is ${age} now ,no you are not eligible to vote `);
//     }
// }
// getAge("Rohini",20);



// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// function getTrangle(a,b,c){
//     if (a==b && b==c && a==c){
//         console.log("It is a Equilateral traigle");
//     }
//     else if (a==b || a==c || b==c){
//         console.log("Icoscelesn traingle");
//     }
//     else if (a!=b && b!=c && a!=c){
//         console.log("Scelen traingle")
//     }

// }
// getTrangle(60,20,40);

