
import * as React from 'react';
import {Typography,Link,Box,SwipeableDrawer, Divider,List,ListItem, ListItemIcon, ListItemText,Toolbar, IconButton, Button, AppBar,Menu,MenuItem} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';


type Anchor = 'top' | 'left' | 'bottom' | 'right';
let path = '/manoomogha'
export default function Homepage() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const toggleDrawer =
  (anchor: Anchor, open: boolean) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    //continue setting state
  };
  const boxlist = (anchor: Anchor) => {
    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
     <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  };
  return (
    <div>
       {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}><AppBar  position='fixed' style={{background:"#08295e"}}>
      <div>
        <Toolbar variant='dense' >

      <IconButton onClick={toggleDrawer(anchor, true)}  sx={{ mr: 2 ,  display: { sm: 'flex', md: 'none', large:"none" }, color:"white"}}>
        <MenuIcon/>
      </IconButton>
      <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
    sx={{ width:  200 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
     <List>
       
     <ListItem button >
       <Link href={path + '/'} style={{textDecoration:"none"}}>
     <IconButton aria-label='Home'  sx={{color:"#08295e", }} >
         <HomeIcon/>
         <Typography sx={{ml:3}}>Home</Typography>

       </IconButton></Link>
          </ListItem>
          <Divider />
              <ListItem button >
           <Link href={path + '/portfolio'}style={{textDecoration:"none"}}>  <IconButton aria-label='Home'   sx={{color:"#08295e", }} >
         <HomeIcon/>
         <Typography sx={{ml:3}}>Portfolio</Typography>

       </IconButton></Link>

              </ListItem>
              <Divider />
                  <ListItem button >
           <Link href="m" style={{textDecoration:"none"}}><IconButton aria-label='Home'  sx={{color:"#08295e", }} >
         <PhoneIcon/>
         <Typography sx={{ml:3}}>Contact</Typography>

       </IconButton></Link>
                  </ListItem>
                  <Divider />
                      <ListItem button >
           <Link href="m" style={{textDecoration:"none"}}>  <IconButton aria-label='Home'  sx={{color:"#08295e", }} >
         <InfoIcon/>
         <Typography sx={{ml:3}}>About</Typography>

       </IconButton></Link>
                      </ListItem>
   
      </List>
     
    </Box>
     
          </SwipeableDrawer>
      <Typography sx={{ml: 7, display: { xs: 'flex', md: 'none', large:"none" },fontSize:{xs:"0.85em"}, }}>Oghenemano Omogha</Typography>
      <Link href="/" style={{marginLeft:"30%"}}>
       <IconButton aria-label='Home'  sx={{mr: 2,  display: { xs: 'none', md: 'flex', large:"flex" }, color:"white"}}>
       
         <Typography>Home</Typography>

       </IconButton>
      </Link>
      <Link href="/portfolio">
       <IconButton aria-label='Home' sx={{ mr: 2,display: { xs: 'none', md: 'flex', large:"flex" }, color:"white"}}>

         <Typography>Portfolio</Typography>

       </IconButton>
      </Link>
      <Link href="/porfolio">
       <IconButton aria-label='Home' sx={{mr: 2, display: { xs: 'none', md: 'flex', large:"flex" }, color:"white"}}>
       
         <Typography>Contact</Typography>

       </IconButton>
      </Link>
 
      <Link href="/porfolio">
       <IconButton aria-label='Home' sx={{ mr: 2, display: { xs: 'none', md: 'flex', large:"flex" },color:"white"}}>
         
         <Typography>About</Typography>

       </IconButton>
      </Link>
  
        </Toolbar>

      
      </div>
      </AppBar> 
      </React.Fragment>
       ))}
      </div>
       
  )
}
