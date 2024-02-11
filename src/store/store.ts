import {combineReducers, createStore} from 'redux'
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from './localStorage';


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const persistedState = loadState()

const rootReducer = combineReducers({
	counters: counterReducer,
})

// непосредственно создаём store
export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
	saveState({counters: store.getState().counters})
})

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store