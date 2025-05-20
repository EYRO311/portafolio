import { ThemeProvider } from "./utils/ThemeContext"; 
import AppContainer from './appcontainer'; 
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}


export default App;
