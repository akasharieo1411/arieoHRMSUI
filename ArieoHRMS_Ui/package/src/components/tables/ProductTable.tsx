import React, { useState } from "react";
import { Badge, Dropdown, Modal, Table, Pagination } from "flowbite-react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Icon } from "@iconify/react";

// ----------------- Types ------------------
interface Employee {
  employeeName: string;
  designation: string;
  statustext: string;
  statuscolor: "green" | "red";
  process: number;
  email: string;
  department: string;
}

interface ActionItem {
  icon: string;
  listtitle: "Edit" | "Delete";
}

// ----------------- Component ------------------
const ProductTable: React.FC = () => {
  const [editModal, setEditModal] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const generateEmail = (name: string): string =>
    `${name.toLowerCase().replace(/\s+/g, ".")}@arieotech.com`;

  const employeeTableData: Employee[] = [
    {
      employeeName: "John Doe",
      designation: "Software Engineer",
      statustext: "Active",
      statuscolor: "green",
      process: 100,
      email: generateEmail("John Doe"),
      department: "Engineering",
    },
    {
      employeeName: "Jane Smith",
      designation: "UI/UX Designer",
      statustext: "Inactive",
      statuscolor: "red",
      process: 0,
      email: generateEmail("Jane Smith"),
      department: "Design",
    },
    {
      employeeName: "Michael Johnson",
      designation: "Product Manager",
      statustext: "Active",
      statuscolor: "green",
      process: 100,
      email: generateEmail("Michael Johnson"),
      department: "Product",
    },
    {
      employeeName: "Emily Davis",
      designation: "QA Tester",
      statustext: "Inactive",
      statuscolor: "red",
      process: 0,
      email: generateEmail("Emily Davis"),
      department: "Quality",
    },
    ...Array.from({ length: 12 }).map((_, i) => {
      const name = `Extra Person ${i + 1}`;
      return {
        employeeName: name,
        designation: "Intern",
        statustext: i % 2 === 0 ? "Active" : "Inactive",
        statuscolor: (i % 2 === 0 ? "green" : "red") as "green" | "red",
        process: i % 2 === 0 ? 100 : 0,
        email: generateEmail(name),
        department: "Support",
      };
    }),
  ];

  const tableActionData: ActionItem[] = [
    { icon: "solar:pen-new-square-broken", listtitle: "Edit" },
    { icon: "solar:trash-bin-minimalistic-outline", listtitle: "Delete" },
  ];

  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const handleActionClick = (action: "Edit" | "Delete", index: number) => {
    if (action === "Edit") setEditModal(index);
    else if (action === "Delete") setDeleteModal(index);
  };

  const totalPages = Math.ceil(employeeTableData.length / itemsPerPage);
  const paginatedData = employeeTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-xl shadow-md bg-white dark:bg-gray-800 p-6 w-full transition-all duration-300">
      <h5 className="text-xl font-semibold text-gray-800 dark:text-white">
        👨‍💼 Employee Table
      </h5>

      <div className="mt-4 overflow-x-auto">
        <Table hoverable className="min-w-full">
          <Table.Head>
            <Table.HeadCell className="p-6">Employee</Table.HeadCell>
            <Table.HeadCell>Designation</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Department</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell />
          </Table.Head>
          <Table.Body className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedData.map((item, index) => {
              const actualIndex = (currentPage - 1) * itemsPerPage + index;
              return (
                <Table.Row key={actualIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                  <Table.Cell className="ps-6 whitespace-nowrap flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {getInitials(item.employeeName)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{item.employeeName}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">ID: #{actualIndex + 1001}</div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{item.designation}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.department}</Table.Cell>
                  <Table.Cell>
                    <Badge
                      color="gray"
                      className={`bg-${item.statuscolor}-100 text-${item.statuscolor}-700 dark:bg-${item.statuscolor}-900 dark:text-white`}
                    >
                      {item.statustext}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-pointer">
                          <HiOutlineDotsVertical size={20} />
                        </span>
                      )}
                    >
                      {tableActionData.map((action, i) => (
                        <Dropdown.Item
                          key={i}
                          onClick={() => handleActionClick(action.listtitle, actualIndex)}
                          className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                        >
                          <Icon icon={action.icon} height={18} />
                          <span>{action.listtitle}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>

        {/* Pagination */}
        <div className="mt-4 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      </div>

      {/* -------- Edit Modal -------- */}
      <Modal show={editModal !== null} onClose={() => setEditModal(null)}>
        <Modal.Header>Edit Employee</Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            You can now edit details for{" "}
            <strong>{employeeTableData[editModal!]?.employeeName}</strong>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setEditModal(null)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-sm"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      {/* -------- Delete Modal -------- */}
      <Modal show={deleteModal !== null} onClose={() => setDeleteModal(null)}>
        <Modal.Header>Delete Confirmation</Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Are you sure you want to delete{" "}
            <strong>{employeeTableData[deleteModal!]?.employeeName}</strong>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setDeleteModal(null)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setDeleteModal(null);
              alert("Deleted! (You can replace this with real logic)");
            }}
            className="px-4 py-2 bg-red-600 text-white rounded text-sm"
          >
            Confirm Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export { ProductTable };
