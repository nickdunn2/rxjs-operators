import Rx from 'rxjs'

const [evens, odds] = Rx.Observable
    .range(1,20)
    .partition(n => n % 2 === 0)
    // .subscribe(a => console.log(a))

evens.subscribe(a => console.log('EVENS: ', a))
odds.subscribe(a => console.log('ODDS: ', a))