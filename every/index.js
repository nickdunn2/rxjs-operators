import Rx from 'rxjs'

const range = Rx.Observable.range(1, 10)

range
    .map(a => a * 2)
    .do(v => console.log('value --', v))
    .every(n => n % 2 === 0)
    .subscribe(a => console.log(a))