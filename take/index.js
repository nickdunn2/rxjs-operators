import Rx from 'rxjs'

/* TAKE */
// Rx.Observable
//     // .range(1, 10)
//     .interval(100)
//     .take(5)
//     .subscribe(a => console.log(a))

/* TAKE WHILE */
// Rx.Observable
//     .interval(100)
//     .takeWhile(n => n < 7)
//     .subscribe(a => console.log(a))

/* TAKE UNTIL */
Rx.Observable
    .interval(100)
    .takeUntil(Rx.Observable.timer(1000))
    .subscribe(a => console.log(a))