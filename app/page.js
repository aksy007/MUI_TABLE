"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import Table from "../components/Table";
import ThemeToggle from "../components/ThemeToggle";
import styles from "./page.module.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); // State for tracking if dark mode is active
  const [mounted, setMounted] = useState(false); // State to check if component has mounted
  const [data, setData] = useState([]); // State for storing fetched data
  const [loading, setLoading] = useState(true); // State for tracking loading status

  useEffect(() => {
    setMounted(true); // Set mounted to true when the component has mounted
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data from the API
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data); // Update state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error); // Log any errors during fetching
        setLoading(false); // Stop loading on error
      }
    };

    fetchData(); // Call the fetchData function on component mount
  }, []);

  // Define light and dark themes
  const lightTheme = createTheme({
    palette: { mode: "light" },
  });

  const darkTheme = createTheme({
    palette: { mode: "dark" },
  });

  // Prevent rendering until component is mounted to avoid hydration mismatch
  if (!mounted) return null;

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Apply global CSS baseline for consistent styling */}
      <div className={styles.page}>
        {/* Position ThemeToggle at the top right */}
        <div className={styles.themeToggle}>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Add some margin at the top of the Table for better spacing */}
        <div className={styles.tableContainer}>
          <div className={styles.tableHeader}> MUI Data Table </div>
          {/* Pass fetched data to the Table component */}
          <Table data={data} />
        </div>
      </div>
    </ThemeProvider>
  );
}
