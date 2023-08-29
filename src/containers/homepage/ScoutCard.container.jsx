import React, { useState } from 'react';
import ScoutCard from '../../components/homepage/ScoutCard.component';
import ScoutDialog from '../../components/common/ScoutDialog.component';

export default function ScoutCardContainer({ scout }) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickInfo = () => {
        setOpenDialog(true);
    };

    const handleClickContact = () => {
        return;
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <>
            <ScoutCard scout={scout} handleClickInfo={handleClickInfo } />
            <ScoutDialog scout={scout} open={openDialog} handleClose={handleClose} />
        </>
    )
}