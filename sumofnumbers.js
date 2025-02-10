"use strict";
function sumFor(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
console.log(sumFor([1, 2, 3, 4]));
function sumWhile(list) {
    let i = 0;
    let sum = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}
console.log(sumWhile([1, 2, 3, 4]));
function sumRecursion(list, i = 0) {
    if (i >= list.length) {
        return 0;
    }
    return list[i] + sumRecursion(list, i + 1);
}
console.log(sumRecursion([1, 2, 3, 4]));
function sumTheFunctionalWay(list) {
    return list.reduce((total, index) => total + index, 0);
}
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
