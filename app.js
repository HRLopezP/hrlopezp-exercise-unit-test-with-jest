const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function (dolar) {
    let Yenes= dolar/1.07*156.5;
    return Yenes;
}

const fromYenToPound = function (yen) {
    let pound= yen/156.5*0.87;
    return pound;
}

const sum =(a,b) => {
    return a+b;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};