import './global.css';

import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <>
            <Stack />
            <PortalHost />
        </>
    );
};

export default Layout;
