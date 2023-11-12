import { Box, Typography } from '@mui/material'

const TodoTag = () => {
  return (
    <Box
      sx={{
        width: '4rem',
        height: '1.8rem',
        bgcolor: '#fef1e6',
        borderRadius: '10',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          color: '#ed6c02',
          fontSize: 14,
          alignSelf: 'center',
          m: '0.5rem',
        }}
      >
        To do
      </Typography>
    </Box>
  )
}

export default TodoTag
