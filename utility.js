import Rx from 'rxjs'

export const fromStdIn = () => {
    const stdin = process.stdin
    stdin.setRawMode(true)
    stdin.setEncoding('utf-8')

    const obs = Rx.Observable.fromEvent(stdin, 'data')
    obs.subscribe(key => {
        if (key === '\u0003') {
            process.exit()
        }
    })

    return obs
}