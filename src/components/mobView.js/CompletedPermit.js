import { Badge, Box, Button, Card, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import mob_bg from '../../mob_bg.png'

export default function CompletedPermit() {

const navigate = useNavigate()


return (
    
    <Card sx={{width: '50%', display: 'flex', flexDirection:'column', m: 'auto', 
        justifyContent: 'center', alignItems: 'center'}}>
        
    
        {/* Toolbar */}
        <Box sx={{width: '100%', py: '1rem',
            backgroundImage: `url(${mob_bg})`, color: 'white', 
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: 5}}>
            
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
                width: '100%', 
                mb: '1rem'}}>
                <Button onClick={() => navigate('/permits')} sx={{color: 'white'}}>
                    <ArrowBackIcon />
                </Button>    
            
                <Button sx={{color: 'white'}}>
                    <Badge badgeContent={1} color="error">
                        <NotificationsIcon />
                    </Badge>
                </Button>
                
            </Box>
            
            <Box sx={{mx: '1rem'}}>
               <Box sx={{
                display: 'flex', 
                whiteSpace: 'nowrap', mr: '1rem', 
                    // textOverflow: 'ellipsis',
                    // overflow: 'hidden',
                    // p: 1,
                    fontSize: 18}}> 
               <ApartmentIcon sx={{mr: '1rem'}} /> 
                {/* <Box component='div' 
                    sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'}}> */}
                    <Typography noWrap sx={{mx: '1rem', fontSize: 18, fontWeight: 500}}>
                    NHS Southampton University Hospital
                    </Typography>
                {/* </Box> */}
                
                </Box>

                <Box sx={{display: 'flex'}}>
                    <PersonIcon />
                    <Typography sx={{ml: '1rem'}}>James Worthington</Typography>
                </Box>
                <Box sx={{display: 'flex'}}>
                    <WorkOutlineIcon />
                    <Typography sx={{ml: '1rem'}}>Welder</Typography> 
                </Box>
            </Box>
            
        </Box>
        
        <Box sx={{bgcolor: '#eef5f5'}}>

            {/* Verfied */}
            <Box sx={{m: '2rem', px: '1rem',
                height: '3rem', display: 'flex', alignItems: 'center',
                bgcolor: '#4caf50', color: 'white', borderRadius: 1}}>
                <CheckCircleIcon />
                <Typography sx={{ml: '0.5rem', fontSize: 14}}>You're fully verified</Typography>
            </Box>


            {/* Tasks */}
            <Box sx={{m: '2rem'}}>
                <Card sx={{my: '1rem', bgcolor: '#04535f', color: 'white'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column',
                        ml: '1rem', mr: '1.5rem', my: '2rem'}}>
                    <Typography sx={{mb: '1rem'}}>Tasks</Typography>
                    <Typography paragraph 
                        sx={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 14}}>
                        Specific project tasks assigned to you</Typography>
                    </Box>

                </Card>            
            </Box>

        
            {/* My Wallet */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h5">
                    My Wallet</Typography>

            <Box sx={{p: 0, my: '1rem', display: 'flex', flexFlow: 'row wrap', gap: '2rem'}}>
                
                    <Card sx={{px: '1rem', width: '40%', height: '15rem', position: 'relative'}}>
                        
                        <Box sx={{width: '2rem', height: '2rem', my: '1rem',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                             borderRadius: 1, bgcolor: '#00a4a9', color: 'white'}}>
                            <AssignmentIndIcon sx={{height: '1.8rem', width: '1.8rem'}} />    
                        </Box>
                        
                        <Typography variant='h5' sx={{fontWeight: 500}}>Passports</ Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                            Your skills, knowledge, and experience 
                            required for your job role(s) on this project
                        </ Typography>
                        <Button 
                            sx={{position: 'absolute', bottom: 0, right: 0, m: '0.5rem'}}>
                            VIEW</Button>
                    </Card>

                    <Card sx={{px: '1rem', width: '40%', height: '15rem', position: 'relative'}}>
                        
                        <Box sx={{width: '2rem', height: '2rem', my: '1rem',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                             borderRadius: 1, bgcolor: '#00a4a9', color: 'white'}}>
                                <NewspaperIcon sx={{height: '1.8rem', width: '1.8rem'}} />
                        </Box>
                        
                        <Typography variant='h5' sx={{fontWeight: 500}}>Permits</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                            Work permits issued to you on this project
                        </Typography>
                        <Button
                            sx={{position: 'absolute', bottom: 0, right: 0, m: '0.5rem'}}>VIEW</Button>
                    </Card>

                    <Card sx={{p: '1rem', width: '40%', height: '15rem'}}>
                        <Typography variant='h5' sx={{fontWeight: 500}}>Other</Typography>
                    </Card>

                    <Card sx={{p: '1rem', width: '40%', height: '15rem'}}>
                        <Typography variant='h5' sx={{fontWeight: 500}}>Other</Typography>
                    </Card>        
                    
            </Box>


            </Box>

            </Box>   
    
    </Card>
                
    )
    }