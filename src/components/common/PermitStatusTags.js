import { Box, Typography } from "@mui/material"

const ActivePermitTag = () => {

return (
    <>
        <Box
        sx={{
          width: '4rem',
          height: '1.5rem',
          bgcolor: '#4caf50',
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        > 
          <Typography
            sx={{
              color: 'white',
              fontSize: 14,
              alignSelf: 'center',
              m: '0.5rem',
            }}
          >
            Active
          </Typography>
      </Box>
    
    </>
)
}

const EmergingIssuesStatusTag = () => {

return (

        <Box
        sx={{
          width: '10rem',
          height: '1.5rem', 
          bgcolor: '#ed6c02',
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        > 
          <Typography
            sx={{
              color: 'white',
              fontSize: 14,
              alignSelf: 'center',
              m: '0.5rem',
            }}
          >
            Emerging issues (1)
          </Typography>
      </Box>

)
}

const CompletedStatusTag = () => {

return (
  <>
        <Box
        sx={{
          width: '6rem',
          height: '1.5rem',
          bgcolor: '#e0e0e0',
          borderRadius: 50,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        > 
          <Typography
            sx={{
              color: 'rgba(0, 0, 0, 0.87)',
              fontSize: 14,
              alignSelf: 'center',
              m: '0.5rem',
            }}
          >
            Completed
          </Typography>
      </Box>
  </>
)
}

const AuthorisedStatusTag = () => {

  return (
    <>
          <Box
          sx={{
            width: '6rem',
            height: '1.5rem',
            bgcolor: '#ebf2eb',
            borderRadius: 50,
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
              Authorised
            </Typography>
        </Box>
    </>
  )
  }

const PreAuthStatusTag = () => {

return (
    <>
    <Box
    sx={{
      width: '9rem',
      height: '1.5rem',
      bgcolor: 'rgba(255, 153, 69, 0.2)',
      borderRadius: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    > 
      <Typography
        sx={{
          color: '#e65100',
          fontSize: 14,
          alignSelf: 'center',
          m: '0.5rem',
        }}
      >
        Pre-authorisation
      </Typography>
  </Box>
</>
  )
  }

const ReadyPermitTag = () => {

  return (
      <>
          <Box
          sx={{
            width: '10rem',
            height: '1.5rem',
            bgcolor: '#0288d1',
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          > 
            <Typography
              sx={{
                color: 'white',
                fontSize: 14,
                alignSelf: 'center',
                m: '0.5rem',
              }}
            >
              Ready for completion
            </Typography>
        </Box>
      
      </>
  )
  }

const CompletedPermitTag = () => {

  return (
      <>
          <Box
          sx={{
            width: '7rem',
            height: '1.5rem',
            bgcolor: '#e0e0e0',
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          > 
            <Typography
              sx={{
                color: 'rgba(0, 0, 0, 0.87)',
                fontSize: 14,
                alignSelf: 'center',
                m: '0.5rem',
              }}
            >
              Completed
            </Typography>
        </Box>
      
      </>
  )
  }

export { ActivePermitTag, 
  EmergingIssuesStatusTag, 
  CompletedStatusTag, 
  AuthorisedStatusTag, 
  PreAuthStatusTag,
  ReadyPermitTag, 
  CompletedPermitTag }