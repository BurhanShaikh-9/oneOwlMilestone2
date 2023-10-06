import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import StatsBar from '../../components/stats'
import ReactApexChart from 'react-apexcharts';


export const DashboardAdmin = () => {

    const LineChart = {
        chart: {
            type: 'line',
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                },
                stroke: 1,
            },
        },
        colors: ['#a8c5da', '#1c1c1c'],
        series: [
            {
                name: 'Current',
                data: [0, 3, 8, 2, 1, 7],
            },
            {
                name: 'Previous Week',
                data: [0, 2, 4, 5, 6, 7],
                strokeWidth: 1,
            }

        ],
        stroke: {
            curve: 'smooth',
            width: 4
        },
        xaxis: {
            categories: ['0', '1', '2', '3', '4', '5'],
        },
        yaxis: {
            axisBorder: {
                show: true,
                color: '#e0e0e0',
                width: 1,
                offsetX: 0,
                offsetY: 0,
            },
        },
        legend: {
            position: 'top', // Set legend position to top
        },
    };

    return (
        <React.Fragment>
            <BodyComponent>
                <div className="row g-3">
                    <StatsBar />
                    <div className="col-md-12 col-lg-9 col-xl-9 ">
                        <div className="card cardMargin darkModeCard">
                            <div className="card-body">
                        
                                    <div className="chartHeading1">
                                        <p>Total Users</p>
                                    </div>
                    
                            </div>
                            <div className='adminDashboardChart'>

                                <ReactApexChart options={LineChart} series={LineChart.series} type="line" height={350} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-3 col-xl-3 ">
                        <div className="card">
                            <div className="card-body">
                            <div className="chartHeading1">
                                        <p>Total Users</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BodyComponent>

        </React.Fragment>
    )
}
