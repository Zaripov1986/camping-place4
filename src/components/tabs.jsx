import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemReviewsCompnent from './ItemReviews';
import QaComponent from './Q&A';
import FarqComponent from './farq';
import ContactComponent from './contact';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
      <AppBar position="static" sx={{background: "rgba(0, 109, 171, 0.20)"}}>
        <Tabs
          sx={{color:"black"}}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
        
          <Tab label="Item reviews" {...a11yProps(0)} />
          <Tab label="Q&A" {...a11yProps(1)} />
          <Tab label="FAQ" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      <ItemReviewsCompnent/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      <QaComponent/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <FarqComponent/>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <ContactComponent/>
      </TabPanel>
    </Box>
  );
}
