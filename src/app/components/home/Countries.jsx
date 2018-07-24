import React from 'react';
import { Tabs, Tab,  TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

import AsiaTabs from './countries/AsiaTabs';
import EUTabs from './countries/EUTabs';
import AfrTabs from './countries/AfrTabs';
import SATabs from './countries/SATabs';
import NATabs from './countries/NATabs';

class Countries extends React.Component {
  state = {
    currentRegion: null
  }

  onRegionChangeHandler = (event, region) => {
    const regionChange = {
      ...this.state
    }
    regionChange.currentRegion = region;
    this.setState({
      ...regionChange
    })
  }

  render() {

    let activeRegion = <h1>Select a region to discover more...</h1>;

      switch (this.state.currentRegion) {
        case 'asia':
        activeRegion =  (<AsiaTabs></AsiaTabs>);
        break;
        case 'eu':
        activeRegion =  (<EUTabs></EUTabs>);
        break;
        case 'afr':
        activeRegion = (<AfrTabs></AfrTabs>);
          break;
          case 'sa':
          activeRegion = (<SATabs></SATabs>);
            break;
            case 'na':
            activeRegion = (<NATabs></NATabs>);
              break;
              default: activeRegion = <h1>Select a region to discover more...</h1>
            }

            const regions = [
              {id: 1, name: 'Asia', region: 'asia'},
              {id: 2, name: 'Europe', region: 'eu'},
              {id: 3, name: 'Africa', region: 'afr'},
              {id: 4, name: 'South America', region: 'sa'},
              {id: 5, name: 'North America', region: 'na'}
            ]

            let regionTabs = [];
            regions.map((value) => {
              let tabElement = null;
              tabElement =
              <Tab
                key={value.id}
                tabFor={value.region}
                onClick={(event) => this.onRegionChangeHandler(event, value.region)}
                >{value.name}</Tab>
              regionTabs.push(tabElement);
            })

            return(
              <div className="world_map countries">
                <Tabs tabActive={null}>
                  <TabList tabActive={null}>
                    {regionTabs}
                  </TabList>
                  <Tabs>
                    {activeRegion}
                  </Tabs>
                </Tabs>
              </div>
            )
          }
        }
        export default Countries;
