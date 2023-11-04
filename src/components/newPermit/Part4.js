import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part4() {

const currentUser = "Francis Golder (me)"
const [riskAssessor, setRiskAssessor] = useState('')

const handleRiskAssessor = (e) => {
    setRiskAssessor(e.target.value)
}

    return (
        <Paper component="section" sx={{ 
            width: '70%', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 4 - Risk Assessment</h3> 
        
        <div>
        <label>Responsible person for completing the risk assessment</label>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={riskAssessor}
            onChange={handleRiskAssessor}
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