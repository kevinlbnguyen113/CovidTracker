import React, { Component } from 'react'
import axios from 'axios'
//npm install --save react-chartjs-2 chart.js
import { Line } from 'react-chartjs-2'



export class Graph extends Component {
    
    state = {
        history: [],
        keys: [],
        values: []

    }
    componentDidMount(){
        axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        .then(res => this.setState({history: res.data }))

       
   }

   
   
    render() {

        if(this.state.keys.length === 0 ){
            for(var key in this.props.history.cases){
                this.state.keys.push(key)
                this.state.values.push(this.state.history.cases[key])
            }
        }

        if(this.props.history.length !== 0){
            return (
                <div style = {{background: "#bbb", borderRadius: "2%", padding: "10px", width: "100%", margin: "0px 20px"}}>
                <div style={{display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center", width: "100%"}}>

                    <select name="countrySelect" id="countrySelect" onChange={(e) => this.props.handleCountryChange(e.target.value)}>
                    <option key="World">Worldwide</option>
                        {this.props.countries.map((data) => (
                            <option key={data.country} value={data.country}>{data.country}</option>
                        ))}
                    </select>
                    <div style ={{width: "85%"}}>
                        <Line 
                            data= {{
                            labels: this.state.keys,
                            datasets: [{
                                data: this.state.values,
                                label: "Infected",
                                fill: false,
                                borderColor: "#F00",
                            }] 
                        }}/>
                    </div>
                </div>
                </div>
            )
        } else {
            return <div>
                ERROR
            </div>
        }
    }
}



export default Graph
