import React from 'react';
import Layout from '../components/layout/Layout.component';
import ScoutsListContainer from '../containers/homepage/ScoutsList.container';
import Banner from '../components/homepage/Banner.component';

export default function Homepage() {

    return (
        <Layout header>
            <Banner />
            <ScoutsListContainer />
        </Layout>
    )
}