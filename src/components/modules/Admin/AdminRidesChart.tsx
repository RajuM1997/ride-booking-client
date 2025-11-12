// EarningsBarChart.tsx
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
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: "20%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    // xaxis: {
    //   reversed: true,
    // },
  };

  const series = [
    {
      data,
    },
  ];
  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default AdminRideChart;
