import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const RevenueForecast = () => {
  // Fixed data for simplicity
  const totalMen = 45;
  const totalFemale = 36;

  const optionsPieChart: ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Men", "Female"],
    colors: ["#3B82F6", "#EC4899"],
    legend: {
      position: "bottom",
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [totalMen, totalFemale];

  return (
    <div className="rounded-xl shadow-md dark:shadow-dark-md bg-white dark:bg-darkgray border border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
      {/* Welcome message */}
      <div className="mb-4">
        <p className="text-xl font-bold text-blue-500 dark:text-white">Welcome, Admin! 👋</p>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h5 className="text-lg font-semibold text-gray-800 dark:text-white">Employee Gender Distribution</h5>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center mt-2">
        <Chart options={optionsPieChart} series={series} type="pie" width="100%" height="300" />
      </div>

      {/* Totals */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-6">
        <div className="flex gap-4 ps-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="text-sm text-gray-700 dark:text-gray-300">Men</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-white">{totalMen}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-pink-400"></span>
            <span className="text-sm text-gray-700 dark:text-gray-300">Female</span>
            <span className="text-sm font-semibold text-gray-800 dark:text-white">{totalFemale}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-darkgray border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 w-full md:w-auto flex items-center justify-between gap-6 transition-colors duration-300">
          <p className="text-lg font-semibold text-gray-800 dark:text-white mb-0">Total Employees</p>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-0">{totalMen + totalFemale}</p>
        </div>
      </div>
    </div>
  );
};

export { RevenueForecast };
