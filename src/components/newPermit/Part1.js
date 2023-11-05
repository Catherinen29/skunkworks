import { Alert, Box, Button, FormControl, FormHelperText, Grid, InputBase, InputLabel, MenuItem, Paper, Select, TableBody, TableRow, Tooltip, Typography, createTheme } from "@mui/material"
import { useState } from "react"


export default function Part1() {

const currentUser = 'Francis Golder (me)'
const [organisationType, setOrganisationType] = useState('')
const [supplier, setSupplier] = useState('')
const [operators, setOperators] = useState([])
const [respForHotWorks, setRespForHotWorks] = useState('')
const [respForFireSafety, setRespForFireSafety] = useState('')

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
            width: '40rem', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 3 }} 
            >
    <h3>Part 1 - Hot Works Permit Details</h3>

    <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Permit issuer</Typography>  
            <Tooltip title='Full name of person issuing the permit'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>

        <div sx={{display: 'block'}}>
            <Box component="section"
                sx={{bgcolor:'#f5f5f5',
                    width:'25rem',
                    padding: 2,
                    margin: 2
            }}>{currentUser} 
            {/* Job title */}
                <Alert variant="filled" severity="success" 
                sx={{width: '100px', height: '35px', padding: '5px', borderRadius: 50, fontSize: 12}}>
                    Verified</Alert>
            </Box>
        </div>
    </TableBody>


        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Select type of organisation</Typography>  
            <Tooltip title='Select the organisation type'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <FormControl required size='small' sx={{display: 'block',
                width: '25rem', margin: 2 }}>
        <InputLabel sx={{fontSize: 12, width: '100%'}}>Select type</InputLabel>
            <Select
            value={organisationType}
            label="Select Type *"
            onChange={handleOrganisation}
            sx={{width: '25rem'}}
            > 
                <MenuItem value="Supplier">Supplier</MenuItem>
                <MenuItem value="Plumbing">Plumbing</MenuItem>
                <MenuItem value="Carpentry">Carpentry</MenuItem>         
            </Select>
        </FormControl>
        </div>
             
        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Assign a supplier to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <FormControl required size='small' sx={{display: 'block',
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Verified supplier</InputLabel>
            <Select
            value={supplier}
            label="Verified supplier *"
            onChange={handleSupplier}
            sx={{width: '25rem'}}> 
                <MenuItem value="Ackrington Chambers">Ackrington Chambers</MenuItem>
                <MenuItem value="Travis Perkins">Travis Perkins</MenuItem>
                <MenuItem value="Wickes">Wickes</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Assign operator(s) to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <FormControl required size="small" sx={{display: 'block',
                margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified worker</InputLabel>
            <Select
            value={operators[-1]}
            label="Select verified worker *"
            onChange={handleOperator}
            sx={{width: '25rem'}}
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
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Hot Works</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForHotWorks}
            label="Select verified person *"
            onChange={handleHotWorks}
            sx={{width: '25rem'}}> 
                <MenuItem value={currentUser}>{currentUser}</MenuItem>
                <MenuItem value="Jan Goldenstein">Jan Goldenstein</MenuItem>
                <MenuItem value="Tilda Swinton">Tilda Swinton</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Fire Safety</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant="outlined" severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <FormControl required size="small" sx={{display: 'block',
                width: '90%', margin: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForFireSafety}
            // label="Select verified person *"
            onChange={handleFireSafety}
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