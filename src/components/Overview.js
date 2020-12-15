import React, { Component } from 'react'
import axios from 'axios';
import { findByLabelText } from '@testing-library/react';
import Countries from './Countries'
import CountryDeaths from './CountryDeaths'
import RecoveredCountries from './RecoveredCountries'
import ActiveCountries from './ActiveCountries'
import Graph from './Graph'
import CountUp from 'react-countup'

export class Overview extends Component {

    state = {
        data: [],
        usData: [],
        sorted: [],
        countries: [],
        history: [],
        country: ''
    }

    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(res => this.setState({ data: res.data}))
        axios.get('https://disease.sh/v3/covid-19/countries/United%20States?strict=true')
            .then(res => this.setState({usData: res.data }))
        axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
            .then(res => this.setState({sorted: res.data }))
        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(res => this.setState({countries: res.data }))
        axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
            .then(res => this.setState({history: res.data }))
      }


      handleCountryChange = async (country) =>{
        console.log(country)
      }

    render() {
        return (
            <div style={{margin: "0px 25px"}}>
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
                <Countries sorted={this.state.sorted}/>
                <Graph countries={this.state.countries} history={this.state.history} handleCountryChange={this.handleCountryChange}/>
                <CountryDeaths />
                </div>

                <div style = {{display: 'flex', justifyContent: 'space-between'}}>
               <RecoveredCountries />  
               <ActiveCountries /> 
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
