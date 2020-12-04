import React, { Component } from 'react'
import axios from 'axios';

export class CountryDeaths extends Component {

    state = {
        sortedDeaths: []
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/countries?sort=deaths')
            .then(res => this.setState({ sortedDeaths: res.data }))
    }
    render() {
        return (
            <div>
                 <h2 style={{marginBottom:'10px', marginLeft:'0px'}}>Countries by Deaths</h2>      
                        <div style= {{height:'250px', overflow:'auto', marginRight: '25px',width: '260px'}}>
                            {this.state.sortedDeaths.map((data) => (
                                <div style={country }>
                                <h4 >{data.country}</h4>
                                <h4 style={{marginLeft:'15px'}}>{parseInt(data.deaths).toLocaleString()}</h4>
                                </div>
                            ))}
                        </div>
            </div>
        )
    }
}

const country = {
    display: 'flex',
}

export default CountryDeaths
