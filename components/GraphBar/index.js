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
            labels: ["0%", "10%", "20", "30%", "40%"],
            datasets: [
                {
                    label: 'Male',
                    data: [14, 18, 16, 11, 6],
                    borderColor: 'rgb(0, 0, 225)',
                    backgroundColor: 'rgba(0, 0, 225, 0.5)'                        
                },
                {
                    label: 'Female',
                    data: [24, 32, 25, 19, 10],
                    borderColor: 'rgb(255, 192, 203)',
                    backgroundColor: 'rgba(255, 192, 203, 0.5)'
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

    return(
        
            <Bar data={chartData} option={chartOptions} style={{maxWidth: "500px", maxHeight: "500px", marginLeft: "600px"}}/>

    )
}
