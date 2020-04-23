import Rx from 'rxjs'

const range = Rx.Observable.range(1,10)

range
    .map(n => n * n)
    .subscribe(a => console.log(a))

const notificationApi = Rx.Observable.interval(1000)

notificationApi
    .mapTo({type: 'Notification Sent'})
    .subscribe(a => console.log(a))