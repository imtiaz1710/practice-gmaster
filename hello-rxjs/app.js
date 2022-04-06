"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// console.log("starting countdown");
// console.log("3");
// setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//         console.log("1");
//         setTimeout(() => {
//             console.log("0");
//         }, 1000);
//     }, 1000);
// }, 1000);
// let counter = 4;
// const interval = setInterval(() => {
//     console.log(counter--);
//     if (counter < 0) clearInterval(interval);
// }, 1000);
// interval(1000)
//     .pipe(take(3), map(n => 2 - n))
//     .subscribe((n) => console.log(n));
(0, rxjs_1.merge)((0, rxjs_1.interval)(500).pipe((0, operators_1.take)(3), (0, operators_1.map)((n) => n * 10)), (0, rxjs_1.interval)(250).pipe((0, operators_1.map)((n) => n * 1000))).subscribe((n) => console.log(n));
