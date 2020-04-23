import Rx from 'rxjs'

Rx.Observable
    .throw()
    .subscribe({
        next: n => console.log('A value was emitted: ', n),
        error: err => console.log(`An error occurred: ${err}`),
        complete: () => console.log('Completed.')
    })