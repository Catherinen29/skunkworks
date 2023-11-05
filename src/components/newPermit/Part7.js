import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part7() {

const [confirmed, setConfirmed] = useState(false)

const handleConfirmation = (e) => {
    setConfirmed(!confirmed)
}

    return (
        <Paper component="section" sx={{ 
            width: '40rem', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5,
            margin: 2 }} >
        <h3>Part 7 - Declarations</h3> 
        
        <div>
        <Checkbox  sx={{pl: 0}} onChange={handleConfirmation} 
            style={{color:'#00a4a9'}} /> 
            I confirm that cold works have been considered and deemed not suitable.
        </div>

        <div>
        <FormControl sx={{
                mt: 2, width: '25rem' }}>
            <TextField multiline size='small' label='Enter description'
             />
        </FormControl>
        </div>
        </Paper>
    )
}