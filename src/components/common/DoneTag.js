import { Box, Typography } from '@mui/material'

const DoneTag = () => {
  return (
    <Box
      sx={{
        width: '4rem',
        height: '1.8rem',
        bgcolor: '#ebf2eb',
        borderRadius: '10',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          color: '#2e7d32',
          fontSize: 14,
          alignSelf: 'center',
          m: '0.5rem',
        }}
      >
        Done
      </Typography>
    </Box>
  )
}

export default DoneTag