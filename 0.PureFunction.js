// Untuk membuat penulisan kode function di JavaScript yang mengikuti paradigma FP, ada beberapa hal yang harus diperhatikan:
// 1. Function harus bersifat pure, dimana ia akan menerima parameter sebagai input dan mengembalikan nilai, tanpa mengubah nilai dari variabel manapun.
// 2. Function tidak boleh menggunakan nilai dari variabel yang bukan sebagai parameter.
// 3. Function harus mengembalikan satu nilai untuk setiap input. Function yang mengembalikan kemungkinan nilai untuk satu nilai input yang sama tidak memenuhi prinsip FP.

const multiplyByTwo = (num) => {
    return num * 2;
}

console.log(multiplyByTwo(5)); // 10