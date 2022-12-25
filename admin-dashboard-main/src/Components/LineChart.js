import { Line } from "react-chartjs-2";
import {Chart as ChartJS,Title,Tooltip,LineElement,Legend,CategoryScale,LinearScale,PointElement,Filler} from 'chart.js';


ChartJS.register(
    Tooltip,Title,LineElement,PointElement,CategoryScale,LinearScale
)

export default function LineChart() {
    const data={
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
    const options={
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
    return (
        <div className="card linecard shadow">
            <div className="card-header lineheader">Earnings Overview</div>
            <div className="card-body lbody">
                <div className="LineChart">
                    <Line data={data} options={options} ></Line>
                </div>
            </div>
        </div>
        
    );
}
