
import { ThemeProvider } from 'styled-components';
import { theme1 } from './styles/theme';
import { GlobalStyles } from './styles/globalStyles';
import { Navbar } from './components/navBar/navInd';

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <GlobalStyles/>
      <Navbar/>
      <h1>helll</h1>
    </ThemeProvider>
  );
}

export default App;
