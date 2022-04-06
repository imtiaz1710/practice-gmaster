import { concat, interval, merge } from "rxjs";
import { skip, take, map } from "rxjs/operators";


merge(
    interval(500).pipe(
        take(3),
        map((n) => n * 10)
    ),
    interval(250).pipe(map((n) => n * 1000))
).subscribe((n) => console.log(n));
