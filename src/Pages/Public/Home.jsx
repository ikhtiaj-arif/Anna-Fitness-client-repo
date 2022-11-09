import React from 'react';
import Banner from './HomeComponents/Banner';
import Benefits from './HomeComponents/Benefits';
import GetReady from './HomeComponents/GetReady';
import HealthTips from './HomeComponents/HealthTips';
import Programs from './HomeComponents/Programs';
import Trainer from './HomeComponents/Trainer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Programs></Programs>
           <Trainer></Trainer>
           <Benefits></Benefits>
           <HealthTips></HealthTips>
           <GetReady></GetReady>
        </div>
    );
};

export default Home;