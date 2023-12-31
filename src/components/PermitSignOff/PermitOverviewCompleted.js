import { Alert, Box, Button, Card, CardActionArea, 
        Paper, Snackbar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import TodoTag from "../common/TodoTag";
import DoneTag from "../common/DoneTag";
import { ReadyPermitTag, CompletedPermitTag } from "../common/PermitStatusTags";
import PermitDetails from "../Permit/PermitDetails";
import SideBar from "../common/SideBar";
import AuthHotWorks from "../Permit/AuthHotWorks";
import PermitViewCompleted from "./PermitViewCompleted";
import IssuerSignOff from "./IssuerSignOff";
import GoldenThreadTimeline from "./GoldenThreadTimeline";

export default function PermitOverviewCompleted() {

const navigate = useNavigate()

// Show and hide lists
const [showOverview, setShowOverview] = useState(true)
const [showTaskList, setShowTaskList] = useState(false)
const [showCompletionSignOff, setShowCompletionSignOff] = useState(true)

// Manage authorised tag.
const [permitAuthorised, setPermitAuthorised] = useState(false)
const [success, setSuccess] = useState(false)

// Manage Permit Overview
const [openPermitViewCompleted, setOpenPermitViewCompleted] = useState(true)
const handleOpenPermitViewCompleted = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setOpenPermitViewCompleted(true)
    setOpenPermitDetails(false)
    setOpenAuthHotWorks(false)    
    setOpenGoldenTimeline(false)
    setOpenIssuerSignOff(false)
}

// Manage permit details sidebar.
const [openPermitDetails, setOpenPermitDetails] = useState(false)
const handleOpenPermitDetails = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setOpenPermitDetails(true)
    setOpenPermitViewCompleted(false)
    setOpenGoldenTimeline(false)
    setOpenIssuerSignOff(false)
    handleCloseAuthHotWorks()
}

// Manage Authorise Permit Details
const [openAuthHotWorks, setOpenAuthHotWorks] = useState(false)
const handleOpenAuthHotWorks = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setOpenAuthHotWorks(true)
    setOpenPermitDetails(false)
    setOpenPermitViewCompleted(false)
    setOpenGoldenTimeline(false)
}
const handleCloseAuthHotWorks = () => {
    setOpenAuthHotWorks(false)
}

// Manage Issuer Sign Off
const [openIssuerSignOff, setOpenIssuerSignOff] = useState(false)
const handleOpenIssuerSignOff = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setOpenIssuerSignOff(true)
    setOpenPermitDetails(false)
    setOpenPermitViewCompleted(false)
    setOpenGoldenTimeline(false)
}
const handleCloseIssuerSignOff= () =>{
    setOpenIssuerSignOff(false)
}

// Manage Golden Thread Timeline
const [openGoldenTimeline, setOpenGoldenTimeline] = useState(false)
const handleOpenGoldenTimeline = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
    setOpenGoldenTimeline(true)
    setOpenPermitDetails(false)
    setOpenPermitViewCompleted(false)
    handleCloseIssuerSignOff()
}

// Manage authorised message
const [showAuthMsg, setShowAuthMsg] = useState(false)


// Manage notification to user - permit completed
const [showCompleteMsg, setShowCompleteMsg] = useState(false)
const handleCloseCompleteMsg = () => {
    setShowCompleteMsg(false)
}


return (
    
<Box overflow='auto' sx={{width: '100%'}}> 

<SideBar />

<Box sx={{bgcolor: '#f1f3f3', ml: '4rem', mt: '6rem',
    display: 'flex', justifyContent: 'center'}}>
    
<Box sx={{bgcolor: '#f1f3f3', pb: '3rem', width: '80%'}}>
    <Button 
    onClick={() => navigate('/finalpermits')}
    variant="contained" disableElevation={true}
    sx={{color: '#00a4a9', bgcolor: '#f1f3f3', m: '2rem', mb: 0,
    "&:hover": {
        fontWeight: 'bold',
        bgcolor: '#f1f3f3',
        color: "#04535f"}
    }}
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

            <Box sx={{my: '1rem', mx: '2rem'}}>
                <Typography variant='h5'  sx={{fontWeight: 500}}>Hot Works Permit</Typography>
                <Typography sx={{color: 'rgba(0, 0, 0, 0.6)', my: '0.5rem'}}>Section 5, Hospital Block A</Typography>
            </Box>
        </Box>

    {!success 
        ? <ReadyPermitTag sx={{display: 'flex', alignSelf: 'flex-end'}} />
        : <CompletedPermitTag sx={{}} />
    }
    
           
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
                {showOverview 
                ? <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> 
                : <KeyboardArrowRightRoundedIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> }
                </Button>
            </Box>
            
    {showOverview && 
        <Box sx={{ pb: 2 }}>
            <Card elevation={0} sx={{display: 'flex', flexDirection: 'row',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <CardActionArea onClick={handleOpenPermitViewCompleted}
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
            
            <Card elevation={0} sx={{
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <CardActionArea onClick={handleOpenGoldenTimeline} 
                sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Box sx={{width: '2rem', height: '2rem', borderRadius: '10%', 
                        bgcolor: '#04535f', color: 'white', mx: '2rem', my: '1rem', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}></Box>
                    <Typography sx={{my: '1rem'}}>Golden Thread Timeline</Typography>    
                </CardActionArea>
                
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
                {showTaskList 
                ? <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> 
                : <KeyboardArrowRightRoundedIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> }    
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
            {showCompletionSignOff 
            ? <KeyboardArrowDownIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> 
            : <KeyboardArrowRightRoundedIcon sx={{color: 'rgba(0, 0, 0, 0.6)'}} /> }  
            </Button>
        </Box>

    {showCompletionSignOff &&
        <Box sx={{ pb: 2 }}>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
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
                    <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} /></Box>
            </Box>

            <Card elevation={0} sx={{px: '1rem',
                "&:hover": {
                    bgcolor: "#f1f3f3"}
                }}>
                <CardActionArea onClick={handleOpenIssuerSignOff}
                    sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
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
                {!success 
                ? <TodoTag sx={{display: 'flex', alignSelf: 'flex-end'}} />
                : <DoneTag sx={{display: 'flex', alignSelf: 'flex-end'}} />}
                </Box>

                </CardActionArea>
            </Card>    
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
                    setOpenPermitViewCompleted={setOpenPermitViewCompleted}
                    setPermitAuthorised={setPermitAuthorised}
                />
            </Paper>
        }

        {/* Hot Works Permit */}
        {openPermitViewCompleted &&
            <Paper sx={{width: '40%'}}>
                <PermitViewCompleted setOpenPermitViewCompleted={setOpenPermitViewCompleted} />
            </Paper>
        }
    
        {/* Permit Issuer Sign Off */}
        {openIssuerSignOff && 
            <Paper sx={{width: '40%'}}>
                <IssuerSignOff 
                    setOpenIssuerSignOff={setOpenIssuerSignOff}
                    setOpenGoldenTimeline={setOpenGoldenTimeline} 
                    setShowCompleteMsg={setShowCompleteMsg} 
                    setSuccess={setSuccess} />
            </Paper>
        }

        {/* Golden Thread Timeline */}
        {openGoldenTimeline && 
            <Paper sx={{width: '40%'}}>
                <GoldenThreadTimeline 
                setOpenGoldenTimeline={setOpenGoldenTimeline} />
            </Paper>
        }
</Box>
    

{/* Notifications that permit has been completed */}
<Box>
        <Snackbar open={showCompleteMsg} autoHideDuration={6000} onClose={handleCloseCompleteMsg}>
            <Alert onClose={handleCloseCompleteMsg} severity='success'
                sx={{width: '30rem', mb: '4rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                Hot Works Permit #HW087327 is now completed.
            </Alert>
        </Snackbar>

        <Snackbar open={showCompleteMsg} autoHideDuration={6000} onClose={handleCloseCompleteMsg}>
            <Alert onClose={handleCloseCompleteMsg} severity='info'
                sx={{width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)"}}>
                Immutable record created
            </Alert>
        </Snackbar>
        
    </Box>

</Box>
)
}