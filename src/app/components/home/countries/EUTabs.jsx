import React from 'react';
import { Tab, TabPanel, TabList } from 'react-web-tabs';
import coordinates from '../../../../assets/map/coordinate.json'
import Flag from './Flag'


const EUTabs = (props) => (
  <div>
     <TabList >
       <Tab onClick={props.center.bind(this, [coordinates[0].europe.holland.lat,      coordinates[0].europe.holland.lng])}
          tabFor="ned">The Netherlands</Tab>
        <Tab onClick={props.center.bind(this, [coordinates[0].europe.hungary.lat,      coordinates[0].europe.hungary.lng])}
          tabFor="hun">Hungary</Tab>
        <Tab onClick={props.center.bind(this, [coordinates[0].europe.poland.lat,      coordinates[0].europe.poland.lng])}
          tabFor="pol">Poland</Tab>
        <Tab onClick={props.center.bind(this, [coordinates[0].europe.italy.lat,      coordinates[0].europe.italy.lng])}
          tabFor="ita">Italy</Tab>
        <Tab onClick={props.center.bind(this, [coordinates[0].europe.london.lat,      coordinates[0].europe.london.lng])}
          tabFor="ldn">England</Tab>
     </TabList>
    <TabPanel tabId="ned">
      <div className="country_tab_content">
        <div  >
          <Flag countryCode="NL"></Flag>
          <h3>The Netherlands</h3>
        </div>

          <div> </div>
      </div>
    </TabPanel>
    <TabPanel tabId="hun">
      <div className="country_tab_content">
        <div  >
          <Flag countryCode="HU"></Flag>
          <h3>Hungary</h3>
        </div>
      </div>
    </TabPanel>
    <TabPanel tabId="pol">
      <div className="country_tab_content">
        <div  >
          <Flag countryCode="PL"></Flag>
          <h3>Poland</h3>
        </div>
      </div>
    </TabPanel>
    <TabPanel tabId="ita">
      <div className="country_tab_content">
        <div  >
          <Flag countryCode="IT"></Flag>
          <h3>Italy</h3>
        </div>
      </div>
    </TabPanel>
    <TabPanel tabId="ldn">
      <div className="country_tab_content">
        <div  >
          <Flag countryCode="GB"></Flag>
          <h3>England</h3>
        </div>
      </div>
    </TabPanel>
  </div>
)
export default EUTabs;
