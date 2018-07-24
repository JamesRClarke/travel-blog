import React from 'react';
import { Tab, TabPanel, TabList } from 'react-web-tabs';


const AsiaTabs = () => (
  <div>
     <TabList >
       <Tab tabFor="thai">Thailand</Tab>
       <Tab tabFor="mal">Malaysia</Tab>
       <Tab tabFor="ind">Indonesia</Tab>
       <Tab tabFor="viet">Vietnam</Tab>
       <Tab tabFor="cam">Cambodia</Tab>
     </TabList>

    <TabPanel tabId="thai">
      <div className="country_tab_content">
        <h3>Thailand</h3>
        <div> </div>
      </div>
    </TabPanel>

    <TabPanel tabId="ind">
      <div className="country_tab_content">
        <h3>Indonesia</h3>
        <div></div>
      </div>
    </TabPanel>

    <TabPanel tabId="viet">
      <div className="country_tab_content">
        <h3>Vietnam</h3>
        <div></div>
      </div>
    </TabPanel>
    
  </div>
)
export default AsiaTabs;
