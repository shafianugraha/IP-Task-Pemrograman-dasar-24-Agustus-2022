const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const gradeMarker = () => {rl.question("Masukan nilai: ", (nilai) => {
    if (nilai >= 90) {
        console.log("A");
    } else if (nilai >= 80) {
        console.log("B");
    } else if (nilai >=70) {
        console.log("C");
    } else if (nilai >= 60) {
        console.log("D");
    } else if (nilai <= 59) {
        console.log("E");
    } else {
        console.log("Nilai yang anda masukan salah");
    }
    rl.question("Masukan nilai lagi?(Y/N)", (ans) => {
        if (ans === "Y" || ans ==="y") {
            gradeMarker()
        } else {
            rl.close()
        }
    })
} )};

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
  });

const welcome = "Selamat datang!"

console.log(welcome);
gradeMarker()

