import { useState } from "react";

type Month = "Jan 2025" | "Feb 2025" | "Mar 2025";

const DailyActivity = () => {
  const [showSalary, setShowSalary] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<Month>("Mar 2025");

  const payslips: Record<Month, { paidDays: number; grossPay: string; deduction: string; netPay: string }> = {
    "Jan 2025": {
      paidDays: 31,
      grossPay: "$4,800",
      deduction: "$400",
      netPay: "$4,400",
    },
    "Feb 2025": {
      paidDays: 28,
      grossPay: "$4,700",
      deduction: "$450",
      netPay: "$4,250",
    },
    "Mar 2025": {
      paidDays: 31,
      grossPay: "$5,000",
      deduction: "$500",
      netPay: "$4,500",
    },
  };

  const maskedValue = "*****";

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value as Month);
  };

  return (
    <div className="w-full max-w-full bg-white dark:bg-darkgray rounded-2xl p-8 border-gray-200 dark:border-gray-300 ">

      {/* Header: Title + Dropdown */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h5 className="text-xl font-bold text-dark dark:text-gray-200">Payslip</h5>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          className="px-3 py-2 border border-gray-300 rounded-md  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.keys(payslips).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Month Indicator */}
      <div className="text-center text-lg font-medium text-gray-500 mb-8">{selectedMonth}</div>

      {/* Payslip Grid */}
      <div className="grid grid-cols-2 gap-6 text-center text-sm sm:text-base">
        {/* Row 1: Paid Days & Gross Pay */}
        <div>
          <p className="font-semibold text-gray-500 text-xs">Paid Days</p>
          <p className="text-lm text-gray-800 dark:text-white">
            {payslips[selectedMonth].paidDays}
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-500 text-xs">Gross Pay</p>
          <p className="text-lm text-gray-800 dark:text-white">
            {showSalary ? payslips[selectedMonth].grossPay : maskedValue}
          </p>
        </div>

        {/* Row 2: Deduction & Net Pay */}
        <div>
          <p className="font-semibold text-gray-500 text-xs">Deduction</p>
          <p className="text-lm text-gray-800 dark:text-white">
            {showSalary ? payslips[selectedMonth].deduction : maskedValue}
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-500 text-xs">Net Pay</p>
          <p className="text-lm text-green-600 font-bold">
            {showSalary ? payslips[selectedMonth].netPay : maskedValue}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={() => alert("Download initiated!")}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-150"
        >
          Download
        </button>
        <button
          onClick={() => setShowSalary(!showSalary)}
          className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-semibold hover:bg-gray-200 transition duration-150"
        >
          {showSalary ? "Hide Salary" : "Show Salary"}
        </button>
      </div>
    </div>
  );
};

export default DailyActivity;
