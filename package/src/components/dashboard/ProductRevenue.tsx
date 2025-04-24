import { useState } from "react";
import { Badge, Button, Modal, Label, TextInput, Textarea, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";

const TotalIncome = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState<{ date: string; name: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Show 2 holidays per page

  const holidays = [
    { date: "1 May", name: "Labour Day" },
    { date: "10 July", name: "Guru Purnima" },
    { date: "15 August", name: "Independence Day" },
    { date: "27 August", name: "Ganesh/ Chaturthi" },
    { date: "2 October", name: "Gandhi Jayanti" },
  ];

  const totalPages = Math.ceil(holidays.length / itemsPerPage);

  const handleApplyLeave = (holiday: { date: string; name: string }) => {
    setSelectedHoliday(holiday);
    setOpenModal(true);
  };

  const paginatedHolidays = holidays.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="bg-white dark:bg-darkgray border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-colors duration-300">
        {/* Upcoming Holidays */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Icon icon="solar:calendar-date-outline" height={22} className="text-primary" />
            <p className="text-xl font-semibold text-dark dark:text-white">Upcoming Holidays</p>
          </div>

          <ul className="space-y-4">
            {paginatedHolidays.map((holiday, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center text-lg border-b pb-3 border-gray-300 dark:border-gray-600 hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 p-3 rounded-lg"
              >
                <div>
                  <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{holiday.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-lightprimary dark:bg-indigo-900 text-primary px-4 py-2 rounded-lg">
                    {holiday.date}
                  </Badge>
                  <Tooltip content="Apply Leave" style="light">
                    <Button
                      size="xs"
                      onClick={() => handleApplyLeave(holiday)}
                      className="text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all px-4 py-1.5 rounded-md shadow-md flex items-center justify-center"
                    >
                      <Icon icon="mdi:calendar-plus" className="text-white" width={18} />
                    </Button>
                  </Tooltip>
                </div>
              </li>
            ))}
          </ul>

          {/* Pagination Controls with Circular Arrows */}
          <div className="flex justify-end gap-4 mt-6">
            <Button
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <Icon icon="mdi:chevron-left" width={16} className="text-gray-800 dark:text-white" />
            </Button>
            <Button
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <Icon icon="mdi:chevron-right" width={16} className="text-gray-800 dark:text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for Leave Application */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="md"
        popup
        className="backdrop-blur-sm"
      >
        <Modal.Header className="border-b-0 pt-6 pb-0" />
        <Modal.Body className="bg-white dark:bg-darkgray transition-colors duration-300">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="mdi:calendar-edit" width={28} className="text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Apply for <span className="text-primary">{selectedHoliday?.name}</span>
              </h3>
            </div>

            <div>
              <Label htmlFor="date" value="Date" className="mb-1 block text-gray-800 dark:text-gray-300" />
              <TextInput
                id="date"
                type="text"
                value={selectedHoliday?.date}
                readOnly
              />
            </div>

            <div>
              <Label htmlFor="reason" value="Reason for Leave" className="mb-1 block text-gray-800 dark:text-gray-300" />
              <Textarea
                id="reason"
                placeholder="Write your reason for leave..."
                required
                rows={4}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
              <Button color="gray" onClick={() => setOpenModal(false)} className="rounded-md">
                Cancel
              </Button>
              <Button
                onClick={() => setOpenModal(false)}
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-5 rounded-md shadow-md"
              >
                Submit Leave
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TotalIncome;
