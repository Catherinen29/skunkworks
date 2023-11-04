import { Box, Button, FormControl, FormHelperText, InputBase, InputLabel, MenuItem, Paper, Select, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part1() {

const currentUser = "Francis Golder (me)"
const [organisationType, setOrganisationType] = useState("")
const [supplier, setSupplier] = useState("")
const [operators, setOperators] = useState([])
const [respForHotWorks, setRespForHotWorks] = useState("")
const [respForFireSafety, setRespForFireSafety] = useState("")

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

const handleHotWorks = (e) => {
    setRespForHotWorks(e.target.value)
}

const handleFireSafety= (e) => {
    setRespForFireSafety(e.target.value)

}
    return(
        <Paper component="section" sx={{ 
                width: '70%', /*This doesn't work */
                bgcolor: '#ffffff',
                borderRadius: 1,
                padding: 3 }} 
                >
        <h3>Part 1 - Hot Works Permit Details</h3>
        <div sx={{display: 'block'}}>
            Permit issuer 
            {/* information icon */}
            <Box component="section"
                sx={{bgcolor:'#f5f5f5',
                    width:'50%',
                    padding:2
            }}>{currentUser} 
                <div>Verified?</div>
            </Box>
        </div>

        <div>
        <label>Select type of organisation</label>
        <FormControl required size='small' sx={{display: 'block',
                width: '100%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12, width: '100%'}}>Select type</InputLabel>
            <Select
            value={organisationType}
            label="Select Type *"
            onChange={handleOrganisation}
            sx={{width: '50%'}}
            > 
                <MenuItem value="Supplier">Supplier</MenuItem>
                <MenuItem value="Plumbing">Plumbing</MenuItem>
                <MenuItem value="Carpentry">Carpentry</MenuItem>         
            </Select>
        </FormControl>
        </div>
             
        <div>
        <label>Assign a supplier to carry out the work</label>
        <FormControl required size='small' sx={{display: 'block',
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Verified supplier</InputLabel>
            <Select
            value={supplier}
            label="Verified supplier *"
            onChange={handleSupplier}
            sx={{width: '50%'}}> 
                <MenuItem value="Ackrington Chambers">Ackrington Chambers</MenuItem>
                <MenuItem value="Travis Perkins">Travis Perkins</MenuItem>
                <MenuItem value="Wickes">Wickes</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <label>Assign operator(s) to carry out the work</label>
        <FormControl required size="small" sx={{display: 'block',
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified worker</InputLabel>
            <Select
            value={operators[-1]}
            label="Select verified worker *"
            placeholder="Select verified worker..."
            onChange={handleOperator}
            sx={{width: '50%'}}
            > 
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Ralph Fiennes">Ralph Fiennes</MenuItem>
                <MenuItem value="Bill Nighy">Bill Nighy</MenuItem> 
                <MenuItem value="Helena Bonham Carter">Helena Bonham Carter</MenuItem> 
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        
        {/* <div>
        {operators.map(() => {

        <InputLabel>Select verified worker</InputLabel>
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
        </div>

        <div>
        <label>Responsible person for Hot Works</label>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForHotWorks}
            label="Select verified person *"
            onChange={handleHotWorks}
            sx={{width: '50%'}}> 
                <MenuItem value={currentUser}>{currentUser}</MenuItem>
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <label>Responsible person for Fire Safety</label>
        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForFireSafety}
            label="Select verified person *"
            onChange={handleFireSafety}
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