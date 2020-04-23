import Rx from 'rxjs'

const country$ = Rx.Observable.fromEvent(
    document.getElementById('country'),
    'change',
    e => e.target.value
)

const city$ = Rx.Observable.fromEvent(
    document.getElementById('city'),
    'change',
    e => e.target.value
)

Rx.Observable.combineLatest(
    country$,
    city$
).subscribe(a => console.log(a))