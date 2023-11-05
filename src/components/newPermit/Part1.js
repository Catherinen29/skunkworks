import { Alert, Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, 
    TableBody, TableRow, Tooltip, Typography, createTheme } from "@mui/material"
import { useEffect, useState } from "react"
import Frank from '../../frank.png'
import { AddBoxOutlined } from "@mui/icons-material"

export default function Part1(props) {

let users = props.users

const [organisationType, setOrganisationType] = useState('')
const [supplier, setSupplier] = useState('')
const [operators, setOperators] = useState([])
const [numOfSelectFields, setNumOfSelectFields] = useState(1)
const [respForHotWorks, setRespForHotWorks] = useState({})
const [respForFireSafety, setRespForFireSafety] = useState({})

const handleOrganisation = (e) => {
    setOrganisationType(e.target.value)
}

const handleSupplier = (e) => {
    setSupplier(e.target.value)
}

const handleOperator = (e, index) => {
    if (!operators.includes(e.target.value)) {
        const updatedOperators = [...operators]
        updatedOperators[index] = e.target.value
        setOperators(updatedOperators)
    } 
}

const addField = () => {
    setNumOfSelectFields(numOfSelectFields + 1)
}

const handleHotWorks = (e) => {
    setRespForHotWorks(e.target.value)
}

const handleFireSafety= (e) => {
    setRespForFireSafety(e.target.value)
}

console.log(users)
return(
    <Paper component='section' sx={{ 
            width: '40rem', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5 }} 
            >
    <h3>Part 1 - Hot Works Permit Details</h3>


    <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Permit issuer</Typography>
            <Tooltip title='Full name of person issuing the permit'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
    </TableBody>

<Grid container spacing={2}>
        <Grid item xs={8}>    
            <Box component='section'
                sx={{bgcolor:'#f5f5f5', width:'23rem', padding: 2, height: '3rem',
                mt: 2, display: 'inline-flex', justifyContent: 'space-between'
            }}>

        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box>
            <img src={Frank} width={50}></img>
            </Box>
            <Box sx={{mx: 1}}>  
                <Typography>{users[0].name} </Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
                    {users[0].position}</Typography>
            </Box>
        </Box>

            <Alert variant='filled' severity='success' 
            sx={{width: '100px', height: '35px', padding: 1, borderRadius: 50, 
            bgcolor: '#4caf50', fontSize: 12}}>
                Verified</Alert>
            </Box>
    

        </Grid>

        <Grid item xs={4} sx={{alignSelf: 'center'}}>
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography>
        </Grid>
</Grid>


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
                width: '25rem', mt: 2 }}>
        <InputLabel sx={{fontSize: 12, width: '100%'}}>Select type</InputLabel>
            <Select
            value={organisationType}
            label='Select Type *'
            onChange={handleOrganisation}
            sx={{width: '25rem'}}
            > 
                <MenuItem value='Supplier'>Supplier</MenuItem>
                <MenuItem value='Plumbing'>Plumbing</MenuItem>
                <MenuItem value='Carpentry'>Carpentry</MenuItem>         
            </Select>
        </FormControl>
        </div>
             
        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Assign a supplier to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Verified supplier</InputLabel>
            <Select
            value={supplier}
            label='Verified supplier *'
            onChange={handleSupplier}
            sx={{width: '25rem'}}> 
                <MenuItem value='Ackrington Chambers'>Ackrington Chambers</MenuItem>
                <MenuItem value='Travis Perkins'>Travis Perkins</MenuItem>
                <MenuItem value='Wickes'>Wickes</MenuItem> 
            </Select>
        </FormControl>
        </div>

        <div>
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Assign operator(s) to carry out the work</Typography>  
            <Tooltip title='Select the supplier'>
                <Alert variant='outlined' severity="info" 
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>
        
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        
        <div>
        <InputLabel sx={{fontSize: 12}}>Select verified worker</InputLabel>
        {Array.from({length: numOfSelectFields}).map((_, index) => (
            <Select
                value={operators[index]}
                label='Select verified worker *'
                onChange={(e) => handleOperator(e, index)}
                sx={{width: '25rem', mt: 2}}
                > 
                <MenuItem value={users[0]}>{users[0].name}</MenuItem>
                <MenuItem value={users[1]}>{users[1].name}</MenuItem>
                <MenuItem value={users[2]}>{users[2].name}</MenuItem>  
                <MenuItem value={users[3]}>{users[3].name}</MenuItem>
                <MenuItem value={users[4]}>{users[4].name}</MenuItem> 
            </Select>
        ))
        }
        </div>
        <div>
            <Button  variant='outlined' onClick={addField} sx={{my: 2}}>ADD ANOTHER +</Button>
        </div>
            
        </FormControl>
        </div>

        
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Hot Works</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                width: '90%', mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForHotWorks}
            label='Select verified person *'
            onChange={handleHotWorks}
            sx={{width: '25rem'}}> 
                <MenuItem value={users[0]}>{users[0].name}</MenuItem>
                <MenuItem value={users[1]}>{users[1].name}</MenuItem>
                <MenuItem value={users[5]}>{users[5].name}</MenuItem> 
            </Select>
        </FormControl>
            </Grid>

        {respForHotWorks.verified 
            ? <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography> 
                </Grid>
            : null }
        </Grid>

        
        <TableBody>
        <TableRow sx={{height: '25px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Fire Safety</Typography>  
            <Tooltip title='Select the name of the person'>
                <Alert variant='outlined' severity='info'
                    sx={{borderColor: '#ffffff', 
                    ml: '0.5rem', px: 1, py: 0 }}></Alert>
            </Tooltip>
        </TableRow>
        </TableBody>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                width: '25rem', mt: 2 }}>
        <InputLabel sx={{fontSize: 12}}>Select verified person</InputLabel>
            <Select
            value={respForFireSafety}
            onChange={handleFireSafety}
            sx={{width: '25rem'}}> 
                <MenuItem value={users[0]}>{users[0].name}</MenuItem>
                <MenuItem value={users[2]}>{users[2].name}</MenuItem>
                <MenuItem value={users[4]}>{users[4].name}</MenuItem> 
            </Select>
        </FormControl>
            </Grid>
        
        {respForFireSafety.verified 
            ? <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills for Hot Works Safety</Typography> 
                </Grid>
            : null }
        </Grid>


        </Paper>
    )
}