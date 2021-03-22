import { useState } from "react";
import { Box, Button, Heading, Grommet, Collapsible, ResponsiveContext, Layer } from 'grommet';
import { Chrome, FormClose } from 'grommet-icons';
import { Normalize } from 'styled-normalize';

import AppBar from './AppBar';
import Typography from './styles/Typography';
import SideBarFields from "./SideBarFields";

const theme = {
    global: {
        colors: {
            brand: '#EAF4D3',
            focus: '#FFDF64',
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
            <Grommet theme={theme} full themeMode="dark">
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
                                <Box flex align='center' justify='center' gap="10px" direction="row">
                                    <Button primary label="Click Me" />
                                    <Button secondary label="Click Me Next" />
                                </Box>
                                {(!showSidebar || size !== 'small') ? (
                                    <Collapsible direction="horizontal" open={showSidebar}>
                                        <SideBarFields />
                                    </Collapsible>
                                ) : (
                                    <Layer >
                                        <Box
                                            background='light-2'
                                            tag='header'
                                            justify='end'
                                            align='center'
                                            direction='row'
                                        >
                                            <Button
                                                icon={<FormClose />}
                                                onClick={() => setShowSidebar(false)}
                                            />
                                        </Box>
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