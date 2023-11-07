import { Box, Button, FormControl, Grid, MenuItem, Paper, TableContainer,
    TableBody, TableRow, TextField, Typography, Table} from "@mui/material"
import { useState } from "react"
import Frank from '../../frank.png'
import VerifiedTag from "../common/VerifiedTag";
import AlertIcon from "../common/AlertIcon";

export default function Part1(props) {

let users = props.users

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

const addField = () => {
    setNumOfSelectFields(numOfSelectFields + 1)
}

return(
    <Paper sx={{ 
            width: '40rem', 
            bgcolor: '#ffffff',
            borderRadius: 1,
            padding: 5 }} 
            >
    <h3>Part 1 - Hot Works Permit Details</h3>

    <TableContainer>
        <Table>
    <TableBody>
        <TableRow sx={{height: '35px', display: 'flex'}}>
            <Typography sx={{py: '0.4rem'}}>Permit issuer</Typography>
            <AlertIcon></AlertIcon>
        </TableRow>
    </TableBody></Table>
    </TableContainer>

<Grid container spacing={2}>
    <Grid item xs={8}>    
        <Box component='section'
            sx={{bgcolor:'#f5f5f5', width:'23rem', padding: 2, height: '3rem',
            mt: 2, display: 'inline-flex', justifyContent: 'space-between'
        }}>

        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box>
            <img src={Frank} width={50} alt="User_image"></img>
            </Box>
            <Box sx={{mx: 1}}>  
                <Typography>{users[0].name} </Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>
                    {users[0].position}</Typography>
            </Box>
        </Box>

        <VerifiedTag></VerifiedTag>
        </Box>
    </Grid>
            
        <Grid item xs={4} sx={{alignSelf: 'center'}}>
            <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography>
        </Grid>
</Grid>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Select type of organisation</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                width: '25rem', mt: 2 }}>
        <TextField
            select
            value={organisationType}
            label='Select organisation'
            onChange={(e) => setOrganisationType(e.target.value)}
            sx={{width: '25rem'}}
            > 
                <MenuItem value='Supplier'>Supplier</MenuItem>
                <MenuItem value='Plumbing'>Plumbing</MenuItem>
                <MenuItem value='Carpentry'>Carpentry</MenuItem>         
            </TextField>
        </FormControl>
             
        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Assign a supplier to carry out the work</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <TextField
            select
            value={supplier}
            label='Select supplier *'
            onChange={(e) => setSupplier(e.target.value)}
            sx={{width: '25rem'}}> 
                <MenuItem value='Ackrington Chambers'>Ackrington Chambers</MenuItem>
                <MenuItem value='Travis Perkins'>Travis Perkins</MenuItem>
                <MenuItem value='Wickes'>Wickes</MenuItem> 
            </TextField>
        </FormControl>
        </Box>

        <Box>
        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Assign operator(s) to carry out the work</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        
        {Array.from({length: numOfSelectFields}).map((_, index) => (
            <TextField
                select
                value={operators[index]}
                label='Select verified worker *'
                onChange={(e) => handleOperator(e, index)}
                sx={{width: '25rem', mb: 2}}
                > 
                <MenuItem value='Francis Golder (me)'>Francis Golder (me)</MenuItem>
                <MenuItem value='Jan Goldstein'>Jan Goldstein</MenuItem>
                <MenuItem value='Tilda Swinton'>Tilda Swinton</MenuItem>  
                <MenuItem value='Bill Nighy'>Bill Nighy</MenuItem>
                <MenuItem value='Ralph Fiennes'>Ralph Fiennes</MenuItem> 
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
            <Typography sx={{py: '0.4rem'}}>Responsible person for Hot Works</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <TextField
            select
            value={respForHotWorks}
            label='Select verified worker *'
            onChange={(e) => setRespForHotWorks(e.target.value)}
            sx={{
                width: '25rem',
                '.MuiSelect-select': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
            }}> 
                <MenuItem value='Jan Goldstein' sx={{justifyContent: "space-between"}}>Jan Goldstein
                <VerifiedTag></VerifiedTag>
                </MenuItem>

                <MenuItem value='Tilda Swinton' sx={{justifyContent: "space-between"}}>Tilda Swinton
                <VerifiedTag></VerifiedTag>
                </MenuItem>

                <MenuItem value={users[1]} sx={{justifyContent: "space-between"}}>Bill Nighy
                <VerifiedTag></VerifiedTag>
                </MenuItem> 

            </TextField>
        </FormControl>
            </Grid>

            <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills to manage Hot Works</Typography> 
                </Grid>
        </Grid>

        <Box sx={{height: '25px', display: 'flex', mt: '1rem'}}>
            <Typography sx={{py: '0.4rem'}}>Responsible person for Fire Safety</Typography>  
            <AlertIcon></AlertIcon>
        </Box>

        <Grid container spacing={2}>
            <Grid item  xs={8}>
        <FormControl required size='small' sx={{display: 'block',
                mt: 2 }}>
        <TextField
            select
            value={respForFireSafety}
            label='Select verified worker *'
            onChange={(e) => setRespForFireSafety(e.target.value)}
            sx={{width: '25rem'}}> 
                <MenuItem value='Jan Goldstein' sx={{justifyContent: "space-between"}}>Jan Goldstein
                <VerifiedTag></VerifiedTag>
                </MenuItem>

                <MenuItem value='Tilda Swinton' sx={{justifyContent: "space-between"}}>Tilda Swinton
                <VerifiedTag></VerifiedTag>
                </MenuItem>

                <MenuItem value={users[1]} sx={{justifyContent: "space-between"}}>Bill Nighy
                <VerifiedTag></VerifiedTag>
                </MenuItem> 

            </TextField>
        </FormControl>
            </Grid>
        
        <Grid item xs={4} sx={{alignSelf: 'center'}}>
                <Typography sx={{fontSize: 12, color: 'rgba(0, 0, 0, 0.6)'}}>
                Verified skills for Hot Works Fire Safety</Typography> 
                </Grid>
        
        </Grid>


        </Paper>
    )
}