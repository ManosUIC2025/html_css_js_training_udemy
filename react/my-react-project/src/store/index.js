import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/CounterReducer'

const store = configureStore({
    reducer: counterReducer,
    initial: {}
})

export default store