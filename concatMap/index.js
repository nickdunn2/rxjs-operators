import Rx from 'rxjs'

Rx.Observable
    .interval(1000)
    .concatMap(n => Rx.Observable.range(0, n+1))
    .subscribe(a => console.log(a))