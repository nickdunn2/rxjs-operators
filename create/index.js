import Rx from 'rxjs'

const custom = Rx.Observable.create(observer => {
    observer.next(42)
    observer.complete(108)
})

custom.subscribe({
    next: a => console.log('NEXT! ', a),
    complete: b => console.log('COMPLETE! ', b)
})