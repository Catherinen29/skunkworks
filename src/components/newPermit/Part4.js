import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, 
    InputBase, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TableBody, TableRow, 
    TextField, Typography, Tooltip, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part4() {

const currentUser = "Francis Golder (me)"
const [riskAssessor, setRiskAssessor] = useState('')

const handleRiskAssessor = (e) => {
    setRiskAssessor(e.target.value)
}

    return (
        <Paper component="section" sx={{ 
            width: '40rem', /*This doesn't work */
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3,
            margin: 2 }} >
        <h3>Part 4 - Risk Assessment</h3> 
        
        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for completing the risk assessment</Typography>  
            <Tooltip title='Select name of responsible person'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <FormControl required size="small" sx={{display: 'block', my: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
        
            <Select
            value={riskAssessor}
            onChange={handleRiskAssessor}
            sx={{width: '25rem'}}> 
                <MenuItem value={currentUser}>{currentUser}</MenuItem>
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        </FormControl>
        </div>

        </Paper>
    )
}