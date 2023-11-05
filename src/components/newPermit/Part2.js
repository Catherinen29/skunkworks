import {  Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid,
    Icon, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TableBody, TableRow, 
    TextField, createTheme } from "@mui/material"
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
            <label>Description of the Hot Works to be undertaken</label>
            <br />
        <FormControl sx={{
                mt: 2, width: '25rem'}}>
            <TextField multiline size='small' label='Enter description' />
        </FormControl>
        </div>

        <div>
        <FormControl sx={{width: '30rem', mt: 2}}>
            <label>Select types of activity covered by the permit</label>
        <TableBody sx={{mt: 2}}>
            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Welding inc.Thermic" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />}
                 label="Welding inc.Thermic" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Soldering" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Soldering" />
                </Grid>
            </Grid>  
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Brazing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Brazing" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Heathland Clearing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Heathland Clearing" />  
                </Grid>
            </Grid>            
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Burning or Melting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Burning or Melting" />  
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Gas cutting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Gas cutting" />
                </Grid>
            </Grid>   
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Disc cutting/grinding" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Disc cutting/grinding" />
                </Grid>

                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value="Hot Riveting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
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