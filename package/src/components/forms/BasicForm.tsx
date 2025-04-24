import { useState } from "react";
import {
  Label,
  TextInput,
  Select,
  Button,
  Modal,
  Textarea
} from "flowbite-react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineLockClosed
} from "react-icons/hi";

const BasicForm = () => {
  const [openModal, setOpenModal] = useState(false);

  // ✅ Typed event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const confirmSubmit = () => {
    setOpenModal(false);
    alert("Form submitted successfully!");
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-100 dark:from-darkgray dark:to-gray-800 p-10 w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details */}
        <div>
          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            👤 Personal Details
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" value="Full Name" />
              <TextInput id="name" type="text" icon={HiOutlineUser} required placeholder="John Doe" />
            </div>

            <div>
              <Label htmlFor="email" value="Email Address" />
              <TextInput id="email" type="email" icon={HiOutlineMail} required placeholder="john@example.com" />
            </div>

            <div>
              <Label htmlFor="phone" value="Phone Number" />
              <TextInput id="phone" type="tel" icon={HiOutlinePhone} required placeholder="+91 9876543210" />
            </div>

            <div>
              <Label htmlFor="dob" value="Date of Birth" />
              <TextInput id="dob" type="date" icon={HiOutlineCalendar} required />
            </div>

            <div>
              <Label htmlFor="gender" value="Gender" />
              <Select id="gender" required>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput id="password" type="password" icon={HiOutlineLockClosed} required />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            🏠 Address Details
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="country" value="Country" />
              <Select id="country" required>
                <option>India</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="state" value="State" />
              <Select id="state" required>
                <option>Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Tamil Nadu</option>
                <option>Bihar</option>
                <option>Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="city" value="City" />
              <Select id="city" required>
                <option>Select City</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Chennai</option>
                <option>Other</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="zip" value="Zip Code" />
              <TextInput id="zip" type="text" required placeholder="400001" />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="address" value="Full Address" />
              <Textarea id="address" required placeholder="123 Main Street, Area Name, Landmark" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div>
          <Label htmlFor="description" value="📝 Tell us something about yourself" />
          <Textarea
            id="description"
            placeholder="Write a short bio..."
            rows={4}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-6">
          <Button type="submit" color="purple" className="transition hover:scale-105">
            💾 Submit
          </Button>
          <Button type="button" color="gray" onClick={handleCancel} className="transition hover:scale-105">
            ❌ Cancel
          </Button>
        </div>
      </form>

      {/* Modal */}
      <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">Confirm Submission</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Are you sure you want to submit this form?
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button color="success" onClick={confirmSubmit}>
                ✅ Yes, Submit
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BasicForm;
