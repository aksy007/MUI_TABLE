"use client";
import * as React from "react"; // Import React
import { IconButton } from "@mui/material"; // Import IconButton from Material-UI
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Import sun icon for light mode
import NightlightRoundIcon from "@mui/icons-material/NightlightRound"; // Import moon icon for dark mode

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setDarkMode((prev) => !prev); // Toggle theme state

    // Update CSS variables based on the current theme mode
    document.documentElement.style.setProperty(
      "--background",
      !darkMode ? "var(--background-dark)" : "var(--background-light)" // Set background variable
    );
    document.documentElement.style.setProperty(
      "--foreground",
      !darkMode ? "var(--foreground-dark)" : "var(--foreground-light)" // Set foreground variable
    );
  };

  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {" "}
      {/* Button to toggle the theme */}
      {darkMode ? <WbSunnyIcon /> : <NightlightRoundIcon />}{" "}
      {/* Display appropriate icon based on theme */}
    </IconButton>
  );
};

export default ThemeToggle; // Export the ThemeToggle component
