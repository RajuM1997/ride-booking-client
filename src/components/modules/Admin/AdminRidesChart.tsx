import React from "react";
import Chart from "react-apexcharts";

interface AdminRideChartProps {
  data: { x: string; y: number; fillColor?: string; strokeColor?: string }[];
}

const AdminRideChart: React.FC<AdminRideChartProps> = ({ data }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "20%",
        borderRadius: 6,
      },
    },
    legend: { show: false },
    xaxis: {
      labels: {
        style: {
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
        },
      },
      title: {
        text: "Completed Rides",
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: (val: number) => `${val} rides`,
      },
    },
  };

  const series = [
    {
      name: "Rides",
      data,
    },
  ];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default AdminRideChart;
