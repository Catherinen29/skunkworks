import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Frank from '../../frank.png'
import James from '../../james.png'
import Jackie from '../../jackie.png'

export default function PermitDetails({setOpenPermitDetails}) {

const handleShowPermitDetails = () => {
    setOpenPermitDetails(false)
}

return (

    <Box>
        {/* Title */}
        <Box sx={{p: '2rem'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                mb: '2rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{color: '#04535f'}}>
                        <NewspaperIcon /></Box>
                    <Typography sx={{color: '#04535f', pl: '1rem'}}>PERMIT</Typography>    
                </Box>
                
                <Button onClick={handleShowPermitDetails} sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                    <CloseIcon />
                </Button>
                
            </Box>

            <Typography variant="h5" sx={{fontWeight: 500}}>Details</Typography>

            
        </Box>

    <Divider />
        
        {/* Overview */}
        <Box sx={{m: '1.5rem'}}>
            <Typography                 
                sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 14, fontWeight: 500}}>
                Overview</Typography>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Permit number</Typography>
                <Typography>HW078327</Typography>
            </Box>

            <Box sx={{my: '1rem'}}>
               <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Created: </Typography>
                <Typography>13 Oct 2023 at 11:34 GMT</Typography>
            </Box>
            
            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Valid from: </Typography>
                <Typography>1 Nov 2023 at 09:00 GMT</Typography>
            </Box>
            
            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Expiry: </Typography>
                <Typography>1 Nov 2023 at 17:00 GMT</Typography>
            </Box>
            
            <Box sx={{my: '1rem'}}>
                <Typography 
                sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, mb: '0.2rem'}}>
                    Permit actions</Typography>
                <Button variant='outlined' size='medium'
                    endIcon={<EditIcon />}
                    sx={{borderColor: '#00a4a9', color: '#00a4a9', 
                    width: '8rem', height: '2.5rem',
                    "&:hover": {
                        color: "#008488",
                        bgcolor: '#ffffff'}}}>
                <Typography sx={{ fontWeight: 500 }}>MANAGE</Typography>
                </Button>
            </Box>
        </Box>

    <Divider />

        {/* Team */}
        <Box sx={{m: '1rem'}}>
            <Typography 
                sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 14, fontWeight: 500, 
                mt: '2rem', ml: '1rem'}}>
                Team</Typography>

            <Box sx={{m: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Authoriser:</Typography>
                
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <Avatar src={Frank} width={50} height={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Francis Golder (Me)</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Balfour Beatty</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '5rem', height: '1.5rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon 
                            sx={{mx: '0.5rem', width: '1rem', height: '1rem', 
                            color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Supervisor</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>

            <Box sx={{mx: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Operator(s):</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <Avatar src={James} width={50} height={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>James Worthington</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Ackrington Chambers</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                    <Box sx={{width: '5rem', height: '1.5rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1rem', height: '1rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Welder</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>

            <Box sx={{m: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Fire Safety:</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <Avatar src={Jackie} width={50} height={50} alt="User_image" /> 
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Jackie Mason</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 13}}>Ackrington Chambers</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                    <Box sx={{width: '5rem', height: '1.5rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 14, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1rem', height: '1rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Responsible person for Fire Safety</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>
        </Box>

    </Box>

)
}