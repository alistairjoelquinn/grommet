import { Box } from 'grommet';

import SideBarFields from './SideBarFields';

const SideBarFieldsBig = () => {
    return (
        <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='start'
            style={{ paddingTop: '1rem' }}
            gap="1rem"
        >
            <SideBarFields />
        </Box>
    );
};

export default SideBarFieldsBig;