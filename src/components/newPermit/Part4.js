import { FormControl, Grid, MenuItem, Paper, TableBody, TableRow, 
    Typography, TextField } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part4(props) {

let users = props.users

const [riskAssessor, setRiskAssessor] = useState('')


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
            <AlertIcon></AlertIcon>
        </TableRow>
        </TableBody>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
            width: '25rem', mb: 1, mt: '2rem'}}>
            <TextField
                select
                value={riskAssessor}
                onChange={(e) => setRiskAssessor(e.target.value)}
                label='Select verified worker'
                sx={{width: '25rem'}}> 
            <MenuItem value='Francis Golder (me)' sx={{justifyContent: "space-between"}}>Francis Golder (me)
            <VerifiedTag></VerifiedTag>
            </MenuItem>

            <MenuItem value='Jan Goldstein' sx={{justifyContent: "space-between"}}>Jan Goldstein
            <VerifiedTag></VerifiedTag>
            </MenuItem>

            <MenuItem value='Tilda Swinton' sx={{justifyContent: "space-between"}}>Tilda Swinton 
            <VerifiedTag></VerifiedTag>
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