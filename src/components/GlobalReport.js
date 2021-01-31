import React, {useContext} from 'react'
import moment from 'moment-timezone'
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { StatisticContext } from '../stores/StatisticProvider'

export default function GlobalReport () {

    const {statistic: {global}} = useContext(StatisticContext)
    const classes = useStyles();
    
    return (
            <Grid container justify="center" spacing={3} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <div className={classes.title}> COVID-19 CORONAVIRUS PANDEMIC </div>
                    <div className={classes.subTitle}>Last updated: {getDate(global.Date)}</div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper className={classes.information}>
                        <span>
                            <span>Total confirmed </span>
                            <br />
                            <span className={classes.textConfirmed}>
                                {formattedNumber(global.TotalConfirmed)}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span>Total Deaths </span>
                            <br />
                            <span className={classes.textDeaths}>
                                {formattedNumber(global.TotalDeaths)}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span>Total Recovered </span>
                            <br />
                            <span className={classes.textRecovered}>
                                {formattedNumber(global.TotalRecovered)}
                            </span>
                        </span>
                    </Paper>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper className={classes.information}>
                        <span>
                            <span>New confirmed </span>
                            <br />
                            <span className={classes.textConfirmed}>
                                +{formattedNumber(global.NewConfirmed)}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span>New Deaths </span>
                            <br />
                            <span className={classes.textDeaths}>
                                +{formattedNumber(global.NewDeaths)}
                            </span>
                        </span>
                        <br />
                        <span>
                            <span>New Recovered </span>
                            <br />
                            <span className={classes.textRecovered}>
                                +{formattedNumber(global.NewRecovered)}
                            </span>
                        </span>
                    </Paper>
                </Grid>
            </Grid>
    )
}

const getDate = (dateStr) => {
    return moment(dateStr).tz('GMT').format('MMMM Do YYYY, h:mm A z')
}

const formattedNumber = (number) => {
    return number.toLocaleString()
}

const useStyles = makeStyles(() => ({
    information: {
        backgroundColor: '#424242',
        color: '#FFFF',
        fontSize: '2rem',
        padding: '1vw',
        textAlign: 'center'
    },
    container: {
        paddingTop: '1vw'
    },
    title: {
        textAlign: 'center',
        fontSize: '3rem',
    },
    subTitle: {
        textAlign: 'center',
        fontSize: '2rem',
    },
    header: {
        paddingTop: '1rem'
    },
    textConfirmed: {
        color: "yellow"
    },
    textDeaths: {
        color: "red"
    },
    textRecovered: {
        color: "green"
    }
}));