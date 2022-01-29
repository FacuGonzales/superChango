import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function LoadingComponent() {

    return (
        <CircularProgress disableShrink className="loading"/>
    )
}

export default LoadingComponent;