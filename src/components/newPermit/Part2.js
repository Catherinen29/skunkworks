import {  Box, Checkbox, FormControl, FormControlLabel, Grid,
    Paper, TableBody, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react"
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AlertIcon from "../common/AlertIcon";

export default function Part2({newPermit, setNewPermit}) {

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
            margin: 2,
            display: 'flex',
            flexDirection: 'column' }} >
        <Typography variant="h5" sx={{fontWeight: 500}}>Part 2 - Scope of Work</Typography>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>Description of the Hot Works to be undertaken</Typography>
            <AlertIcon></AlertIcon>
        </Box>

        <Box>
        <FormControl sx={{width: '30rem', mt: '1rem'}}>
            <TextField multiline rows={3} 
                size='small' 
                label='Enter description'
                name='scope'
                value={newPermit.scope}
                onChange={handleInput}
				sx={{
					"& label.Mui-focused": {
					  color: "#00a4a9"
					},
					"& .MuiOutlinedInput-root": {
					"&.Mui-focused fieldset": {
					  borderColor: "#00a4a9"
					}
				  }
				}} />
        </FormControl>

        <FormControl sx={{width: '30rem', mt: '1rem'}}>
        <Box sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>Select types of activity covered by the permit</Typography>
            <AlertIcon></AlertIcon>
        </Box>

        <TableBody sx={{mt: 1}}>
            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Welding inc.Thermic' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />}
                 label="Welding inc.Thermic" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Soldering' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Soldering" />
                </Grid>
            </Grid>  
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Brazing' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Brazing" />
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Heathland Clearing' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Heathland Clearing" />  
                </Grid>
            </Grid>            
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Burning or Melting' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Burning or Melting" />  
                </Grid>
                
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Gas cutting' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Gas cutting" />
                </Grid>
            </Grid>   
            </TableRow> 

            <TableRow>
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Disc cutting/grinding' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Disc cutting/grinding" />
                </Grid>

                <Grid item xs={6} sx={{width: '15rem'}}>
            <FormControlLabel value='Hot Riveting' control={
                <Checkbox onClick={updateActivities} icon={<RadioButtonUncheckedIcon />} 
                checkedIcon={<RadioButtonCheckedIcon sx={{color: '#00a4a9'}}/>} 
                     />} 
                label="Hot Riveting" />
                </Grid>
            </Grid>   
            </TableRow> 

        </ TableBody>   
        </FormControl>
        </Box>

        <Box sx={{mt: 2, p: '1rem', pb: '0.5rem',
            fontSize:'small', 
            bgcolor:'#e2f7f7', color: '#0d3c61', 
                }}>
            CERTCHAIN AI 
            <p>Welding has led to the most identified accidents across the organisation. 
            Extra precautions should be taken for any weldign work carried out. </p>
        </Box>

        </Paper>
    )
}