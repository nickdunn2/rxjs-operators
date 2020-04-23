import Rx from 'rxjs'

const slow$ = Rx.Observable.interval(1000)

slow$
    .let(slow => Rx.Observable.interval(100))
    .subscribe(a => console.log(a))