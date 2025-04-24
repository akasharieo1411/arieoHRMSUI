import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const EmployeeCard = () => {
  const [time, setTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [signInOut, setSignInOut] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  // Update time, greeting, and current date every second
  useEffect(() => {
    const interval = setInterval(() => {
      const istTime = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setTime(istTime);

      const istHour = new Date().toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      const hour = parseInt(istHour);
      if (hour >= 5 && hour < 12) {
        setGreeting("🌅 Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("🌞 Good Afternoon");
      } else {
        setGreeting("🌙 Good Evening");
      }

      const today = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "2-digit",
        timeZone: "Asia/Kolkata",
      };
      const formattedDate = today.toLocaleDateString("en-IN", options);
      const parts = formattedDate.replace(/, /g, ",").split(" ");
      const finalFormattedDate = `${parts[0]}, ${parts[1]} ${parts[2]}`;
      setCurrentDate(finalFormattedDate);

      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (action: string) => {
    setSignInOut(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 dark:bg-gradient-to-r dark:from-purple-700 dark:to-indigo-800">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 w-full">
        <div className="flex items-center gap-3">
          <div className="bg-white text-purple-700 p-3 rounded-full dark:bg-gray-800 dark:text-white">
            <Icon icon="mdi:clock" height={24} />
          </div>
          <h5 className="text-lg font-semibold text-white dark:text-white">Swipes</h5>
        </div>
        <div className="text-sm text-white font-mono dark:text-gray-300">{currentDate}</div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-dotted border-white rounded-full animate-spin dark:border-gray-400"></div>
            <div className="absolute inset-0 border-4 border-dotted border-white rounded-full animate-spin delay-300 dark:border-gray-400"></div>
            <div className="absolute inset-0 border-4 border-dotted border-white rounded-full animate-spin delay-600 dark:border-gray-400"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-lg font-semibold text-white dark:text-gray-200">{greeting}</p>
          <div className="text-white text-3xl font-mono dark:text-gray-200">🕒 {time}</div>

          {/* Buttons */}
          <div className="flex gap-6 mt-5">
            {!isSignedIn && (
              <button
                onClick={() => handleButtonClick("Sign In")}
                className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-600 hover:to-green-400 text-white px-6 py-3 rounded-lg transition ease-in-out duration-300 transform hover:scale-105 dark:bg-gradient-to-r dark:from-green-500 dark:to-green-700"
              >
                Sign In
              </button>
            )}
            {isSignedIn && (
              <button
                onClick={() => handleButtonClick("Sign Out")}
                className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 text-white px-6 py-3 rounded-lg transition ease-in-out duration-300 transform hover:scale-105 dark:bg-gradient-to-r dark:from-red-600 dark:to-red-800"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg transform transition-all ease-in-out duration-300 scale-105 dark:bg-gray-800 dark:text-gray-200">
            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-100">
              {signInOut} Confirmation
            </h2>
            <p className="text-center text-lg text-gray-600 mb-6 dark:text-gray-300">
              Are you sure you want to {signInOut}?
            </p>
            <div className="flex justify-center gap-6">
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-md transition duration-300 transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (signInOut === "Sign In") {
                    setIsSignedIn(true);
                  } else {
                    setIsSignedIn(false);
                  }
                  closeModal();
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105 dark:bg-green-600 dark:hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;
