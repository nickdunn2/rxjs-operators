import Rx from 'rxjs'
import { fromStdIn } from '../utility'

console.log('Please input your password QUICKLY!')

fromStdIn()
    .take(10)
    .timeout(2000)
    .subscribe(a => console.log(a))