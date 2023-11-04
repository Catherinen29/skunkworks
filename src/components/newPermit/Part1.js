import { Box, FormControl, FormHelperText, MenuItem, Paper, Select } from "@mui/material"
import { useState } from "react"

export default function Part1() {

const [organisationType, setOrganisationType] = useState("")

const handleOrganisation = (e) => {
    setOrganisationType(e.target.value)
}


    return(
        <Paper component="section" sx={{ 
                width: '90%', /*This doesn't work */
                bgcolor: '#ffffff',
                borderRadius: 1,
                padding: 3 }}>
        <h3>Part 1 - Hot Works Permit Details</h3>
        <div>
            Permit issuer 
            {/* information icon */}
            <Box component="section"
                sx={{bgcolor:'#f5f5f5',
                    width:'50%'
            }}>Current user 
                <div>Verified?</div>
            </Box>
        </div>

        <FormControl required>
        Select type of organisation
            <Select
            value={organisationType}
            label="Select Type *"
            onChange={handleOrganisation}> 
                <MenuItem value="Supplier">Supplier</MenuItem>
                <MenuItem value="Plumbing">Plumbing</MenuItem>
                <MenuItem value="Carpentry">Carpentry</MenuItem>                
                <MenuItem value="Face Painting">Face Painting</MenuItem>
            </Select>
        </FormControl>
                


            
        </Paper>
    )
}