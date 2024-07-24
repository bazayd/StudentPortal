import * as React from 'react';
import { Typography, Box, Grid, Paper, styled,
     CssBaseline, ListItem, ListItemButton, ListItemText,Divider, 
    ListItemIcon, List} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



const drawerWidth = 240;
const academicStyleWidth = 20;



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function MainPage() {
    return (
        <Box component="sectionParent" sx={{ width: '100%', position: 'relative', display: 'flex',
         justifyContent: 'center', flexDirection: 'column', gap: '20px'}}>

            {/* Box Component for Student Center div */}
            <Box component="section" sx={{
                border: '1px solid',
                width: `calc(100% - ${drawerWidth + 50}px)`, // Adjust the width to respect the side drawer and additional margin
                flexGrow: 1,
                p: 0,
                position: 'relative',
                mt: 12, // Add margin-top to account for the height of the Navbar
                mr: '50px',
                ml: `${drawerWidth}px`, // Add margin-left to account for the width of the SideDrawer
                textAlign: 'start',
                borderRadius: '5px',
                background: 'rgb(233,2,2)',
                background: 'linear-gradient(90deg, rgba(233,2,2,1) 0%, rgba(226,97,97,1) 100%, rgba(224,158,158,1) 100%, rgba(242,0,0,1) 100%)',
                boxSizing: 'border-box'
            }}>
                <Typography variant="h5" component="h6" sx={{ marginLeft: '10px', color: 'white', fontFamily: "Gill Sans" }}>
                    Student Center
                </Typography>
            </Box>

            {/* Parent Box for first components of student center page */}
            <Box component="admissionSectionParent" sx={{width: `calc(100% - ${drawerWidth + 50}px)`, ml: `${drawerWidth}px`, mt: 2}}>   
                {/* Grid layout for classes and admission section */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Item>
                                <Box sx={{
                                width: '100%',
                                backgroundColor: 'gray',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                padding: '16px',
                                boxSizing: 'border-box',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Typography variant="h6" sx={{ color: 'white' }}>
                                    Academics
                                </Typography>
                            </Box>
                                    {/* Content for schedule */}
                            <Box sx={{width: `calc(100% - ${academicStyleWidth}px)`, ml: `${academicStyleWidth}px`}}>
                                <Grid container spacing={8}>
                                    <Grid item xs={4} md={7}>
                                        <Item>
                                            Schedule
                                        </Item>
                                    </Grid>
                                    <Grid item xs={4} md={5}>
                                        <Item>
                                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                            <nav aria-label="main mailbox folders">
                                                <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                    <ListItemIcon>
                                                        <InboxIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Inbox" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                    <ListItemIcon>
                                                        <DraftsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Drafts" />
                                                    </ListItemButton>
                                                </ListItem>
                                                </List>
                                            </nav>
                                            <Divider />
                                            <nav aria-label="secondary mailbox folders">
                                                <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton>
                                                    <ListItemText primary="Trash" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton component="a" href="#simple-list">
                                                    <ListItemText primary="Spam" />
                                                    </ListItemButton>
                                                </ListItem>
                                                </List>
                                            </nav>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Item>
                            <Typography variant="h6">Search For Classes</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </Box>
    );
}

export default MainPage;
