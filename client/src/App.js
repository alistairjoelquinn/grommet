import { Grommet } from 'grommet';
import { Normalize } from 'styled-normalize';

import AppBar from './AppBar';
import Typography from './styles/Typography';

const theme = {
    global: {
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
                <AppBar>Alistair Quinn</AppBar>
            </Grommet >
        </>
    );
}