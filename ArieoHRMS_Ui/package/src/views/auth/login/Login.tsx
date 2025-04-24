import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import AuthLogin from "../authforms/AuthLogin";
import { Link } from "react-router";

// Gradient overlay styling (unchanged)
const gradientStyle = {
  background: "linear-gradient(45deg, rgba(238, 119, 82, 0.2), rgba(231, 60, 126, 0.2), rgba(35, 166, 213, 0.2), rgba(35, 213, 171, 0.2))",
  backgroundSize: "400% 400%",
  animation: "gradient 15s ease infinite",
  height: "100vh",
};

const Login = () => {
  return (
    <div style={gradientStyle} className="relative overflow-hidden h-screen dark:bg-black transition-colors duration-300">
      <div className="flex h-full justify-center items-center px-4">
        <div className="rounded-xl shadow-md bg-white dark:bg-gray-900 p-6 w-full md:w-96 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col gap-2 p-0 w-full">
            <div className="mx-auto">
              <FullLogo />
            </div>
            <p className="text-sm text-center text-gray-800 dark:text-gray-300 my-3">
              Sign in on ARIEO-Hrms
            </p>
            <AuthLogin />
            {/* Optional: enable register link below */}
            {/* 
            <div className="flex gap-2 text-sm font-medium mt-6 items-center justify-center text-gray-700 dark:text-gray-300">
              <p>New to ARIEO-Hrms?</p>
              <Link to="/auth/register" className="text-primary dark:text-blue-400 hover:underline">
                Create an account
              </Link>
            </div> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
