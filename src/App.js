import React from 'react';
import {Link} from 'react-router-dom'
import Config from './other/Config';

import './App.css';

class App extends  React.Component {
    render() {
        return (
            <div className="App">
                计数器：<button type='button'>-</button>0<button type='button'>+</button>
            </div>
        );
    }
}
export default App;
