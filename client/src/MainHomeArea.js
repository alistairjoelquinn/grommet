import { Box, Button } from "grommet";

import ClientCardArea from "./ClientCardArea";

const MainHomeArea = () => {
    return (
        <Box fill align='center' justify='evenly' direction="column" overflow="scroll">
            <Box align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <ClientCardArea />
        </Box >
    );
};

export default MainHomeArea;