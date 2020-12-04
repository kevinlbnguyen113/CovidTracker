import React, { Component } from 'react'
import axios from 'axios';
import { findByLabelText } from '@testing-library/react';
import Countries from './Countries'
import CountryDeaths from './CountryDeaths'
import Graph from './Graph'
import CountUp from 'react-countup'

export class Overview extends Component {

    state = {
        data: [],
        usData: []
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/all')
                .then(res => this.setState({ data: res.data}))
        axios.get('https://disease.sh/v3/covid-19/countries/United%20States?strict=true')
            .then(res => this.setState({usData: res.data }))
      }


   

    render() {
        return (
            <div >
            <h1 style={{textAlign:'center',marginTop:'20px'}}>Worldwide Statistics</h1>
                <div style={{display: 'flex',justifyContent:'center'}}>
                    <div style={div1}>
                        <h2>Active Cases</h2>
                        <h2><CountUp start={0} end={(parseInt(this.state.data.cases)) || 0} separator=","  /></h2>
                        
                        
                    </div>
                    <div style={div1}>
                        <h2>Total Deaths</h2>
                        <h2><CountUp start={0} end={parseInt(this.state.data.deaths) || 0} separator="," /></h2>
                    </div>
                    <div style={div1}>
                        <h2>Total Recovered</h2>
                        <h2><CountUp start={0} end={parseInt(this.state.data.recovered) || 0} separator="," /></h2>
                    </div>
                    
                </div>
                <h1 style={{textAlign:'center',marginTop:'20px'}}> U.S. Statistics</h1>

                <div style={{display: 'flex',justifyContent:'center'}}>
                    <div style={div1}>
                        <h2>Active Cases</h2>
                        <h2><CountUp start={0} end={parseInt(this.state.usData.active) || 0} separator=","/></h2>
                    </div>
                    <div style={div1}>
                        <h2>Total Deaths</h2>
                        <h2><CountUp start={0} end={parseInt(this.state.usData.deaths) || 0} separator="," /></h2>
                    </div>
                    <div style={div1}>
                        <h2>Total Recovered</h2>
                        <h2><CountUp start={0} end={parseInt(this.state.usData.recovered) || 0} separator="," /></h2>
                    </div>
                    
                </div>
                
               
                <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <Countries />
                <Graph />
                <CountryDeaths />
                </div>

            </div>
        )
    }
}

const div1 = {
    height: '100px',
    width: '200px',
    background: '#bbb',
    padding: '10px',
    margin: '25px',
    textAlign: 'center',
    lineHeight: '250%',
    borderRadius:'2%'
    
}

export default Overview
