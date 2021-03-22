import { useState } from "react";
import { Box, Button, Heading, Grommet, Collapsible, ResponsiveContext, Layer } from 'grommet';
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
            <Normalize />
            <Typography />
            <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {size => (
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
                                {(!showSidebar || size !== 'small') ? (
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
                                ) : (
                                    <Layer >
                                        <Box
                                            fill
                                            background='light-2'
                                            align='center'
                                            justify='center'
                                        >
                                            sidebar
                                        </Box>
                                    </Layer>
                                )}
                            </Box>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet >
        </>
    );
}