const products = require('./productos');
const prices = require('./precios');
const encryption = require('./cifrado');


function exerciseOne() {
    const a = ["foo", "alfa", "ram"];

    let result = [];

    result = a.map((element) => {
        return element[0];
    });

    console.log("".concat(...result));
}

function exerciseTwo() {
    const b = ["hola", "mundo", "desde", "vscode"];

    console.log(b[0] + ' - ' + b[1] + ',', b[2], b[3] + '.');
}

function exerciseThree() {
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
    let arrayProducts = [];

    products.map((product, index) => {
        let p = {};
        p[product] = prices[index];
        arrayProducts.push(p);
    });

    console.log(arrayProducts);

}

function exerciseFive(number) {
    let stringNumber = "" + number;
    let arrayString = [...stringNumber];
    let stringEncrytion = [];

    console.log("Numero:", number);

    stringEncrytion = arrayString.map((char) => {
        return findEncry(char);
    });

    console.log("Cifrado", "".concat(...stringEncrytion));
}

function exerciseFiveDotOne(string) {
    let arrayString = [...string];
    let plane = [];

    console.log("Descifrar:", string);
    console.log(arrayString);

    plane = arrayString.find((element, index) => {
        return element === encryption[index];
    });
    console.log(plane);
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
