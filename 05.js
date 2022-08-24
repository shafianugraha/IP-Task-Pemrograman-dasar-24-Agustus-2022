const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ratingFilm = () => {
    rl.question("Masukkan Umurmu: ", (umur) => {
        if (umur >= 21) {
            console.log("Rating film maksimal yang bisa kamu tonton adalah DEWASA");
        } else if ( umur >= 13) {
            console.log("Rating film maksimal yang bisa kamu tonton adalah REMAJA");
        } else if (umur >= 9) {
            console.log("Rating film maksimal yang bisa kamu tonton adalah BIMBINGAN ORANG TUA");
        } else if (umur < 9) {
            console.log(("Rating film maksimal yang bisa kamu tonton adalah SEMUA UMUR"));
        } else {
            console.log("Input yang kamu masukkan salah");
        }
        rl.question("Masukkan umur lagi?(Y/N)", (ans) => {
            if (ans === "Y" || ans === "y") {
                ratingFilm()
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

console.log("Selamat datang! Cari tahu rating film yang kamu bisa tonton sesuai umurmu disini!");
ratingFilm()