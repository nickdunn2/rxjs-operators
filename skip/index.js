import Rx from 'rxjs'
import { fromStdIn } from '../utility'

console.log('INPUT ACCEPTED FROM HERE ON')
fromStdIn()
    // .skip(10)
    // .skipWhile(v => v !== 'g')
    .skipUntil(Rx.Observable.timer(2000))
    .subscribe(a => console.log(a))