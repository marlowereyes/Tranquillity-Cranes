import styles from './GraphBar.module.css'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors,
} from 'chart.js'
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function GraphBar() {
    const [chartData, setChartData] = useState({
        datasets:[]
    })
    const[chartOptions, setChartOptions] = useState({});
    
    useEffect(() => {
        setChartData({
            labels: ["12-17 years", "18-34 years", "35-49 years", "50-64 years", "65 years or older"],
            datasets: [
                {
                    label: 'Male',
                    data: [14, 18, 16, 11, 6],
                    borderColor: 'rgb(0, 0, 225)',
                    backgroundColor: 'rgb(111, 237, 231)'                        
                },
                {
                    label: 'Female',
                    data: [24, 32, 25, 19, 10],
                    borderColor: 'rgb(0, 0, 139)',
                    backgroundColor: 'rgba(0, 0, 139, 0.5)'
                }
            ]
        })

        setChartOptions({
            
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Precentage of population by gender that struggles with mental health"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

    return (
        <div style={{ maxWidth: "800px", maxHeight: "600px", height: "500px"}}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
}
