const os = require('os');

console.log(os.userInfo());

const Currentos = {
    name:os.type(),
    release:os.release( ),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(Currentos)