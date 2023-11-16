import { Alert, Box, Button, Card, CardActionArea, Drawer, Paper, Snackbar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import PermitToolBar from "../common/PermitToolBar";
import { PreAuthStatusTag } from "../common/PermitStatusTags";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TodoTag from "../common/TodoTag";
import PermitDetails from "./PermitDetails";
import SideBar from "../common/SideBar";
import AuthHotWorks from "./AuthHotWorks";
import PermitView from "./PermitView";

export default function HWPermitOverview() {

const navigate = useNavigate()

// Show and hide lists
const [showOverview, setShowOverview] = useState(true)
const [showTaskList, setShowTaskList] = useState(true)
const [showCompletionSignOff, setShowCompletionSignOff] = useState(true)

// Manage Permit Overview
const [openPermitView, setOpenPermitView] = useState(false)
const handleOpenPermitView = () => {
    setOpenPermitView(true)
    setOpenPermitDetails(false)
    setOpenAuthHotWorks(false)
}

// Manage permit details sidebar.
const [openPermitDetails, setOpenPermitDetails] = useState(true)
const handleOpenPermitDetails = () => {
    setOpenPermitDetails(true)
    setOpenPermitView(false)
    setOpenAuthHotWorks(false)
}
const handleClosePermitDetails = () => {
    setOpenPermitDetails(false)
}

// Manage Authorise Permit Details
const [openAuthHotWorks, setOpenAuthHotWorks] = useState(false)
const handleOpenAuthHotWorks = () => {
    setOpenAuthHotWorks(true)
    setOpenPermitDetails(false)
    setOpenPermitView(false)
}
const handleCloseAuthHotWorks = () => {
    setOpenAuthHotWorks(false)
}


const [showAuthMsg, setShowAuthMsg] = useState(false)
const handleShowPermitAuthorisedMsg = () => {
    setShowAuthMsg(true)
}
const handleClosePermitAuthorisedMsg = (event, reason) => {   
    setShowAuthMsg(false) 
}

return (
    
<Box sx={{width: '100%'}}> 

{/* Toolbar */}
<PermitToolBar />

{/* <SideBar /> */}

<Box sx={{bgcolor: '#f1f3f3', display: 'flex'}}>
    
<Box sx={{bgcolor: '#f1f3f3', pb: '3rem', width: '80%'}}>
    <Button 
    onClick={() => navigate('/permits')}
    variant="contained" disableElevation={true}
    sx={{color: '#00a4a9', bgcolor: '#f1f3f3', m: '2rem', mb: 0}}
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
                <Typography variant='h5'  sx={{fontWeight: 500}}>Hot Works Permit</Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>Section 5, Hospital Block A</Typography>
            </Box>
        </Box>

        <PreAuthStatusTag sx={{display: 'flex', alignSelf: 'flex-end'}} />    
    </Box>

        {/* Permit overview */}
    <Box sx={{bgcolor: '#f1f3f3', m: '2rem'}}>
        <Typography>Details</Typography>
        <Card sx={{p: 0, my: '1rem', bgcolor: 'white'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', m: '1rem',
                pt: '1rem', pl: '1rem'}}>
                    Overview</Typography> 
                <Button onClick={() => setShowOverview(prev => !prev)}
                        disableRipple
                        sx={{mx: '1rem'}}>
                    <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />      
                </Button>
            </Box>
            
    {showOverview && 
        <Box>
            <Card elevation={0} sx={{display: 'flex', flexDirection: 'row', 
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <CardActionArea onClick={handleOpenPermitView}
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>  
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', m: '1rem', mx: '2rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}><WhatshotIcon /></Box>
                    <Typography sx={{my: '1rem'}}>View Hot Works Permit</Typography>                
                </CardActionArea>

            </Card>

            <Card elevation={0} sx={{
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <CardActionArea onClick={handleOpenPermitDetails}
                        sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', mx: '2rem', my: '1rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}><NewspaperIcon /></Box>
                    <Typography sx={{my: '1rem'}}>Permit Details</Typography>
                </CardActionArea>
            </Card>
            
            <Card elevation={0} sx={{display: 'flex', flexDirection: 'row', 
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                    bgcolor: '#04535f', color: 'white', mx: '2rem', mt: '1rem', mb: '2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}></Box>
                <Typography sx={{my: '1rem'}}>Golden Thread Timeline</Typography>
            </Card>
        </Box>
    }
            </Card>
        </Box>



            {/* Task list */}
        <Box sx={{bgcolor: '#f1f3f3', m: '2rem'}}>
            <Typography>Task list</Typography>
            <Card sx={{p: 0, my: '1rem', bgcolor: 'white'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', p: '2rem', pb: '1rem'}}>
                        Pre-authorisation tasks - 0 completed</Typography> 
                    <Button onClick={() => setShowTaskList(prev => !prev)}
                        disableRipple
                        sx={{mx: '1rem'}}>
                        <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />      
                    </Button>
                </Box>

        {showTaskList && 
            <Box>
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
                            <Typography>Operator Signature</Typography>
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
                            <Typography>Supervisor Signature</Typography>
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
                            <Typography>Issuer Signature</Typography>
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
                            <Typography>Risk Assessment</Typography>
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
                            <Typography>Precaution Checklist</Typography>
                            <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                            Assigned to Jan Goldstein</Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                        <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
                </Box>


                <Card elevation={0} sx={{px: '1rem', 
                    "&:hover": {
                        bgcolor: "#f1f3f3"}
                    }}>            
                    <CardActionArea onClick={handleOpenAuthHotWorks}
                        sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                            bgcolor: '#04535f', color: 'white', m: '1rem', display: 'flex', 
                            alignItems: 'center', justifyContent: 'center',
                            }}><TaskAltIcon /></Box>

                        <Box sx={{my: '0.5rem'}}>
                            <Typography>Authorise Hot Works</Typography>
                            <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                            Assigned to Francis Golder (Me)</Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                        <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
                    </CardActionArea>
                </Card>
            </Box>
        }


                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', p: '2rem', pb: '1rem'}}>
                    Completion & cancellation - 0 completed</Typography> 
                    <Button onClick={() => setShowCompletionSignOff(prev => !prev)}
                        disableRipple
                        sx={{mx: '1rem'}}>
                        <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} />      
                    </Button>
                </Box>

        {showCompletionSignOff &&
            <Box>
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
                            <Typography>Operator Sign-off</Typography>
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
                            <Typography>Fire Safety Sign-off</Typography>
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
                            <Typography>Issuer Sign-off</Typography>
                            <Typography fontSize={14} sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>
                            Assigned to Francis Golder (Me)</Typography>
                        </Box>
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center', pr: '1rem'}}>
                        <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
                </Box>    
            </Box>
        }
            
            </Card>
        </Box>

    </Box>

        {/* Permit details */}
        {openPermitDetails && 
            <Paper sx={{width: '40%'}}>
                <PermitDetails setOpenPermitDetails={setOpenPermitDetails} />    
            </Paper>
        }

        {/* Permit Authorisation */}
        {openAuthHotWorks && 
            <Paper sx={{width: '40%'}}>
                <AuthHotWorks 
                    setOpenAuthHotWorks={setOpenAuthHotWorks} 
                    setShowAuthMsg={setShowAuthMsg}
                    setOpenPermitView={setOpenPermitView}
                />
            </Paper>
        }

        {/* Hot Works Permit */}
        {openPermitView &&
            <Paper sx={{width: '40%'}}>
                <PermitView setOpenPermitView={setOpenPermitView} />
            </Paper>
        }
    
</Box>




    <Box>
        <Snackbar open={showAuthMsg} autoHideDuration={6000} onClose={handleClosePermitAuthorisedMsg}>
            <Alert onClose={handleClosePermitAuthorisedMsg} severity='success'
                sx={{width: '30rem', mb: '4rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                Hot Works Permit #HW087327 authorisation completed. 
                Permit has been digitally issued in the mobile app to all 
                people assigned to the permit.
            </Alert>
        </Snackbar>

        <Snackbar open={showAuthMsg} autoHideDuration={6000} onClose={handleClosePermitAuthorisedMsg}>
            <Alert onClose={handleClosePermitAuthorisedMsg} severity='info'
                sx={{width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                Immutable record created
            </Alert>
        </Snackbar>
        
    </Box>
    
</Box>
)
}