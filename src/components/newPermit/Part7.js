import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part7() {

const [confirmed, setConfirmed] = useState(false)

const handleConfirmation = (e) => {
    setConfirmed(!confirmed)
}

    return (
        <Paper component="section" sx={{ 
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 7 - Declarations</h3> 
        
        <div>
        <Checkbox onChange={handleConfirmation} /> 
            I confirm that cold works have been considered and deemed not suitable.
        </div>

        <div>
        <FormControl sx={{
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Enter description</InputLabel>
            <TextField multiline size='small'
             />
        </FormControl>
        </div>
        </Paper>
    )
}