import { Box, Button, Heading, Grommet } from 'grommet';
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
    return (
        <>
            <Typography />
            <Grommet theme={theme}>
                <Normalize />
                <AppBar>
                    Alistair Quinn
                    <Heading level='3' margin='none'>Oratorium</Heading>
                    <Button
                        icon={<Chrome />}
                        onClick={() => { }}
                    />
                </AppBar>
            </Grommet >
        </>
    );
}