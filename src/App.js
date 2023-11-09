import { Routes, Route } from "react-router-dom";
import NewPermit from "./components/newPermit/NewPermit";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Permits from "./components/Permits";

function App() {
  
  return (
  <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/permits" element={<Permits />} />
          <Route path="/newpermit" element={<NewPermit />} />
        </Routes>
    </LocalizationProvider>
  </div>
  );
}

export default App;
