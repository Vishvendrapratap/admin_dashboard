import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
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
    const options={
        maintainAspectRatio:false,
        
    }
    return (
        <div className="card piecard shadow">
            <div className="card-header pieheader">Revenue Sources</div>
            <div className="card-body pbody">
                <div className='PieChart'>
                    <Doughnut data={data2}  options={options} ></Doughnut>
                </div>
            </div>
        </div>
    );
}
