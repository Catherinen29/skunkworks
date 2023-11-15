import { Routes, Route } from "react-router-dom";
import NewHotWorksPermit from "./components/newPermit/HotWorksPermitTemplate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Permits from "./components/Permits";
import HWPermitOverview from "./components/Permit/HWPermitOverview";
import SignPermit from "./components/mobView.js/SignPermit";
import CompletedPermit from "./components/mobView.js/CompletedPermit";

function App() {
  
  return (
  <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/permits" element={<Permits />} />
          <Route path="/hotworkstemplate" element={<NewHotWorksPermit />} />
          <Route path="/hwpermitoverview" element={<HWPermitOverview />} />
          <Route path="/signpermit" element={<SignPermit />} />
          <Route path="/completedpermit" element={<CompletedPermit />} />
        </Routes>
    </LocalizationProvider>
  </div>
  );
}

export default App;
