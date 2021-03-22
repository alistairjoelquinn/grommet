import { Box, DropButton } from 'grommet';


const SideBarFields = () => {
    return (
        <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'
        >
            <DropButton
                label="Choose an option"
                style={{ backgroundColor: 'white' }}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box pad="large" background="light-2" />
                }
            />
        </Box>
    );
};

export default SideBarFields;