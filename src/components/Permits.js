import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import {
	Alert, Box, Button, Card, CardActionArea, CardContent, Dialog, DialogActions,
	DialogContent, DialogTitle, FormControl, 
	InputAdornment, List, ListItem, ListItemIcon, MenuItem, Snackbar, TextField,
	Typography
} from "@mui/material";
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SideBar from './common/SideBar';
import {
	ActivePermitTag, EmergingIssuesStatusTag,
	CompletedStatusTag, AuthorisedStatusTag, PreAuthStatusTag
} from './common/PermitStatusTags'


export default function Permits({ permits, permitCreated, setPermitCreated, workers }) {

	const navigate = useNavigate()

	const [filter, setFilter] = useState('')
	const handleFilter = (e) => {
		setFilter(e.target.value)
		console.log('*** FILTER ***', e.target.value)
	}

	// Start new permit
	const [permitType, setPermitType] = useState('')
	const handlePermitType = (e) => {
		setPermitType(e.target.value)
	}

	const [open, setOpen] = useState(false)
	const handleOnClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	// Manage snackbars confirming successful creation of permit
	const handleClosePermitSuccess = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setPermitCreated(false)
	}

	const handleCloseImmutableMsg = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setPermitCreated(false)
	}

	const navigateAway = () => {
		handleCloseImmutableMsg()
		handleClosePermitSuccess()
		navigate('/hwpermitoverview')
	}

return (
<Box overflow='auto'>

	<SideBar />

	<Box sx={{py: 5, pl: 15, pr: 10, mt: '6rem', bgcolor: '#f1f3f3',
		display: 'flex', flexDirection: 'column', alignItems: 'center',
		minHeight: '100vh'
		}}>
		<Box sx={{width: '96%'}}>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
				<Typography variant='h6' sx={{ fontWeight: 500, mb: '1rem' }}>Manage 37 permits issued on this project</Typography>

				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '3rem' }}>
					<Button variant="contained" 
						size='medium'
						sx={{bgcolor: '#00a4a9', m: 1, 
						"&:hover": {
							bgcolor: "#008488"}
						}}>
						<Typography sx={{ fontWeight: 500 }}>
						MANAGE TEMPLATES</Typography>
					</Button>
					<Button variant="contained" size='medium'
						endIcon={<AddRoundedIcon />} disableRipple
						onClick={handleOnClickOpen} 
						sx={{
						bgcolor: '#00a4a9', m: 1,
						"&:hover": {
							bgcolor: "#008488"}
						}}>
						<Typography sx={{fontWeight: 500 }}>
						NEW PERMIT</Typography>
						</Button>

				</Box>
			</Box>


			{/* Search permits */}
			<Box sx={{ display: 'flex' }}>
			<FormControl variant="outlined" size="small" 
				sx={{ width: '30rem', my: 2 }}>
				<TextField
				size="small"
				sx={{
					"& label.Mui-focused": {
					  color: "#00a4a9"
					},
					"& .MuiOutlinedInput-root": {
					"&.Mui-focused fieldset": {
					  borderColor: "#00a4a9"
					}
				  }
				}}
				InputLabelProps={{ style: { ml: '10rem' }}}
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<SearchIcon />
					</InputAdornment>
					),
				}}
				label="Search permits"
				placeholder="Enter your search query"
				/>
			</FormControl>

			{(filter === 'Date') &&
				<Box>
				<FormControl required
					size='small'
					sx={{
						display: 'block',
						m: 2, justifyContent: 'center',
						"& label.Mui-focused": {
						  color: "#04535f"
						},
						"& .MuiOutlinedInput-root": {
						"&.Mui-focused fieldset": {
						  borderColor: "#04535f"
						}
					  }
					}}>
					<TextField
						select
						label={
							<Box
								sx={{ display: 'flex', alignItems: 'center' }}>
								<DateRangeIcon sx={{ mr: '1rem' }} />Today</ Box>}
						size='small'
						sx={{ width: '10rem' }}
					>
						<MenuItem value='Date'>Date</MenuItem>
					</TextField>

					<Button onClick={() => setFilter('')}>
						<CloseIcon sx={{ fontSize: 30, color: 'rgba(0, 0, 0, 0.54)' }} />
					</Button>

					</FormControl>
				</Box>
			}

			<FormControl
				sx={{display: 'block',
				m: 2, justifyContent: 'center'}}>
				<TextField
					select
					value=''
					onChange={handleFilter}
					SelectProps={{ IconComponent: () => null }}
					label={
						<Box
							sx={{ display: 'flex', alignItems: 'center' }}>
							<FilterListIcon sx={{ mr: '1rem' }} />Add filters</ Box>}
					size='small'
					sx={{ width: '10rem',
						"& label.Mui-focused": {
						color: "#00a4a9"
						},
						"& .MuiOutlinedInput-root": {
						"&.Mui-focused fieldset": {
						borderColor: "#00a4a9"
						}
						} 
					}}
				>
					<MenuItem value='Date'>Date</MenuItem>
					<MenuItem value='Type'>Type</MenuItem>
					<MenuItem value='Supplier'>Supplier</MenuItem>
					<MenuItem value='Created by'>Created by</MenuItem>
				</TextField>
			</FormControl>
			</Box>
		</Box>


			{/* Pop out. 
		User is taken to the permit template page of the 
		type they select. */}

		<Dialog keepMounted open={open} onClose={handleClose}
			sx={{ display: 'flex', flexDirection: 'column', width: '35rem', margin: 'auto' }}>
		<DialogTitle variant='h5'>New Permit</DialogTitle>
		<DialogContent sx={{width: '30rem'}}>Create temporary permits for suppliers and people assigned to this
				project.
		</DialogContent>
		<DialogActions sx={{display: 'flex', flexDirection: 'column', 
			mb: '0.5rem', px: '24px'}}>
			<FormControl size='small' sx={{ width: '100%'}}>
				<TextField
					select
					value={permitType}
					label='Select a permit template'
					onChange={handlePermitType}
					size='small'
					sx={{
						"& label.Mui-focused": {
						  color: "#00a4a9"
						},
						"& .MuiOutlinedInput-root": {
						"&.Mui-focused fieldset": {
						  borderColor: "#00a4a9"
						}
					  }
					}}
				>
					<MenuItem value='Hot Works'>Hot Works</MenuItem>
					<MenuItem value='Electrical'>Electrical</MenuItem>
					<MenuItem value='Working at Height'>Working at Height</MenuItem>
				</TextField>
			</FormControl>

			<Box sx={{ display: 'flex', alignSelf: 'flex-end', mt: '2rem' }}>
			<Button variant="text" size='medium'
				sx={{color: '#00a4a9', 
				mx: 1, 
				"&:hover": {
					color: "#008488"}}}>
				<Typography sx={{fontWeight: 500}}>
					CANCEL</Typography>
			</Button>
				<Button variant="contained" size='medium' 
					endIcon={<ArrowForwardIosIcon />}
					onClick={() =>
						permitType === 'Hot Works' && navigate('/hotworkstemplate')}
					sx={{bgcolor: '#00a4a9', 
						"&:hover": {
							bgcolor: "#008488"
						},
						'& .MuiButton-endIcon': {
							transform: 'scale(0.7)',
							ml: 0,
							p:0, 
						}
					}}>
					<Typography sx={{ fontWeight: 500 }}>
						START</Typography> 
					</Button>
			</Box>

		</DialogActions>
		</Dialog>


		{/* List of permits */}
		<Box sx={{
			display: 'flex', flexWrap: 'wrap', gap: '2rem',
			justifyContent: 'center', mt: '1rem'
		}}>

		{(filter === 'Date') && permits.filter((permit) => permit.expiresAt.includes('Today')).map((permit) => (
			<Card sx={{ width: '25rem', display: 'flex' }}>
			<CardContent sx={{ p: 0, width: '100%',
				'&:last-child': {
					'padding-bottom': 0}   
				}}>
				<CardActionArea onClick={navigateAway}>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<Box sx={{
						width: '8rem', height: '8rem',
						display: 'flex', justifyContent: 'center', alignItems: 'center',
						bgcolor: '#04535f', color: '#ffffff'
					}}>
						{permit.supplierType === 'company'
							? <ApartmentIcon sx={{ width: '2rem', height: '2rem' }} />
							: <PersonIcon sx={{ width: '2rem', height: '2rem' }} />}
					</Box>

					<List sx={{ pt: 1, pb: 0 }}>
						<ListItem>
							<ListItemIcon style={{ fill: '#04535f', minWidth: 38 }}>
								{permit.type === 'Hot Works' && <WhatshotIcon style={{ fill: '#04535f' }} />}
								{permit.type === 'Working at Height' && <LandscapeIcon style={{ fill: '#04535f' }} />}
								{permit.type === 'Electrical' && <ElectricBoltIcon style={{ fill: '#04535f' }} />}
							</ListItemIcon>
							<Typography sx={{ color: '#04535f', fontSize: 12 }}>{permit.type}</Typography>
						</ListItem>

						<ListItem>
							<Typography>{permit.supplier}</Typography>
						</ListItem>

						<ListItem>
							<Typography sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12 }}>Created by: {permit.createdBy}</Typography>
						</ListItem>
					</List>
				</Box>

			<Divider />

				<Box sx={{
					display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12,
					alignItems: 'center', flexDirection: 'row', pl: '1rem', py: '1rem'
				}}>
					{permit.status === 'Active' && <ActivePermitTag />}
					{permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
					{permit.status === 'Completed' && <CompletedStatusTag />}
					{permit.status === 'Authorised' && <AuthorisedStatusTag />}
					{permit.status === 'Pre-authorisation' && <PreAuthStatusTag />}

					<Box sx={{
						mx: '1rem', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12,
						display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'
					}}>
						{permit.expiresAt.length > 0 && permit.expiresAt}
						{permit.activatesAt.length > 0 && permit.activatesAt}
					</Box>
				</Box>
				</CardActionArea>
			</CardContent>
			</Card>
		))}


		{(filter !== 'Date') && permits.map((permit) => (
			<Card sx={{ width: '30%', display: 'flex' }}>
				<CardContent sx={{p: 0, width: '100%',
				'&:last-child': {
					'padding-bottom': 0}  
					}}>
				<CardActionArea onClick={navigateAway}>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Box 
						// sx={{
						// 	width: '8rem', height: '8rem',
						// 	display: 'flex', justifyContent: 'center', alignItems: 'center',
						// 	bgcolor: '#04535f', color: '#ffffff'
						// }}
						sx={(theme) => ({
							width: '8rem', height: '8rem',
							display: 'flex', justifyContent: 'center', alignItems: 'center',
							bgcolor: '#04535f', color: '#ffffff',
							alignSelf: 'center',
							[theme.breakpoints.down("lg")]: {
							width: '7rem', height: '7rem',
							display: 'flex', alignSelf: 'center',
							alignItems: 'center', flexDirection: 'row', 
							fontSize: 12
							 },
							  
						})}>
							{permit.supplierType === 'company'
								? <ApartmentIcon sx={{ width: '2rem', height: '2rem' }} />
								: <PersonIcon sx={{ width: '2rem', height: '2rem' }} />}
						</Box>

						<List sx={{ pt: 1, pb: 0 }}>
							<ListItem 
								sx={(theme) => ({
									[theme.breakpoints.down("lg")]: {py: 0}
								})
								}>
								<ListItemIcon style={{ fill: '#04535f', minWidth: 38 }}>
									{permit.type === 'Hot Works' && <WhatshotIcon style={{ fill: '#04535f' }} />}
									{permit.type === 'Working at Height' && <LandscapeIcon style={{ fill: '#04535f' }} />}
									{permit.type === 'Electrical' && <ElectricBoltIcon style={{ fill: '#04535f' }} />}
								</ListItemIcon>
								<Typography sx={{ color: '#04535f', fontSize: 12 }}>{permit.type}</Typography>
							</ListItem>

							<ListItem>
								<Typography 
								sx={(theme) => ({
									fontSize: 16,
									[theme.breakpoints.down("md")]: 
										{fontSize: 14},
										p: 0
								})}
								>
								{permit.supplier}</Typography>
							</ListItem>

							<ListItem>
								<Typography 
								sx={(theme) => ({
									color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, 
									[theme.breakpoints.down("lg")]: {py: 0}
								})
								}
								>Created by: {permit.createdBy}</Typography>
							</ListItem>
						</List>
					</Box>

			<Divider />

				<Box 
				sx={(theme) => ({
					alignSelf: 'center',
					[theme.breakpoints.up("lg")]: {
					display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12,
					alignItems: 'center', flexDirection: 'row', pl: '1rem', py: '1rem', 
					 },
					
					 [theme.breakpoints.down("lg")]: {
						display: 'flex', color: 'rgba(0, 0, 0, 0.6)', fontSize: 12,
						alignItems: 'center', flexDirection: 'column', py: '0.5rem', 
					},
				  	
				})}
				>
					{permit.status === 'Active' && <ActivePermitTag />}
					{permit.status === 'Emerging issues' && <EmergingIssuesStatusTag />}
					{permit.status === 'Completed' && <CompletedStatusTag />}
					{permit.status === 'Authorised' && <AuthorisedStatusTag />}
					{permit.status === 'Pre-authorisation' && <PreAuthStatusTag />}

					<Box 
					sx={(theme) => ({mx: '1rem',
					[theme.breakpoints.down("lg")]: {
							color: 'red', 
							mt: '0.5rem',
							pb: 0
						},
						
					})
					}
					>
						{permit.expiresAt.length > 0 && permit.expiresAt}
						{permit.activatesAt.length > 0 && permit.activatesAt}
					</Box>
				</Box>

				</CardActionArea>
			</CardContent>
			</Card>
		))}
		</Box>

		<Box>
			<Snackbar open={permitCreated} autoHideDuration={6000} elevation={3}
				onClose={handleClosePermitSuccess}>
				<Alert onClose={handleClosePermitSuccess} severity='success'
					sx={{ width: '30rem', mb: '4rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
					Hot Works Permit #HW087327 is created and in pre-authorisation.
				</Alert>
			</Snackbar>
		</Box>

		<Box>
			<Snackbar open={permitCreated} autoHideDuration={6000}
				onClose={handleCloseImmutableMsg}>
				<Alert onClose={handleCloseImmutableMsg} severity='info'
					sx={{ width: '30rem', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}>
					Immutable record created.
				</Alert>
			</Snackbar>
		</Box>

	</Box>

</Box>
)
}