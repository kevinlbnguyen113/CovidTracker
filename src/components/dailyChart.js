import React, { Component } from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'



export class dailyChart extends Component {
    state = { sorted: [] }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/countries?sort=deaths')
            .then(res => this.setState({sorted: res.data }))
    }

    render() {
        return (
            <div>
                    hi
            </div>
        )
    }
}



export default dailyChart