import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const VerifiedTag = () => {
  return (
    <Box
      sx={{
        width: '5rem',
        height: '1.5rem',
        bgcolor: '#4caf50',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckCircleIcon 
        style={{ fill: 'white', 
          m: '0.5rem', 
          height: '1.2rem' }}></CheckCircleIcon>
      <Typography
        sx={{
          color: 'white',
          fontSize: 12,
          alignSelf: 'center',
          mr: '0.5rem',
        }}
      >
        Verified
      </Typography>
    </Box>
  )
}

export default VerifiedTag
