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

function App() {

  const permits = [{
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
}]
  return (
  <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/" element={<Permits permits={permits} />} />
          <Route path="/hotworkstemplate" element={<NewHotWorksPermit permits={permits} />} />
          <Route path="/hwpermitoverview" element={<HWPermitOverview />} />
          <Route path="/signpermit" element={<SignPermit />} />
          <Route path="/completedpermit" element={<CompletedPermit />} />
          <Route path="/projectpermits" element={<ProjectPermits />} />
          <Route path="/finalpermits" element={<FinalPermits permits={permits} />} />
          <Route path="/permitoverviewcompleted" element={<PermitOverviewCompleted />} />
        </Routes>
    </LocalizationProvider>
  </div>
  );
}

export default App;
