import { Tooltip, Alert } from "@mui/material"

const AlertIcon = () => {

return (
    <Tooltip title='Duration of fire watch'>
    <Alert variant='outlined' severity='info' 
        sx={{borderColor: '#ffffff', 
        '.MuiAlert-icon': {color: '#00a4a9'},
        ml: '0.5rem', px: 1, py: 0 }}
      ></Alert>
    </Tooltip>

    )
}

export default AlertIcon