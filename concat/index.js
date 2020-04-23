import Rx from 'rxjs'

Rx.Observable
    // .range(1,10)
    .interval(100)
    .take(20)
    .concat(
        Rx.Observable
            .interval(100)
            .map(n => `#2: ${n}`)
            .skip(20)
    )
    .subscribe(a => console.log(a))