import { Link } from "react-router";
import BlogCards from "src/components/dashboard/BlogCards";
import DailyActivity from "src/components/dashboard/DailyActivity";
import Calendar from "src/components/dashboard/Calender";
import NewCustomers from "src/components/dashboard/NewCustomers";
import ProductRevenue from "src/components/dashboard/ProductRevenue";
import { RevenueForecast } from "src/components/dashboard/RevenueForecast";
import TotalIncome from "src/components/dashboard/TotalIncome";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-30">
      
      {/* Revenue Forecast */}
      <div className="lg:col-span-8 col-span-12">
        <RevenueForecast />
      </div>

      {/* New Customers & Total Income */}
      <div className="lg:col-span-4 col-span-12">
        <div className="grid grid-cols-12 h-full items-stretch">
          <div className="col-span-12 mb-30">
            <NewCustomers />
          </div>
          <div className="col-span-12">
            <TotalIncome />
          </div>
        </div>
      </div>

      {/* Product Revenue, Daily Activity & Calendar in One Row with Equal Size */}
      <div className="col-span-12 grid grid-cols-12 gap-30">
        {/* Product Revenue */}
        <div className="col-span-12 lg:col-span-4">
          <ProductRevenue />
        </div>

        {/* Daily Activity */}
        <div className="col-span-12 lg:col-span-4 flex">
          <DailyActivity />
        </div>

        {/* Calendar */}
        <div className="col-span-12 lg:col-span-4">
          <Calendar />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="col-span-12">
        <BlogCards />
      </div>

      {/* Footer */}
      <div className="col-span-12 text-center mt-10">
        <p className="text-base">
          Design and Developed by{" "}
          <Link
            to="https://arieotech.com/"
            target="_blank"
            className="pl-1 text-primary underline decoration-primary"
          >
            arieotech.com
          </Link>
        </p>
      </div>
      
    </div>
  );
};

export default Dashboard;
