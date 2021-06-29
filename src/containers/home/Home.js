import React from 'react';
import { Tabs } from 'antd';
import DistrictSearch from '../../components/district/DistrictSearch';
import PincodeSearch from '../../components/pincode/PincodeSearch';
import 'antd/dist/antd.css';

const Home = () => {

    const { TabPane } = Tabs;

    return (<React.Fragment>
        <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Search by district" key="1">
                <DistrictSearch />
            </TabPane>
            <TabPane tab="Search by Pincode" key="2">
                <PincodeSearch />
            </TabPane>
            <TabPane tab="Get 7 days slots" key="3">
                <p style={{ textAlign: 'center' }}>
                    Coming soon!
                </p>
            </TabPane>
        </Tabs>
    </React.Fragment>);
}

export default Home;