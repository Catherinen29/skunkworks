import NewPermit from "./components/newPermit/NewPermit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  
  return (
  <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <NewPermit />
    </LocalizationProvider>
  </div>
  );
}

export default App;
