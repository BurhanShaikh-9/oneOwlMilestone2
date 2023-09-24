import React from 'react'
import BodyComponent from '../../components/bodyComponent';
import StatsBar from '../../components/stats';
import ReactApexChart from 'react-apexcharts';
import { useEffect } from 'react';
import { useRef } from 'react';


export const DashboardAgent = () => {

  const customTheme = {
    palette: {
      type: 'custom',
      options: {
        customColors: ['#0B2360', '#E6E8EC'],
      },
    },
  };


  const options = {
    series: [{
      name: 'Today',
      data: [44, 55, 57, 56, 61, 58, 63, 60]
    }, {
      name: 'Yesterday',
      data: [76, 85, 101, 98, 87, 105, 91, 114]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08'],
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1,
      colors: ['#0B2360', '#E6E8EC']
    },    
    theme: {
      palette: 'custom',
      monochrome: {
        enabled: true,
        color: '#0B2360'
      },
    },
  };
  
  const chartOptions = {
    series: [100, 55, 20],
    labels: ['Afternoon', 'Evening', 'Morning'],
    chart: {
      type: 'donut',
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
      },
    },
    colors: ['#0B2360', '#c2f8ff', '#39D2EE'],
    dataLabels: {
      enabled: true
    },
    legend: {
      position: 'bottom'
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  

  return (
    <React.Fragment>
      <BodyComponent>
        <div className="row g-3 AgentApp">
          <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading2">
                    <p className='chartHeading2InnerFirst'>Revenue</p>
                    <p className='chartHeading2InnerSecond'> IDR 7.852.000</p>
                  </div>

                </div>
              </div>
              <ReactApexChart  options={options} series={options.series} type="bar" height={300} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 ">
            <div className="card cardMargin">
              <div className="card-body">
                <div className="chart">
                  <div className="chartHeading2">
                    <p className='chartHeading2InnerFirst'>Order Time</p>
                    <p className='chartHeading2InnerThird'> From 1-6 Dec, 2020</p>
                  </div>

                </div>
              </div>
              <ReactApexChart options={chartOptions} series={chartOptions.series} type="donut" height={359} />
            </div>
          </div>


        </div>
      </BodyComponent>
    </React.Fragment>
  )
}
