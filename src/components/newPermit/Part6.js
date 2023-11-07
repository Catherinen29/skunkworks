import { Box, Checkbox, FormControl, Grid, MenuItem, Paper, 
    TableBody, TableRow, TextField, Typography} from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part6(props) {

let users = props.users

const [fireWatch, setFireWatch ] = useState()
const [watchDuration, setWatchDuration] = useState()
const [photoRequired, setPhotoRequired] = useState(false)


    return (
        <Paper component='section' sx={{ 
            width: '40rem',
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <h3>Part 6 - Fire Watch</h3> 
        
        
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Fire Safety</Typography>  
            <AlertIcon></AlertIcon>
        </TableRow>
        </TableBody>
        
        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
            width: '25rem', mb: 1, mt: '2rem'}}>
        <TextField
            select
            value={fireWatch}
            onChange={(e) => setFireWatch(e.target.value)}
            label='Select verified person'
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

        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Set fire watch duration (min 60 mins)</Typography>  
            <AlertIcon></AlertIcon>
        </TableRow>
        </TableBody>
        
        <FormControl required size="small" sx={{display: 'block',
                width: '25rem', mb: 1, mt: '2rem'}}>
        <TextField
            select
            value={watchDuration}
            onChange={(e) => setWatchDuration(parseInt(e.target.value))}
            label='Select duration'
            sx={{width: '25rem'}}> 
                <MenuItem value='60'>60 mins</MenuItem>
                <MenuItem value='90'>90 mins</MenuItem>
                <MenuItem value='120'>120 mins</MenuItem> 
                <MenuItem value='150'>150 mins</MenuItem> 
                <MenuItem value='180'>180 mins</MenuItem> 
            </TextField>
        </FormControl>
        
        <Box sx={{mt: 2}}>
        <Checkbox sx={{pl: 0}} 
            onChange={(e) => {setPhotoRequired(e.target.checked)}} 
            style={{color:'#00a4a9'}}/> 
            Require thermal photographs for Fire Watch sign off
        </Box>

        </Paper>
    )
}