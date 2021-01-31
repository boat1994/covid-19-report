import React, {createContext, useReducer} from 'react'

export const  StatisticContext = createContext({})

const initialState = {
    global : {},
    countries: []
}

const statisticReducer = (state, action) => {
    switch(action.type) {
        case 'SET_STATISTIC' : return setStatistic(state, action.payload)
        default: return state
    }
}

const setStatistic = (state, payload) => {

    return {
        ...state,
        global: payload.Global,
        countries: payload.Countries
    }
}

export const StatisticProvider = ({children}) => {

    const [ statisticState, dispatch ] = useReducer(
        statisticReducer,
        initialState
    )

     const setStatistic = payload => {
        dispatch({
            type: 'SET_STATISTIC',
            payload
        })
     }

    return (
        <StatisticContext.Provider value={{ statistic: statisticState, setStatistic }}>
            { children }
        </StatisticContext.Provider>
    )
}