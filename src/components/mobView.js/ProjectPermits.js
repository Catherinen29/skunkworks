import { Box, Button, Card, CardActionArea, Grid, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AuthorisedStatusTag } from "../common/PermitStatusTags";

export default function ProjectPermits() {

const navigate = useNavigate()


return (
    
    <Card sx={{width: '50%', display: 'flex', flexDirection:'column', m: 'auto', 
        justifyContent: 'center', alignItems: 'center'}}>
        
    
        {/* Toolbar */}
        <Box sx={{width: '100%', py: '1rem',
            bgcolor: '#04535f', color: 'white', 
            display: 'flex', flexDirection: 'column', 
            boxShadow: 5}}>
            
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',
                width: '90%', m: '1rem'}}>
                <Button onClick={() => navigate('/permits')} sx={{color: 'white'}}>
                    <ArrowBackIcon sx={{height: '3rem', width: '3rem'}} />
                </Button>    
                <Typography variant="h4" fontWeight={500}
                    sx={{mx: '1rem'}}>
                    Project Permits
                </Typography>
                
            </Box>
            
        </Box>
        
        <Box sx={{bgcolor: '#eef5f5', width: '100%'}}>
        
            {/* Active permits */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h5"
                    sx={{color: 'rgba(0, 0, 0, 0.6)', fontWeight: 500}}>
                    Active
                </Typography>
                <Typography sx={{my: '1rem'}}>
                    No currently active permits
                </Typography>
            </Box>

            {/* Authorised permits */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h5"
                    sx={{color: 'rgba(0, 0, 0, 0.6)', fontWeight: 500}}>
                    Authorised
                </Typography>

                <Card sx={{bgcolor: '#04535f', color: 'white', borderRadius: 5,
                    my: '1rem', p: '2rem'}}>
                    <CardActionArea onClick={() => navigate('/signpermit')}>
                            
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                        <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{border: 1, 
                                borderColor: 'white', 
                                borderRadius: '10%',
                                bgcolor: '#ffdd00',
                                width: 100, 
                                height: 100,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                                }}>
                            <Typography sx={{fontFamily: 'Anton', 
                                fontSize: 25, color: 'black',
                                pl: '15%',
                                lineHeight: 1}}>
                                    Balfour
                                    Beatty
                                    </Typography>
                            </Box>
                        </Grid>
                        </Grid>

                        <Box sx={{width: '18rem', color: 'rgba(255, 255, 255, 0.7)', 
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <Typography sx={{fontSize: 14}}>Issued by Balfour Beatty</Typography>
                            <Typography sx={{fontSize: 14}}>HW087327</Typography>
                        </Box>
                    </Box>

                    <Box sx={{my: '1rem'}}>
                        <Typography variant="h5" fontWeight={500}>Hot Works Permit</Typography>
                        <Typography sx={{fontSize: 18}}>NHS Southampton University Central Hospital</Typography>                
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box
                            sx={{
                            width: '8rem',
                            height: '1.8rem',
                            bgcolor: '#4caf50',
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mr: '1rem'
                            }}
                            > 
                            <CheckCircleIcon />
                            <Typography
                                sx={{
                                color: 'white',
                                fontSize: 13,
                                alignSelf: 'center',
                                m: '0.5rem',
                                }}
                            >
                                Authorised
                            </Typography>
                        </Box>

                        <Typography 
                            sx={{color: 'rgba(255, 255, 255, 0.7)', fontSize: 14}}>
                            Activates 1 Nov 23 at 09:00
                        </Typography> 
                    </Box>
                    </CardActionArea>
                </Card>
            </Box>

            {/* Expired permits */}
            <Box sx={{m: '2rem'}}>
                <Typography variant="h5"
                    sx={{color: 'rgba(0, 0, 0, 0.6)', fontWeight: 500}}>
                    Expired
                </Typography>

                <Card sx={{bgcolor: '#04535f', color: 'white', borderRadius: 5,
                    my: '1rem', p: '2rem'}}>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                        <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{border: 1, 
                                borderColor: 'white', 
                                borderRadius: '10%',
                                width: 100, 
                                height: 100,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                                }}>
                            <Typography sx={{fontFamily: 'Anton', 
                                fontSize: 25, pl: '15%',
                                lineHeight: 1}}>
                                    Balfour
                                    Beatty
                                    </Typography>
                            </Box>
                        </Grid>
                        </Grid>

                        <Box sx={{width: '18rem', color: 'rgba(255, 255, 255, 0.7)', 
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <Typography sx={{fontSize: 14}}>Issued by Balfour Beatty</Typography>
                            <Typography sx={{fontSize: 14}}>HW087314</Typography>
                        </Box>
                    </Box>

                    <Box sx={{my: '1rem'}}>
                        <Typography variant="h5" fontWeight={500}>Hot Works Permit</Typography>
                        <Typography sx={{fontSize: 18}}>NHS Southampton University Central Hospital</Typography>                
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box
                            sx={{
                            width: '8rem',
                            height: '1.8rem',
                            bgcolor: '#d32f2f',
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mr: '1rem'
                            }}
                            > 
                            <InfoIcon />
                            <Typography
                                sx={{
                                color: 'white',
                                fontSize: 13,
                                alignSelf: 'center',
                                m: '0.5rem',
                                }}
                            >
                                Expired
                            </Typography>
                        </Box>

                    </Box>
                </Card>

            <Card sx={{bgcolor: '#04535f', color: 'white', borderRadius: 5,
                    my: '1rem', p: '2rem'}}>
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                        <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{border: 1, 
                                borderColor: 'white', 
                                borderRadius: '10%',
                                width: 100, 
                                height: 100,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                                }}>
                            <Typography sx={{fontFamily: 'Anton', 
                                fontSize: 25, pl: '15%',
                                lineHeight: 1}}>
                                    Balfour
                                    Beatty
                                    </Typography>
                            </Box>
                        </Grid>
                        </Grid>

                        <Box sx={{width: '18rem', color: 'rgba(255, 255, 255, 0.7)', 
                        display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                            <Typography sx={{fontSize: 14}}>Issued by Balfour Beatty</Typography>
                            <Typography sx={{fontSize: 14}}>HW087309</Typography>
                        </Box>
                    </Box>

                    <Box sx={{my: '1rem'}}>
                        <Typography variant="h5" fontWeight={500}>Hot Works Permit</Typography>
                        <Typography sx={{fontSize: 18}}>NHS Southampton University Central Hospital</Typography>                
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <Box
                            sx={{
                            width: '8rem',
                            height: '1.8rem',
                            bgcolor: '#d32f2f',
                            borderRadius: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mr: '1rem'
                            }}
                            > 
                            <InfoIcon />
                            <Typography
                                sx={{
                                color: 'white',
                                fontSize: 13,
                                alignSelf: 'center',
                                m: '0.5rem',
                                }}
                            >
                                Expired
                            </Typography>
                        </Box>

                    </Box>
                </Card>
            </Box>

        </Box>

    </Card>
                
    )
    }