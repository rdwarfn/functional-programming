// Currying adalah sebuah teknik dalam functional programming, dimana sebuah function tidak mengambil semua argumen atau parameter dan digunakan sekaligus, melainkan mengembalikan sebuah function baru yang mengambil parameter kedua, yang kemudian mengembalikan function baru yang mengambil parameter ketiga, dan seterusnya hingga seluruh argument atau parameter digunakan. Pada teknik ini, setiap argumen akan dievaluasikan satu per satu.

const myWordsOperation = (firstWord) => (secondWord) => (thirdWord) => {
    return firstWord + ' ' + secondWord + ' ' + thirdWord;
};

console.log(myWordsOperation("John")("Mick")("Johannson"))
