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
            width: '70%',
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 2 - Scope of Work</h3>

        <div>
            <label>Description of the Hot Works to be undertaken</label>
            <br />
        <FormControl sx={{
                margin: 2 }}>
            <TextField multiline size='small' label='Enter description'
             />
        </FormControl>
        </div>

        <div>
        <FormControl>
            <label>Select types of activity covered by the permit</label>
        <TableBody>
            <TableRow>
            <FormControlLabel value="Welding inc.Thermic" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />}
                 label="Welding inc.Thermic" />
            <FormControlLabel value="Soldering" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Soldering" />  
            </TableRow> 

            <TableRow>
            <FormControlLabel value="Brazing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Brazing" />
            <FormControlLabel value="Heathland Clearing" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Heathland Clearing" />            
            </TableRow> 

            <TableRow>
            <FormControlLabel value="Burning or Melting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Burning or Melting" />  
            <FormControlLabel value="Gas cutting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Gas cutting" />
            </TableRow> 

            <TableRow>
            <FormControlLabel value="Disc cutting/grinding" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Disc cutting/grinding" />
            <FormControlLabel value="Hot Riveting" control={
                <Checkbox onClick={updateActivities} icon={<AdjustIcon />} checkedIcon={<Album/>} />} 
                label="Hot Riveting" />
            </TableRow> 

        </ TableBody>   
        </FormControl>
        </div>

        <Box sx={{margin: 2, padding: 2, fontSize:'small', bgcolor:'#e2f7f7', color: '#0d3c61'}}>
            CERTCHAIN AI 
            <p>Welding has led to the most identified accidents across the organisation. 
            Extra precautions should be taken for any weldign work carried out. </p>
        </Box>

        </Paper>
    )
}