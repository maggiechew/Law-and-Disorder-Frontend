import Paper from '@mui/material/Paper'
import React from 'react'
import Map from './Map'

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
    <Map />
      Law and Disorder Map goes here.
    </Paper>
  )
}

export default MainLayoutPage
