import React from "react";
import Chart from "react-apexcharts";

interface AdminRideDonutChartProps {
  series: number[];
  labels: string[];
}

const AdminRideDonutChart: React.FC<AdminRideDonutChartProps> = ({
  series,
  labels,
}) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      height: 350,
      toolbar: { show: false },
    },
    labels,
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
      formatter: (val: number) => `${val}%`,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 300 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  return <Chart options={options} series={series} type="donut" height={350} />;
};

export default AdminRideDonutChart;
