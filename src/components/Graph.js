import React, { Component } from 'react'
import axios from 'axios'

export class Graph extends Component {
    state = {
        countries: []
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => this.setState({countries: res.data }))
    }
    render() {
        return (
            <div>
                <select name="countrySelect" id="countrySelect">
                    {this.state.countries.map((data) => (
                        <option>{data.country}</option>
                    ))}
                </select>

                
            </div>
        )
    }
}

export default Graph
