import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { Details } from "./pages/Details";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Details />
      </ThemeProvider>
    </>
  )
}

export default App