
import { decrement, decrementByValue, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const count = useAppSelector((state) => state.counter.count )
  const dispatch = useAppDispatch();
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="flex gap-8 border-2 border-blue-300 p-20 rounded-md bg-gray-300">
                <button onClick={() => dispatch(decrement())} className="bg-red-600 px-5 py-3 rounded-md text-white font-semibold">
                    Decrement
                </button>
                <button onClick={() => dispatch(decrementByValue(2))} className="bg-red-600 px-5 py-3 rounded-md text-white font-semibold">
                    DecrementByValue
                </button>
                <h2 className="text-6xl font-semibold">{count}</h2>
                <button onClick={() => dispatch(increment(5))} className="bg-green-600 px-5 py-3 rounded-md text-white font-semibold">
                    Increment
                </button>
            </div>
        </div>
    );
}

export default App;
