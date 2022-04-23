import { ThemeProvider} from '@mui/material/styles';
import { theme } from './theme/theme';
import { ContainerForm } from './components/ContainerForm';

function App() {
  

  
  return (
    
    <ThemeProvider theme={theme} >
      <ContainerForm />
    </ThemeProvider>
  );
}

export default App;

