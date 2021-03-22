import { Accordion, AccordionPanel, Box, DropButton, Text } from 'grommet';


const SideBarFields = () => {
    return (
        <Box
            flex
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='start'
            style={{ paddingTop: '1rem' }}
        >
            <DropButton
                label="Choose an option"
                style={{ backgroundColor: 'white' }}
                dropAlign={{ top: 'bottom', right: 'right' }}
                dropContent={
                    <Box pad="large" background="white">
                        <Accordion>
                            <AccordionPanel label="Option 1">
                                <Box pad="medium" background="light-2">
                                    <Text>One of</Text>
                                    <Text>The Options</Text>
                                </Box>
                            </AccordionPanel>
                            <AccordionPanel label="Option 2">
                                <Box pad="medium" background="light-2">
                                    <Text>The Other</Text>
                                </Box>
                            </AccordionPanel>
                        </Accordion>
                    </Box>
                }
            />
        </Box>
    );
};

export default SideBarFields;