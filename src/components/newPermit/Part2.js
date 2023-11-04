import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"

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
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 2 - Scope of Work</h3>

        <div>
            <label>Description of the Hot Works to be undertaken</label>
        <FormControl sx={{
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Enter description</InputLabel>
            <TextField multiline size='small'
             />
        </FormControl>
        </div>

        <div>
        <FormControl>
            <label>Select types of activity covered by the permit</label>
        <FormLabel></FormLabel>
        <RadioGroup>
            <FormControlLabel value="Welding inc.Thermic" control={<Checkbox onClick={updateActivities} />} label="Welding inc.Thermic" />
            <FormControlLabel value="Soldering" control={<Checkbox onClick={updateActivities} />} label="Soldering" />            
            <FormControlLabel value="Brazing" control={<Checkbox onClick={updateActivities} />} label="Brazing" />
            <FormControlLabel value="Heathland Clearing" control={<Checkbox onClick={updateActivities} />} label="Heathland Clearing" />            
            <FormControlLabel value="Burning or Melting" control={<Checkbox onClick={updateActivities} />} label="Burning or Melting" />  
            <FormControlLabel value="Gas cutting" control={<Checkbox onClick={updateActivities} />} label="Gas cutting" />
            <FormControlLabel value="Disc cutting/grinding" control={<Checkbox onClick={updateActivities} />} label="Disc cutting/grinding" />
            <FormControlLabel value="Hot Riveting" control={<Checkbox onClick={updateActivities} />} label="Hot Riveting" />

        </RadioGroup>
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