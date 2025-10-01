import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../store/reducers/CounterReducer'

const Counter1 = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    return (
        <div>
            <h1>Counter 1</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <hr />
        </div>
    )
}

export default Counter1