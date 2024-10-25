## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Design Choices

# Component-Based Architecture:

    The application is organized into reusable components (e.g., ThemeToggle, DataTable), which enhances maintainability and allows for easier updates.

# Theming:

    A theme toggle feature using Material UI allows users to switch between light and dark modes, improving user experience based on personal preferences.

# Responsive Design:

    Utilized Material UI's useMediaQuery to ensure the table is responsive, providing a good layout across various screen sizes.

# Challenges Faced

- State Management:
  Managing the theme state and ensuring it persists across component renders required careful handling to guarantee that the UI updates correctly upon toggling.
- Implementing Theme Change:
  Learning to implement theme changes through Material UI involved understanding its theming capabilities, including the createTheme function and how to apply themes dynamically. This required experimenting with different configurations to achieve a seamless transition between light and dark modes.

# Potential Improvements

- Persisting Theme Preference:
  Implementing local storage to save the user's theme preference could enhance the user experience by retaining their choice across sessions.
- Pagination in DataTable:
  Introducing pagination for the data table could improve performance and usability, especially when dealing with larger datasets.
- Testing:
  Adding unit tests for components and integration tests for the overall application would improve reliability and maintainability.

# GitHub Link

You can find the project repository [here](https://github.com/aksy007/themed-table).
