import { Box, FormControl, Grid, MenuItem, Paper, TextField,
    TableBody, TableRow, Typography, Tooltip, Alert } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function Part5(props) {

let users = props.users
const [precautionPerson, setPrecautionPerson] = useState({})


return (
    <Paper component='section' sx={{ 
        width: '40rem', 
        bgcolor: '#ffffff',
        borderRadius: 1,
        padding: 5,
        margin: 2 }} >
    <h3>Part 5 - Precautions Checklist</h3> 
            
        
    <TableBody>
    <TableRow sx={{height: '25px', display: 'flex'}}>
        <Typography sx={{py: '0.4rem'}}>Responsible person for completing pre-commencement checklist</Typography>  
        <Tooltip title='Responsible person'>
            <Alert variant="outlined" severity="info" 
                sx={{borderColor: '#ffffff', 
                ml: '0.5rem', px: 1, py: 0 }}></Alert>
        </Tooltip>
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
        <MenuItem value='Francis Golder (me)' sx={{justifyContent: "space-between"}}>Francis Golder (me)
            <Box sx={{width: '6rem', bgcolor: '#4caf50', 
                borderRadius: 50, display: 'flex', justifyContent: 'center',
                alignItems: 'center'}}>
                <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                </Box> 
            </MenuItem>
        <MenuItem value='Jan Goldstein' sx={{justifyContent: "space-between"}}>Jan Goldstein <Box sx={{width: '6rem', bgcolor: '#4caf50', 
                borderRadius: 50, display: 'flex', justifyContent: 'center',
                alignItems: 'center'}}>
                <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                </Box> 
            </MenuItem>
        <MenuItem value='Tilda Swinton' sx={{justifyContent: "space-between"}}>Tilda Swinton 
            <Box sx={{width: '6rem', bgcolor: '#4caf50', 
                borderRadius: 50, display: 'flex', justifyContent: 'center',
                alignItems: 'center'}}>
                <CheckCircleIcon style={{fill: 'white', m: '0.5rem'}}></CheckCircleIcon>
                <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', m: '0.5rem'}}>Verified</Typography>
                </Box> 
            </MenuItem>  
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