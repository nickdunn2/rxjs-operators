import Rx from 'rxjs'

Rx.Observable.range(0,2)
    // .single(n => n % 2 !== 0)
    .single()
    .subscribe(a => console.log(a))