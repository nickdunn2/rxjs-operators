import Rx from 'rxjs'

// Rx.Observable
//     .of(42)
//     .do(() => console.log('yo yo!'))
//     .delay(1200)
//     .do(() => console.log("you're doing great, keep going!"))
//     .delay(2000)
//     .subscribe(a => console.log('value -- ', a))

console.log('STARTING!')
Rx.Observable
    .range(1, 10)
    .delayWhen(n => Rx.Observable.timer(n * 1000))
    .subscribe(a => console.log(a))