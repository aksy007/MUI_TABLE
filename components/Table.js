"use client";
import * as React from "react";
import Table from "@mui/material/Table"; // Import Material-UI Table component
import TableBody from "@mui/material/TableBody"; // Import TableBody for rows
import TableCell from "@mui/material/TableCell"; // Import TableCell for individual cells
import TableContainer from "@mui/material/TableContainer"; // Import TableContainer for layout
import TableHead from "@mui/material/TableHead"; // Import TableHead for the header section
import TableRow from "@mui/material/TableRow"; // Import TableRow for individual rows
import Paper from "@mui/material/Paper"; // Import Paper for a paper-like background
import useMediaQuery from "@mui/material/useMediaQuery"; // Hook for responsive design
import { useTheme } from "@mui/material/styles"; // Hook to access the theme

const DataTable = ({ data }) => {
  const theme = useTheme(); // Access the current theme
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects screen size below 600px

  return (
    <TableContainer
      component={Paper} // Use Paper component as the container
      sx={{
        margin: "20px auto", // Center the table container with margin
        width: !isMobile ? "100%" : "90%", // Adjust table width based on screen size
        overflowX: "auto", // Enable horizontal scroll on smaller devices
      }}
    >
      <Table
        sx={{
          minWidth: 650, // Minimum width for table to prevent column shrinking
          tableLayout: "auto", // Allows table cells to expand based on content
        }}
        aria-label="responsive table" // Accessibility label
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", padding: "8px 16px" }}>
              Name
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", padding: "8px 16px" }}>
              Email
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", padding: "8px 16px" }}>
              Phone
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", padding: "8px 16px" }}>
              Website
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              {/* Unique key for each row */}
              <TableCell sx={{ padding: "8px 16px" }}>{row.name}</TableCell>
              <TableCell sx={{ padding: "8px 16px" }}>{row.email}</TableCell>
              <TableCell sx={{ padding: "8px 16px" }}>{row.phone}</TableCell>
              <TableCell sx={{ padding: "8px 16px" }}>{row.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable; // Export the DataTable component
