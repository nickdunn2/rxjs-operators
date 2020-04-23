import Rx from 'rxjs'

Rx.Observable.of(
    1,2,3,'Four',5,{foo: 'bar'}, [100,101,102]
).subscribe(a => console.log(a))