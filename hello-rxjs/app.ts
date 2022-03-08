import { concat, interval, merge } from "rxjs";
import { skip, take, map } from "rxjs/operators";

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

merge(
    interval(500).pipe(
        take(3),
        map((n) => n * 10)
    ),
    interval(250).pipe(map((n) => n * 1000))
).subscribe((n) => console.log(n));
