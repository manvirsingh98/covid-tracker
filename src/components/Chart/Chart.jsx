import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar}  from 'react-chartjs-2';
import { Container, Row, Col,Card } from 'react-bootstrap';

import styles from './Chart.module.css';

const Chart = ({data, country}) => {
    const [dailyData, setDailyData] = useState([]);

     useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);
    const lineChart = (
        dailyData.length
        ?(
        <Line
        data ={{
            labels: dailyData.map(({date}) => date),
            datasets:[
                {
                    data:dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#4a5568',
                    fill: true
                },
                {
                
                    data:dailyData.map(({recovered}) => recovered),
                    label: 'Recovered',
                    borderColor: '#1aaf58',
                    fill: true

                },
                {
                
                    data:dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#f56565',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }
                
            ],
        }}
        />) : null
    );


    var confirmedCase = [];
    var dailyCaseDate = [];


    for(var index in data.timeline){

       

        confirmedCase.push({
            confirmed: data.timeline[index].new_confirmed,
            recovered: data.timeline[index].new_recovered,
            deaths: data.timeline[index].new_deaths
        });
        dailyCaseDate.push({updated_at:data.timeline[index].updated_at})
    }
    //console.log(confirmedCase)

    const barChart = (
        
        data.confirmed
        ? (
            <Row>
               <Col md={7}>
                   <h3 className="text-center">Total</h3>
            <Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        '#4a5568',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data:[data.confirmed, data.recovered, data.deaths]
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state is ${country}`}
            }}
            />
            </Col>
            <Col md={5}>
                   <h3 className="text-center mb-3">Today Cases</h3>
                   <Card  className={`border-0  w-100`}>
                        <Card.Body>
                                <Card.Subtitle className="mb-3">Deaths: {data.todayDeath}</Card.Subtitle>
                                <Card.Subtitle className="mb-3">Confirmed cases: {data.todayConfirmed}</Card.Subtitle>
                        </Card.Body>
                    </Card>
            </Col>
            
            <Col md={12}  className="mt-4">
            <h3 className="text-center">Daily</h3>
            
            {/* {
            //console.log(data.timeline)}
           

                
            } */}
          
            {/* <Line
        data ={{
            labels: confirmedCase.map(({updated_at}) => updated_at),
            datasets:[
                {
                    data:confirmedCase.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#2d3748',
                    fill: true
                },
                {
                
                    data:confirmedCase.map(({recovered}) => recovered),
                    label: 'Recovered',
                    borderColor: '#1aaf58',
                    fill: true

                },
                {
                
                    data:confirmedCase.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor: '#f56565',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }
                
            ],
        }}
        /> */}
                <Bar
                data={{
                labels:
                dailyCaseDate.map(({updated_at}) => {

                     return new Date(updated_at).toDateString()

                    

                    
                  
                }
                 
                ),
                datasets: [
                    {
                    label: 'Infected',
                    borderColor: '#2d3748',
                    data:confirmedCase.map(({confirmed}) => confirmed),
                    backgroundColor: '#2d3748',
                    fill: true
                },

                {
                    label: 'Recovered',
                    borderColor: '#1aaf58',
                    data:confirmedCase.map(({recovered}) => recovered),
                    backgroundColor: '#1aaf58',
                    fill: true
                },


                {
                    label: 'Deaths',
                    borderColor: '#f56565',
                    data:confirmedCase.map(({deaths}) => deaths),
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                },

            ]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state is ${country}`}
            }}
            />
            </Col>
            </Row>
        ) : null
    )

    return (
       <Container>
           
               {country ? barChart: lineChart}

         
           

       </Container>
    )
}

export default Chart;