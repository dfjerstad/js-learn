/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("add:"+ add(2, 12));
console.log("addLessThanTen:"+ addLessThanTen(2, 12));
console.log("addLessThanTen:"+ addLessThanTen(2, 5));
doAThing();
foo();

function add(param1, param2) {
    return param1+param2;
}

function foo() {
    console.log("foo");
    
}

function addLessThanTen(param1, param2) {
    try {
        checkLessThanTen(param1);
        checkLessThanTen(param2);
    } catch (exception) {
        //console.log(exception);
        return "Error!!!!";
    }
    return add(param1,param2);
}

function checkLessThanTen(number) {
    if (number >= 10)
        throw new Error('Number must be less than 10. Inputted: '+number);   
    }

function doAThing() {
    var result = [];
for (var i=0; i < 5; i++) {
    (function() {
        var thing = i;
        result.push(function () {return thing});
    }());
    
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)
}