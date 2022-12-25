import '../Pages/ChartsPage.css';

import { Line } from "react-chartjs-2";
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler, ArcElement} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    Tooltip,Title,LineElement,PointElement,CategoryScale,LinearScale,ArcElement, Tooltip, Legend
)

export default function ChartsPage(){
    const data1={
        labels:["Jan","","Mar","","May","","July","","Sept","","Nov",""],
        datasets:[
            {   label:`EARNINGS`,
                data:[0,10000,5000,15000,10000,20000,15000,25000,20000,30000,25000,40000],
                backgroundColor:'#0275d8',
                borderColor:'#0275d8',
                tension:0.4,
                fill:true
            }
        ],
    }
    const options1={
        scales:{
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid: {
                    borderDash: [2]
                },
                ticks:{
                    stepSize:10000,
                    callback:(value)=> '$'+value
                },
            }
        },
        maintainAspectRatio:false
    }
    const data2={
        labels:['Direct','Referral','Social'],
        datasets:[
            {
                data:[55,30,15],
                backgroundColor:[
                    '#0275d8',
                    '#5cb85c',
                    '#5bc0de'
                ],
                cutout:'80%'
            }
        ]
    }
    const options2={
        maintainAspectRatio:false,
        
    }
    return(
        <div className="chartspagecontainer">
            <div className='chartstitle'>Charts</div>
            <div className='chartspagepara'>Chart.js is a third party plugin that is used to generate the charts in this theme. The charts below have been customized - for further customization options, please visit the <a href='https://www.chartjs.org/docs/latest/'>official chart.js documentation</a></div>
            <div className='chartspagecharts'>
            <div className="card chartspagelinecard shadow">
                <div className="card-header chartspagelineheader">Earnings Overview</div>
                <div className="card-body chartspagelbody">
                    <div className="chartspageLineChart">
                        <Line data={data1} options={options1} ></Line>
                    </div>
                   
                </div>
        </div>
        <div className="card chartspagepiecard shadow">
            <div className="card-header chartspagepieheader">Revenue Sources</div>
            <div className="card-body chartspagepbody">
                <div className='chartspagePieChart'>
                    <Doughnut data={data2}  options={options2} ></Doughnut>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}