import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import GradingIcon from '@mui/icons-material/Grading';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MessageIcon from '@mui/icons-material/Message';
import SchoolIcon from '@mui/icons-material/School';
import ChecklistIcon from '@mui/icons-material/Checklist';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const drawerWidth = 240;

function SideDrawer(props) {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel: false);
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const lowIcons = [<ChecklistIcon/>, <EventIcon/>, <LogoutIcon/>]

  const accordionData = [
    {
      icon: <GradingIcon/>,
      header: 'Grades',
      items: ['ItemOne', 'ItemTwo', 'ItemThree']
    }, 
    {
      icon: <AttachMoneyIcon/>,
      header: 'Finances',
      items: ['ItemOne', 'ItemTwo', 'ItemThree']
    },
    {
      icon: <MessageIcon/>,
      header: 'Messages',
      items: ['ItemOne', 'ItemTwo', 'ItemThree']
    },
    {
      icon: <SchoolIcon/>,
      header: 'Academics',
      items: ['ItemOne', 'ItemTwo', 'ItemThree']
    }
  ]



  const drawer = ( 
    <div>
        {/* Toolbar components ensure space equivalent to 
        height of fixed AppBar at top of drawer content.
        makes sure that drawer content is not hidden under navbar. */}
      <Toolbar />
      <Divider />
      <List >
        {accordionData.map((accordion, index) => (
          <ListItem key={index} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <Accordion  expanded={expanded === index} onChange={() => {
                  handleChange(index)
                }} >
                  <AccordionSummary sx={{width: `200px`}} expandIcon={<ExpandMoreIcon/>}>
                    <ListItemText  primary={accordion.icon}/>
                    <ListItemText  primary={accordion.header}/>

                  </AccordionSummary>
                  <AccordionDetails>
                    <List>
                    {accordion.items.map((item, idx) => (
                      <ListItem key={idx}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </ListItemIcon>
              <ListItemText/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['To-Do List', 'Events', 'Sign Out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {lowIcons[index % lowIcons.length]}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
        {/* Box displaye flex to ensure layout respects
        flexbox model which allows side drawer to be lad out next to main content area. */}
      <CssBaseline />

      {/* Two Drawer components (One for mobile view and one for desktop view) */}
      {/* Mobile view below (variant="temporary") 
        sx is making sure that on smaller screens the drawer closes and opens
        based on mobileOpen state. 
      */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
            backgroundColor: "red",
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "#ded8d8", color: "black"},
        }}
      >
        {drawer}
      </Drawer>
      {/* Desktop view below (variant="permanent")*/}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "#ded8d8", color: "black"},
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

SideDrawer.propTypes = {
  window: PropTypes.func,
};

export default SideDrawer;
