import Rx from 'rxjs'

const friendsApi = Rx.Observable
    .interval(1000)
    .map(i => ({ name: `Friend #${i}`, mutualFriends: i * 2 + 1 }))
    .pluck('name')
    .subscribe(a => console.log(a))