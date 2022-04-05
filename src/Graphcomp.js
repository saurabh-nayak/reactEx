import React, { Component } from 'react'
import {AreaChart, XAxis, YAxis, Tooltip, Area} from 'recharts';

export default class Graphcomp extends Component {

    constructor(){
      super();
    this.state= {data:[],
      dailydata : [
        {name: '10AM',uv: 5000,},
        {name: '12PM',uv: 2000,},
        {name: '2PM',uv: 6000,},
        {name: '4PM',uv: 2780,},      
        {name: '6PM',uv: 7000,},
        {name: '8PM',uv: 9000,}
      ],
    weeklyData: [
      { name: 'Mon',uv: 900,},
      {name: 'Tues',uv: 2000,},
      {name: 'Wed',uv: 600,},
      {name: 'Thur',uv: 2780,},      
      {name: 'Fri',uv: 7000,},
      {name: 'Sat',uv: 100,},
      {name: 'Sun',uv: 900,}
    ],
    monthlyData: [
      {name: 'Jan',uv: 900,},
      {name: 'Feb',uv: 2000,},
      {name: 'March',uv: 600,},
      {name: 'April',uv: 2780,},      
      {name: 'May',uv: 7000,},
      {name: 'June',uv: 100,},
      {name: 'July',uv: 900,},
      {name: 'Aug',uv: 900,},
      {name: 'Sept',uv: 900,},
      {name: 'Oct',uv: 900, },
      {name: 'Nov',uv: 900,},
      {name: 'Dec',uv: 900,},
    ]
    }
    }
    render() {
        return (
      <div className="App">
      <button onClick={()=>this.setState(this.state.data=this.state.dailydata)}>1D</button>
      <button onClick={()=>this.setState(this.state.data=this.state.weeklyData)}>1W</button>
      <button onClick={buttonClicked}>1M</button>
      <button onClick={buttonClicked}>6M</button>
      <button onClick={()=>this.setState(this.state.data=this.state.monthlyData)}>12M</button>
      <button onClick={()=>this.setState(this.state.data=this.state.dailydata.concat(this.state.weeklyData).concat(this.state.monthlyData))}>ALL</button>
      <AreaChart width={1336} height={250} data={this.state.data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="100%" stopColor="#fcd303"/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name"/>
  <YAxis />
  <Tooltip cursor={false} content={<CustomTooltip/>}/>
  <Area type="monotone" dataKey="uv"  fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
    </div>
        )
    }
}

function buttonClicked(){}

function CustomTooltip({active, payload, label}){
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes();
    if(active){
      return <div>
  <p>{label+", "+time}PM</p>
  </div>
    }
  return null;
  }
