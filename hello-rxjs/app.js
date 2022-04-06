"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");

(0, rxjs_1.merge)(
    (0, rxjs_1.interval)(500).pipe(
        (0, operators_1.take)(3),
        (0, operators_1.map)((n) => n * 10)
    ),
    (0, rxjs_1.interval)(250).pipe((0, operators_1.map)((n) => n * 1000))
).subscribe((n) => console.log(n));
