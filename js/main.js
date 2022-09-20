let str = 'Max Dima Kolya Lena Dima Max Tanya Vova Igor Max Vova Dima';
let count = 0;
let subStr = (prompt('Введіть ім\'я для пошуку: Max Dima Kolya Lena Tanya Vova Igor'));
let pos = str.toLowerCase().indexOf( subStr.toLowerCase() );

while (pos !== -1) {
    count++;
    pos = str.toLowerCase().indexOf(subStr.toLowerCase(), pos + 1);
    if (count >= 1) {
        countSubStr();
    } else {
        alert ('Не знайдено збігів !');
    }
}

function countSubStr() {

    if (count >= 1) {
        alert ('Знайдено збігів: ' + count);
    }
}

console.log(count);