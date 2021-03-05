import React, { Component, useState, useEffect, useRef } from "react";
// import {Line} from 'react-chartjs-2';
import moment from 'moment'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, AreaChart, Area
  } from 'recharts';
  import {

    Box,
   
  } from '@chakra-ui/react';


function convertToTime(time){
    return moment(time).format("hh:mm a")
}

function createDataPoint(time,price){
    var datapoint = {
        "time": convertToTime(time),
        "price": price
    }
    return datapoint;
}


const StockChart = (props) => {

const webSocket = useRef(null);

const [data, setData] = useState([]);

const [dataCounter, setDataCounter] = useState(0);

useEffect(() => { 
// https://stackoverflow.com/questions/58432076/websockets-with-functional-components
//https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/onopen
    const finnhub_token = "but9m5v48v6uea8aseag"; 
    webSocket.current = new WebSocket('wss://ws.finnhub.io?token=but9m5v48v6uea8aseag');
    webSocket.current.onopen = (event) => {
        webSocket.current.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}));
    }
    webSocket.current.onmessage = (event) => {
            var res = JSON.parse(event.data)
            //console.log(res.data[0])
            
            

            if(typeof(res.data) !== 'undefined' && res.data !== null){
                // setDataCounter(dataCounter + 1)
                setData(currentData => [...currentData, createDataPoint(res.data[0].t,res.data[0].p)])
            // console.log(data)
                
            }

           
       
    }
    return () => webSocket.current.close();
}, [])

// useEffect(() => {
//     console.log(dataCounter) 
//     if(dataCounter == 50){
//     setDataCounter(0) 
//     }
//     else {
//         setDataCounter(dataCounter + 1)
//     }
//     }            
// , [dataCounter]);
// useEffect(() => {
//     console.log(data.length)
//     if(data.length === props.numPoints){
//         setData(currentData => [...currentData].shift())
//      }
// }, [data]);

    return (
        <Box mt={10}>
            {/* <Line data={liveData} options={options}/> */}
        {/* <ResponsiveContainer> */}

        <AreaChart
          width={900}
          height={350}
          data={data}
          margin={{
            
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>

          <XAxis dataKey="time" stroke="white" axisLine={{ stroke: '#FFFFFF' }}/>
          <YAxis type="number" stroke="white" domain={['dataMin * 0.8', 'dataMax * 1.1']} axisLine={{ stroke: '#FFFFFF' }} />
          <Tooltip cursor={{ stroke: 'gray', strokeWidth: 2 }} contentStyle={{color:'blue'}} itemStyle={{color:'blue'}} />
          <Area type="monotone" dataKey="price" stroke="#8884d8" fill="url(#colorUv)" activeDot={{ r: 8 }} strokeWidth={2}/>
        </AreaChart>


            {/* <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >

      
        <XAxis dataKey="time" stroke="white" axisLine={{ stroke: '#FFFFFF' }}/>
        <YAxis type="number" stroke="white" domain={['dataMin', 'dataMax * 0.2']} axisLine={{ stroke: '#FFFFFF' }} />
        <Tooltip cursor={{ stroke: 'gray.900', strokeWidth: 2 }} contentStyle={{color:'blue.200'}} itemStyle={{color:'blue.200'}}/>
        <Legend />
        <Line type="linear" dataKey="price" stroke="#FFFFFF" activeDot={{ r: 8 }} strokeWidth={2} />
        <Brush/>
      </LineChart> */}

      {/* </ResponsiveContainer> */}
      <button className="button is-warning is-inverted" onClick={() => webSocket.current.close()}>Toggle Live Feed</button>
        </Box>
    );
  
}

export default StockChart;