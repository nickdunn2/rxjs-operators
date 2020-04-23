import Rx from 'rxjs'

// PUBLISH
// const currencyTicker$ = Rx.Observable
//     .interval(1000)
//     .do(a => console.log('PINGED API'))
//     .map(n => `Currency Info #${n} - [placeholder]`)
//     .publish()

// currencyTicker$.subscribe(a => console.log("LEFT WIDGET: ", a))
// currencyTicker$.subscribe(a => console.log("RIGHT WIDGET: ", a))

// currencyTicker$.connect()

// SHARE
// const currencyTicker$ = Rx.Observable
//     .interval(1000)
//     .do(a => console.log('PINGED API'))
//     .map(n => `Currency Info #${n} - [placeholder]`)
//     .share()

// currencyTicker$.subscribe(a => console.log("LEFT WIDGET: ", a))
// currencyTicker$.subscribe(a => console.log("RIGHT WIDGET: ", a))

// MULTICAST
const shared = new Rx.BehaviorSubject(-1)
const currencyTicker$ = Rx.Observable
    .interval(1000)
    .do(a => console.log('PINGED API'))
    .map(n => `Currency Info #${n} - [placeholder]`)
    .multicast(shared)

currencyTicker$.subscribe(a => console.log("LEFT WIDGET: ", a))
currencyTicker$.subscribe(a => console.log("RIGHT WIDGET: ", a))

currencyTicker$.connect()