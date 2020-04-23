import Rx from 'rxjs'

// const ticker = Rx.Observable.interval(1000)
const stopwatch = Rx.Observable.timer(1000)

stopwatch.subscribe(a => console.log(a))