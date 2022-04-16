import React from 'react'
import Navbar from './Navbar'
import { Box } from '@mui/material'

export default function about() {
  return (
    <Box component="div" sx={{marginTop:{xs:7,md:10}, }}><Navbar/>
    <h1>about loading</h1>
    </Box>
  )
}
