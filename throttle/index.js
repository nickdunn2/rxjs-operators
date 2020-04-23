import { fromStdIn } from '../utility'

fromStdIn()
    .throttleTime(2000)
    // .throttle(() => fromStdIn().filter(k => k === 'p'))
    .subscribe(a => console.log(a))