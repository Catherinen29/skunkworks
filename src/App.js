import { Routes, Route } from "react-router-dom";
import NewHotWorksPermit from "./components/newPermit/HotWorksPermitTemplate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Permits from "./components/Permits";

function App() {
  
  return (
  <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/permits" element={<Permits />} />
          <Route path="/hotworkstemplate" element={<NewHotWorksPermit />} />
        </Routes>
    </LocalizationProvider>
  </div>
  );
}

export default App;
