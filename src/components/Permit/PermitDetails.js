import { Box, Button, Typography } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Frank from '../../frank.png'

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

        {/* Overview */}
        <Box sx={{mx: '2rem', borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.12)'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Overview</Typography>

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
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, mb: '0.2rem'}}>Permit actions</Typography>
                <Button variant='outlined' sx={{borderColor: '#00a4a9', color: '#00a4a9'}}>MANAGE <EditIcon /></Button>
            </Box>
        </Box>


        {/* Team */}
        <Box sx={{m: '2rem'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>Team</Typography>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Authoriser:</Typography>
                
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <img src={Frank} width={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Francis Golder (Me)</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 14}}>Balfour Beatty</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '4.55rem', height: '1.4rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 12, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1rem', height: '1rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Supervisor</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Operator(s):</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <img src={Frank} width={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>James Worthington</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Ackrington Chambers</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '4.55rem', height: '1.4rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 12, alignSelf: 'center', mr: '0.5rem'}}>
                                Verified
                            </Typography>
                        </Box>

                        <AssignmentIndIcon sx={{mx: '0.5rem', width: '1rem', height: '1rem', color: '#04535f', }} />
                        <Typography sx={{fontSize: 14}}>Welder</Typography>    
                    </Box>
                    
                    </Box>
                </Box>
            </Box>

            <Box sx={{my: '1rem'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Fire Safety:</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{my: '1rem'}}>
                        <img src={Frank} width={50} alt="User_image" />
                    </Box>
                    <Box sx={{m: '1rem'}}>
                        <Typography>Jackie Mason</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', fontSize: 12}}>Ackrington Chambers</Typography>

                    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', my: '0.5rem'}}>
                        <Box sx={{width: '4.55rem', height: '1.4rem', bgcolor: '#4caf50', borderRadius: 50,
                            display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <CheckCircleIcon style={{ fill: 'white', height: '1rem'}}></CheckCircleIcon>
                            <Typography sx={{color: 'white', fontSize: 12, alignSelf: 'center', mr: '0.5rem'}}>
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