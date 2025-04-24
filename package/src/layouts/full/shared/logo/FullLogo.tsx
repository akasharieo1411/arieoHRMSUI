import { Link } from "react-router";
import { useState, useEffect } from "react";

// Regular and dark mode logos
import Logo from "src/assets/images/logos/Arieotech.png";  // Use relative path
//import DarkLogo from "src/assets/images/logos/Arieotech-dark.png";  // Use relative path

const FullLogo = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Detect dark mode preference
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const checkDarkMode = () => setIsDarkMode(darkModeQuery.matches);

    // Check on initial load
    checkDarkMode();

    // Listen for changes in dark mode preference
    darkModeQuery.addEventListener("change", checkDarkMode);

    return () => {
      darkModeQuery.removeEventListener("change", checkDarkMode);
    };
  }, []);

  return (
    <Link to={"/"}>
      {/* Conditionally render the logo based on dark mode */}
      <img
        src={isDarkMode ? Logo : Logo} // Change logo based on dark mode
        alt="logo"
        className="block"
      />
    </Link>
  );
};

export default FullLogo;
