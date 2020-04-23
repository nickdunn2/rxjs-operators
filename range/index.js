import Rx from 'rxjs'

const rangeObs = Rx.Observable.range(1, 9)

rangeObs
    // .take(1)
    .subscribe(e => {
        console.log(`Range emitted: ${e}`)
    })