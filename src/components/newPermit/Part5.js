import { Box, FormControl, MenuItem, Paper, TextField,
    Typography } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part5({newPermit, setNewPermit}) {

const [precautionPerson, setPrecautionPerson] = useState('')

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

// Handle user input
const handleInput = (e) => {
    setNewPermit({...newPermit, [e.target.name]: e.target.value})
}

return (
<Paper component='section' sx={{ 
    width: '600px', 
    bgcolor: '#ffffff',
    borderRadius: 1,
    p: '2rem', 
    margin: 2 }} >
    <Typography variant="h5" sx={{fontWeight: 500}}>Part 5 - Precautions Checklist</Typography> 
            
    <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
        <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
            Responsible person for completing pre-commencement checklist</Typography>  
        <AlertIcon></AlertIcon>
    </Box>

    <Box sx={{display: 'flex'}}>
        <Box>
        <FormControl 
            sx={{display: 'block',
            mb: 1, mt: '1rem'}}>
        <TextField
            select
            name= 'respForChecklist'
            value={newPermit.respForChecklist}
            onChange={handleInput}
            label='Select verified person'
            size='small' 
            sx={{width: '23rem',
            '.MuiSelect-select': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}}> 
        {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
        ))}

        </TextField>
    </FormControl>
    </Box>
        
        {newPermit.respForChecklist !== '' && 
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', 
                ml: '1rem', mt: '0.5rem'}}>
            <AssignmentIndIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: 1}}>
            Supervisor Passport</Typography> 
        </Box>
        }

    </Box>
    
</Paper>
    )
}