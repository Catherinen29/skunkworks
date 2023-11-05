import { Box, Checkbox, FormControl, Grid, InputLabel, MenuItem, Paper, Select, 
    TableBody, TableRow, Typography, Tooltip, Alert } from "@mui/material"
import { useState } from "react"
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Part6(props) {

let users = props.users

const [fireWatch, setFireWatch ] = useState({})
const [watchDuration, setWatchDuration] = useState()
const [photoRequired, setPhotoRequired] = useState(false)

const handleFireWatch = (e) => {
    setFireWatch(e.target.value)
}

const handleWatchDuration = (e) => {
    setWatchDuration(parseInt(e.target.value))
}

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
            <Tooltip title='Responsible person'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={fireWatch}
            onChange={handleFireWatch}
            sx={{width: '25rem'}}> 
            <MenuItem value={users[0]}>{users[0].name}</MenuItem>
            <MenuItem value={users[3]}>{users[3].name}</MenuItem>
            <MenuItem value={users[5]}>{users[5].name}</MenuItem>  
            </Select>
        </FormControl>
        </Grid>
        
        {fireWatch.verified 
            ? <Grid item xs={4} sx={{alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <AssignmentIndIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)', ml: 1}}>
                Supervisor Passport</Typography> 
                </Grid>
            : null }
        </Grid>

        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Set fire watch duration (min 60 mins)</Typography>  
            <Tooltip title='Duration of fire watch'>
                <Alert variant='outlined' severity='info' 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}
                  ></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <FormControl required size="small" sx={{display: 'block',
                width: '25rem', mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select duration</InputLabel>
            <Select
            value={watchDuration}
            onChange={handleWatchDuration}
            sx={{width: '25rem'}}> 
                <MenuItem value='60'>60 mins</MenuItem>
                <MenuItem value='90'>90 mins</MenuItem>
                <MenuItem value='120'>120 mins</MenuItem> 
                <MenuItem value='150'>150 mins</MenuItem> 
                <MenuItem value='180'>180 mins</MenuItem> 
            </Select>
        </FormControl>
        </div>
        
        <Box sx={{mt: 2}}>
        <Checkbox sx={{pl: 0}} 
            onChange={(e) => {setPhotoRequired(e.target.checked)}} 
            style={{color:'#00a4a9'}}/> 
            Require thermal photographs for Fire Watch sign off
        </Box>

        </Paper>
    )
}