import { useEffect, useState } from "react";
import { Button, Dropdown } from "flowbite-react";
import { Icon } from "@iconify/react";
import user1 from "/src/assets/images/profile/user-1.jpg";
import { Link } from "react-router-dom";

// Define allowed theme colors
type ThemeColor = 'purple' | 'red' | 'yellow' | 'orange' | 'pink';

const colorClasses: Record<ThemeColor, string> = {
  purple: "bg-purple-500",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  orange: "bg-orange-500",
  pink: "bg-pink-400",
};

const Profile = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [themeColor, setThemeColor] = useState<ThemeColor>(
    (localStorage.getItem("themeColor") as ThemeColor) || "purple"
  );

  // Toggle dark/light theme
  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDark);
  };

  // Change theme color
  const changeThemeColor = (color: ThemeColor) => {
    setThemeColor(color);
    localStorage.setItem("themeColor", color);
    document.documentElement.style.setProperty("--theme-color", color);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
        title="Toggle Theme"
      >
        <Icon icon={isDark ? "solar:moon-bold" : "solar:sun-2-bold"} height="24" />
      </button>

      {/* Settings Dropdown with Color Circles */}
      <Dropdown
        label=""
        className="rounded-md w-64 p-2" // Wider dropdown
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
            <Icon icon="material-symbols:settings" height="24" />
          </span>
        )}
      >
        <Dropdown.Header>
          <span className="font-semibold text-sm">Change Theme Color</span>
        </Dropdown.Header>

        <div className="flex flex-wrap gap-3 justify-center px-3 pb-3 pt-2">
          {(["purple", "red", "yellow", "orange", "pink"] as ThemeColor[]).map((color) => (
            <div
              key={color}
              onClick={() => changeThemeColor(color)}
              className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-200 border-2 ${colorClasses[color]} ${
                themeColor === color ? "ring-2 ring-offset-2 ring-gray-600 dark:ring-white" : "border-transparent"
              }`}
              title={color.charAt(0).toUpperCase() + color.slice(1)}
            ></div>
          ))}
        </div>
      </Dropdown>

      {/* Profile Dropdown */}
      <Dropdown
        label=""
        className="rounded-sm w-44"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
            <img
              src={user1}
              alt="user"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <Dropdown.Item
          as={Link}
          to="#"
          className="px-3 py-3 flex items-center bg-hover group/link w-full gap-3 text-dark dark:text-white"
        >
          <Icon icon="solar:user-circle-outline" height={20} />
          My Profile
        </Dropdown.Item>

        <div className="p-3 pt-0">
          <Button
            as={Link}
            size={"sm"}
            to="/auth/login"
            className="mt-2 border border-primary text-primary bg-transparent hover:bg-lightprimary outline-none focus:outline-none"
          >
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
