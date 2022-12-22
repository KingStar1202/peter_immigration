import React from 'react';
import Banner from '../component/Services/Banner';
import Consultation from '../component/Services/Consultation';
import PermanentResidency from '../component/Services/PermanentResidency';
import PageLayOut from './../component/Shared/PageLayOut';

const Services = () => {
    return (
        <PageLayOut>
            <Banner/>
            <Consultation/>
            <PermanentResidency/>
        </PageLayOut>
    );
};

export default Services;