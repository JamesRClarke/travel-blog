import React from 'react';
import { Tab, TabPanel, TabList } from 'react-web-tabs';


const EUTabs = () => (
  <div>
     <TabList >
       <Tab tabFor="ned">The Netherlands</Tab>
       <Tab tabFor="hun">Hungary</Tab>
       <Tab tabFor="pol">Poland</Tab>
       <Tab tabFor="ita">Italy</Tab>
       <Tab tabFor="ldn">London</Tab>
     </TabList>
    <TabPanel tabId="ned">
      <div className="country_tab_content">
          <h3>The Netherlands</h3>
          <div> </div>
      </div>
    </TabPanel>
    <TabPanel tabId="hun">
      <div className="country_tab_content">
        <h3>Hungary</h3>
        <div> </div>
      </div>
    </TabPanel>
    <TabPanel tabId="pol">
      <div className="country_tab_content">
        <h3>Poland</h3>
        <div> </div>
      </div>
    </TabPanel>
    <TabPanel tabId="ita">
      <div className="country_tab_content">
        <h3>Italy</h3>
        <div> </div>
      </div>
    </TabPanel>
    <TabPanel tabId="ldn">
      <div className="country_tab_content">
        <h3>London</h3>
        <div> </div>
      </div>
    </TabPanel>
  </div>
)
export default EUTabs;
