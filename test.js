const {sum} =require('./app.js');
test ('adds 14 +9 to equal 23', ()=> {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("un euro son 1.07 dolares y un euro son 156.5 yenes", function() {
    const {fromDollarToYen} =require("./app.js");
    const yenes= fromDollarToYen(10);
    const expected= 10/1.07*156.5;
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
})

test("un euro son 156.5 yenes y un euro son 0.87 pounds", function() {
    const {fromYenToPound} =require("./app.js");
    const pound= fromYenToPound(1000);
    const expected= 1000/156.5*0.87;
    expect(fromYenToPound(1000)).toBe(5.559105431309905);
})


