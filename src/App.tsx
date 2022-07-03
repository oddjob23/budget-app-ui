import { createContext, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Layout from "./components/layout";
import { amber, deepOrange } from "@mui/material/colors";
import HomePage from "./pages/HomePage";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: amber,
          divider: "rgb(230, 232, 240)",
          text: {
            primary: "rgb(18, 24, 40)",
            secondary: "rgb(101, 116, 139)",
          },
          background: {
            default: "rgb(249, 250, 252)",
            light: "rgba(0,0,0, 0.04)",
            paper: "rgb(255, 255, 255)",
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: "rgb(45, 55, 72)",
          background: {
            dark: "rgb(11, 15, 25)",
            default: "rgb(11, 15, 25)",
            light: "rgba(255, 255, 255, 0.04)",
            paper: "rgb(17, 24, 39)",
          },
          text: {
            primary: "rgba(237, 242, 247, 1)",
            secondary: "rgb(156, 163, 175)",
          },
        }),
  },
});

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
