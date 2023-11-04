import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"

export default function Part5() {
    const currentUser = "Francis Golder (me)"
    const [precautionPerson, setPrecautionPerson] = useState('')
    
    const handlePrecautionPerson = (e) => {
        setPrecautionPerson(e.target.value)
    }
    
        return (
            <Paper component="section" sx={{ 
                width: '70%', 
                bgcolor: '#ffffff',
                borderRadius: 1,
                padding: 3,
                margin: 2 }} >
            <h3>Part 4 - Risk Assessment</h3> 
             
            <div>
            <label>Responsible person for completing pre-commencement checklist</label>
            <FormControl required size="small" sx={{display: 'block',
                    width: '90%', margin: 2 }}>
            <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
                <Select
                value={precautionPerson}
                onChange={handlePrecautionPerson}
                sx={{width: '50%'}}> 
                    <MenuItem value={currentUser}>{currentUser}</MenuItem>
                    <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                    <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
                </Select>
            </FormControl>
            </div>
    
            </Paper>
    )
}