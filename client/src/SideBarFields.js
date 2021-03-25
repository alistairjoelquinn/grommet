import { Accordion, AccordionPanel, Box, Button, DropButton, Form, FormField, Text, TextInput } from 'grommet';
import { useState } from 'react';

const SideBarFields = () => {
    const [value, setValue] = useState({});

    return (
        <>
            <FormField label="First Name">
                <TextInput placeholder="type here" />
            </FormField>
            <FormField label="Second Name">
                <TextInput placeholder="type here" />
            </FormField>
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
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={() => { }}
            >
                <FormField name="name" htmlFor="text-input-id" label="Enquiry Reason">
                    <TextInput id="text-input-id" name="name" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </>
    );
};

export default SideBarFields;