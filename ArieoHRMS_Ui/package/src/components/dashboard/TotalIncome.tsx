import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { Icon } from "@iconify/react";

const FoodTracking = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const [snack, setSnack] = useState<string>("no");
  const [dinner, setDinner] = useState<string>("no");
  const [chapatiCount, setChapatiCount] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setSnack("no");
    setDinner("no");
    setChapatiCount(1);
  };

  return (
    <div className="bg-white dark:bg-darkgray border dark:border-gray-700 rounded-3xl p-8 max-w-md mx-auto transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Icon icon="solar:food-outline" height={24} className="text-primary" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          🍽️ Track Your Meals 🥗
        </h2>
      </div>

      {/* Snack & Dinner */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-6">
        {/* Snack */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Want Snack?</p>
          <div className="flex gap-4">
            {["yes", "no"].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  value={val}
                  checked={snack === val}
                  onChange={() => setSnack(val)}
                  className="accent-primary"
                />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Dinner */}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Want Dinner?</p>
          <div className="flex gap-4">
            {["yes", "no"].map((val) => (
              <label key={val} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input
                  type="radio"
                  value={val}
                  checked={dinner === val}
                  onChange={() => setDinner(val)}
                  className="accent-primary"
                />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Chapati Count */}
      {dinner === "yes" && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-800 dark:text-white mb-2">Chapatis count</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setChapatiCount((count) => Math.max(1, count - 1))}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-lg font-bold text-gray-800 dark:text-white"
            >
              –
            </button>
            <span className="text-base font-semibold text-gray-800 dark:text-white">{chapatiCount}</span>
            <button
              onClick={() => setChapatiCount((count) => count + 1)}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-lg font-bold text-gray-800 dark:text-white"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full mt-4 bg-primary text-white font-semibold rounded-lg dark:bg-primary"
      >
        Submit
      </Button>

      {/* Modal */}
      <Modal show={showModal} onClose={handleCloseModal} size="md" popup>
        <Modal.Header className="border-b-0" />
        <Modal.Body className="bg-white dark:bg-darkgray transition-colors duration-300">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-800 rounded-full p-4 shadow-md">
                <Icon icon="mdi:check-circle" height={48} className="text-green-600 dark:text-green-300" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Submitted Successfully!</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">Here's your food log for today:</p>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-left text-sm space-y-3 shadow-inner">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Icon icon="mdi:calendar" className="text-blue-500" />
                <span><strong>Date:</strong> {formattedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Icon icon="mdi:cookie" className="text-yellow-500" />
                <span><strong>Snack:</strong> {snack}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Icon icon="mdi:silverware-fork-knife" className="text-red-500" />
                <span><strong>Dinner:</strong> {dinner}</span>
              </div>
              {dinner === "yes" && (
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Icon icon="mdi:bread-slice" className="text-amber-600" />
                  <span><strong>Chapatis:</strong> {chapatiCount}</span>
                </div>
              )}
            </div>

            <div className="mt-6">
              <Button
                onClick={handleCloseModal}
                className="w-full bg-primary text-white rounded-lg font-medium"
              >
                Got it!
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FoodTracking;
