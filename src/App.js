import { Routes, Route } from "react-router-dom";
import NewHotWorksPermit from "./components/newPermit/HotWorksPermitTemplate";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Permits from "./components/Permits";
import HWPermitOverview from "./components/Permit/HWPermitOverview";
import SignPermit from "./components/mobView.js/SignPermit";
import CompletedPermit from "./components/mobView.js/CompletedPermit";
import ProjectPermits from "./components/mobView.js/ProjectPermits";
import FinalPermits from "./components/PermitSignOff/FinalPermits";
import PermitOverviewCompleted from "./components/PermitSignOff/PermitOverviewCompleted";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {

const theme = createTheme()

  const [permits, setPermits] = useState([{
    type: 'Hot Works',
    supplier: 'Balfour Beatty',
    supplierType: 'company',
    createdBy: 'James Burden',
    status: 'Active',
    activatesAt: '',
    expiresAt: 'Expires: Today at 17:00'
}, {
    type: 'Hot Works',
    supplier: 'Dan Jones',
    supplierType: 'person',
    createdBy: 'James Burden',
    status: 'Emerging issues',
    activatesAt: 'Activates: 19 Jan 24 at 09:00 GMT',
    expiresAt: ''
}, {
    type: 'Electrical',
    supplier: 'EEW Electrical Contractors',
    supplierType: 'company',
    createdBy: 'James Burden',
    status: 'Active',
    activatesAt: '',
    expiresAt: 'Expires: Today at 15:00'
}, {
    type: 'Electrical',
    supplier: 'Saqib Sabir',
    supplierType: 'person',
    createdBy: 'James Burden',
    status: 'Completed',
    activatesAt: '',
    expiresAt: 'Expires: 2 days ago'
}, {
    type: 'Working at Height',
    supplier: 'JT Scaffold',
    supplierType: 'company',
    createdBy: 'James Burden',
    status: 'Authorised',
    activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
    expiresAt: ''
}, {
    type: 'Hot Works',
    supplier: 'Helen Flannigan',
    supplierType: 'person',
    createdBy: 'James Burden',
    status: 'Active',
    activatesAt: 'Activates: 22 Jan at 09:00',
    expiresAt: ''
}, {
    type: 'Hot Works',
    supplier: 'Helen Flannigan',
    supplierType: 'person',
    createdBy: 'James Burden',
    status: 'Authorised',
    activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
    expiresAt: ''
}, {
    type: 'Working at Height',
    supplier: 'JT Scaffold',
    supplierType: 'company',
    createdBy: 'James Burden',
    status: 'Active',
    activatesAt: '',
    expiresAt: 'Expires: Today at 17:00'
}, {
    type: 'Hot Works',
    supplier: 'Miriam Bartonwell',
    supplierType: 'person',
    createdBy: 'James Burden',
    status: 'Authorised',
    activatesAt: 'Activates: 20 Jan 24 at 09:00 GMT',
    expiresAt: ''
}])

// TODO: remove static data and replace with data from database
const workers = [{
    name: 'Jan Goldstein',
    value: 'Jan Goldstein',
    position: 'Supervisor',
    verified: true,
}, {
    name: 'Tilda Swinton',
    value: 'Tilda Swinton',
    position: 'Supervisor',
    verified: true,
}, {
    name: 'Bill Nighy',
    value: 'Bill Nighy',
    position: 'Supervisor',
    verified: true,
}]

const [permitCreated, setPermitCreated] = useState(false)

  return (
  <div className="App">
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/" element={<Permits 
                permits={permits} 
                permitCreated={permitCreated}
                setPermitCreated={setPermitCreated} 
                workers={workers} />} />
          <Route path="/hotworkstemplate" element={<NewHotWorksPermit 
                permits={permits}
                setPermits={setPermits}
                setPermitCreated={setPermitCreated} />} />
          <Route path="/hwpermitoverview" element={<HWPermitOverview />} />
          <Route path="/signpermit" element={<SignPermit />} />
          <Route path="/completedpermit" element={<CompletedPermit />} />
          <Route path="/projectpermits" element={<ProjectPermits />} />
          <Route path="/finalpermits" element={<FinalPermits permits={permits} />} />
          <Route path="/permitoverviewcompleted" element={<PermitOverviewCompleted />} />
        </Routes>
    </LocalizationProvider>
    </ThemeProvider>
  </div>
  );
}

export default App;
