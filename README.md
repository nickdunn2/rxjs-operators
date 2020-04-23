# rxjs-operators
Various files showing examples of dozens of different RxJS operators

## How to run these scripts locally
1. Pull/clone repo and run `npm install`.
2. Each operator has its own directory with an `index.js` file, so simply use `npm run babel DIRECTORY_NAME` to see the output of the example operator.
3. Some directories (e.g., combineLatest) have an `index.html` file as well. These use webpack to boot up a small server at `localhost:8080`.
4. Run `node_modules/.bin/webpack-dev-server combineLatest` to use these files.
