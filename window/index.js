import Rx from 'rxjs'
import { fromStdIn } from '../utility'

Rx.Observable
    .interval(100)
    // .window(Rx.Observable.interval(1000))
    // .windowCount(10)
    // .windowTime(1000)
    // .windowToggle(
    //     fromStdIn().filter(k => k === 'p'),
    //     () => fromStdIn().filter(k => k === 'o')
    // )
    .windowWhen(() => Rx.Observable.timer(1000))
    .concatMap(a => a.toArray())
    .subscribe(a => console.log(a))