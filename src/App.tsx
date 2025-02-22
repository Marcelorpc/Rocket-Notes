import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App