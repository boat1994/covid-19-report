import React, { useContext, useState } from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { StatisticContext } from "../stores/StatisticProvider"
import { DataGrid } from "@material-ui/data-grid"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

export default function CountryTable() {
    const {
        statistic: { countries },
    } = useContext(StatisticContext)
    const [keyword, setKeyword] = useState("")
    const classes = useStyles()

    const filteredCountries = countries
        .filter((country) => {
            return keyword
                ? country.Country.toLowerCase().includes(keyword.toLowerCase())
                : true
        })
        .map((country) => ({ ...country, id: country.ID }))

    return (
        <Grid container justify='center' className={classes.container}>
            <Grid item xs={12}>
                <Paper className={classes.tableContainer}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            className={classes.searchInput}
                            onChange={(e) => setKeyword(e.target.value)}
                            label='Search by country name...'
                            type='search'
                            variant='outlined'
                            InputLabelProps={{
                                classes: {
                                    root: classes.textLabel,
                                    focused: classes.focused,
                                },
                            }}
                            InputProps={{
                                className: classes.textLabel,
                                classes: {
                                    notchedOutline: classes.notchedOutline,
                                },
                            }}
                        />
                    </Grid>
                    <Grid xs={12} className={classes.tableBody}>
                        <DataGrid
                            rows={filteredCountries}
                            columns={columns}
                            pageSize={10}
                            disableColumnMenu
                            sortModel={sortSettings}
                        />
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

const numberSetting = {
    valueFormatter: (param) =>
        param.value ? param.value.toLocaleString() : "Unreported",
    sortComparator: (v1, v2, cellParams1, cellParams2) => {
        if (cellParams1.value && cellParams2.value) {
            return cellParams1.value - cellParams2.value
        }
    },
}

const sortSettings = [
    {
        field: "TotalConfirmed",
        sort: "desc",
    },
]

const columns = [
    {
        field: "id",
        hide: true,
    },
    {
        field: "Country",
        headerName: "Country",
        sortable: false,
        width: 250,
    },
    {
        type: "number",
        field: "TotalConfirmed",
        headerName: "Total Confirmed",
        width: 200,
        ...numberSetting,
    },
    {
        type: "number",
        field: "TotalDeaths",
        headerName: "Total Deaths",
        width: 200,
        ...numberSetting,
    },
    {
        type: "number",
        field: "TotalRecovered",
        headerName: "Total Recovered",
        width: 200,
        ...numberSetting,
    },
]

const useStyles = makeStyles(() => ({
    container: {
        paddingTop: "1vw",
    },
    tableContainer: {
        backgroundColor: "#424242",
        padding: "1vw",
    },
    tableBody: {
        height: "700px",
    },
    searchInput: {
        color: "white",
        paddingBottom: "1vw",
        width: "100%",
    },
    textLabel: {
        color: "white",
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "white !important",
    },
    focused: {
        color: "white !important",
    },
}))
