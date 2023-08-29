import React, { useEffect, useState } from 'react';
import { getScouts } from '../../webServices/webServices.controller';
import ScoutsList from '../../components/homepage/ScoutsList.component';

export default function ScoutsListContainer() {
    const [scoutsList, setScoutsList] = useState([]);

    async function fetchData() {
        const res = await getScouts()
        setScoutsList(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ScoutsList scoutsList={scoutsList} />
    )
}