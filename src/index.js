
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {StatisticProvider} from './stores/StatisticProvider'

ReactDOM.render(
    <StatisticProvider>
        <App />
    </StatisticProvider>
, document.getElementById('root'))