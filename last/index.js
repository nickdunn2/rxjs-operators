import Rx from 'rxjs'

Rx.Observable.interval(100)
    .take(10)
    .last(n => n % 2 === 0)
    .subscribe(a => console.log(a))