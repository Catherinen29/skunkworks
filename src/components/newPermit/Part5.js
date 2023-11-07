import { FormControl, Grid, MenuItem, Paper, TextField,
    TableBody, TableRow, Typography } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part5(props) {

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

return (
    <Paper component='section' sx={{ 
        width: '40rem', 
        bgcolor: '#ffffff',
        borderRadius: 1,
        padding: 5,
        margin: 2 }} >
    <Typography sx={{fontSize: 25}}>Part 5 - Precautions Checklist</Typography> 
            
    <TableBody sx={{mt: 2}}>
    <TableRow sx={{height: '25px', display: 'flex'}}>
        <Typography sx={{py: '0.4rem'}}>Responsible person for completing pre-commencement checklist</Typography>  
        <AlertIcon></AlertIcon>
    </TableRow>
    </TableBody>

    <Grid container spacing={2}>
        <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                width: '25rem', mb: 1, mt: '2rem'}}>
        <TextField
            select
            value={precautionPerson}
            onChange={(e) => setPrecautionPerson(e.target.value)}
            label='Select verified person'
            sx={{width: '25rem'}}> 
        {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
        ))}

        </TextField>
    </FormControl>
    </Grid>
        
        <Grid item xs={4} sx={{alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <AssignmentIndIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: 1}}>
            Supervisor Passport</Typography> 
        </Grid>
            
        </Grid>
    
            </Paper>
    )
}