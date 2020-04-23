import Rx from 'rxjs'

Rx.Observable.empty()
    .subscribe({
        next: a => console.log('EMITTING: ', a),
        complete: a => console.log('COMPLETED: ', a)
    })