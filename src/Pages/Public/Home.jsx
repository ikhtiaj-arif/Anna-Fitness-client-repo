import React from 'react';
import { tabTitle } from '../../utilities/titleChange';
import Banner from './HomeComponents/Banner';
import Benefits from './HomeComponents/Benefits';
import HealthTips from './HomeComponents/HealthTips';
import Programs from './HomeComponents/Programs';
import Trainer from './HomeComponents/Trainer';

const Home = () => {
    tabTitle('Anna Willers Fitness')
    return (
        <div>
           <Banner></Banner>
           <Programs></Programs>
           <Trainer></Trainer>
           <Benefits></Benefits>
           <HealthTips></HealthTips>
           
        </div>
    );
};

export default Home;