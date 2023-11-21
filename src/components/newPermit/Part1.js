import { Box, Button, FormControl, MenuItem, Paper, 
    TextField, Typography, Avatar} from "@mui/material"
import { useState } from "react"
import Frank from '../../frank.png'
import VerifiedTag from '../common/VerifiedTag'
import AlertIcon from "../common/AlertIcon";

// TODO: remove static data and replace with data from database
const workers = [{
    name: 'Jan Goldstein',
    value: 'Jan Goldstein',
    position: 'Supervisor',
    verified: true,
}, {
    name: 'Tilda Swinton',
    value: 'Tilda Swinton',
    position: 'Supervisor',
    verified: true,
}, {
    name: 'Bill Nighy',
    value: 'Bill Nighy',
    position: 'Supervisor',
    verified: true,
}]

export default function Part1({newPermit, setNewPermit}) {

const [organisationType, setOrganisationType] = useState('')
const [supplier, setSupplier] = useState('')
const [operators, setOperators] = useState([])
const [numOfSelectFields, setNumOfSelectFields] = useState(1)
const [respForHotWorks, setRespForHotWorks] = useState('')
const [respForFireSafety, setRespForFireSafety] = useState('')

const handleOperator = (e, index) => {
    if (!operators.includes(e.target.value)) {
        const updatedOperators = [...operators]
        updatedOperators[index] = e.target.value
        setOperators(updatedOperators)
    } 
}

// Handle user input
const handleInput = (e) => {
    setNewPermit({...newPermit, [e.target.name]: e.target.value})
}

const addField = () => {
    setNumOfSelectFields(numOfSelectFields + 1)
}

return(
    <Paper sx={{ 
            width: '600px', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            p: '2rem',
            pl: '1rem' }} 
            >
    <Typography variant="h6" sx={{fontWeight: 500}}>Part 1 - Hot Works Permit Details</Typography>

    <Box sx={{mt: '1rem', height: '35px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>Permit issuer</Typography>
            <AlertIcon></AlertIcon>
    </Box>

    <Box sx={{display: 'flex'}}>
    <Box>    
        <Box component='section'
            sx={{bgcolor:'#f5f5f5', 
            width:'21rem', padding: 2, height: '3rem', mt: '0.5rem', 
            display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center'
        }}>

        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box>
                <Avatar src={Frank} 
                sx={{width: 50, height: 50}}></Avatar>
            </Box>
            <Box sx={{mx: 1}}>  
                <Typography>{workers[0].name}</Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
                    {workers[0].position}</Typography>
            </Box>
        </Box>

        <VerifiedTag></VerifiedTag>
        </Box>
    </Box>

        <Box sx={{alignSelf: 'center', ml: '1rem', mt: '1rem'}}>
            <Typography sx={{fontSize: 11, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography>
        </Box>
    </Box>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Select type of organisation</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required sx={{display: 'block',
                mt: 2 }}>
        <TextField
            select
            name='organisationType'
            value={newPermit.organisationType}
            label='Select organisation'
            onChange={handleInput}
            size="small"
            sx={{width: '23rem'}}
            > 
                <MenuItem value='Supplier'>Supplier</MenuItem>
                <MenuItem value='Plumbing'>Plumbing</MenuItem>
                <MenuItem value='Carpentry'>Carpentry</MenuItem>         
            </TextField>
        </FormControl>
             
        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Assign a supplier to carry out the work</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <TextField
            select
            name='supplier'
            value={newPermit.supplier}
            label='Select supplier *'
            onChange={handleInput}
            size="small"
            sx={{width: '23rem'}}> 
                <MenuItem value='Ackrington Chambers'>Ackrington Chambers</MenuItem>
                <MenuItem value='Travis Perkins'>Travis Perkins</MenuItem>
                <MenuItem value='Wickes'>Wickes</MenuItem> 
            </TextField>
        </FormControl>
        </Box>

        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Assign operator(s) to carry out the work</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required sx={{display: 'block',
                mt: 2 }}>
        
        {Array.from({length: numOfSelectFields}).map((_, index) => (
            <TextField
                select
                name='operators'
                value={operators[index]}
                label='Select verified worker *'
                onChange={(e) => handleOperator(e, index)}
                size="small"
                sx={{width: '23rem',
                '.MuiSelect-select': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }, mb: 2}}
                > 
                {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
        ))}
            </TextField>
        ))
        }
        
        <Box>
            <Button  variant='outlined' onClick={addField} 
            sx={{mb: 1, color: '#00a4a9'}}>
                ADD ANOTHER +</Button>
        </Box>
            
        </FormControl>
        </Box>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Responsible person for Hot Works</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <Box sx={{display: 'flex'}}>
        <Box>
        <FormControl required 
            sx={{display: 'block',
            mt: 2 }}>
        <TextField
            select
            name='respForHotWorks'
            value={newPermit.respForHotWorks}
            label='Select verified worker *'
            onChange={handleInput}
            size="small"
            sx={{
                width: '23rem',
                '.MuiSelect-select': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            }}> 
        {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
        ))}
            </TextField>
        </FormControl>
        </Box>

        <Box sx={{alignSelf: 'center', ml: '1rem', mt: '1rem'}}>
            <Typography sx={{fontSize: 11, color: 'rgba(0, 0, 0, 0.6)'}}>
            Verified skills to manage Hot Works</Typography> 
        </Box>
        </Box>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem', fontSize: 14, fontWeight: 500}}>
                Responsible person for Fire Safety</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box>
        <FormControl required sx={{display: 'block', mt: 2 }}>
        <TextField
            select
            name='respForFireSafety'
            value={newPermit.respForFireSafety}
            label='Select verified worker *'
            onChange={handleInput}
            size="small"
            sx={{width: '23rem',
            '.MuiSelect-select': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}}> 
                
            {workers.map((worker) => (
            <MenuItem key={worker.value} value={worker.value} sx={{justifyContent: 'space-between'}}>
                {worker.name}
                {worker.verified && <VerifiedTag/>}
            </MenuItem>
            ))}
            </TextField>
        </FormControl>
        </Box>
        
        <Box sx={{alignSelf: 'center', ml: '1rem', mt: '1rem'}}>
            <Typography sx={{fontSize: 11, color: 'rgba(0, 0, 0, 0.6)'}}>
            Verified skills for Hot Works fire safety</Typography> 
        </Box>
        
        </Box>


        </Paper>
    )
}