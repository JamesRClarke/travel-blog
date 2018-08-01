import React from 'react';
import { Tab, TabPanel, TabList } from 'react-web-tabs';
import coordinates from '../../../../assets/map/coordinate.json'
import Flag from './Flag'

const AsiaTabs = (props) => (
  <div>
    <TabList >
      <Tab  onClick={props.center.bind(this, [coordinates[0].asia.thailand.lat,      coordinates[0].asia.thailand.lng])} tabFor="thai">
        Thailand
      </Tab>
      <Tab  onClick={props.center.bind(this, [coordinates[0].asia.indonesia.lat,      coordinates[0].asia.indonesia.lng])} tabFor="ind">
        Indonesia
      </Tab>
      <Tab  onClick={props.center.bind(this, [coordinates[0].asia.vietnam.lat,      coordinates[0].asia.vietnam.lng])} tabFor="viet">
        Vietnam
      </Tab>
        <Tab  onClick={props.center.bind(this, [coordinates[0].asia.australia.lat,      coordinates[0].asia.australia.lng])} tabFor="aus">
          Australia
        </Tab>
      </TabList>

      <TabPanel tabId="thai">
        <div className="country_tab_content space_me">
          <div  >
            <Flag countryCode="TH"></Flag>
            <h5>Thailand</h5>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="ind">
        <div className="country_tab_content space_me">
          <div  >
            <Flag countryCode="ID"></Flag>
            <h5>Indonesia</h5>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="viet">
        <div className="country_tab_content space_me">
          <div  >
            <Flag countryCode="VN"></Flag>
            <h5>Vietnam</h5>
          </div>
        </div>
      </TabPanel>

      <TabPanel tabId="aus">
        <div className="country_tab_content space_me">
          <div  >
            <Flag countryCode="AU"></Flag>
            <h5>Australia</h5>
          </div>
        </div>
      </TabPanel>

    </div>
  )
  export default AsiaTabs;
