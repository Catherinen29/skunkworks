import {  Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid,
    Icon, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TableBody, TableRow, 
    TextField, createTheme, Typography, Tooltip, Alert } from "@mui/material"
import { useState } from "react"
import AdjustIcon from '@mui/icons-material/Adjust';
import AlbumIcon from '@mui/icons-material/Album';
import { Album } from "@mui/icons-material";

export default function Part2() {

const [selectedActivity, setSelectedActivity] = useState([''])

const updateActivities = (e) => {
    if (!selectedActivity.includes(e.target.value)) {
        setSelectedActivity([...selectedActivity, e.target.value]) 
        console.log(selectedActivity)
    } else {
        const index = selectedActivity.indexOf(e.target.value)
        setSelectedActivity(selectedActivity.splice(index, 1))
        console.log(selectedActivity)

    }

}

    return (
        <Paper component="section" sx={{ 
            width: '40rem',
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2,
            display: 'flex',
            flexDirection: 'column' }} >
        <h3>Part 2 - Scope of Work</h3>

        <div>    
    <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Description of the Hot Works to be undertaken</Typography>
            <Tooltip title='Description'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
    </TableBody>
            <br />

        <FormControl sx={{width: '25rem'}}>
            <TextField multiline size='small' label='Enter description' />
        </FormControl>
        </div>

        <div>
        <FormControl sx={{width: '30rem', mt: 2}}>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Select types of activity covered by the permit</Typography>
            <Tooltip title='Types of activity'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', color: '#00a4a9',
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
    </TableBody>

        <TableBody sx={{mt: 2}}>
            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Welding inc.Thermic" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />}
                 label="Welding inc.Thermic" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Soldering" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Soldering" />
                </Grid>
            </Grid>  
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Brazing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Brazing" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Heathland Clearing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Heathland Clearing" />  
                </Grid>
            </Grid>            
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Burning or Melting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Burning or Melting" />  
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Gas cutting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Gas cutting" />
                </Grid>
            </Grid>   
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Disc cutting/grinding" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Disc cutting/grinding" />
                </Grid>

                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Hot Riveting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon sx={{color: '#00a4a9'}} />} 
                checkedIcon={<Album sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Hot Riveting" />
                </Grid>
            </Grid>   
            </TableRow> 

        </ TableBody>   
        </FormControl>
        </div>

        <Box sx={{mt: 2, padding: 2, fontSize:'small', bgcolor:'#e2f7f7', color: '#0d3c61', 
                alignSelf: 'center'}}>
            CERTCHAIN AI 
            <p>Welding has led to the most identified accidents across the organisation. 
            Extra precautions should be taken for any weldign work carried out. </p>
        </Box>

        </Paper>
    )
}