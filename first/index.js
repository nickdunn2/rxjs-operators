import Rx from 'rxjs'

Rx.Observable.interval(100)
    .first(n => n === 14)
    .subscribe(a => console.log(a))