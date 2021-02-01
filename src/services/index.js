import axios from "axios"

export const getCovid19Statistic = () => {
    return axios.get("https://api.covid19api.com/summary")
}
