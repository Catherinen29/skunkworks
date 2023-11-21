import { Alert, Badge, Box, Button, Card, CardActionArea, Snackbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import mob_bg from '../../mob_bg.png'
import BB_bg from '../../BB_bg.png'
import { useState } from "react";
import { CheckCircleOutline } from "@mui/icons-material";
import NoTasksTag from "../common/NoTasksTag";

export default function CompletedPermit() {

const navigate = useNavigate()

const [open, setOpen] = useState(true)
const handleClose = () => {
    setOpen(false)
}

return (
    
    <Card sx={{width: '50%', display: 'flex', flexDirection:'column', m: 'auto', 
        justifyContent: 'center', alignItems: 'center'}}>
        
    
        {/* Toolbar */}
        <Box sx={{width: '100%', pb: '1rem',
            backgroundImage: `url(${mob_bg})`, backgroundSize: '100%', color: 'white', 
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', boxShadow: 5}}>
            
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
                width: '90%', m: '1rem'}}>
                <Button onClick={() => navigate('/')} sx={{color: 'white'}}>
                    <ArrowBackIcon sx={{height: '3rem', width: '3rem'}} />
                </Button>    
            
                <Button sx={{color: 'white'}}>
                    <Badge badgeContent={1} style={{fontSize: 20}}
                        color="error" overlap="circular">
                        <NotificationsIcon sx={{height: '3rem', width: '3rem'}} />
                    </Badge>
                </Button>
            </Box>
            
            <Box sx={{mx: '1rem'}}>
               <Box sx={{
                display: 'flex', alignItems: 'center',
                whiteSpace: 'nowrap', mr: '1rem', 
                fontSize: 18}}> 
               <ApartmentIcon sx={{height: '3rem', width: '3rem'}} /> 
                    <Typography noWrap variant="h5" 
                        sx={{mx: '1rem', fontWeight: 500}}>
                    NHS Southampton University Hospital
                    </Typography>
                
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', my: '0.5rem'}}>
                    <PersonIcon sx={{height: '3rem', width: '3rem'}} />
                    <Typography sx={{ml: '1rem', fontSize: 20}}>James Worthington</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', my: '0.5rem'}}>
                    <WorkIcon sx={{height: '3rem', width: '3rem'}} />
                    <Typography sx={{ml: '1rem', fontSize: 20}}>Welder</Typography> 
                </Box>
            </Box>
            
        </Box>
        
        <Box sx={{bgcolor: '#eef5f5'}}>

            {/* Verified */}
            <Box sx={{m: '1rem', p: '1rem',
                height: '3rem', display: 'flex', alignItems: 'center',
                bgcolor: '#4caf50', color: 'white', borderRadius: 1}}>
                <CheckCircleIcon sx={{height: '2rem', width: '2rem'}} />
                <Typography sx={{ml: '0.5rem', fontSize: 18}}>You're fully verified</Typography>
            </Box>


            {/* Tasks */}
            <Box sx={{m: '1rem', display: 'flex', flexDirection: 'row'}}>
                <Card sx={{my: '1rem', p: '1.5rem', pb: '1rem', 
                width: '100%', height: '7rem',
                bgcolor: '#04535f', color: 'white',
                display: 'flex', alignItems: 'flex-start'
                }}>

                <CardActionArea onClick={() => navigate('/finalpermits')}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" sx={{mb: '1rem', 
                        fontWeight: 500}}>Tasks</Typography>
                    <Typography paragraph 
                        sx={{color: 'rgba(255, 255, 255, 0.7)'}}>
                        Specific project tasks assigned to you</Typography>
                    </Box>
                </CardActionArea>

                <Box sx={{display: 'flex', flexDirection: 'column', 
                        justifyContent: 'space-between', height: '100%'}}>
                    <NoTasksTag />   
                    
                    <Button variant="text"
                        sx={{display: 'flex', alignSelf: 'flex-end',
                        color: '#ffffff', width: '5rem'
                        }}>
                    <Typography sx={{fontWeight: 500, fontSize: 18, px: '0.5rem'}}>
                        VIEW</Typography>
                        <KeyboardArrowRightRoundedIcon />
                    </Button>
                </Box>
                    
                </Card>            
            </Box>

        
            {/* My Wallet */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h5" fontWeight={500}>
                    My Wallet</Typography>

            <Box sx={{p: 0, my: '1rem', display: 'flex', flexFlow: 'row wrap', gap: '1rem'}}>
                
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
                            sx={{position: 'absolute', 
                            bottom: 0, right: 0, m: '0.5rem',
                            color: '#00a4a9'}}>
                            VIEW
                            <KeyboardArrowRightRoundedIcon />
                            </Button>
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
                            sx={{position: 'absolute', 
                            bottom: 0, right: 0, m: '0.5rem',
                            color: '#00a4a9'}}>
                            VIEW
                            <KeyboardArrowRightRoundedIcon />
                            </Button>
                    </Card>

                    <Card sx={{px: '1rem', width: '40%', height: '15rem', position: 'relative'}}>
                        <Box sx={{width: '2rem', height: '2rem', my: '1rem',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 1, bgcolor: '#00a4a9', color: 'white'}}>
                                <FlagCircleIcon sx={{height: '1.8rem', width: '1.8rem'}} />
                        </Box>
                        
                        <Typography variant='h5' sx={{fontWeight: 500}}>Flags</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                            Health & Safety details
                        </Typography> 
                        <Button
                            sx={{position: 'absolute', 
                            bottom: 0, right: 0, m: '0.5rem',
                            color: '#00a4a9'}}>
                            VIEW
                            <KeyboardArrowRightRoundedIcon />
                            </Button>
                    </Card>

                    <Card sx={{px: '1rem', width: '40%', height: '15rem', position: 'relative'}}>
                        <Box sx={{width: '2rem', height: '2rem', my: '1rem',
                            display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 1, bgcolor: '#00a4a9', color: 'white'}}>
                                <DirectionsWalkIcon sx={{height: '1.8rem', width: '1.8rem'}} />
                        </Box>
                        <Typography variant='h5' sx={{fontWeight: 500}}>Other</Typography>
                        <Typography sx={{color: 'rgba(0, 0, 0, 0.6)'}}>
                            Permit deadlines
                        </Typography>
                        <Button
                            sx={{position: 'absolute', 
                            bottom: 0, right: 0, m: '0.5rem',
                            color: '#00a4a9'}}>
                            VIEW
                            <KeyboardArrowRightRoundedIcon />
                            </Button>
                    </Card>        
                    
            </Box>

            </Box>

        </Box>   

        <Box>
            <Snackbar open={open} onClose={handleClose} 
                // autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                    }}
                sx={{width: '80%'}}
            >
            <Alert 
                sx={{color: 'white', bgcolor: 'grey', 
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
                }}
                iconMapping={{
                success: <CheckCircleOutlineIcon fontSize="inherit" sx={{color: 'white'}} />,
                }}
            >
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Typography>You have completed all your tasks on 
                        the Hot Work permit. 
                    </Typography>
                    <CloseIcon sx={{ml: '1rem'}} />    
                </Box>
                
            </Alert>
                        
            </Snackbar>
        </Box>
    </Card>
                
    )
    }