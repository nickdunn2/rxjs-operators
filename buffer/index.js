import Rx from 'rxjs'
import { fromStdIn } from '../utility'

fromStdIn()
    // .buffer(fromStdIn().filter(k => k === 'p'))
    // .bufferCount(10)
    // .bufferTime(1000)
    // .bufferToggle(
    //     fromStdIn().filter(k => k === 'p'),
    //     () => fromStdIn().filter(k => k === 'o')
    // )
    .bufferWhen(() => Rx.Observable.timer(1000))
    .subscribe(e => console.log(e))