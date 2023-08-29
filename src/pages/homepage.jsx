import React from 'react';
import Layout from '../components/layout/Layout.component';
import ScoutsListContainer from '../containers/homepage/ScoutsList.container';

export default function Homepage() {

    return (
        <Layout header>
            <ScoutsListContainer />
        </Layout>
    )
}