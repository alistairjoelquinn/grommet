import { Grommet } from 'grommet';

import AppBar from './AppBar';
import Typography from './styles/Typography';

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};

export default function App() {
    return (
        <Grommet theme={theme}>
            <Typography />
            <AppBar>Alistair Quinn</AppBar>
        </Grommet >
    );
}