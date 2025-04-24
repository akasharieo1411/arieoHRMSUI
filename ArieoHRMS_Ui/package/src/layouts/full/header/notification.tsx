import { Badge, Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";  // Corrected import path for `Link`

const Notifications = [
    {
        id: 1,
        title: "You have a new message!",
        emoji: "📩", // Added emoji
    },
    {
        id: 2,
        title: "Your profile was updated.",
        emoji: "🔧", // Added emoji
    },
    {
        id: 3,
        title: "Don't forget to check your tasks.",
        emoji: "✅", // Added emoji
    },
];

const Notification = () => {
    return (
        <div className="relative group/menu">
            <Dropdown
                label=""
                className="rounded-sm w-[200px] notification dark:bg-gray-800 dark:text-white"  // Dark mode support
                dismissOnClick={false}
                renderTrigger={() => (
                    <span
                        className="h-10 w-10 hover:text-primary group-hover/menu:bg-lightprimary group-hover/menu:text-primary hover:bg-lightprimary dark:hover:bg-gray-700 rounded-full flex justify-center items-center cursor-pointer relative"
                        aria-label="Notifications"
                    >
                        <Icon icon="solar:bell-linear" height={20} className="text-dark dark:text-white" />  {/* Dark mode icon color */}
                        <Badge className="h-2 w-2 rounded-full absolute end-2 top-1 bg-primary p-0" />
                    </span>
                )}
            >
                {Notifications.map((item) => (
                    <Dropdown.Item
                        as={Link}
                        key={item.id}
                        to="#"
                        className="px-3 py-2 flex items-center bg-hover group/link w-full gap-3 text-dark hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"  // Dark mode hover and text
                    >
                        <span className="mr-2">{item.emoji}</span> {/* Display the emoji here */}
                        {item?.title}
                    </Dropdown.Item>
                ))}
            </Dropdown>
        </div>
    );
};

export default Notification;
