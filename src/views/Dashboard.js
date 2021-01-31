import React, {useEffect, useContext, useState} from 'react'
import Container from '@material-ui/core/Container';

import {getCovid19Statistic} from '../services'
import { StatisticContext } from '../stores/StatisticProvider'

import Loading from '../components/Loading'
import Error from '../components/Error'
import GlobalReport from '../components/GlobalReport'
import CountryTable from '../components/CountryTable'

export default function Dashboard() {

    const { setStatistic } = useContext(StatisticContext)
    const [loading, setLoading] = useState(true)
    const [ apiError, setApiError ] = useState(false)

    useEffect(() => {
        getCovid19Statistic().then(res => {
            setStatistic(res.data)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            setApiError(true)
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    if (apiError) {
        return <Error />
    }

    return (
        <Container maxWidth="lg">
            <GlobalReport/>
            <CountryTable/>
        </Container>
    )
}

