import Rx from 'rxjs'

const slowNumbers$ = Rx.Observable.interval(200)
const slowSquares$ = Rx.Observable.interval(400).map(n => n * n)
const slowCubes$ = Rx.Observable.interval(2000).map(n => n ** 3)

Rx.Observable.zip(
    slowNumbers$,
    slowSquares$,
    slowCubes$
).subscribe(a => console.log(a))

// slowNumbers$.subscribe(a => console.log(a))
// slowSquares$.subscribe(a => console.log(a))