import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AppBar, Button, Drawer, IconButton, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Logout} from '@mui/icons-material';
import { DashboardProps } from './dashboardTypes';


export const Dashboard = ({children,title,enableDrawer,buttonSelected,content,logouthref,getusername}: DashboardProps) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open,setOpen] = React.useState<boolean>(false);
  const toggleDrawer = () => setOpen(!open);

  const [userName,setUserName] = React.useState<string>();

  React.useEffect(() => {
    getusername().then((name:string | undefined) => {
      setUserName(name);
    }).catch((e) => {
      console.error(e);
    })
  },[]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent:'center', alignItems:'center',m:0,p:0,overflowY:'hidden' }}>
        {/* Top of screen containing the navbar */}
        <Box sx={{ height: '95px', width: '100%' }}>
          <AppBar position='static' sx={{ margin: 0, opacity:0.8 }}>
            <Toolbar>
              {enableDrawer && 
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
              }
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
              {userName &&
                <>
                  <IconButton onClick={() => window.location.href = logouthref} sx={{color:'white'}}><Logout /></IconButton>
                </>
              }
            </Toolbar>
          </AppBar>
        </Box>

        {/* Rest of the screen */}

        <Box sx={{ flexGrow: 1, overflow: 'hidden',  margin: 0, width: isSmallScreen ? '100%' : '1000px' }}>
          {children}
        </Box>
      </Box>
      {enableDrawer && 
        <Drawer open={open} onClose={toggleDrawer}>
          <Box sx={{ height:'100%',width: 250,display:'flex',marginTop:'20px'}} role="presentation" onClick={toggleDrawer}>

              {/* Drawer content here. Reads content and create components. */}
              <Stack spacing={2} sx={{width:'100%',padding:'15px',justifyContent: "center",alignItems: "flex-start",}}>
                { userName !== undefined && enableDrawer == true &&
                  <Typography variant='h6' component="div" >Welcome {userName}</Typography>
                }
                {
                  content.map((item) => (
                    <>
                      {/* Buttons */}
                      {item.type === 'button' && 
                        <Button variant={buttonSelected.toLocaleUpperCase() === item.text.toLocaleUpperCase() ? 'outlined' : 'text'} startIcon={item.icon} href={item.href} type='button' size='large'>{item.text}</Button>
                      }
                      {/* Hr */}
                      {item.type === 'hr' &&
                        <hr style={{width:'100%'}} />
                      }
                      {/* Text */}
                      {item.type === 'typo' && 
                        <Typography variant={item.variant} component="div" >{item.text}</Typography>
                      }
                    </>
                  ))
                }

                {/* Fills the empty space */}
                <div style={{flexGrow:1}}/>
              </Stack>
            </Box>
        </Drawer>
       }
    </>
  );
}

export default Dashboard;
