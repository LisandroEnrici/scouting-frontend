import React, { useEffect, useState } from 'react';
import { getScouts } from '../../webServices/webServices.controller';
import { Typography } from '@material-ui/core';

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
        scoutsList.map((scout) => {
            return (
                <Typography >
                    {scout.name}
                </Typography>
            )
        })
    )
}