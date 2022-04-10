//image size is not nice
import React from 'react'
import { Typography,Grid, Paper, Divider } from '@mui/material'

import manoimage from '../images/manoimage.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Avatar } from '@mui/material'
import { Button, Box } from '@mui/material'
import ciulogo from '../images/ciulogo.png'
console.log(manoimage)
//adding my image next to the background
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height:250,
    borderRadius:"10px",
   
    color: theme.palette.text.secondary,
  }));
  const prefix = '/manoomogha';
  const path = '/manoomogha'
export default function Intro() {
    return (
        <div style={{
            position: "absolute",
            width: "100%",
            top: 70,
        }}>


            <div style={{ width: "80%", margin: "auto" }}>

                <Typography variant='h2' sx={{ color: "#08295e", fontWeight: "bold", display: { xs: "none", md: "flex" } }}>Oghenemano Omogha</Typography>
                <Typography variant='h5' sx={{ color: "#08295e", fontWeight: "bold", display: { xs: "flex", md: "none" } }}>Oghenemano Omogha</Typography>
                <Typography variant='inherit' sx={{ color: "#08295e", fontWeight: "bold", mr: 16 }}>Information Systems Engineer</Typography>
                <br></br>
                <Box sx={{width:"100%"}}>


                <Typography paragraph sx={{ color: "#08295e", width:{xs:"60%", md:"40%"} }}>I’m a Informatiom System Engineer in frontend and backend
                    development for complex web apps. I write and code software
                    development on my blog. Want to know how I may help your
                    project? Check out my project portfolio and online resume  
 
                      
                    </Typography>
                    <Box sx={{width:{xs:"35%",md:"30%"}, position:"absolute", right:{xs:"5%", md:"11%"}, top:{xs:"2%",md:"2%"},  height: {xs:"10%", md:"30%"}}} >
                        {/* fix image size mano */}
                        <Image alt="mano image" style={{borderRadius:"50%"}} layout="fill" src={prefix + '/manoomogha/_next/static/media/manoimage.916918bb.jpeg'}></Image>
                    </Box>
                  
                </Box>
            
                    
                    
                 
                    <Box sx={{width:"100%"}}>

                    <Button variant='outlined' href="/portfolio" sx={{borderRadius:"10px",  color:"#08295e",fontSize:{xs:"0.6em", md:"0.7em"}, textTransform:"none"}}> View Portfolio</Button>
                    <Button variant='outlined' sx={{borderRadius:"10px",  ml:{xs:1, md:5}, color:"#08295e", fontSize:{xs:"0.6em", md:"0.7em"}, textTransform:"none"}}> View Resume</Button>
                    </Box>

            </div>
            <br></br>
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          
          marginLeft:{xs:6,md:16},
       
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
            border: "1px solid #08295e"
          },
        }}
      >
            <Divider orientation="vertical"  flexItem />
             <Typography variant='body1' sx={{color:"#08295e", fontWeight:"bold"}}> What I do</Typography>
      </Box>
      <br></br>
      <Box sx={{ width: "80%", margin: "auto" }}>
          {/* put a link color here */}
          <Typography paragraph sx={{ color: "#https://www.youtube.com/embed/QdSHUwtEBN4", width:{xs:"100%", md:"60%"} }}>I have 4 years experience of coding and developing website for clients all over the world. Below is aquick overview of my main technical skills and technologies I use.Want to find out more about my experience? Check out my <Link href= {path + ''} > online resume</Link>  and <Link href='' > project portfolio.</Link> </Typography>
      </Box>
   

        {/*     <Paper elevation={1} variant="outlined" sx={{ height: 300, width: "90%", background: "#F8F8F8" }} >
            </Paper> */}
            <Box sx={{ width: "50%", margin: "auto" }}>
                <Button size="large" sx={{borderRadius:"8px",background:"#08295e", fontSize:{xs:"0.6em", md:"0.7em"}}} variant='contained'>Service and Pricing </Button>
            </Box>
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          
          marginLeft:{xs:6,md:16},
       
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
            border: "1px solid #08295e"
          },
        }}
      >
            <Divider orientation="vertical"  flexItem />
            <br></br><br></br>
            <Typography variant='body1' sx={{color:"#08295e", fontWeight:"bold"}}> Featured Projects</Typography>
            </Box>
            <Box sx={{ width: "80%", margin: "auto" }}>
                <br></br>
            <Typography paragraph sx={{color:"#08295e", }}> Below are my various projects</Typography>
                <Paper elevation={2} sx={{width:"20%"}}>
                    <Box sx={{width:"20%", height:"20%"}}>

                    <Image alt="ciu logo" src={ciulogo}>

                    </Image>
                    </Box>
                    <Typography variant="body1"> Ciu Bus Tracking System</Typography>

                 

                </Paper>

            </Box>
            <br></br><br></br>
            <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          
          marginLeft:{xs:6,md:16},
       
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
            border: "1px solid #08295e"
          },
        }}
      >
            <Divider orientation="vertical"  flexItem />
             <Typography variant='body1' sx={{color:"#08295e", fontWeight:"bold"}}> Latest Blog Post</Typography>
            
      </Box>
      <br></br><br></br>
      <div>
          {/* blog informatiom */}

      <Box  sx={{ width: "80%", margin: "auto" }}>


      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid item xs={6}>
    <Item  >    <iframe style={{width:"100%", border:"none", height:"100%"}} src="https://www.youtube.com/embed/KRtLZF-xlAs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    
    </iframe></Item>
  </Grid>
  <Grid item xs={6}>
  <Item>  <iframe style={{width:"100%", height:"100%"}} src="https://www.youtube.com/embed/1990FAGnlpg"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    
    </iframe></Item>
  </Grid>
  <Grid item xs={6}>
  <Item>  <iframe style={{width:"100%",  height:"100%"}} src="https://www.youtube.com/embed/QdSHUwtEBN4"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    
    </iframe></Item>
  </Grid>
  <Grid item xs={6}>
  <Item> 
    <iframe style={{width:"100%", height:"100%"}} src="https://www.youtube.com/embed/sfEngoEggOQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe></Item>
  </Grid>
</Grid>
      </Box>
      </div>
          
        </div>
    )
}
