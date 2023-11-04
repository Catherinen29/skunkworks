import { Box, Button, FormControl, FormHelperText, InputBase, MenuItem, Paper, Select } from "@mui/material"
import { useState } from "react"

export default function Part1() {

const [organisationType, setOrganisationType] = useState("")
const [supplier, setSupplier] = useState("")
const [operators, setOperators] = useState([])

const handleOrganisation = (e) => {
    setOrganisationType(e.target.value)
}

const handleSupplier = (e) => {
    setSupplier(e.target.value)
}

const handleOperator = (e) => {
    setOperators([...operators, e.target.value])
    console.log(operators)
}

    return(
        <Paper component="section" sx={{ 
                width: '90%', /*This doesn't work */
                bgcolor: '#ffffff',
                borderRadius: 1,
                padding: 3 }}
                display="grid"
                >
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

        <FormControl required size="small">
        <label>Select type of organisation</label>
            <Select
            value={organisationType}
            label="Select Type *"
            onChange={handleOrganisation}> 
                <MenuItem value="Supplier">Supplier</MenuItem>
                <MenuItem value="Plumbing">Plumbing</MenuItem>
                <MenuItem value="Carpentry">Carpentry</MenuItem>         
            </Select>
        </FormControl>
                
        <FormControl required size="small">
        <label>Assign a supplier to carry out the work</label>
            <Select
            value={supplier}
            label="Verified supplier *"
            onChange={handleSupplier}> 
                <MenuItem value="Ackrington Chambers">Ackrington Chambers</MenuItem>
                <MenuItem value="Travis Perkins">Travis Perkins</MenuItem>
                <MenuItem value="Wickes">Wickes</MenuItem> 
            </Select>
        </FormControl>

        <FormControl required size="small">
            
        <label>Assign operator(s) to carry out the work</label>
        <div>
            <Select
            value={operators[-1]}
            label="Select verified worker *"
            placeholder="Select verified worker..."
            onChange={handleOperator}> 
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Ralph Fiennes">Ralph Fiennes</MenuItem>
                <MenuItem value="Bill Nighy">Bill Nighy</MenuItem> 
                <MenuItem value="Helena Bonham Carter">Helena Bonham Carter</MenuItem> 
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        </div>
        {/* <div>
        {operators.map(() => {
        <Select
        value={operators[-1]}
        label="Select verified worker *"
        onChange={handleOperator}> 
            <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
            <MenuItem value="Ralph Fiennes">Ralph Fiennes</MenuItem>
            <MenuItem value="Bill Nighy">Bill Nighy</MenuItem> 
            <MenuItem value="Helena Bonham Carter">Helena Bonham Carter</MenuItem> 
            <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
        </Select>
        
        })
        }
        </div> */}
            {/* Add another */}
            <Button>ADD ANOTHER +</Button>
            
        </FormControl>



        </Paper>
    )
}