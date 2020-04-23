import Rx from 'rxjs'

const evens = Rx.Observable.range(1,10)
    .filter(n => n % 2 === 0)

evens.subscribe(a => console.log(a))