import React from "react";
import Chart from "react-apexcharts";

interface AreaChartProps {
  series: { name: string; data: number[] }[];
  categories: string[];
}

const AdminRideAreaChart: React.FC<AreaChartProps> = ({
  series,
  categories,
}) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: "#e5e7eb",
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories,
      labels: { style: { colors: "#d1d5db" } },
    },
    yaxis: {
      title: { text: "Number of Earning" },
      labels: { style: { colors: "#d1d5db" } },
    },
    tooltip: {
      theme: "dark",
      style: {
        fontSize: "13px",
      },
      marker: { show: false },
      y: {
        formatter: (val: number) => `${val} TK`,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    colors: ["#3B82F6"],
  };

  return <Chart options={options} series={series} type="area" height={350} />;
};

export default AdminRideAreaChart;
