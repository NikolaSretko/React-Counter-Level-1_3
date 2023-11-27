import { useState } from 'react'
import './Home.scss'

const Home = () => {

    const [count, setCount] = useState(0)

    return ( 
        <>
        <h1>Counter</h1>
        <div className="card">
            <h2>{count}</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                +
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                -
            </button>
            <button onClick={() => setCount((count) => count = 0)}>
                reset
            </button>
        </div>
        </>
    );
}

export default Home;