import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part6() {

const currentUser = "Francis Golder (me)"
const [fireWatch, setFireWatch ] = useState('')
const [watchDuration, setWatchDuration] = useState()
const [photoRequired, setPhotoRequired] = useState(false)

const handleFireWatch = (e) => {
    setFireWatch(e.target.value)
}

const handleWatchDuration = (e) => {
    setWatchDuration(parseInt(e.target.value))
}

    return (
        <Paper component="section" sx={{ 
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 6 - Fire Watch</h3> 
        
        <div>
        <label>Responsible person for Fire Safety</label>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={fireWatch}
            onChange={handleFireWatch}
            sx={{width: '50%'}}> 
                <MenuItem value={currentUser}>{currentUser}</MenuItem>
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <label>Set fire watch duration (min 60 mins)</label>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select duration</InputLabel>
            <Select
            value={watchDuration}
            onChange={handleWatchDuration}
            sx={{width: '50%'}}> 
                <MenuItem value='60'>60 mins</MenuItem>
                <MenuItem value='90'>90 mins</MenuItem>
                <MenuItem value='120'>120 mins</MenuItem> 
                <MenuItem value='150'>150 mins</MenuItem> 
                <MenuItem value='180'>180 mins</MenuItem> 
            </Select>
        </FormControl>
        </div>
        
        <div>
        <Checkbox onChange={(e) => {setPhotoRequired(e.target.checked)}} /> 
            Require thermal photographs for Fire Watch sign off
        </div>

        </Paper>
    )
}