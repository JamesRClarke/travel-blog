import React from 'react';
import { Tab, TabPanel, TabList } from 'react-web-tabs';


const NATabs = () => (
  <div>
     <TabList >
       <Tab tabFor="ned">The Netherlands</Tab>
       <Tab tabFor="hun">Hungary</Tab>
       <Tab tabFor="pol">Poland</Tab>
       <Tab tabFor="ita">Italy</Tab>
       <Tab tabFor="ldn">London</Tab>
     </TabList>
    <TabPanel tabId="ned">
      <div className="country_tab_content"><p>The Netherlands</p></div>
    </TabPanel>
    <TabPanel tabId="hun">
      <div className="country_tab_content"><p>Hungary</p></div>
    </TabPanel>
    <TabPanel tabId="pol">
      <div className="country_tab_content"><p>Poland</p></div>
    </TabPanel>
    <TabPanel tabId="ita">
      <div className="country_tab_content"><p>Italy</p></div>
    </TabPanel>
    <TabPanel tabId="ldn">
      <div className="country_tab_content"><p>London</p></div>
    </TabPanel>
  </div>
)
export default NATabs;
