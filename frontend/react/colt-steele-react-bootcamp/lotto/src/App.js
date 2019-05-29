import React from 'react';
import Lotto from './components/Lotto';
import './style/App.css';

const App = () => {
    return (

        <div className="container">
            <Lotto />
            <Lotto title="Power Ball" numBalls={4} maxNum={10}/>
        </div>
    )
}

export default App;