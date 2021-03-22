import { useState } from "react";
import { Box, Button, Heading, Grommet, Collapsible } from 'grommet';
import { Chrome } from 'grommet-icons';
import { Normalize } from 'styled-normalize';

import AppBar from './AppBar';
import Typography from './styles/Typography';

const theme = {
    global: {
        colors: {
            brand: '#EAF4D3'
        },
        font: {
            family: 'RobotoMono',
            size: '18px',
            height: '20px',
        },
    },
};

export default function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Typography />
            <Grommet theme={theme} full>
                <Normalize />
                <Box fill>

                    <AppBar>
                        Alistair Quinn
                        <Heading level='3' margin='none'>Oratorium</Heading>
                        <Button
                            icon={<Chrome />}
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                    </AppBar>

                    <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                        <Box flex align='center' justify='center'>
                            main body
                        </Box>
                        <Collapsible direction="horizontal" open={showSidebar}>
                            <Box
                                flex
                                width='medium'
                                background='light-2'
                                elevation='small'
                                align='center'
                                justify='center'
                            >
                                side bar
                            </Box>
                        </Collapsible>
                    </Box>
                </Box>
            </Grommet >
        </>
    );
}