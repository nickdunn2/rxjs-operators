import Rx from 'rxjs'

const buggyApi$ = Rx.Observable
    .timer(1000)
    .do(a => console.log('You called buggyApi$!'))
    .do(a => {throw new Error()})

buggyApi$
    // .retry(3)
    .retryWhen(() => Rx.Observable.interval(1000))
    .subscribe(a => console.log(a))