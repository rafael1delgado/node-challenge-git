const products = require('./productos');
const prices = require('./precios');
const encryption = require('./cifrado');


function exerciseOne() {
    console.log('===== EXERCISE 1 =====');
    const a = ["foo", "alfa", "ram"];

    let result = [];

    result = a.map((element) => {
        console.log( element[0] );
    });
}

function exerciseTwo() {
    console.log('===== EXERCISE 2 =====');

    const b = ["hola", "mundo", "desde", "vscode"];

    console.log(b[0] + ' - ' + b[1] + ',', b[2], b[3] + '.');
}

function exerciseThree() {
    console.log('===== EXERCISE 3 =====')

    const nombres = [
        {nombre:"foo"},
        {nombre:"bar"},
        {nombre:"qux"},
        {nombre:"ram"}
    ];
    
    // procedure 1
    console.log("procedure 1: map")
    nombres.map((element, index) => {
        console.log((index + 1) + '-', 'nombre:', element["nombre"]);
    });

    // procedure 2
    console.log("procedure 2: for")
    for(let i = 0; i < nombres.length; i++) {
        console.log((i + 1) + '-', 'nombre:', nombres[i]["nombre"]);
    }

    // procedure 3
    console.log("procedure 3: while")
    let j = 0;
    length = nombres.length;
    while (j < length) {
        console.log((j + 1) + '-', 'nombre:', nombres[j]["nombre"]);
        j++;
    }
}

function exerciseFour() {
    console.log('===== EXERCISE 4 =====');

    let arrayProducts = [];

    products.map((product, index) => {
        let p = {};
        p[product] = prices[index];
        arrayProducts.push(p);
    });

    console.log(arrayProducts);
}

function exerciseFive(number) {
    console.log('===== EXERCISE 5 =====');

    let stringNumber = "" + number;
    let arrayString = [...stringNumber];

    // console.log(arrayString);
    let stringEncrytion = [];
    console.log("Numero:", number);

    stringEncrytion = arrayString.map((char) => {
        return findEncry(char);
    });

    // console.log(stringEncrytion);
    console.log("Cifrado:", stringEncrytion.join(''));
}

function exerciseFiveDotOne(string) {
    console.log('===== EXERCISE 5.1 =====');

    let arrayString = [...string];
    // console.log(arrayString);
    let plane = [];

    console.log("Descifrar:", string);

    plane = arrayString.map(e => {
        return encryption.findIndex(element => {return e == element});
    });

    // console.log(plane);
    console.log("Numero:", plane.join(''));
}

function exerciseSix() {
    console.log('===== EXERCISE 6 =====');

    const c = [
        {pies:"pies"},
        [["cabeza"]],
        function(){
            return "cuerpo"
        }
    ];
    
    let i = 0;
    for(;i < c.length; i++) {
        switch (i) {
            case 0:
                console.log(c[i]["pies"]);
                break;
            case 1:
                console.log(c[i][0][0]);
                break;
            case 2:
                console.log(c[i]());
            break;
        }
    }
}

function exerciseSeven() {
    console.log('===== EXERCISE 7 =====');

    const menu = ["burger", "papas", "gaseosa", "helado"];

    menu.push("agua");
    console.log("-------------------");
    console.log("MENU - MENU - MENU")
    console.log("-------------------");
    menu.map((e, index) => {
        console.log((index + 1) + ")", e);
        console.log("-------------------");
    })
}

// Functions adicional
function findEncry(char) {
    return encryption[char];
}

exerciseOne();
exerciseTwo();
exerciseThree();
exerciseFour();
exerciseFive(75123);
exerciseFiveDotOne('.qq*');
exerciseSix();
exerciseSeven();
