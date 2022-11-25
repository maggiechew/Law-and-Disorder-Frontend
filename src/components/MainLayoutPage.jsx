import Paper from '@mui/material/Paper'
import React from 'react'

const MainLayoutPage = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        background: 'rgb(0, 11, 112)',
        color: 'white',
        gridRow: '2',
        gridColumn: '1',
      }}
    >
      Law and Disorder Map goes here.
    </Paper>
  )
}

export default MainLayoutPage
