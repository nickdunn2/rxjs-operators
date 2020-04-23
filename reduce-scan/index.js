import Rx from 'rxjs'

Rx.Observable.interval(1000)
    // .take(10)
    // .reduce((acc, val) => acc + val, 0)
    .scan((acc, val) => acc + val, 0)
    .subscribe(a => console.log(a))