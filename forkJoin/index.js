import Rx from 'rxjs'

const friendApi$ = Rx.Observable
    .timer(1000)
    .mapTo({ name: "Brobby" })
const prefApi$ = Rx.Observable
    .timer(2000)
    // .mapTo(Rx.Observable.throw())
    // .concatAll()
    .mapTo({ theme: "dark" })

Rx.Observable.forkJoin(
    friendApi$,
    prefApi$
).subscribe(([friends, prefs]) => console.log({ friends, prefs}))