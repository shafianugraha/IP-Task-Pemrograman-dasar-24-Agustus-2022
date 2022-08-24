const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const leapYear = () => {
    rl.question("masukkan tahun: ", (tahun) => {
        if (tahun%4 === 0) {
            if (tahun%100 === 0) {
                if (tahun%400 === 0) {
                    console.log("Tahun tersebut adalah tahun KABISAT!");
                } else {
                    console.log("Tahun tersebut BUKAN merupakan tahun kabisat!");
                }
            } else {
                console.log("Tahun tersebut adalah tahun KABISAT!");
            }
        } else {
            console.log("Tahun tersebut BUKAN merupakan tahun kabisat!")
        }
        rl.question("Masukkan tahun lagi?(Y/N)", (ans) => {
            if (ans === "Y" || ans === "y") {
                leapYear()
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

console.log("Selamat datang! Cari tahu apakah tahunmu merupakan kabisat atau bukan disini!");
leapYear()