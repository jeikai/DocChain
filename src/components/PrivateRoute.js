import { useAddress } from '@thirdweb-dev/react-core';
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const address = localStorage.getItem('-walletlink:https://www.walletlink.org:DefaultChainId');
    if(address) {
        return props.children
    }
    return <Navigate to= '/' />
}

export default PrivateRoute