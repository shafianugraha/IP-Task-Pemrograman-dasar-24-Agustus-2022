const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ganjilGenap = () => {
    rl.question("Silahkan masukkan angka:", (angka) => {
        if (angka%2 === 0) {
            console.log("Angka yang kamu masukkan adalah GENAP");
        } else if (angka%2 !== 0) {
            console.log("Angka yang kamu masukkan adalah GANJIL");
        } else {
            console.log("Input yang kamu masukkan salah");
        }
        rl.question("Masukkan angka lagi?(Y/N)", (ans) => {
            if (ans === "Y" || ans === "y") {
                ganjilGenap()
            } else {
                rl.close()
            }
        })
    })
}

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });

console.log("Selamat Datang! Cari tahu apakah angka kamu ganjil atau genap disini!");
ganjilGenap()