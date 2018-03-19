// import { takeEvery, put } from 'redux-saga/effects' 
// import { fetchData } from '../api/api'

// function* handleLincrement(action) {
//     console.log(action.step)
//     yield put({ type: 'data/increase',payload:action.step })
// }

export function* saga() {
    yield* [
        // takeEvery('INCREMENT', handleLincrement)
    ]
}