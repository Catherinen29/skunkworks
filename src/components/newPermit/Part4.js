import { Alert, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TableBody, TableRow, 
    Typography, Tooltip } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Part4(props) {

let users = props.users

const [riskAssessor, setRiskAssessor] = useState({})

const handleRiskAssessor = (e) => {
    setRiskAssessor(e.target.value)
}

    return (
        <Paper component='section' sx={{ 
            width: '40rem', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <h3>Part 4 - Risk Assessment</h3> 
        
        
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for completing the risk assessment</Typography>  
            <Tooltip title='Select name of responsible person'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
            width: '25rem', my: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
                value={riskAssessor}
                onChange={handleRiskAssessor}
                sx={{width: '25rem'}}> 
            <MenuItem value={users[2]}>{users[2].name}</MenuItem>
            <MenuItem value={users[1]}>{users[1].name}</MenuItem>
            <MenuItem value={users[5]}>{users[5].name}</MenuItem>  
            </Select>
        </FormControl>
        </Grid>
        
        {riskAssessor.verified 
            ? <Grid item xs={4} sx={{alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <AssignmentIndIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: 1}}>
                Supervisor Passport</Typography> 
                </Grid>
            : null }
        </Grid>

        </Paper>
    )
}