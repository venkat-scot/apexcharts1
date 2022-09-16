import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import React from 'react';

export default function LineChart() {

    const data: ApexOptions = {

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],

        chart: {
            height: 350,
            width: 150,
            type: 'area',
            zoom: {
                enabled: true,
                type: 'x',
                autoScaleYaxis: false,
                zoomedArea: {
                    fill: {
                        color: 'black',
                        opacity: 0.4
                    },
                    stroke: {
                        color: '#0D47A1',
                        opacity: 0.4,
                        width: 1
                    }
                }
            },
            toolbar: {
                show: true,
            },
            events: {
                animationEnd: undefined,
                beforeMount: undefined,
                mounted: undefined,
                updated: undefined,
                mouseMove: undefined,
                mouseLeave: undefined,
                click: function (event, chartContext, config) {
                    console.log(config.config.series[config.seriesIndex])
                    console.log(config.config.series[config.seriesIndex].name)
                    console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
                },
                legendClick: undefined,
                markerClick: undefined,
                selection: undefined,
                dataPointSelection(event, chartContext, config) {
                    console.log(config.config.series[config.seriesIndex])
                    console.log(config.config.series[config.seriesIndex].name)
                    console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
                },
                dataPointMouseEnter: undefined,
                dataPointMouseLeave: undefined,
                // beforeZoom: function (chartContext, config) {

                //     console.log(chartContext);
                //     console.log(config);
                // },
                beforeResetZoom: undefined,
                zoomed: function (chartContext, config) {

                    console.log(chartContext);
                    console.log(config);
                },
                scrolled: function (chartContext, { xaxis }) {
                    // ...
                    console.log('scroll called');
                },
                brushScrolled: undefined,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },


    };

    return (
        <div id="chart" >
            <ReactApexChart options={data} series={data.series} type="line" height={350} />
        </div>
    );
}