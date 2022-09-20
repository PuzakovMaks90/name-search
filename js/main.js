// //              0123
// let userName = 'Dima';
// let userFamily = 'Stetsenko'
// // let str1 = 'My name is ' + userName + ' ' + userFamily;

// let str2 = `My name is: \n${userName} ${userFamily}`;
// console.log(str2);

// // prompt('1. Снять;\n2. Внести;\n3. Баланс;\n4. Выход');

// console.log('I\'m a coder');

// console.log(str2.length);

// for (let i = 0; i < str2.length; i++) {
//     console.log(str2[i]);
// }

// let str = 'poltava';
// firstUp();
// function firstUp() {
//     let strRes = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//             strRes = str[i].toUpperCase(); // toLowerCase()
//         } else {
//             strRes += str[i];
//         }
//     }
//     console.log(strRes);
// }

// let str = 'I live in Poltava';
// //         I*l*v* *n*P*l*a*a
// replaceStr();

// function replaceStr() {
//     let strRes = '';
//     for (let i = 0; i < str.length; i++) {
//         if ((i + 1) % 2 == 0) {
//             strRes += '*';
//             continue;
//         }

//         strRes += str[i];
//     }
    
//     console.log(strRes);
// }

let str = 'Dima Kolya Dima Tanya Vova Igor Dima';
let subStr = 'Dima';

console.log(str, subStr);

// console.log( str.toLowerCase().indexOf( subStr.toLowerCase() ) );
console.log(str.indexOf(subStr, 12));


function countSubStr() {
    
}