import { Box, Button, Card, Paper, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import PermitToolBar from "../common/PermitToolBar";
import { PreAuthStatusTag } from "../common/PermitStatusTags";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import TodoTag from "../common/TodoTag";
import PermitDetails from "./PermitDetails";

export default function HotWorksPermit() {

const navigate = useNavigate()

return (
    
<Box sx={{width: '100%'}}> 

{/* Toolbar */}
<PermitToolBar />

<Box sx={{bgcolor: '#f1f3f3', display: 'flex'}}>
    
<Box sx={{bgcolor: '#f1f3f3', pb: '3rem', width: '80%'}}>
    <Button 
    onClick={() => navigate('/permits')}
    variant="contained" disableElevation={true}
    sx={{bgcolor:  'white', color: '#00a4a9', bgcolor: '#f1f3f3', m: '2rem', mb: 0}}
    >
    <ArrowBackIosNewIcon fontSize='8' sx={{mr: '1rem'}} />
    <Typography>BACK TO PERMITS</Typography>
    </Button>
    

    {/* Title box */}
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 
        alignItems: 'center', m: '2rem'}}>
        
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Box sx={{width: '7rem', height: '7rem', borderRadius: '10%', 
                bgcolor: '#04535f', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><WhatshotIcon /></Box>  

            <Box sx={{m: '1rem'}}>
                <Typography variant='h6'>Hot Works Permit</Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>Section 5, Hospital Block A</Typography>
            </Box>
        </Box>

        <PreAuthStatusTag sx={{display: 'flex', alignSelf: 'flex-end'}} />    
    </Box>

        {/* Permit overview */}
    <Box sx={{bgcolor: '#f1f3f3', m: '2rem'}}>
        <Typography>Details</Typography>
        <Card sx={{p: 0, my: '1rem', bgcolor: 'white'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', m: '1rem',
            pt: '1rem', pl: '1rem'}}>
                Overview</Typography> 
            {/* DROP DOWN */}

        <Box sx={{display: 'flex', flexDirection: 'row', 
            "&:hover": {
                bgcolor: "#f1f3f3"}
            }}
        >
            <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                bgcolor: '#04535f', color: 'white', m: '1rem', mx: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><WhatshotIcon /></Box>
            <Typography sx={{my: '1rem'}}>View Hot Works Permit</Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'row', 
            "&:hover": {
                bgcolor: "#f1f3f3"}
            }}>
            <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                bgcolor: '#04535f', color: 'white', mx: '2rem', my: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><NewspaperIcon /></Box>
            <Typography sx={{my: '1rem'}}>Permit Details</Typography>
        </Box>
        
        <Box sx={{display: 'flex', flexDirection: 'row', 
            "&:hover": {
                bgcolor: "#f1f3f3"}
            }}>
            <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                bgcolor: '#04535f', color: 'white', mx: '2rem', mt: '1rem', mb: '2rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}></Box>
            <Typography sx={{my: '1rem'}}>Golden Thread Timeline</Typography>
        </Box>

        </Card>
    </Box>


        {/* Task list */}
    <Box sx={{bgcolor: '#f1f3f3', m: '2rem'}}>
        <Typography>Task list</Typography>
        <Card sx={{p: 0, my: '1rem', bgcolor: 'white'}}>
            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', p: '2rem', pb: '1rem'
            // pt: '2rem', pl: '2rem'
            }}>
                Pre-authorisation tasks - 0 completed</Typography> 
            {/* DROP DOWN */}

            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Operator Signature</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                            Assigned to Jan Goldsmith</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Supervisor Signature</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Issuer Signature</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Risk Assessment</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Precaution Checklist</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Jan Goldstein</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>


            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Authorise Hot Works</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>



            <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', p: '2rem', pb: '1rem' 
            }}>
                Completion & cancellation - 0 completed</Typography> 
            {/* DROP DOWN */}

            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Operator Sign-off</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Jan Goldstein</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Fire Safety Sign-off</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', px: '1rem', justifyContent: 'space-between',
             mb: '1rem',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center',
                        }}><TaskAltIcon /></Box>

                    <Box sx={{my: '0.5rem'}}>
                        <Typography fontSize={20}>Issuer Sign-off</Typography>
                        <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                        Assigned to Francis Golder (Me)</Typography>
                    </Box>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                    <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>

        </Card>
    </Box>

</Box>

<Paper sx={{width: '40%'}}>
    {/* Permit details */}
    <PermitDetails />    
</Paper>
    


</Box>

</Box>
)
}